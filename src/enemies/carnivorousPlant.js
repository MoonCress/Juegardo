import Phaser from 'phaser'
import HitBox from '../hitbox';
import Enemy from './enemy';
import GreenPoisonBall from '../projectiles/greenPoisonBall';
import DistanceEnemy from './distanceEnemy';
import MeleeEnemy from './meleeEnemy';

/**
 * Clase que representa un enemigo del juego.
 */
export default class CarnivorousPlant extends Enemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'carnivorous_plant', 10000);

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('carnivorousPlantSpritesheet', { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('carnivorousPlantSpritesheet', { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'attack1',
            frames: this.anims.generateFrameNumbers('carnivorousPlantSpritesheet', { start: 6, end: 11 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'attack2',
            frames: this.anims.generateFrameNumbers('carnivorousPlantSpritesheet', { start: 12, end: 17 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('carnivorousPlantSpritesheet', { start: 18, end: 23 }),
            frameRate: 7,
            repeat: 0
        });

        this.distanceTimerAttack = this.scene.time.addEvent({
            delay: 1500,
            callback: this.onTimerAttack,
            callbackScope: this,
            loop: true
        });

        this.meleeTimerAttack = this.scene.time.addEvent({
            delay: 1500,
            callback: this.onMeleeTimerAttack,
            callbackScope: this,
            loop: true
        });

        this.meleeTimerAttack.paused = true;

        this.on(Phaser.Animations.Events.ANIMATION_START, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack1') {
                    this.attackZone = new HitBox(this.scene, this.x + (this.flipX ? -45 : 45), this.y - 20, 40, 60, this.target, this.damage);
                }
            }

        })

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack1') {
                    this.attackZone.destroy(true);
                    this.play('idle', true);
                }
                if (this.anims.getName() === 'attack2') {
                    this.play('idle', true);
                }
            }

        })

        this.on(Phaser.Animations.Events.ANIMATION_STOP, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack1') {
                    this.attackZone.destroy(true);
                }
            }

        })

        this.on(Phaser.Animations.Events.ANIMATION_UPDATE, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack2' && this.anims.currentFrame.index === 3 && !this.distAttack) {
                    new GreenPoisonBall(this.scene, this.x + (this.flipX ? -10 : 10), this.y - 30, this.target, false, this.damage);
                    this.distAttack = true;
                }
            }

        })

        this.distAttack = false;
        this.distanceTimerAttack.paused = true;

        this.setScale(1.2);

        this.speed = 0;

        this.life = 30;

        this.body.setImmovable(true);
        this.body.setSize(this.width * 0.7, this.height * 1.1, true);

        this.body.setImmovable(true);

        this.play('idle', true);

    }

    doSomethingVerySpecificBecauseYoureMyBelovedChild() {
        this.scene.time.removeAllEvents();
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.life <= 0) {
            this.anims.remove('idle');
            this.anims.remove('walking');
            this.anims.remove('attack1');
            this.anims.remove('attack2');
            this.distanceTimerAttack.paused = true;
            this.meleeTimerAttack.paused = true;
        }
    }

    onTimerAttack() {
        if (this !== undefined) {
            this.distAttack = false;
            this.play('attack2');
        }
    }

    onMeleeTimerAttack() {
        if (this !== undefined) {
        this.play('attack1');
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
        if (this.life > 0) {
            this.setFlipX(this.body.velocity.x < 0 || this.target.x < this.x);
            // Preguntar si podría ser mas eficiente
            this.body.setOffset(this.width * (this.flipX ? 0.39 : 0.44), this.height * 0.255)

            let dist = Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y);

            if (dist > 300) {
                this.distanceTimerAttack.paused = true;
                this.meleeTimerAttack.paused = true;
                this.playAfterRepeat('idle');
            }
            else if (dist > 50) {
                this.meleeTimerAttack.paused = true;
                this.distanceTimerAttack.paused = false;
            }
            else {
                this.distanceTimerAttack.paused = true;
                this.meleeTimerAttack.paused = false;

            }
        }
    }
}