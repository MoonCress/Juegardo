import Phaser from 'phaser'
import DistanceEnemy from './distanceEnemy';
import Arrow from '../projectiles/arrow';
import DistanceEnemy from './distanceEnemy';

/**
 * Clase que representa un enemigo del juego.
 */
export default class PoisonousGoblin extends DistanceEnemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'poisonousGoblin', 900);
        
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('poisonousGoblinSpritesheet', { start: 8, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('poisonousGoblinSpritesheet', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('poisonousGoblinSpritesheet', { start: 8, end: 10 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('poisonousGoblinSpritesheet', { start: 12, end: 16 }),
            frameRate: 5,
            repeat: 0
        });

        this.setScale(1);

        this.speed = 40;

        this.life = 10;

        this.body.setSize(this.width * 0.45, this.height * 0.85, true);

    }

    spawnProjectile(){
        new Arrow(this.scene, this.x, this.y, this.target, false, this.damage);
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