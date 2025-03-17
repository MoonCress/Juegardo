import Phaser from 'phaser'

/**
 * Clase que representa el proyectil generico del juego.
 */
export default class Projectile extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, image, targetEnemy, damage, spawning = false) {
        super(scene, x, y, image);
        this.scene = scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        if (this.scene.enviromental !== undefined)
            this.scene.enviromental.add(this)
        let overlapPlayerDmg = this.scene.physics.add.overlap(this, this.scene.enemies, (projectile, enemy) => {
            if (targetEnemy) {
                this.impact(); // impact animation
                if (image !== 'bullet') //Bullet es la bala venenosa
                    enemy.receiveDamage(damage)
                else
                    enemy.receiveDamageOverTime(damage, 2);
                this.scene.physics.world.removeCollider(overlapPlayerDmg);
            }
        });

        let overlapEnemyDmg = this.scene.physics.add.overlap(this, this.scene.player, (projectile, player) => {
            if (!targetEnemy) {
                player.receiveDamage(damage);
                this.scene.physics.world.removeCollider(overlapEnemyDmg);
                this.impact();// impact animation
            }
        });

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            this.destroyProjectile();
        });

        this.setDepth(5);
        this.impacted = false;
        this.spawning = spawning;

        //this.play('normal', true);
    }

    destroyProjectile() {
        if (this.anims.getName() === 'impact') {
            this.destroy();
        }
    }

    impact() {
        this.impacted = true;
        this.body.setVelocity(0);
    }

    isProjectile() {
        return true;
    }

    /**
     * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
     * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
     * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
     * @override
     */
    preUpdate(t, dt) {
        // IMPORTANTE: Si no ponemos esta instrucción y el sprite está animado
        // no se podrá ejecutar la animación del sprite. 
        super.preUpdate(t, dt);
        if (!this.spawning && !this.impacted)
            this.play('normal', true);

    }

}