import Phaser from "phaser";

import item from "./item";

export default class heart extends item {

    constructor(scene, x, y) {
        super(scene, x, y, 'healingHeart');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.SFX = this.scene.sound.add('lifesfx')
        this.healEffective = 2;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.heal(this.healEffective);
        this.SFX.play()
    }
}