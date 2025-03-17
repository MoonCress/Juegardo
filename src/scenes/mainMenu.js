
import bg from '../../assets/main_menu/title_bg.png'
import mt from '../../assets/main_menu/main_title.png'
import play from '../../assets/main_menu/play.png'
import playSel from '../../assets/main_menu/play_selected.png'
import font from 'url:../../assets/fonts/VT323Regular.ttf'
import Dungeongen from '../dungeongen'
import Jukebox from '../jukebox'



export default class MainMenu extends Phaser.Scene {

    constructor() {
        super({ key: 'mainMenu' });
        this.jukeboxStarted = false
    }



    preload() {
        this.load.image('title_bg', bg);
        this.load.image('main_title', mt);
        this.load.image('play', play);
        this.load.image('play_sel', playSel);


        // Archivo .ttf descargable desde
        // https://www.dafont.com/es/happy-donuts.font
        //this.load.add('pixelFont', '../assets/fonts/VT323Regular.ttf')
        //this.load.bitmapFont('customFont','../../assets/font/spellkeeper.png','../../assets/font/spellkeeper.xml')
        //this.load.bitmapFont('pixelfont','../../assets/font/pixelfont.png','../../assets/font/Pixeled.xml')
    }

    init(obj){
        if(obj !== undefined)
            this.playmusic = obj.started
    }

    create() {
        let bg = this.add.image(0, 0, 'title_bg').setOrigin(0).setDepth(0); //Background
        bg.setDisplaySize(this.sys.game.canvas.width, this.sys.game.canvas.height);
        let text = this.add.text(0, 0, 'SPELL KEEPER', { fontFamily: 'pixelFont', fontSize: 80, color: '#000000', fontStyle: 'bold' });
        text.setY(this.sys.game.canvas.height / 2 - text.height - 100);
        text.setX(this.sys.game.canvas.width / 2 - text.width);

        // let playButton = this.add.image(470,150,'play').setOrigin(0).setDepth(1).setScale(0.35); 
        // let playSelectedButton = this.add.image(470,150,'play_sel').setOrigin(0).setDepth(1).setScale(0.35).setVisible(false);

        let dungeonGenerator = new Dungeongen();
        if (!this.jukeboxStarted) {
            this.jukebox = new Jukebox(this)
            this.jukebox.create()
            this.jukebox.playMainTheme()
            this.jukeboxStarted = true
            this.playmusic = false
        }
        if(this.playmusic)
            this.jukebox.playMainTheme()

        this.controlsButton = this.add.text(0, 0, '> CONTROLS', { fontFamily: 'pixelFont', fontSize: 60, color: '#000000', fontStyle: 'bold' });
        this.controlsButton.setX(this.sys.game.canvas.width / 2 - text.width + 30);
        this.controlsButton.setY(this.sys.game.canvas.height / 2 - text.height + 60);

        this.playButton = this.add.text(0, 0, '> PLAY', { fontFamily: 'pixelFont', fontSize: 60, color: '#000000', fontStyle: 'bold' });
        this.playButton.setX(this.sys.game.canvas.width / 2 - text.width + 30);
        this.playButton.setY(this.sys.game.canvas.height / 2 - text.height - 5);
        /*let nuevoTexto = 
        this.add.text(390, 70, 
            'Spell Keeper', 
            { fontFamily: 'pixelFont', fontSize: 80, color: '#000000' });*/
        //this.add.text(450, 70, 'Spell Keeper',{ fontFamily: 'Arial', fontSize: '32px', fill: '#ffffff' })
        //  let hola = this.add.bitmapText(200, 100, 'pixelfont','Bitmap Fonts!', 64);
        // text.setScale(3);

        this.playButton.setInteractive();
        this.playButton.on("pointerover", () => {
            this.playButton.setStyle({ fill: '#ffffff' })
        })

        this.playButton.on("pointerout", () => {
            this.playButton.setStyle({ fill: '#000000' })
        })

        this.playButton.on("pointerup", () => {
            this.jukebox.stopAllMusic()
            this.jukebox.playLoop('ar')
            this.scene.start('arR1', { X: 0, Y: 3, dg: dungeonGenerator.tutorial(), dir: 'c', SSM: dungeonGenerator.generateSaveStateMatrix(4, 1), playerStat: null, jukebox: this.jukebox });
            //this.scene.start('grX2',{X: 0, Y: 3, dg:dungeonGenerator.tutorial(),dir:'n', SSM: dungeonGenerator.generateSaveStateMatrix(4,1),playerStat:null, jukebox: this.jukebox});
            //this.scene.start('lbE1',{ dg:dungeonGenerator.init(),X: dungeonGenerator.getEntranceX(), Y: dungeonGenerator.getEntranceY(),dir:'c', SSM: dungeonGenerator.generateSaveStateMatrix(dungeonGenerator.getN(),dungeonGenerator.getM()),playerStat:null, jukebox: this.jukebox});
            //this.scene.start('grR10',{ dg:dungeonGenerator.init(),X: dungeonGenerator.getEntranceX(), Y: dungeonGenerator.getEntranceY(),dir:'s', SSM: dungeonGenerator.generateSaveStateMatrix(dungeonGenerator.getN(),dungeonGenerator.getM()),playerStat:null,jukebox: this.jukebox});
        })

        this.controlsButton.setInteractive();
        this.controlsButton.on("pointerover", () => {
            this.controlsButton.setStyle({ fill: '#ffffff' })
        })

        this.controlsButton.on("pointerout", () => {
            this.controlsButton.setStyle({ fill: '#000000' })
        })

        this.controlsButton.on("pointerup", () => {
            this.scene.start('controlsMenu00');
        })

        let fullscreen = this.add.image(991, 32, 'fullScreenButton').setDepth(10).setScale(2);
        let normalscreen = this.add.image(991, 32, 'normalScreenButton').setDepth(10).setScale(1.5).setVisible(false);

        fullscreen.setInteractive();
        fullscreen.on("pointerover", () => {
            fullscreen.setScale(2.1)
        })

        fullscreen.on("pointerout", () => {
            fullscreen.setScale(2)
        })

        fullscreen.on("pointerdown", () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                fullscreen.setVisible(true);
                normalscreen.setVisible(false);
            }
            else {
                this.scale.startFullscreen();
                fullscreen.setVisible(false);
                normalscreen.setVisible(true);
            }
        })

        normalscreen.setInteractive();
        normalscreen.on("pointerover", () => {
            normalscreen.setScale(1.6)
        })

        normalscreen.on("pointerout", () => {
            normalscreen.setScale(1.5)
        })

        normalscreen.on("pointerdown", () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                fullscreen.setVisible(true);
                normalscreen.setVisible(false);
            }
            else {
                this.scale.startFullscreen();
                fullscreen.setVisible(false);
                normalscreen.setVisible(true);
            }
        })
    }

}