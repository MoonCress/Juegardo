import Phaser from "phaser";
import item from "./item";

export default class shadowCloak extends item {
    constructor(scene, x, y) {
        super(scene, x, y, 'shadowCloak');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.movSpeedBonus = 40;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.increaseMovSpeed(this.movSpeedBonus);
    }
}