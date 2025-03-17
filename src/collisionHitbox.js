import Phaser from 'phaser'

export default class CollisionHitbox extends Phaser.GameObjects.Zone {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setImmovable(true)

        this.collider =  this.scene.physics.add.collider( this.scene.enviromental,this,(obj) => {
            if(obj.isProjectile())
                obj.destroy();
        });

        
    }

    isProjectile(){
        return false;
    }
    
}

