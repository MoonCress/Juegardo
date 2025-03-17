import Phaser from 'phaser'
import Projectile from '../../projectiles/projectile';

/**
 * Clase que representa una flecha del juego.
 */
export default class MovingRoot extends Projectile {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, targetEnemy, damage, angle) {
        super(scene, x, y, 'movingRoot', targetEnemy, damage);

        this.setScale(1.5);
        this.setDepth(7)
        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('movingRootSpritesheet', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: -1
        });

        this.speed = 45;

        // Body size
        this.body.setSize(this.width * 0.3, this.height * 0.3, true);
        this.body.setOffset(this.width * 0.35, this.height * 0.4);
        // Velocity
        this.body.setVelocityX(this.speed * Math.cos(angle));
        this.body.setVelocityY(this.speed * Math.sin(angle))

    }

    impact(){
        super.impact();
        this.destroy();
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

}