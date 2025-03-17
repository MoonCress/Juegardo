import Phaser from 'phaser'


const SOLUTION = [false, true, false, false, true, true]
let isCompleted = false
let sol = [false, false, false, false, false, false]

/** 
 * Clase que representa un enemigo del juego.
 */
export default class SecretTrigger extends Phaser.GameObjects.Zone {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height, player, level, dX, dY, callback, dir, dg) {
        super(scene, x, y, width, height);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.numButtonsUsed = 0;
        this.sfx = this.scene.sound.add('errorpuzzle')

        this.sprite = this.scene.add.image(x + 1, y - 5.75, 'inv').setDepth(20)
        this.sprite.setVisible(false)
        this.scene.physics.add.overlap(this, player, (player) => {
            if (isCompleted)
                callback(dX, dY, dg)

        });
    }



    buttonUsed(index) {
        this.numButtonsUsed++
        sol[index] = !sol[index]
        if (!isCompleted)
            this.checkSolution()
        if (this.numButtonsUsed >= 3 && !isCompleted){
            this.numButtonsUsed = 0;
            this.resetSolution();
        }
    }

    resetSolution() {
        this.sfx.play()
        sol = [false, false, false, false, false, false]
    }

    checkSolution() {
        for (let i = 0; i < 6; i++) {
            if (SOLUTION[i] !== sol[i])
                return;
        }

        isCompleted = true;
        this.sprite.setVisible(true)
    }


}