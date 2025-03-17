import dagger from "../armas/dagger";
import Shotgun from "../armas/shotgun";
import Player from "../player";


export default class Credits extends Phaser.Scene{

    constructor() {
        super({ key: 'credits' });
    }
    init(obj){
        obj.jk.stopAllMusic()
        obj.jk.playMainTheme()
    }

    preload(){

    }

    create(){
        this.scene.stop('gui')
        this.title = this.add.text(385, 65,"SPELL KEEPER" , { fontFamily: 'pixelFont', fontSize: 50, color: '#ffffffff' }).setDepth(5);
        this.puntos = this.add.text(370,90,"......................" , { fontFamily: 'pixelFont', fontSize: 30, color: '#ffffffff' }).setDepth(5);

        this.realizado = this.add.text(405, 120,"Realizado por" , { fontFamily: 'pixelFont', fontSize: 40, color: '#ffffffff' }).setDepth(5);
        this.yo = this.add.text(360, 160,"Gonzalo Bertolín Díez" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);
        this.sandra = this.add.text(360, 192,"Sandra Conde González" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);
        this.pablo = this.add.text(360, 225,"Pablo Folgueira Galán" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);
        this.sandra = this.add.text(310, 258,"Alfonso García-Carrasco Puerta" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);

        this.colaboracion = this.add.text(340, 315,"Con la colaboración de" , { fontFamily: 'pixelFont', fontSize: 40, color: '#ffffffff' }).setDepth(5);
        this.fran = this.add.text(270, 350,"Francisco Miranda Alcaraz (Banda Sonora)" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);
        this.david = this.add.text(270, 385,"David Toral Castiñeira  (Sprites Bosses)" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ffffffff' }).setDepth(5);

        this.final = this.add.text(170, 425,"Gracias por jugar!, pulsa F5 para volver a intentarlo" , { fontFamily: 'pixelFont', fontSize: 35, color: '#ff0ff0' }).setDepth(5);

        new Player(this,512,256,0,0,0,0,0,0,0,[new dagger(this, 0, 0, 1)],[new Shotgun(this, 0, 0, 1)],0,0,null,1)
    }

}