

export default class WeaponInfo extends Phaser.GameObjects.Graphics{



    constructor(scene, x, y) {
        super(scene);
        this.scene.add.existing(this);
        
        this.setDepth(1000)
      
        this.y = y;
        this.x = x;
        this.banner = this.scene.add.image(this.x,this.y,'flatbanner').setOrigin(0).setDepth(999).setVisible(false).setScale(4)
        this.text = this.scene.add.text(x + 70, y +50,"" , { fontFamily: 'pixelFont', fontSize: 20, color: '#000000' }).setDepth(1000).setVisible(false);
  
    }

    activates(name) {
        this.text.setText(name);
        this.banner.setVisible(true)
        this.text.setVisible(true);
        this.scene.time.addEvent({
            delay: 4000,
            callback: this.deactivate,
            callbackScope: this
        })
    }

    deactivate(){
        this.text.setVisible(false);
        this.banner.setVisible(false)
    }

    

    placeName(name){
       
    }




}