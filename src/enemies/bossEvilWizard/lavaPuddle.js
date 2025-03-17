import Phaser from 'phaser'

export default class LavaPuddle extends Phaser.GameObjects.Image {
    /**
        * Constructor
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y) {
        super(scene, x, y, 'lavaPuddle');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setDepth(5);
        this.setScale(0.75);

        this.damage = 1;

        this.scene.physics.add.overlap(this, this.scene.player, () => {
            this.scene.player.receiveDamage(this.damage);
        });

        this.scene.time.addEvent({
            delay: 10000,
            callback: this.reducePuddle,
            callbackScope: this
        });

        this.scene.time.addEvent({
            delay: 20000,
            callback: this.reduceMorePuddle,
            callbackScope: this
        });

        this.scene.time.addEvent({
            delay: 30000,
            callback: this.destroyPuddle,
            callbackScope: this
        });
    }

    reducePuddle() {
        this.setScale(0.6);
    }

    reduceMorePuddle(){
        this.setScale(0.3);
    }

    destroyPuddle() {
        this.destroy();
    }
}