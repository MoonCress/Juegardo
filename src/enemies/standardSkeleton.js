import Phaser from 'phaser'
import HitBox from '../hitbox';
import MeleeEnemy from './meleeEnemy';

/**
 * Clase que representa un enemigo del juego.
 */
export default class StandardSkeleton extends MeleeEnemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'standardSkeleton', 1500);

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('standardSkeletonSpritesheet', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('standardSkeletonSpritesheet', { start: 8, end: 10 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('standardSkeletonSpritesheet', { start: 16, end: 20 }),
            frameRate: 5,
            repeat: 0
        });

        this.setScale(1);

        this.speed = 40;

        this.life = 20;

        this.damage = 1;

        this.body.setSize(this.width * 0.4, this.height * 0.85, true);
    }

    spawnHitbox(){
        this.attackZone = new HitBox(this.scene, this.x + (this.flipX ? -65 : 65), this.y - 10, 40, 80, this.target, this.damage);
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
        // Preguntar si podría ser mas eficiente
        if (this.life > 0) {
            this.body.setOffset(this.width * (this.flipX ? 0.4 : 0.42), this.height * 0.34);
        }
    }

}