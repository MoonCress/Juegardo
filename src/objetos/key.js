import Phaser from "phaser";

import item from "./item";

export default class key extends item {

    constructor(scene, x, y) {
        super(scene, x, y, 'key');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.x = x;
        this.y = y;

        this.sfx = this.scene.sound.add('keysfx')

        this.anims.create({
            key: 'idle_key',
            frames: scene.anims.generateFrameNumbers('key', { start: 0, end: 23 }),
            frameRate: 10,
            repeat: -1 // Play the animation only once
        });

        this.anims.play('idle_key');
    }

    

    itemFuction() {
        this.sfx.play()
        this.scene.player.addKey()
    }
}