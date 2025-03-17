import Phaser from "phaser";

export default class icePuddle extends Phaser.GameObjects.Sprite {

    /**
     * Constructor de un charco de hielo
     * @param {Phaser.Scene} scene Escena 
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */

    constructor (scene, x, y, targetEnemy, damage)
    {
        super(scene, x, y, 'icePuddle');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setDepth(7);

        this.x = x;
        this.y = y;
        this.damageOverTime = damage;
        this.targets = targetEnemy;
        this.onCreation = false;

        this.anims.create({
            key: 'creation',
            frames: this.anims.generateFrameNumbers('puddle_spritesheet', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: 1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('puddle_spritesheet', { start: 1, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.physics.add.overlap(this.scene.enemies, this, (enemy) => {
            if (this.targets) {
                enemy.receiveDamageOverTime(damage, 1);
            }
        });

        this.scene.time.delayedCall(5000, () => {
            this.destroy()
        });
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if(!this.onCreation) {
            this.onCreation = true;
            this.play('creation', true);
        }
        else
            this.play('idle', true);
    }
}