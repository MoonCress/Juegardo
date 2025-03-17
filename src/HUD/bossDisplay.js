import Phaser from "phaser";

export default class BossDisplay extends Phaser.GameObjects.Graphics {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, width, height, initialLife, maxLife) {
        super(scene);

        
        this.setDepth(1000)
      
        this.y = y;
        this.x = x;
        
        this.text = this.scene.add.text(x + 20, y - 10,"" , { fontFamily: 'pixelFont', fontSize: 30, color: '#ffffffff' }).setDepth(100).setVisible(false);
        this.bossBar = this.scene.add.image(this.x, this.y, 'bossBar').setOrigin(0).setDepth(100)//.setDisplaySize(720, 64).setDepth(1000).setVisible(false); //Aqui iria height y width
        this.bossBar.setVisible(false);
        this.bossBar.setActive(false);
        this.life = this.scene.add.image(this.x + 9, this.y + 36, 'bossLife').setOrigin(0).setDepth(99);
        this.maxLife = this.bossBar.displayWidth - 12;
        this.life.displayWidth = this.maxLife;
        this.life.setVisible(false);
        this.life.setActive(false);

        
    }
    
    activates() {
        this.bossBar.setVisible(true);
        this.bossBar.setActive(true);
        this.life.setVisible(true);
        this.life.setActive(true);
        this.text.setVisible(true);
    }

    setMeterPercentageAnimated(percent = 1, duration = 1000) {
       
        let width = this.maxLife * percent;
        this.scene.tweens.add({
            targets: this.life,
            displayWidth: width,
            duration: duration,
            ease: Phaser.Math.Easing.Sine.Out,
            onUpdate: () => {

                this.life.visible = this.life.displayWidth > 0
            }
        });
    }
    
    placeName(name){
        this.text.setText(name);
    }
}