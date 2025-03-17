
import Phaser from 'phaser'
import { eventManager as hudEvents } from "../../eventCenter";
//Enemy Spawner
import EnemySpawnerBoss from './enemySpawnerBoss';
import Enemy from '../enemy'
import MovingRoot from './movingRoot'
import SurpriseRoot from './surpriseRoot';
import Acorn from './acorn';
import AcornShadow from './acornShadow';
import BossDisplay from '../../HUD/bossDisplay';
import BlackMage from '../blackMage';
import lootGenerator from '../../lootGenerator';
import BossChest from '../../bossChest';
/**
 * Clase que representa un enemigo del juego.
 */
export default class BossTree extends Enemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'bossTree', 3000, true);

        this.body.setImmovable(true);

        this.spawnSFX = this.scene.sound.add('treespawn').setVolume(1.5).setDetune(50);
        this.dieSFX = this.scene.sound.add('treedie').setVolume(1.5)

        this.anims.create({
            key: 'prespawn',
            frames: this.anims.generateFrameNumbers('arbolSpawn', { start: 0, end: 0 }),
            frameRate: 6,
            repeat: 15
        });

        this.anims.create({
            key: 'spawn',
            frames: this.anims.generateFrameNumbers('arbolSpawn', { start: 0, end: 19 }),
            frameRate: 6,
            repeat: 0
        });

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('bossTreeMovementsSpritesheet', { start: 0, end: 7 }),
            frameRate: 5,
            repeat: 0
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('bossTreeMovementsSpritesheet', { start: 8, end: 11 }),
            frameRate: 5,
            repeat: 10
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('bossTreeMovementsSpritesheet', { start: 12, end: 25 }),
            frameRate: 5,
            repeat: 0
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('bossTreeMovementsSpritesheet', { start: 23, end: 23 }),
            frameRate: 1,
            repeat: -1
        });


        this.setScale(1.5);
        this.disableInteractive();

        this.enemySpawner = new EnemySpawnerBoss(scene, target);

        this.speed = 0;
        this.maxLife = 250;
        this.life = this.maxLife;
        this.distanceAttack = 1000;

        this.spawning = true;
        this.vulnerable = false;
        this.body.enable = false;

        this.play('prespawn', true);

        this.scene.jukebox.stopAllMusic()
        this.scene.jukebox.playTree()

        this.scene.cutsceneStarted(x, y)
        this.scene.player.setActive(false)

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'spawn') {
                    this.spawning = false;
                    this.body.setSize(this.width * 0.35, this.height * 0.7, true);
                    this.body.setOffset(this.width * 0.07, this.height * 0.3);
                    this.body.enable = true;
                    this.scene.cutsceneStopped()
                    this.scene.player.setActive(true)
                    this.spawnSFX.play()
                    this.play('walking', true);
                    hudEvents.emit('boss', {bossLife: this.life,name:"Evil tree Bellotini"});

                }
                else if (this.anims.getName() === 'attack') {
                    this.attacking = false;

                    this.surpriseRootTimer.paused = true;
                    this.followingRootTimer.paused = true;
                    this.acornTimer.paused = true;
                    this.vulnerable = false;
                } else if (this.anims.getName() === 'prespawn') {
                    this.play('spawn', true)
                    new BlackMage(scene, x + 50, y + 20, 'magoarbol', "arbol")
                }
            }
        });

        this.surpriseRootTimer = this.scene.time.addEvent({
            delay: 600,
            callback: this.onSurpriseRootAttack,
            callbackScope: this,
            loop: true
        });

        this.followingRootTimer = this.scene.time.addEvent({
            delay: 2000,
            callback: this.onFollowingRootAttack,
            callbackScope: this,
            loop: true
        });

        this.acornTimer = this.scene.time.addEvent({
            delay: 1000,
            callback: this.onAcornAttack,
            callbackScope: this,
            loop: true
        });

        this.scene.physics.add.collider(this, target, () => {
        });


        this.surpriseRootTimer.paused = true;
        this.followingRootTimer.paused = true;
        this.acornTimer.paused = true;
    }

    onAcornAttack() {
        let acornShadow = new AcornShadow(this.scene, this.target.x, this.target.y + 20);
        new Acorn(this.scene, this.target.x, 0, false, 1, acornShadow, this.enemySpawner);
    }

    onSurpriseRootAttack() {
        new SurpriseRoot(this.scene, this.target.x, this.target.y, false, 1);
    }

    onFollowingRootAttack() {
        let angleRadians = Phaser.Math.Angle.Between(this.x, this.y, this.target.x, this.target.y)
        let angle = (angleRadians * 180) / Math.PI;

        if ((angle >= 45 && angle <= 135) || (angle >= -135 && angle <= -45)) {
             for (let i = 0; i < 31; i++) {
                 new MovingRoot(this.scene, this.x - 150 + (i * 10), this.y, false, 1, angleRadians)
             }
           /* for(let i = 0; i < 16; i++){
                new MovingRoot(this.scene, this.x - 50 + (i * 40), this.y, false, 1, angleRadians);
            }*/
        }
        else {
             for (let i = 0; i < 31; i++) {
                 new MovingRoot(this.scene, this.x, this.y - 150 + (i * 10), false, 1, angleRadians)
             }
          /*  for(let i = 0; i < 16; i++){
                new MovingRoot(this.scene, this.x, this.y - 50 + (i * 40), false, 1, angleRadians);
            }*/
        }
    }



    onTimerAttack() {
        this.spawnSFX.play()
        this.attacking = true;
        this.vulnerable = true;
        let typeAttack = Math.floor(Math.random() * 3);
        if (typeAttack === 0) {
            this.followingRootTimer.paused = false;
        }
        else if (typeAttack === 1) {
            this.surpriseRootTimer.paused = false;
        }
        else if (typeAttack === 2) {
            this.acornTimer.paused = false;
        }
        this.play("attack", true);
    }

    destroyEnemy() {
        this.anims.remove('walking');
        this.anims.remove('attack');
        this.anims.remove('die');
        this.anims.remove('spawn');
        this.stop();
        this.play('idle', true);
    }



    receiveDamage(damage) {
        if (this.vulnerable && this.life > 0) {

            
            super.receiveDamage(damage);
            hudEvents.emit('bosslife',this.life/this.maxLife);
            if(this.life <= 0){
                this.body.enable = true;
                this.dieSFX.play()
                this.scene.bossHasDied()
                this.scene.time.removeAllEvents();
                new BossChest(this.scene,this.x,this.y+70,32,32,this.scene.player,false)
            }
        }
    }

    /**
     * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
     * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
     * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
     * @override
     */
    preUpdate(t, dt) {
        // IMPORTANTE: Si no ponemos esta instrucción y el sprite está animado
        // no se podrá ejecutar la animación del sprite. 
        super.preUpdate(t, dt);
    }

    flipEnemy() { }

    isProjectile() {
        return false;
    }
}
