import Phaser from "phaser";


import arma from "./arma";
import IronBullet from '../projectiles/ironBullet.js';


const DAMAGE = 4;

export default class Shotgun extends arma {
    /**
        * Constructor del jugador
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y) {
        super(scene, x, y, 'shotgun')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 5;
        this.delay = 250;
        this.x = x;
        this.y = y;

        this.attackSfx = this.scene.sound.add('shotgunsfx')

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('shotgun', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'shooting',
            frames: this.anims.generateFrameNumbers('shotgun', { start: 1, end: 3 }),
            frameRate: 10,
            repeat: 0
        });

        this.id = 'shotgun';
        this.setActive(true);
        this.setVisible(true);

        this.damage = DAMAGE;
        this.anims.play('normal');
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    attack( target) {
        if (this.x != 0 && this.y != 0) {
            this.anims.play('shooting')
            this.playAttackSfx()
            let bulletsToFire = 15; // Number of bullets to fire
            for (let i = 0; i < bulletsToFire; i++) {
                let bullet = new IronBullet(this.scene, this.x-(((bulletsToFire/2)+i)*0.1) , this.y , target, true, this.damage);
                let bulletSpread = 0.1; // Adjust as needed for desired spread

                // Calculate the angle of the bullet based on the spread and the shotgun's rotation
                let angle = this.rotation + Phaser.Math.RND.realInRange(-bulletSpread, bulletSpread);
        
                // Calculate the x and y components of velocity using trigonometric functions
                let speed = Phaser.Math.RND.realInRange(150, 250);
                let velocityX = speed * Math.cos(angle);
                let velocityY = speed * Math.sin(angle);
        
                // Apply velocity to the bullet
                bullet.body.setVelocity(velocityX, velocityY);     
            }

            this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                this.anims.play('normal')
            });
        }
    }

    getText(){
        return "Yes, its a magical artifact";
    }


    playAttackSfx(){
        this.attackSfx.play()
    }

    manaCost() {
        return 35;
    }
}