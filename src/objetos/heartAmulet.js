import Phaser from "phaser";

import item from "./item";

export default class heartAmulet extends item {

    constructor(scene, x, y) {
        super(scene, x, y, 'healingAmulet');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.healUp = 4;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.increaseHealth(this.healUp);
    }
}