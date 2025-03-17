
import Phaser from 'phaser'
import Enemy from '../enemy'
import HitBox from '../../hitbox';
import LavaPuddle from './lavaPuddle';
import DevilFire from './devilFire';
import EnemySpawnerEvilWizard from './enemySpawnerEvilWizard';
import { eventManager as hudEvents } from "../../eventCenter";
/**
 * Clase que representa un enemigo del juego.
 */
export default class EvilWizard extends Enemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'evilWizard', 5000);


        // FILA MAS LARGA DE 47 FRAMES


        this.anims.create({
            key: 'spawn',
            frames: this.anims.generateFrameNumbers('prespawn', { start: 48, end: 108 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 47, end: 52 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack1',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 94, end: 107 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'attack2',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 141, end: 160 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'attack3',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 189, end: 235 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 236, end: 245 }),
            frameRate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'stayDead',
            frames: this.anims.generateFrameNumbers('evilWizardSpritesheet', { start: 245, end: 245 }),
            frameRate: 1,
            repeat: -1
        });

        this.setScale(1.25);

        this.enemySpawner = new EnemySpawnerEvilWizard(scene, target);

        this.speed = 0;
        this.maxLife = 440;
        this.life = this.maxLife;

        this.distanceAttack = 200;

        this.laughSFX = this.scene.sound.add('magelaugh')
        this.spawnSFX = this.scene.sound.add('demonspawn')
        this.explosionSFX = this.scene.sound.add('demonexplosion')

        this.scene.jukebox.stopAllMusic()
        this.scene.jukebox.playEvil()

        this.body.setSize(this.width * 1.5, this.height * 1.6, true);
        this.body.setOffset(this.width * 0.5, this.height * 0.85);

        this.play('spawn', true);
        this.laughSFX.play()

        this.attacks = ['attack1', 'attack2', 'attack3'];

        this.scene.cutsceneStarted(x, y)
        this.scene.player.setActive(false)

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'spawn') {
                    this.speed = 50;
                    this.spawnSFX.play()
                    this.scene.cutsceneStopped()
                    this.scene.player.setActive(true)
                    hudEvents.emit('boss', { bossLife: this.life, name: "Black mage Dahto" });
                }
                else if (this.anims.getName() === 'attack1') {

                    this.attacking = false;
                    this.speed = 50;

                    this.body.setImmovable(false);
                }
                else if (this.anims.getName() === 'attack2') {
                    for (let i = 0; i < 15; i++) {
                        let lavaX = Phaser.Math.Between(250, 650);
                        let lavaY = Phaser.Math.Between(125, 400);
                        new LavaPuddle(this.scene, lavaX, lavaY);
                    }
                    this.vulnerable = true;
                    this.attacking = false;
                    this.speed = 50;
                    this.body.setImmovable(false);
                }
                else if (this.anims.getName() === 'attack3') {
                    this.attacking = false;
                    this.speed = 50;
                    this.timerAttack3.paused = true;

                    this.body.setImmovable(false);
                }
                

            }
        });

        this.on(Phaser.Animations.Events.ANIMATION_START, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack1') {
                    for (let i = 0; i < 2; i++) {
                        let randomPositionX = Phaser.Math.Between(-100, 100);
                        let randomPositionY = Phaser.Math.Between(-100, 100);
                        this.enemySpawner.spawnEnemy(this.x + randomPositionX, this.y + randomPositionY);
                    }
                }
                else if (this.anims.getName() === 'attack2') {
                    // Invulnerable a los ataques a distancia, crea charcos de lava en el suelo que hacen daño al jugador si pasa por encima
                    this.vulnerable = false;

                }
                else if (this.anims.getName() === 'attack3') {
                    // Crea un ciruclo de fuego alrededor suya que se mueve hacia 
                    this.firstFireDirection = true;
                    this.timerAttack3.paused = false;
                }
            }
        });

        this.on(Phaser.Animations.Events.ANIMATION_UPDATE, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack1' && this.anims.currentFrame.index === 7) {
                    // Carga un puñetazo hacia el jugador
                    this.speed = 250

                }
            }
        });

        this.timerAttack3 = this.scene.time.addEvent({
            delay: 700,
            callback: this.onTimerAttack3,
            callbackScope: this,
            loop: true
        });

        this.timerAttack3.paused = true;


        this.scene.physics.add.overlap(this.scene.player,this, (player) => { 
            player.receiveDamage(1);
            //player.startIFrame();           
        })
    }

    destroyEnemy() {
        this.anims.remove('spawn');
        this.anims.remove('prespawn');
        this.anims.remove('walking');
        this.anims.remove('attack1');
        this.anims.remove('attack2');
        this.anims.remove('attack3');
        this.anims.remove('die');
        this.stop();
        this.play('stayDead', true);
        this.deadTimer = this.scene.time.addEvent({
            delay: 2000,
            callback: this.a,
            callbackScope: this
        });
     
    }

    a(){
        this.scene.startCredits()
    }
    onTimerAttack() {
        this.body.setImmovable(true);
        this.attacking = true;
        let typeAttack = Math.floor(Math.random() * 3);
        this.play(this.attacks[typeAttack]);
        this.speed = 0;
    }

    onTimerAttack3() {
        this.explosionSFX.play()
        if (this.firstFireDirection) {
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 0, 90 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 90 * Math.PI / 180, 180 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 180 * Math.PI / 180, 270 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 270 * Math.PI / 180, 0);
            this.firstFireDirection = false;
        }
        else {
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 45 * Math.PI / 180, 135 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 135 * Math.PI / 180, 225 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 225 * Math.PI / 180, 315 * Math.PI / 180);
            new DevilFire(this.scene, this.x, this.y, this.target, false, 1, 315 * Math.PI / 180, 45 * Math.PI / 180);
            this.firstFireDirection = true;
        }
    }

    doSomethingVerySpecificBecauseYoureMyBelovedChild() {
        this.setActive(false);
        this.scene.time.removeEvent(this.timerAttack);
    }


    receiveDamage(damage) {
        if (this.vulnerable && this.life > 0) {
            super.receiveDamage(damage);
            hudEvents.emit('bosslife', this.life / this.maxLife);
            if (this.life <= 0) {
                this.body.enable = true;
                this.body.setImmovable(true);

                this.scene.time.removeAllEvents();
                // Para que los enemigos no se solapen uno encima de otro
                this.scene.physics.add.collider(this, this.target, () => {
                });
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