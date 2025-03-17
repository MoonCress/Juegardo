import Phaser from "phaser";

import item from "./item";

export default class manaPotion extends item {

    constructor(scene, x, y) {
        super(scene, x, y, 'potionOfMana');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.manaRegeration = 50;
        this.x = x;
        this.y = y;
        this.setScale(0.6);
    }

    itemFuction() {
        this.scene.player.recoverMana(this.manaRegeration);
    }
}