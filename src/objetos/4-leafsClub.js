import Phaser from "phaser";
import item from "./item";

export default class FourLeafsClub extends item {
    constructor(scene, x, y) {
        super(scene, x, y, 'FourLeafsClub');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.luckyFactor = 10;
        this.x = x;
        this.y = y;
    }

    itemFuction() {
        this.scene.player.increaseLuck(this.luckyFactor);
    }
}