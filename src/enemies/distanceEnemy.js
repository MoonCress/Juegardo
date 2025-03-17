
import Phaser from 'phaser'
import Enemy from './enemy'

/**
 * Clase que representa un enemigo del juego.
 */
export default class DistanceEnemy extends Enemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y, target, image, attackDelay) {
        super(scene, x, y, target, image, attackDelay);

        this.distanceAttack = 300;

        this.on(Phaser.Animations.Events.ANIMATION_START, () => {
            if(this.life > 0){
                if (this.anims.getName() === 'attack'){
                    this.attacking = true;
                    this.spawnProjectile();
                }
            }
            
        })

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if(this.life > 0) {
                if (this.anims.getName() === 'attack'){
                    this.attacking = false;
                }
            }
        })

        this.on(Phaser.Animations.Events.ANIMATION_STOP, () => {
            if (this.life > 0) {
                if (this.anims.getName() === 'attack'){
                    this.attacking = false;
                }
            }
        })
    }

    spawnProjectile(){}

    doSomethingVerySpecificBecauseYoureMyBelovedChild() {
        this.scene.time.removeEvent(this.timerAttack);
    }

    receiveDamageOverTime(damage, durationInSeconds) {
        super.receiveDamageOverTime(damage, durationInSeconds);
        if (this.life <= 0) {
            this.timerAttack.paused = true;
        }
    }


    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.life <= 0) {
            this.timerAttack.paused = true;
        }
    }

    onTimerAttack () {
        this.play('attack')
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
    }

}