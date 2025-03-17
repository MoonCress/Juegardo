import Phaser from "phaser";

export default class BlackMage extends Phaser.GameObjects.Sprite {


    constructor(scene, x, y, image,event) {
        super(scene, x, y, image);
        this.scene.add.existing(this);
        this.setDepth(7)

        this.anims.create({
            key: 'arbol',
            frames: this.anims.generateFrameNumbers('magoarbol', { start: 0, end: 21 }),
            frameRate: 9,
            repeat: 0
        }); 
        this.play('arbol')

    }



}