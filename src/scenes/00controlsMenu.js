import Phaser from 'phaser'



export default class ControlsMenu00 extends Phaser.Scene{

    constructor() {
        super({ key: 'controlsMenu00' });
    }

    preload(){
        
    }

    create(){
        let bg = this.add.image(0,0,'controlsBackground').setOrigin(0).setDepth(0)//Background
        bg.setDisplaySize(this.sys.game.canvas.width, this.sys.game.canvas.height);

        this.add.image(190,5,'titleDecoration').setOrigin(0).setDepth(1).setScale(1.5)//Title decoration

        this.add.image(160, 235, 'wKey').setOrigin(0).setDepth(1).setScale(5)
        this.add.image(90, 300, 'aKey').setOrigin(0).setDepth(1).setScale(5)
        this.add.image(160, 300, 'sKey').setOrigin(0).setDepth(1).setScale(5)
        this.add.image(230, 300, 'dKey').setOrigin(0).setDepth(1).setScale(5)

        this.add.image(415, 260, 'leftClick').setOrigin(0).setDepth(1).setScale(6)
        this.add.image(750, 260, 'rightClick').setOrigin(0).setDepth(1).setScale(6)

        this.add.text(400, 28, 'CONTROLS', { fontFamily: 'pixelFont', fontSize: 60, color: '#5e1675ff' , fontStyle: 'bold'}).setDepth(1);
        this.add.text(75, 33, 'BACK', { fontFamily: 'pixelFont', fontSize: 40, color: '#5e1675ff' , fontStyle: 'bold'});
        this.add.text(this.sys.game.canvas.width - 140, this.sys.game.canvas.height - 75, 'NEXT', { fontFamily: 'pixelFont', fontSize: 40, color: '#5e1675ff' , fontStyle: 'bold'});
        this.add.text(115, 190, 'MOVEMENT', { fontFamily: 'pixelFont', fontSize: 50, color: '#5e1675ff' , fontStyle: 'bold'});
        this.add.text(345, 190, 'MELEE ATTACK', { fontFamily: 'pixelFont', fontSize: 50, color: '#5e1675ff' , fontStyle: 'bold'});
        this.add.text(665, 190, 'DISTANCE ATTACK', { fontFamily: 'pixelFont', fontSize: 50, color: '#5e1675ff' , fontStyle: 'bold'});
        // Buttons
        this.backButton = this.add.image(18, 30, 'homeButton').setOrigin(0).setDepth(1).setScale(1.5);

       this.backButton.setInteractive();
       this.backButton.on("pointerover", ()=>{
            this.backButton.setScale(1.6)
       })

       this.backButton.on("pointerout", ()=>{
            this.backButton.setScale(1.5)
       })

       this.backButton.on("pointerup", ()=>{
            this.scene.start('mainMenu',{started:false});
       })

       this.nextButton = this.add.image(this.sys.game.canvas.width - 70, this.sys.game.canvas.height - 80, 'nextButton').setOrigin(0).setDepth(1).setScale(1.5);
       this.nextButton.setInteractive();
       this.nextButton.on("pointerover", ()=>{
            this.nextButton.setScale(1.6)
       })

       this.nextButton.on("pointerout", ()=>{
            this.nextButton.setScale(1.5)
       })

       this.nextButton.on("pointerup", ()=>{
            this.scene.start('controlsMenu01');
       })
    }
}