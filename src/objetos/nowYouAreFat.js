import Phaser from "phaser";
import item from "./item";

export default class nowYouAreFat extends item {
    constructor(scene, x, y) {
        super(scene, x, y, 'fat');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.increasedHealth = 4;
        this.movSpeedDecreased = 30;
        this.manaIncreased = 50;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.decreaseMovSpeed(this.movSpeedDecreased);
        this.scene.player.increaseHealth(this.increasedHealth);
        this.scene.player.increaseMana(this.manaIncreased);
    }
}