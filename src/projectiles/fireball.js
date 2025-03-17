import Phaser from "phaser";
import Projectile from "./projectile";

export default class fireball extends Projectile {

    /**
     * Constructor de la bola de fuego0
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */

    constructor (scene, x, y, target, targetEnemy, damage)
    {
        super(scene, x, y, 'fireball', targetEnemy, damage);

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('fireball_spritesheet', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('fireball_spritesheet', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: 0
        });

        this.speed = 100;
        this.rotation = Phaser.Math.Angle.Between(x, y, target.x, target.y);

        if (this.angle >= 45 && this.angle <= 135) {
            this.body.setSize(this.width * 0.35, this.height * 0.35, true);
            this.body.setOffset(this.width * 0.1, this.height * 0.1)
        }
        else if(this.angle >= -135 && this.angle <= -45){
            this.body.setSize(this.width * 0.35, this.height * 0.35, true);
            this.body.setOffset(this.width * 0.3, this.height * 0.6)
        }
        else if (this.angle > 135 || this.angle < -135) {
            this.body.setSize(this.width * 0.35, this.height * 0.35, true);
            this.body.setOffset(this.width * 0.1, this.height * 0.1)
        }
        else if (this.angle < 45 && this.angle > -45) {
            this.body.setSize(this.width * 0.35, this.height * 0.35, true);
            this.body.setOffset(this.width * 0.4, this.height * 0.1)
        }

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