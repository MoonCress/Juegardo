import Phaser from 'phaser'
import Projectile from '../../projectiles/projectile';

/**
 * Clase que representa una flecha del juego.
 */
export default class SurpriseRoot extends Projectile {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, targetEnemy, damage) {
        super(scene, x, y, 'surpriseRoot', targetEnemy, damage, true);

        this.setScale(1.5);
        this.setDepth(6)
        this.anims.create({
            key: 'spawn',
            frames: this.anims.generateFrameNumbers('surpriseRootSpritesheet', { start: 0, end: 8 }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('surpriseRootSpritesheet', { start: 9, end: 15 }),
            frameRate: 7,
            repeat: 4
        });

        this.body.enable = false;
        this.body.setSize(this.width * 0.35, this.height * 0.75, true);
        this.body.setOffset(this.width * 0.3, this.height * 0.05);
        this.speed = 0;

        this.body.setVelocity(this.speed);

        

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if(this.anims.getName() === 'spawn'){
                this.spawning = false;
                this.body.enable = true;
            }
            else if(this.anims.getName() === 'normal'){
                this.impacted = true;
                this.destroy();
            }

        });

        this.on(Phaser.Animations.Events.ANIMATION_STOP, () => {
            if(this.anims.getName() === 'normal'){
                this.impacted = true;
                this.destroy();
            }

        });

        this.play('spawn', true);
        

    }

    impact(){
        this.body.enable = false;
        super.impact();
        this.stop();
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