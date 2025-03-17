import Phaser from "phaser";
import item from "./item";

export default class broom extends item {
    constructor(scene, x, y) {
        super(scene, x, y, 'broom');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.flyingSpeed = 1.4;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.increaseMovSpeed(this.flyingSpeed);
    }
}