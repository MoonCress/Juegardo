import Phaser from "phaser";
import Projectile from "./projectile";

export default class IronBullet extends Projectile {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */

    constructor(scene, x, y, target, targetEnemy, damage) {
        super(scene, x, y, 'ironbullet', targetEnemy, damage);
        this.setScale(0.5);
        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('ironbullet', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('ironbullet', { start: 1, end: 1 }),
            frameRate: 10,
            repeat: 0
        });



        this.speed = 100;
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

        this.setDepth(7);
        let bulletSpread = 0.1; // Adjust as needed for desired spread
       
        // Calculate the angle of the bullet based on the spread and the shotgun's rotation
        let angle = this.rotation + Phaser.Math.RND.realInRange(-bulletSpread, bulletSpread);

        // Calculate the x and y components of velocity using trigonometric functions
        let speed = Phaser.Math.RND.realInRange(150, 250);
        let velocityX = speed * Math.cos(angle);
        let velocityY = speed * Math.sin(angle);

        // Apply velocity to the bullet
        this.body.setVelocity(velocityX, velocityY);

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