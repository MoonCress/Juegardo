import Phaser from "phaser";
import Projectile from "./projectile";

export default class Knife extends Projectile {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */

    constructor(scene, x, y, target, targetEnemy, damage) {
        super(scene, x, y, 'knife', targetEnemy, damage);
        this.setScale(0.5);
        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('knife', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('knife', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: 0
        });



        this.speed = 250;
        this.rotation = Phaser.Math.Angle.Between(x, y, target.x, target.y);

        if (this.angle >= 45 && this.angle <= 135) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.5, this.height * 0.3)
        }
        else if (this.angle >= -135 && this.angle <= -45) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.5, this.height * 0.6)
        }
        else if (this.angle > 135 || this.angle < -135) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.4, this.height * 0.1)
        }
        else if (this.angle < 45 && this.angle > -45) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.8, this.height * 0.1)
        }


        if (this.angle >= 45 && this.angle <= 135) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.5, this.height * 0.3)
        }
        else if(this.angle >= -135 && this.angle <= -45){
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.5, this.height * 0.6)
        }
        else if (this.angle > 135 || this.angle < -135) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.4, this.height * 0.1)
        }
        else if (this.angle < 45 && this.angle > -45) {
            this.body.setSize(this.width * 1, this.height * 1, true);
            this.body.setOffset(this.width * 0.8, this.height * 0.1)
        }

        this.setDepth(7);
        this.body.setVelocityX(this.speed * Math.cos(this.rotation));
        this.body.setVelocityY(this.speed * Math.sin(this.rotation));

    }

    impact() {
        super.impact();
        this.play('impact', true);

    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if (!this.impacted)
            this.play('normal', true);
    }
}