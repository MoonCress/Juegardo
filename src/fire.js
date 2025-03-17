import Phaser from 'phaser'

export default class Fire extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el enemigo
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
    */

    constructor(scene, x, y, width, height,rotation) {
        super(scene, x, y+8,'fire');
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setDepth(7)

        this.anims.create({
            key: 'idle_fire',
            frames: scene.anims.generateFrameNumbers('fire', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1 
        })
        
        this.anims.play('idle_fire');

        this.angle = rotation
        this.body.setImmovable(true)
        if(rotation === 0){
        this.body.setSize(width,height/2,false)
        this.body.setOffset(0,height/2)
        }
        else if(rotation === 90){
            this.body.setSize(height/2,width,false)
        }else{
            this.body.setSize(height/2,width,false)
            this.body.setOffset(height/2,0)
        }




        this.collider =  this.scene.physics.add.collider( this.scene.enviromental,this,(obj) => {
            if(obj.isProjectile())
                obj.destroy();
        });
        
        
        
    }

    destroySprite(){
        this.destroy();
    }
       

    isProjectile(){
        return false;
    }
    
}

