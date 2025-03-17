import Phaser from 'phaser'
import Projectile from '../../projectiles/projectile'

export default class DevilFire extends Projectile {
    /**
        * Constructor
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y, target, targetEnemy, damage, angle, rotation) {
        super(scene, x, y, 'devilFire', targetEnemy, damage);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('devilFire', { start: 0, end: 0 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('devilFire', { start: 0, end: 0 }),
            frameRate: 64,
            repeat: 0
        });

        this.setDepth(5);
        this.setScale(0.75);

        this.damage = 1;

        this.speed = 50;

        this.rotation = rotation;

        this.body.setVelocityX(this.speed * Math.cos(angle));
        this.body.setVelocityY(this.speed * Math.sin(angle))

        if (rotation == Math.PI || this.angle == 0) {
            this.body.setSize(this.width, this.height, true);
        }
        else if (this.angle == 90 || this.angle == -90) {
            this.body.setSize(this.height, this.width, true);
        }
        else {
            this.body.setSize(this.width * 0.4, this.height * 2.75, true);
        }
    }

    impact(){
        super.impact();
        this.play('impact', true);  
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