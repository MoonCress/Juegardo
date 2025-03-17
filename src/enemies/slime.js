import Phaser from 'phaser'
import HitBox from '../hitbox';
import MeleeEnemy from './meleeEnemy';
import childSlime from './childSlime';
import lootGenerator from '../lootGenerator';

/**
 * Clase que representa un enemigo del juego.
 */
export default class Slime extends MeleeEnemy {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, target) {
        super(scene, x, y, target, 'slime', 1500);


        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('slimeSpritesheet', { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('slimeSpritesheet', { start: 4, end: 8 }),
            frameRate: 8,
            repeat: 0
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('slimeSpritesheet', { start: 9, end: 12 }),
            frameRate: 6,
            repeat: 0
        });

        this.setScale(1);

        this.speed = 30;

        this.life = 10;

        this.damage = 1;

        this.body.setSize(this.width * 0.48, this.height * 0.38, true);
    }

    spawnHitbox() {
        this.attackZone = new HitBox(this.scene, this.x + (this.flipX ? -15 : 15), this.y - 10, 30, 30, this.target, this.damage);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.life <= 0) {
            new childSlime(this.scene, this.x + 15, this.y, this.target);
            new childSlime(this.scene, this.x + 15, this.y + 10, this.target);
            new childSlime(this.scene, this.x - 15, this.y, this.target);
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
        // Preguntar si podría ser mas eficiente
        if (this.life > 0) {
            this.body.setOffset(this.width * (this.flipX ? 0.28 : 0.28), this.height * 0.28);
        }
    }

}