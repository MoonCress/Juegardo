import Phaser from "phaser";

import item from "./item";

export default class halfHeart extends item {

    constructor(scene, x, y) {
        super(scene, x, y, 'halfHealingHeart');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.SFX = this.scene.sound.add('lifesfx')
        this.healEffective = 1;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.heal(this.healEffective);
        this.SFX.play()
    }
}