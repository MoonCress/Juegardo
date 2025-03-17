import Phaser from 'phaser'
import HitBox from '../hitbox';
import MeleeEnemy from './meleeEnemy';

/**
 * Clase que representa un enemigo del juego.
 */
export default class LavaGolem extends MeleeEnemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'lavagolem', 1500);

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('lavaGolemSpritesheet', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('lavaGolemSpritesheet', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('lavaGolemSpritesheet', { start: 16, end: 23 }),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('lavaGolemSpritesheet', { start: 24, end: 29 }),
            frameRate: 8,
            repeat: 0
        });

        this.SFX = this.scene.sound.add('lavagolem')

        this.SFX.play()

        this.setScale(1);

        this.speed = 20;

        this.life = 50;

        this.damage = 1.5;

        this.body.setSize(this.width * 0.5, this.height * 0.93, true);
    }

    spawnHitbox() {
        this.attackZone = new HitBox(this.scene, this.x + (this.flipX ? 55 : -55), this.y - 10, 20, 55, this.target, this.damage);
    }

    flipEnemy() {
        this.setFlipX(this.body.velocity.x > 0);
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
        // Preguntar si podría ser mas eficiente
        if (this.life > 0) {
            this.body.setOffset(this.width * (this.flipX ? 0.3 : 0.25), this.height * 0.08);
        } else
            this.SFX.play()
    }
}