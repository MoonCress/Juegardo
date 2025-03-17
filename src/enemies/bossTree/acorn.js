import Phaser from 'phaser'
import Projectile from '../../projectiles/projectile';

/**
 * Clase que representa una flecha del juego.
 */
export default class Acorn extends Projectile {

    constructor(scene, x, y, targetEnemy, damage, myShadow, enemySpawner) {
        super(scene, x, y, 'acorn', targetEnemy, damage);
        this.scene.enviromental.remove(this)
        this.anims.create({
            key: 'spawn',
            frames: this.anims.generateFrameNumbers('acornSpritesheet', { start: 0, end: 2 }),
            frameRate: 7,
            repeat: 0
        });

        this.anims.create({
            key: 'normal',
            frames: this.anims.generateFrameNumbers('acornSpritesheet', { start: 2, end: 2 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'impact',
            frames: this.anims.generateFrameNumbers('acornSpritesheet', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: 0
        });

        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if(!this.impacted){
                if(this.anims.getName() === 'spawn'){
                    this.spawning = false;
                    this.body.enable = true;
                }
            }
            
        });

        this.enemySpawner = enemySpawner;
        this.myShadow = myShadow

        this.scene.physics.add.overlap(this, this.myShadow, (projectile, shadow) => {
            this.impact();
            let spawnEnemy = Math.floor(Math.random() * 3);
            if(spawnEnemy === 1)
                this.enemySpawner.spawnEnemy(this.x, this.y);
            shadow.destroyShadow();
        });


        this.speed = 50;

        // Body size
        this.body.setSize(this.width * 0.6, this.height * 0.6, true);
        this.body.setOffset(this.width * 0.20, this.height * 0.25);
        // Velocity
        //this.body.setVelocityY(this.speed);
        this.body.setAccelerationY(this.speed);

    }

    destroyProjectile(){
        if (this.anims.getName() === 'impact'){
            this.myShadow.destroyShadow();
            this.destroy();
        }
    }

    impact(){
        this.body.enable = false;
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