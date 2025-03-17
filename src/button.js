import Phaser from 'phaser'

/**
 * Clase que representa un enemigo del juego.
 */
export default class Button extends Phaser.GameObjects.Zone {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height, player, index, trigger) {
        super(scene, x, y, width, height);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.jug = player
        this.onTimer = false;

        this.sfx = this.scene.sound.add('buttonsfx')
        // console.log(`Soy el ${index}, en la posicion ${x} ${y}`)
        this.scene.physics.add.overlap(this, player, (player) => {

            if (this.jug.getIsFPressed() && !this.onTimer) {
                this.scene.time.addEvent({
                    delay: 100,
                    callback: this.scene.onTime
                })
                this.jug.isFPressed = false
                this.onTimer = true
                this.sfx.play()
                trigger.buttonUsed(index)

            }


        });

        //0 449 78, 1 449 112, 2 449 144, 3 609 78, 4 609 112, 5 609 144
    }

    onTime() {
        this.onTimer = false;
    }


}