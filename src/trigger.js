import Phaser from 'phaser'

/**
 * Clase que representa un enemigo del juego.
 */
export default class Trigger extends Phaser.GameObjects.Zone {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height, player,level,dX,dY,callback,dir,dg) {
        super(scene, x, y, width, height);
        
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.scene.physics.add.overlap(this, player, (player) => {
            callback(dX,dY,dir,level,dg)
            
        });
    }

    
}