import Phaser from 'phaser'

/**
 * Clase que representa el proyectil generico del juego del juego.
 */
export default class AcornShadow extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y) {
        super(scene, x, y, 'acornShadow');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.anims.create({
            key: 'spawn',
            frames: this.anims.generateFrameNumbers('acornShadowSpritesheet', { start: 0, end: 8}),
            frameRate: 6,
            repeat: 0
        });

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if(this.anims.getName() === 'spawn'){
                this.stop();
            }
        });

        this.body.setSize(this.width * 0.6, this.height * 0.25, true);
        this.body.setOffset(this.width * 0.20, this.height * 0.35);

        this.setDepth(5);

        this.play('spawn', true);   
    }

    destroyShadow(){
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