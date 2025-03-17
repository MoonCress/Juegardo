
import Phaser, { Game } from 'phaser'
import lootGenerator from '../lootGenerator';

/**
 * Clase que representa un enemigo del juego.
 */
export default class Enemy extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, target, image, attackDelay) {
        super(scene, x, y, image);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.scene.enemies.add(this)
        this.scene.enviromental.add(this)
        this.scene = scene
        // Queremos que el enemigo no se salga de los límites del mundo
        this.body.setCollideWorldBounds();

        this.navMesh = scene.navMesh;
        // Velocidad 0 por defecto
        this.speed = 0;
        // Daño
        this.damage = 1;
        // Vida
        this.life = 1;

        this.target = target;

        // is enemy attacking?
        this.attacking = false;

        // distance from player to start attacking
        this.distanceAttack = 150;

        this.nextPosition = null;

        this.spawning = false;

        this.vulnerable = true;

        this.timerAttack = this.scene.time.addEvent({
            delay: attackDelay,
            callback: this.onTimerAttack,
            callbackScope: this,
            loop: true
        });

        this.timerAttack.paused = true;

        this.setDepth(7);

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if (this.anims.getName() === 'die') {
                this.doSomethingVerySpecificBecauseYoureMyBelovedChild()
                this.scene.enemies.remove(this);
                if (this.id !== "childSlime")
                    this.scene.enemyHasDied();
                let loot = new lootGenerator(this.scene, this.x, this.y, this.scene.player.luck)
                let rnd = Math.random();
                if (this.id !== "childSlime")
                    if (rnd >= 0.85 - (this.scene.player.luck / 20))
                        loot.generateLoot();
                    else {
                        rnd = Math.random();
                        if (rnd >= 0.80 - (this.scene.player.luck / 20))
                            loot.generateKey();
                    }
                this.destroyEnemy();
            }
        });

        this.pathFinding = this.scene.time.addEvent({
            delay: 200,
            callback: this.goTo,
            callbackScope: this,
            loop: true
        });

        // Para que los enemigos no se solapen uno encima de otro
        this.scene.physics.add.collider(this, this.scene.enemies, () => {
        });

    }

    destroyEnemy() {
        this.destroy();
    }

    doSomethingVerySpecificBecauseYoureMyBelovedChild() {
    }

    goTo() {
        // Find a path to the targetdsa

        this.path = this.navMesh.findPath({ x: this.x, y: this.y },
            { x: this.target.x, y: this.target.y });

        // If there is a valid path, grab the first point from the path and set it as the target
        if (this.path && this.path.length > 0) this.nextPosition = this.path.shift();
        else this.nextPosition = null;
    }



    receiveDamageOverTime(damage, durationInSeconds) {
        if (this.life > 0) {
            const totalTicks = durationInSeconds * 60; // Assuming 60 ticks per second

            // Calculate the damage per tick
            const damagePerTick = damage / totalTicks;

            // Create a tween for the poison effect
            this.tween = this.scene.tweens.add({
                targets: this,
                repeat: totalTicks - 1, // Repeat for 'totalTicks' times
                alpha: 0.5, // Example: Lower alpha to visualize poison effect
                ease: 'Linear',
                duration: 1000, // Duration of each tick (in milliseconds)
                onUpdate: () => {
                    // Apply damage to the target
                    if (this.life > 0) {
                        this.receiveDamage(damagePerTick)
                        if (this.life <= 0)
                            this.tween.stop();
                    }

                    // Check if target is dead
                    else {
                        this.tween.stop();
                        //  this.scene.enemyHasDied();
                    }
                }
            });
        }
    }



    receiveDamage(damage) {
        if (this.vulnerable) {
            this.life -= damage;

            this.scene.tweens.add({
                targets: this,
                alpha: 0,
                ease: Phaser.Math.Easing.Elastic.InOut,
                duration: 40,
                repeat: 1,
                yoyo: true,
                onStart: () => {
                    this.setTint(0xff0000);
                },
                onComplete: () => {
                    this.clearTint();
                    this.setAlpha(1);
                }
            })

            if (this.life <= 0) {
                this.body.setVelocity(0);
                this.body.enable = false;
                // this.scene.enemyHasDied();
                this.stop();
                this.play('die', true);
            }
        }
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
        if (this.life > 0 && !this.spawning) {
            this.flipEnemy()

            if (this.nextPosition) {
                const { x, y } = this.nextPosition;
                const distance = Phaser.Math.Distance.Between(this.x, this.y, x, y);

                if (distance < 5) {
                    // If there is path left, grab the next point. Otherwise, null the target.
                    if (this.path.length > 0) this.nextPosition = this.path.shift();
                    else this.nextPosition = null;
                }

                if (this.nextPosition) this.scene.physics.moveToObject(this, this.nextPosition, this.speed);
            }
            this.playAfterRepeat('walking');
            if (Phaser.Math.Distance.Between(this.x, this.y, this.target.x, this.target.y) > this.distanceAttack) {
                this.timerAttack.paused = true;
            }
            else {
                this.timerAttack.paused = this.attacking;
            }
        }
    }

    flipEnemy() {
        this.setFlipX(this.body.velocity.x <= 0);
    }

    isProjectile() {
        return false;
    }
}