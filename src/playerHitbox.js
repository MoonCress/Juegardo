import Phaser from 'phaser'

/**
 * Clase que se usa para crear las hitbox de las armas.
 */
export default class PlayerHitBox extends Phaser.GameObjects.Zone {

    /**
     * Constructor de la hitbox de las armas a melee
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height, damage, angle, id) {
        super(scene, x, y, width, height);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.angle = angle;

        let overlapDmg = this.scene.physics.add.overlap(this.scene.enemies, this, (enemy) => {
            enemy.receiveDamage(damage);
            if (id === 'drainsword')
                this.scene.player.addHealth(damage / 2);
            else if (id === 'poisondagger') {
                enemy.receiveDamageOverTime(damage, 2)
            }
            else {
                this.scene.player.regenMana();
            }
            this.scene.physics.world.removeCollider(overlapDmg);
            this.destroy();
        });

    }
}