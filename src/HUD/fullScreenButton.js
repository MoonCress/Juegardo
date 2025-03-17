import Phaser from 'phaser'

/**
 * Clase que representa un enemigo del juego.
 */
export default class FullScreenButton extends Phaser.GameObjects.GameObject {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, image, fs) {
        super(scene, x, y, image);
        this.scene.add.existing(this);

        this.fullScreenButton = this.scene.add.image(x, y, 'fullScreenButton').setDepth(10).setScale(2).setVisible(!fs);
        this.normalScreenButton = this.scene.add.image(x, y, 'normalScreenButton').setDepth(10).setScale(1.5).setVisible(fs);

        this.fullScreenButton.setInteractive();
        this.normalScreenButton.setInteractive();

        this.fullScreenButton.on("pointerover", ()=>{
            this.fullScreenButton.setScale(2.1)
       })

       this.fullScreenButton.on("pointerout", ()=>{
            this.fullScreenButton.setScale(2)
       })

       this.fullScreenButton.on("pointerdown", ()=>{
          if (this.scene.scale.isFullscreen) {
               this.scene.scale.stopFullscreen();
               this.fullScreenButton.setVisible(true);
               this.normalScreenButton.setVisible(false);
           }
           else{
               this.scene.scale.startFullscreen();
               this.fullScreenButton.setVisible(false);
               this.normalScreenButton.setVisible(true);
           }
       })


       this.normalScreenButton.on("pointerover", ()=>{
          this.normalScreenButton.setScale(1.6)
     })

     this.normalScreenButton.on("pointerout", ()=>{
          this.normalScreenButton.setScale(1.5)
     })

     this.normalScreenButton.on("pointerdown", ()=>{
        if (this.scene.scale.isFullscreen) {
             this.scene.scale.stopFullscreen();
             this.fullScreenButton.setVisible(true);
             this.normalScreenButton.setVisible(false);
         }
         else{
             this.scene.scale.startFullscreen();
             this.fullScreenButton.setVisible(false);
             this.normalScreenButton.setVisible(true);
         }
     })
    }
}