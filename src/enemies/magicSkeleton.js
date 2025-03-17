import Phaser from 'phaser'
import DistanceEnemy from './distanceEnemy';
import PurpleMagicBall from '../projectiles/purpleMagicBall';


/**
 * Clase que representa un enemigo del juego.
 */
export default class MagicSkeleton extends DistanceEnemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'magicSkeleton', 1000);
        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('magicSkeletonSpritesheet', { start: 11, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('magicSkeletonSpritesheet', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('magicSkeletonSpritesheet', { start: 8, end: 11 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('magicSkeletonSpritesheet', { start: 16, end: 20 }),
            frameRate: 5,
            repeat: 0
        });

        this.setScale(1);

        this.speed = 20;
        
        this.life = 15;

        this.body.setSize(this.width * 0.45, this.height * 0.85, true);

    }

    spawnProjectile(){
        new PurpleMagicBall(this.scene, this.x + (this.flipX ? -30 : 30), this.y - 10, this.target, false, this.damage);
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
        if (this.life > 0){
            this.body.setOffset(this.width * (this.flipX ? 0.38 : 0.4), this.height * 0.32);
        }
    }

}