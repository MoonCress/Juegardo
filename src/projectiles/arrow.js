import Phaser from 'phaser'
import Projectile from './projectile';

/**
 * Clase que representa una flecha del juego.
 */
export default class Arrow extends Projectile {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target, targetEnemy, damage) {
        super(scene, x, y, 'arrow', targetEnemy, damage);

        //this.setScale(2.5);
        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.speed = 100;

        this.rotation = Phaser.Math.Angle.Between(x, y, target.x, target.y);

        if (this.angle >= 45 && this.angle <= 135 || this.angle >= -135 && this.angle <= -45) {
            this.body.setSize(this.width * 0.1, this.height * 0.6, true);
        }
        else{
            this.body.setSize(this.width * 0.6, this.height * 0.1, true);
        }

        this.body.setVelocityX(this.speed * Math.cos(this.rotation));
        this.body.setVelocityY(this.speed * Math.sin(this.rotation));
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