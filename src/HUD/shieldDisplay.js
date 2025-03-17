import Phaser from "phaser";

export default class shieldDisplay extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, shieldON, shieldOFF, actualShield) {
        super(scene, x, y, (actualShield) ? shieldOFF : shieldON);
        this.x = x;
        this.y = y - 10;
        this.scene.add.existing(this);
        //this.setScale(2);
        this.setScale(1.5)

        this.shieldReady = shieldON;
        this.shieldOnCooldown = shieldOFF;
    }

    shieldIsReady() {
        this.setTexture(this.shieldReady);
    }

    shieldIsOnCD() {
        this.setTexture(this.shieldOnCooldown);
    }

    updateShield(isReady) {
        if (isReady) 
            this.shieldIsReady();
        else
            this.shieldIsOnCD();
    }
}