import Phaser from "phaser";


import arma from "./arma";
import IronBullet from '../projectiles/ironBullet.js';

const DAMAGE = 2;

export default class Thompson extends arma {
    /**
        * Constructor del jugador
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y) {
        super(scene, x, y, 'thompson')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 50;
        this.x = x;
        this.y = y;

        this.attackSfx = this.scene.sound.add('thompsonsfx')

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('thompson', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'shooting',
            frames: this.anims.generateFrameNumbers('thompson', { start: 1, end: 2 }),
            frameRate: 10,
            repeat: 0
        });

        this.id = 'thompson';
        this.setActive(true);
        this.setVisible(true);

        this.damage = DAMAGE;
        this.anims.play('normal');
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    
    playAttackSfx(){
        this.attackSfx.play()
    }

    getText(){
        return "Yes, its a magical artifact TOO";
    }


    attack(target) {
        if (this.x != 0 && this.y != 0) {
            this.anims.play('shooting')
            this.playAttackSfx()

            new IronBullet(this.scene, this.x , this.y , target, true, this.damage);
            this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                this.anims.play('normal')
            });
        }
    }

    manaCost() {
        return 5;
    }
}