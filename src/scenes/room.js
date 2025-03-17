
import arb from '../../assets/armory/tiles/Base.png'
import arw from '../../assets/armory/tiles/Weapons.png'
import lbb from '../../assets/library/tiles/Base.png'
import lbw from '../../assets/library/tiles/Objects.png'
import grb from '../../assets/gardens/tiles/Base.png'
import grw from '../../assets/gardens/tiles/Objects.png'
import f from '../../assets/misc/fire.png'

import Player from '../player.js'
import dagger from '../armas/dagger.js';
import FireStaff from '../armas/fireStaff.js';
import Trigger from '../trigger.js';
import CollisionHitbox from '../collisionHitbox.js';
import EnemySpawner from '../enemySpawner.js';
import Fire from '../fire.js'
import Chest from '../chest.js';
import LevelTrigger from '../levelTrigger.js'
import Dungeongen from '../dungeongen'

import font from 'url:../../assets/fonts/VT323Regular.ttf'
import SecretTrigger from '../secretTrigger.js'
import Button from '../button.js'
import Jukebox from '../jukebox.js'
import Shotgun from '../armas/shotgun.js'
import Thompson from '../armas/thompson.js'

//Pruebas
import BossTree from '../enemies/bossTree/bossTree.js'
import BossSpawner from '../bossSpawner.js'
import key from '../objetos/key.js'
import ChargeSword from '../armas/chargeSword.js'
import BossChest from '../bossChest.js'
import HoeChest from '../hoechest.js'
import hoe from '../armas/HOE.js'



export default class Room extends Phaser.Scene {



    constructor(obj) {
        super({ key: obj.key });

        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
        this.nSpawn = { x: 0, y: 0 };
        this.sSpawn = { x: 0, y: 0 };
        this.eSpawn = { x: 0, y: 0 };
        this.wSpawn = { x: 0, y: 0 };
        this.cSpawn = { x: 0, y: 0 };

        this.cutScenePlaying = false
        // this.level = obj.level
        this.dungeonGenerator = new Dungeongen();


    }

    init(obj) {

        this.jukebox = obj.jukebox
        this.x = obj.X;
        this.y = obj.Y;
        this.dungeon = obj.dg;
        this.direction = obj.dir;
        this.numberOfEnemies = 0;
        this.boss = 0;
        this.chestOpened = false;
        this.loadScene = this.loadScene.bind(this);
        this.loadLevel = this.loadLevel.bind(this);
        this.loadInvernadero = this.loadInvernadero.bind(this)
        this.cache.tilemap.remove('tilemap');
        this.saveStateMatrix = obj.SSM
        this.fireArray = [] //El array que guarda los fuegos en el nivel para destruirlos una vez matados a todos los bichos
        this.cameras.main.fadeIn(120, 0, 0, 0)
        if (obj.playerStat === null) {

            this.globalPlayerStats = {
                life: 0,           // Current life points
                maximumLife: 0,    // Maximum life points
                mana: 0,            // Current mana points
                maximumMana: 0,     // Maximum mana points
                weaponMult: 1,       // Multiplier for weapon damage
                moveSpeed: 0,        // Player movement speed
                lck: 0,              // Player luck stat
                MeleeWeaponArray: [new dagger(this, 0, 0, 1)], // Array to store melee weapons
                RangedWeaponArray: [new FireStaff(this, 0, 0, 1)],// Array to store ranged weapons
                ActMelIndex: 0,      // Index of the currently active melee weapon
                ActRangIndex: 0,     // Index of the currently active ranged weapon
                lastWeaponUsed: null, // Last weapon used (can be set to the name or ID of the weapon)
                keys: 1,
                usedShield: false
            };
        } else {
            this.globalPlayerStats = obj.playerStat;
        }
    }


    preload() {

        this.jukebox.preload();

        if (this.textures.exists('Base'))
            this.textures.remove('Base')

        if (this.textures.exists('Objects'))
            this.textures.remove('Objects')

        if (this.level === 'ar') {
            this.load.image('Base', arb)
            this.load.image('Objects', arw)
        }
        else if (this.level === 'gr') {
            this.load.image('Base', grb)
            this.load.image('Objects', grw)

        } else {
            this.load.image('Base', lbb)
            this.load.image('Objects', lbw)
        }
        this.load.image('Invernadero', arb)
        this.load.image('fire', f)

    }


    loadScene(x, y, direction, level, dungeon) {

        //Ajustamos las coordenadas
        if (direction === 'n') {
            y -= 1;
            direction = 's'
        } else if (direction === 's') {
            y += 1;
            direction = 'n'
        } else if (direction === 'e') {
            x += 1;
            direction = 'w'
        } else if (direction === 'w') {
            x -= 1;
            direction = 'e'
        }
        // console.log(level + dungeon[y][x].name)


        this.map.removeAllLayers()
        this.map.destroy()

        this.unloadScene(this.key)
        if (dungeon[y][x].name !== "EM")
            this.scene.start(level + dungeon[y][x].name, { X: x, Y: y, dg: dungeon, dir: direction, SSM: this.saveStateMatrix, playerStat: this.globalPlayerStats, jukebox: this.jukebox });
        else
            this.scene.start(level + 'X1', { X: x, Y: y, dg: dungeon, dir: direction, SSM: this.saveStateMatrix, playerStat: this.globalPlayerStats, jukebox: this.jukebox })
        this.unloadScene(this.key)

    }

    loadInvernadero(x, y, dungeon) {
        this.map.removeAllLayers()
        this.map.destroy()

        this.unloadScene(this.key)
        this.scene.start('grR16', { X: x, Y: y, dg: dungeon, dir: 'c', SSM: this.saveStateMatrix, playerStat: this.globalPlayerStats, jukebox: this.jukebox });
    }

    loadLevel(level) {
        this.map.removeAllLayers()
        this.map.destroy()

        this.unloadScene(this.key)
        this.loadingBar()


        this.jukebox.stopAllMusic()
        this.jukebox.playIntro(level)
        this.scene.start(`${level}E1`, { dg: this.dungeonGenerator.init(), X: this.dungeonGenerator.getEntranceX(), Y: this.dungeonGenerator.getEntranceY(), dir: 'c', SSM: this.dungeonGenerator.generateSaveStateMatrix(this.dungeonGenerator.getN(), this.dungeonGenerator.getM()), playerStat: this.globalPlayerStats, jukebox: this.jukebox })

    }



    create() {



        if (this.dungeon[this.y][this.x].visited === false)
            this.dungeon[this.y][this.x].visited = true
        else {
            this.loadSceneState()
        }

        //let hb_n = new Trigger(this,256,0,96,32,this.player,sceneManager.loadScene(x,y,'n'));
        //LOADING TILES
        this.map = this.make.tilemap({
            key: 'tilemap',
            tileHeight: 32,
            tileWidth: 32
        });

        let base = this.map.addTilesetImage('Base');

        let objects = this.map.addTilesetImage('Objects');
        let fondo = this.map.createLayer('Fondo', [base]).setDepth(0)
        let walls;
        let floor;
        if (this.key !== 'grR16') {
            floor = this.map.createLayer('Floor', [base]).setDepth(1)
            walls = this.map.createLayer('Walls', [base]).setDepth(2).setCollisionByExclusion(-1)
        }
        else {
            let invernadero = this.map.addTilesetImage('Invernadero');
            floor = this.map.createLayer('Floor', [base, invernadero]).setDepth(1)
            walls = this.map.createLayer('Walls', [base, invernadero]).setDepth(2).setCollisionByExclusion(-1)
        }


        let cObjects = this.map.createLayer('CObjects', [objects]).setDepth(3).setCollisionByExclusion(-1)
        let nCObjects = this.map.createLayer('NCObjects', [objects]).setDepth(4)
        let extra = this.map.createLayer('Extra', [objects]).setDepth(5)
        if (this.level === 'gr') {
            let arbol = this.map.createLayer('Arbol', [objects]).setDepth(15)
        }

        const objectLayer = this.map.getObjectLayer("navmesh");
        if (objectLayer.objects.length > 0)
            this.navMesh = this.navMeshPlugin.buildMeshFromTiled("mesh1", objectLayer, 1);



        //DETERMINE PLAYER SPAWN
        let playerX = 300;
        let playerY = 200;

        this.loadPlayerSpawn();

        switch (this.direction) {
            case 'n':
                playerX = this.nSpawn.x; playerY = this.nSpawn.y;
                break;
            case 's':
                playerX = this.sSpawn.x; playerY = this.sSpawn.y;
                break;
            case 'e':
                playerX = this.eSpawn.x; playerY = this.eSpawn.y;
                break;
            case 'w':
                playerX = this.wSpawn.x; playerY = this.wSpawn.y;
                break;
            case 'c':
                playerX = this.cSpawn.x; playerY = this.cSpawn.y;
                break;
        }


        this.enviromental = this.add.group()

        let newMeleeArray = []
        for (let weapon of this.globalPlayerStats.MeleeWeaponArray) {
            let newWeapon = weapon.constructor
            newMeleeArray.push(new newWeapon(this, 0, 0, 1, true))
        }
        this.globalPlayerStats.MeleeWeaponArray = newMeleeArray;


        let newRangedArray = []
        for (let weapon of this.globalPlayerStats.RangedWeaponArray) {
            let newWeapon = weapon.constructor
            newRangedArray.push(new newWeapon(this, 0, 0, 1, true))
        }
        this.globalPlayerStats.RangedWeaponArray = newRangedArray;


        this.player = new Player(this, playerX, playerY, this.globalPlayerStats.life, this.globalPlayerStats.maximumLife, this.globalPlayerStats.mana, this.globalPlayerStats.maximumMana, this.globalPlayerStats.weaponMult, this.globalPlayerStats.moveSpeed, this.globalPlayerStats.lck, this.globalPlayerStats.MeleeWeaponArray, this.globalPlayerStats.RangedWeaponArray, this.globalPlayerStats.ActMelIndex, this.globalPlayerStats.ActRangIndex, this.globalPlayerStats.lastWeaponUsed, this.globalPlayerStats.keys, this.globalPlayerStats.usedShield);
        this.physics.add.collider(this.enviromental, walls, (obj) => {
            if (obj.isProjectile())
                obj.destroy();
        });
        this.physics.add.collider(this.enviromental, cObjects, (obj) => {
            if (obj.isProjectile())
                obj.destroy();
        });
        this.player.setDepth(6);




        let haveGUI = this.scene.launch('gui', { life: this.player.actualLife, maxLife: this.player.maxLife, mana: this.player.actualMana, maxMana: this.player.maxMana, keys: this.player.key, equipedWeapon: this.player.equipedWeapon, fullScreen: this.scale.isFullscreen, shieldUsed: this.player.usedShield });

        this.enemies = this.add.group();

        //TRIGGERS AND STUFF
        this.loadObjects();
        if (!this.cutScenePlaying) {
            this.cameras.main.setZoom(3);
            this.cameras.main.setBounds(0, 0, 1024, 512);
            this.cameras.main.startFollow(this.player);
        }
    }

    cutsceneStarted(x, y) {
        this.cameras.main.stopFollow(this.player);
        this.cameras.main.setZoom(3);
        this.cameras.main.centerOn(x, y + 50)
        this.cutScenePlaying = true
    }

    cutsceneStopped() {
        this.cameras.main.setZoom(3);
        this.cameras.main.setBounds(0, 0, 1024, 512);
        this.cameras.main.startFollow(this.player);
        this.cutScenePlaying = false
    }

    loadObjects() {
        // En Tiled tiene que haber una capa de objetos llamada `capaObjetos`
        this.cont = 0
        for (const objeto of this.map.getObjectLayer('Cosas').objects) {
            // `objeto.name` u `objeto.type` nos llegan de las propiedades del
            // objeto en Tiled
            if (objeto.type === 'Trigger') {
                switch (objeto.properties[0].value) {
                    case 'n':
                        new Trigger(this, objeto.x + objeto.width / 2, objeto.y + 16, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadScene, 'n', this.dungeon);
                        break;
                    case 's':
                        new Trigger(this, objeto.x + objeto.width / 2, objeto.y + 16, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadScene, 's', this.dungeon);
                        break;
                    case 'e':
                        new Trigger(this, objeto.x + objeto.width / 2, objeto.y + objeto.height / 2, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadScene, 'e', this.dungeon);
                        break;
                    case 'w':
                        new Trigger(this, objeto.x + objeto.width / 2, objeto.y + objeto.height / 2, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadScene, 'w', this.dungeon);
                        break;
                    case 'c':
                        new Trigger(this, objeto.x + objeto.width / 2, objeto.y + 16, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadScene, 'c', this.dungeon);
                        break;
                }

            } else if (objeto.type === 'Hitbox') {
                new CollisionHitbox(this, objeto.x + objeto.width / 2, objeto.y + objeto.height / 2, objeto.width, objeto.height)
            } else if (objeto.type === 'EnemySpawn') {
                if (this.numberOfEnemies !== -1) {
                    new EnemySpawner(this, objeto.x, objeto.y, this.player, this.level)
                    this.numberOfEnemies++
                }
            } else if (objeto.type === 'Fire') {
                if (this.numberOfEnemies !== -1) {
                    if (objeto.rotation === 270)
                        this.fireArray.push(new Fire(this, objeto.x - objeto.width / 2, (objeto.y + objeto.height / 2) - 40, objeto.width, objeto.height, objeto.rotation))
                    else if (objeto.rotation === 90)
                        this.fireArray.push(new Fire(this, objeto.x + objeto.width / 2, (objeto.y + objeto.height / 2) - 8, objeto.width, objeto.height, objeto.rotation))
                    else
                        this.fireArray.push(new Fire(this, (objeto.x - objeto.width / 2) + 32, (objeto.y + objeto.height / 2) - 40, objeto.width, objeto.height, objeto.rotation))
                }
            } else if (objeto.type === 'Chest') {
                new Chest(this, objeto.x + objeto.width / 2, objeto.y - objeto.height / 2, objeto.width, objeto.height - 8, this.player, this.chestOpened)
            } else if (objeto.type === 'SpecialTrigger') {
                new LevelTrigger(this, objeto.x + objeto.width / 2, objeto.y + 16, objeto.width, objeto.height, this.player, this.level, this.loadLevel, objeto.properties[0].value)
            } else if (objeto.type === 'SecretTrigger') {
                this.secretTrigger = new SecretTrigger(this, objeto.x + objeto.width / 2, objeto.y + 16, objeto.width, objeto.height, this.player, this.level, this.x, this.y, this.loadInvernadero, 'c', this.dungeon)
            } else if (objeto.type === 'Button') {
                new Button(this, objeto.x + 19, objeto.y + 8, objeto.width, objeto.height, this.player, this.cont, this.secretTrigger)
                this.cont++
            } else if (objeto.type === 'BossSpawn') {
                if (this.boss !== -1) {
                    new BossSpawner(this, objeto.x, objeto.y, this.player, this.level)
                    this.boss++
                }

            } else if (objeto.type === 'BossFire') {
                if (this.boss !== -1)
                    if (objeto.rotation === 270)
                        this.fireArray.push(new Fire(this, objeto.x - objeto.width / 2, (objeto.y + objeto.height / 2) - 40, objeto.width, objeto.height, objeto.rotation))
                    else if (objeto.rotation === 90)
                        this.fireArray.push(new Fire(this, objeto.x + objeto.width / 2, (objeto.y + objeto.height / 2) - 8, objeto.width, objeto.height, objeto.rotation))
                    else
                        this.fireArray.push(new Fire(this, (objeto.x - objeto.width / 2) + 32, (objeto.y + objeto.height / 2) - 40, objeto.width, objeto.height, objeto.rotation))
            } else if (objeto.type === 'BossChest') {
                new BossChest(this, objeto.x, objeto.y, 32, 32, this.player, false)
            } else if (objeto.type === 'HoeChest') {
                new HoeChest(this, objeto.x, objeto.y, 32, 32, this.player, false)
            }
        }
    }

    enemyHasDied() {
        this.numberOfEnemies--;
        if (this.numberOfEnemies <= 0 && this.boss <= 0) {
            this.numberOfEnemies = -1; //Habitacion limpia

            for (let fire of this.fireArray) {
                fire.destroySprite();
                fire.destroy();
            }
        }
    }

    bossHasDied() {
        this.boss--;
        if (this.boss <= 0) {
            this.boss = -1; //Habitacion limpia

            for (let fire of this.fireArray) {
                fire.destroySprite();
                fire.destroy();
            }
        }
    }

    chestWasOpened() {
        this.chestOpened = true;
    }

    loadPlayerSpawn() {
        for (const objeto of this.map.getObjectLayer('Cosas').objects) {
            // `objeto.name` u `objeto.type` nos llegan de las propiedades del
            // objeto en Tiled
            if (objeto.type === 'PlayerSpawn') {
                switch (objeto.properties[0].value) {
                    case 'n':
                        this.nSpawn.x = objeto.x; this.nSpawn.y = objeto.y;
                        break;
                    case 's':
                        this.sSpawn.x = objeto.x; this.sSpawn.y = objeto.y;
                        break;
                    case 'e':
                        this.eSpawn.x = objeto.x; this.eSpawn.y = objeto.y;
                        break;
                    case 'w':
                        this.wSpawn.x = objeto.x; this.wSpawn.y = objeto.y;
                        break;
                    case 'c':
                        this.cSpawn.x = objeto.x; this.cSpawn.y = objeto.y;
                        break;
                }
            }
        }
    }

    saveSceneState() {
        let savedSceneState = {
            // Save relevant scene state here
            // For example:
            numberOfEnemies: this.numberOfEnemies,
            chestOpened: this.chestOpened,
            boss: this.boss
        };

        this.saveStateMatrix[this.y][this.x] = savedSceneState
    }

    loadSceneState() {
        let savedSceneState = this.saveStateMatrix[this.y][this.x]
        if (savedSceneState) {
            this.numberOfEnemies = savedSceneState.numberOfEnemies
            this.chestOpened = savedSceneState.chestOpened
            this.boss = savedSceneState.boss
        }
    }

    // Unload scene
    unloadScene(sceneKey) {
        this.getPlayerStats();
        this.saveSceneState();
        this.scene.stop(sceneKey);
    }

    startCredits() {
        this.scene.stop(this.scene.key)
        this.scene.start('credits', { jk: this.jukebox })
    }


    getPlayerStats() {
        this.globalPlayerStats.life = this.player.actualLife
        this.globalPlayerStats.maximumLife = this.player.maxLife
        this.globalPlayerStats.mana = this.player.actualMana
        this.globalPlayerStats.maximumMana = this.player.maxMana
        this.globalPlayerStats.weaponMult = this.player.weaponMultiplier
        this.globalPlayerStats.moveSpeed = this.player.movSpeed
        this.globalPlayerStats.lck = this.player.luck
        this.globalPlayerStats.MeleeWeaponArray = this.player.meeleWeapons
        this.globalPlayerStats.RangedWeaponArray = this.player.rangedWeapons
        this.globalPlayerStats.ActMelIndex = this.player.meleeIndex
        this.globalPlayerStats.ActRangIndex = this.player.rangedIndex
        this.globalPlayerStats.lastWeaponUsed = this.player.equipedWeapon
        this.globalPlayerStats.keys = this.player.key
        this.globalPlayerStats.usedShield = this.player.usedShield
    }

    loadingBar() {
        // Background
        let background = this.add.graphics();
        background.fillStyle(0xad88c6, 1);
        background.fillRect(0, 0, this.sys.canvas.width, this.sys.canvas.height);

        //Loading bar 
        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x8f3ea9, 0.8);
        progressBox.fillRect(this.sys.canvas.width / 2 - 160, this.sys.canvas.height / 2, 320, 50);

        let canvasWidth = this.sys.canvas.width;
        let canvasHeight = this.sys.canvas.height;

        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0x8f3ea9, 1);
            progressBar.fillRect(canvasWidth / 2 - 150, canvasHeight / 2 + 10, 300 * value, 30);
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('fileprogress', function (file) {
            console.log(file.src);
        });
        this.load.on('complete', function () {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });

        //Loading bar text
        this.loadFont('pixelFont', font);
        let loadingText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 - 30, 'Loading...', { fontFamily: 'pixelFont', fontSize: 40, color: '#5e1675ff' }).setOrigin(0.5, 0.5);

        // Percent bar text
        let percentText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 70, '0%', { fontFamily: 'pixelFont', fontSize: 24, color: '#5e1675ff' }).setOrigin(0.5, 0.5);

    }

    loadFont(name, url) {
        let newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
    }






}