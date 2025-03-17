import Phaser from 'phaser'

import room from '../../assets/armory/sprites/Hab_Prueba.png'
//player assets
import player from '../../assets/cSprites/characters/Mage_Walking.png'
import deadPlayer from '../../assets/cSprites/characters/Mage_Dead.png'
import playerIdle from '../../assets/cSprites/characters/Mage_Idle.png'
import shield from '../../assets/cSprites/characters/Escudo.png'
import sombreraco from '../../assets/cSprites/characters/SombreroPajerini.png'

//Enemies assets
import inv from '../../assets/gardens/sprites/InvernaderoAbierto.png'
import knight from '../../assets/armory/sprites/knight/knight_spritesheet.png'
import skeleton from '../../assets/armory/sprites/skeleton/skeleton_spritesheet.png'
import PoisonousGoblin from '../../assets/gardens/sprites/goblin/poisonous_goblin_spritesheet.png'
import CarnivorousPlant from '../../assets/gardens/sprites/carnivorous_plant/carnivorous_plant_spritesheet.png'
import MagicSkeleton from '../../assets/library/sprites/skeleton/skeleton_3_spritesheet.png'
import StandardSkeleton from '../../assets/library/sprites/skeleton/skeleton_1_spritesheet.png'
import LavaGolem from '../../assets/throne_room/sprites/lava_golem/golem_spritesheet.png'
import Slime from '../../assets/gardens/sprites/slime/slime_spritesheet.png'
import Book from '../../assets/library/sprites/book/book_spritesheet_1.png'
import PurpleMagicBall from '../../assets/cSprites/purple_magic_ball_spritesheet.png'
import GreenPoisonBall from '../../assets/cSprites/green_poison_spritesheet.png'
import arrow from '../../assets/armory/sprites/arrow/arrow.png'
import Spear from '../../assets/cSprites/weapons/Spear.png'
import Knife from '../../assets/cSprites/weapons/knife.png'

//Weapon assets
import dagger from '../../assets/cSprites/weapons/02.png'
import ChargeSword from '../../assets/cSprites/weapons/ChargeSword.png'
import Fireball from '../../assets/cSprites/weapons/fireball_spritesheet.png'
import Lighting from '../../assets/cSprites/weapons/LightingEffect.png'
import iceEffects from '../../assets/cSprites/weapons/iceEffect.png'
import puddleEffects from '../../assets/cSprites/weapons/puddlePlaceholder.png'
import iceStaff from '../../assets/cSprites/weapons/iceStaff.png'
import fireStaff from '../../assets/cSprites/weapons/fireStaff2.png'
import poisonStaff from '../../assets/cSprites/weapons/poisonStaff2.png'
import espadaMortal from '../../assets/cSprites/weapons/espadaCheta.png'
import Bullet from '../../assets/cSprites/Bullet.png'
import Shotgun from '../../assets/cSprites/weapons/Escopeta.png'
import Thompson  from '../../assets/cSprites/weapons/Thompson.png'
import MagicSword from '../../assets/cSprites/weapons/magicSword.png'
import MagicKnife from '../../assets/cSprites/weapons/MagicKnife.png'
import magicBullet from '../../assets/cSprites/weapons/magicBullet_effects.png'
import DrainSword from '../../assets/cSprites/weapons/DrainSword.png'
import PoisonDagger from '../../assets/cSprites/weapons/PoisonDagger.png'
import ultimateWeapon from '../../assets/cSprites/weapons/UltimateHoe.png'
import espadaPocha from '../../assets/cSprites/weapons/espadaPocha.png'
import espadaLetal from '../../assets/cSprites/weapons/espadaLetal.png'

//Item assets
import healingHeart from '../../assets/cSprites/items/healingHeart.png'
import halfHealingHeart from '../../assets/cSprites/items/halfHealingHeart.png'
import manaPotion from '../../assets/cSprites/items/PotionBlue.png'
import escoba from '../../assets/cSprites/items/broom.png'
import soda from '../../assets/cSprites/items/CocaCona.png'
import luckyClub from '../../assets/cSprites/items/FourLeafClub.png'
import crystalHeart from '../../assets/cSprites/items/heartAmulet.png'
import speedyCloak from '../../assets/cSprites/items/shadowCloak.png'

//UI assets
import fullHeart from '../../assets/HUD/ui_heart_full.png'
import halfHeart from '../../assets/HUD/ui_heart_half.png'
import emptyHeart from '../../assets/HUD/ui_heart_empty.png'
import manaBar from '../../assets/HUD/mana_bar.png'
import mainMana from '../../assets/HUD/main_mana.png'
import BossBar from '../../assets/HUD/boss_bar.png'
import BossLife from '../../assets/HUD/boss_life.png'
import Uikey from '../../assets/HUD/key_32x32_24f.png'
import shieldReady from '../../assets/HUD/UI_shield_ready.png'
import shieldCD from '../../assets/HUD/UI_shield_cd.png'
import flatBanner from '../../assets/HUD/flatbanner.png'

import chest from '../../assets/armory/sprites/chests.png'
import hoechest from '../../assets/misc/hoechest.png'
import BossChest from '../../assets/misc/bosschest.png'
import Fire from '../../assets/misc/fire.png'
import font from 'url:../../assets/fonts/VT323Regular.ttf'

// Controls Menu
import ControlsBackground from '../../assets/controlsMenu/background.png'
import wKey from '../../assets/controlsMenu/w.png'
import aKey from '../../assets/controlsMenu/a.png'
import sKey from '../../assets/controlsMenu/s.png'
import dKey from '../../assets/controlsMenu/d.png'
import qKey from '../../assets/controlsMenu/q.png'
import fKey from '../../assets/controlsMenu/f.png'
import next from '../../assets/controlsMenu/next.png'
import homeButton from '../../assets/controlsMenu/home.png'
import leftClick from '../../assets/controlsMenu/leftClick.png'
import rightClick from '../../assets/controlsMenu/rightClick.png'
import Shift from '../../assets/controlsMenu/shift.png'
import TitleDecoration from  '../../assets/mainTitle.png'
import fullScreenButton from '../../assets/main_menu/full_screen_icon.png'
import normalScreenButton from '../../assets/main_menu/normal_screen_icon.png'

//Music
import mainTitle from 'url:../../assets/sound/music/main.wav'
import libLoop from 'url:../../assets/sound/music/libloop.wav'
import libIntro from 'url:../../assets/sound/music/libintro.wav'
import tutloop from 'url:../../assets/sound/music/tutloop.wav'
import gardintro from 'url:../../assets/sound/music/gardintro.wav'
import gardloop from 'url:../../assets/sound/music/gardloop.wav'
import treeintro from 'url:../../assets/sound/music/treeintro.wav'
import treeloop from 'url:../../assets/sound/music/treeloop.wav'
import evilintro from 'url:../../assets/sound/music/evilintro.mp3' 
import evilloop from 'url:../../assets/sound/music/evilloop.mp3' 
//Sfx
import hoeSFX from 'url:../../assets/sound/effects/weapons/hoe.wav'
import playerhit from 'url:../../assets/sound/effects/playerhit.wav'
import nomana from 'url:../../assets/sound/effects/nomana.wav'
import ShotgunSFX from 'url:../../assets/sound/effects/weapons/shotgun.wav'
import ThompsonSFX from 'url:../../assets/sound/effects/weapons/thompson.wav'
import DaggerSFX from 'url:../../assets/sound/effects/weapons/dagger.wav'
import ButtonSFX from 'url:../../assets/sound/effects/button.wav'
import KeySFX from 'url:../../assets/sound/effects/key.wav'
import TreeSpawn from 'url:../../assets/sound/effects/treespawn.wav'
import TreeDie from 'url:../../assets/sound/effects/treedie.wav'
import ErrorPuzzle from 'url:../../assets/sound/effects/error.wav'
import MageLaugh from 'url:../../assets/sound/effects/magelaugh.wav'
import DemonSpawn from 'url:../../assets/sound/effects/demonspawn.wav'
import DemonExplosion from 'url:../../assets/sound/effects/demonexplosion.wav'
import lavaSfx from 'url:../../assets/sound/effects/lavagolem.wav'
import chargeswordSFX from 'url:../../assets/sound/effects/weapons/chargedsword.wav'
import icestaffSFX from 'url:../../assets/sound/effects/weapons/icestaff.wav'
import chargingswordSFX from 'url:../../assets/sound/effects/weapons/chargingsword.wav'
import swordSFX from 'url:../../assets/sound/effects/weapons/sword.wav'
import drainswordSFX from 'url:../../assets/sound/effects/weapons/drainsword.wav'
import firestaffSFX from 'url:../../assets/sound/effects/weapons/firestaff.wav'
import chestSFX from 'url:../../assets/sound/effects/chest.wav'
import lifeSFX from 'url:../../assets/sound/effects/life.wav'
// Bosses
// Tree
import ArbolTrans from '../../assets/bosses/tree/Arbol_Trans.png'
import MageTree from '../../assets/bosses/tree/mago_Arbol_Trans.png'
import BossTree from '../../assets/bosses/tree/boss_tree_spritesheet.png'
import BossTreeMovements from '../../assets/bosses/tree/boss_tree_walk_&_die.png'
import SurpriseRoot from '../../assets/bosses/tree/Atk2.png'
import MovingRoot from '../../assets/bosses/tree/Atk1.png'
import Acorn from '../../assets/bosses/tree/Bellota.png'
import AcornShadow from '../../assets/bosses/tree/BellotaSombra.png'
// Evil Wizard
import EvilWizard from '../../assets/bosses/evilWizard/Diablo.png'
import LavaPuddle from '../../assets/bosses/evilWizard/lava_puddle.png'
import DevilFire from '../../assets/bosses/evilWizard/devil_fire.png'
import PreSpawn from '../../assets/bosses/evilWizard/prespawn.png'
/**
 * Escena para la precarga de los assets que se usarán en el juego.
 * Esta escena se puede mejorar añadiendo una imagen del juego y una 
 * barra de progreso de carga de los assets
 * @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/} como ejemplo
 * sobre cómo hacer una barra de progreso.
 */
export default class Boot extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'boot' });
    
  }

  /**
   * Carga de los assets del juego
   */
  preload() {
    //Player
    this.load.spritesheet('player_spritesheet', player, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('player_idle',playerIdle, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('playerDying_spritesheet', deadPlayer, { frameWidth: 32, frameHeight: 32 });
    this.load.image('escudo', shield);
    this.load.image('sombreroPajero', sombreraco);
    this.load.image('escenaPrueba', room);
    this.load.image('inv',inv);

    // Controls Menu
    this.load.image('controlsBackground', ControlsBackground);
    this.load.image('wKey', wKey);
    this.load.image('aKey', aKey);
    this.load.image('sKey', sKey);
    this.load.image('dKey', dKey);
    this.load.image('qKey', qKey);
    this.load.image('fKey', fKey);
    this.load.image('nextButton', next);
    this.load.image('homeButton', homeButton);
    this.load.image('leftClick', leftClick);
    this.load.image('rightClick', rightClick);
    this.load.image('shift', Shift);
    this.load.image('titleDecoration', TitleDecoration)
    this.load.spritesheet('fire',Fire,{ frameWidth: 32, frameHeight: 32 })

    //Weapons
    this.load.image('dagger', dagger);
    this.load.image('drainsword',DrainSword)
    this.load.image('fireStaff',fireStaff);
    this.load.image('spear',Spear)
    this.load.image('magicknife',MagicKnife)
    this.load.spritesheet('fireball_spritesheet', Fireball, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('chargesword',ChargeSword,{frameWidth: 38, frameHeight:16})
    this.load.image('iceStaff', iceStaff);
    this.load.spritesheet('ice_spritesheet', iceEffects, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('puddle_spritesheet', puddleEffects, { frameWidth: 32, frameHeight: 32 });
    this.load.image('poisonStaff',poisonStaff);
    this.load.spritesheet('lighting_spritesheet', Lighting, { frameWidth: 64, frameHeight:64 });
    this.load.image('espadaCheta', espadaMortal);
    this.load.image('hoe', ultimateWeapon);
    this.load.spritesheet('magicBullet_spritesheet', magicBullet, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('shotgun',Shotgun, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('thompson',Thompson, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('ironbullet',Bullet, { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('knife',Knife, { frameWidth: 12, frameHeight: 5 });
    this.load.image('poisondagger',PoisonDagger);
    this.load.image('magicSword', MagicSword);
    this.load.image('espadaNormalucha', espadaPocha);
    this.load.image('lethalSword', espadaLetal);

    //Items
    this.load.spritesheet('chest',chest, { frameWidth: 32, frameHeight:32 });
    this.load.spritesheet('bosschest',BossChest, { frameWidth: 32, frameHeight:32 });
    this.load.spritesheet('hoechest',hoechest, { frameWidth: 32, frameHeight:32 });
    this.load.image('healingHeart', healingHeart);
    this.load.image('halfHealingHeart', halfHealingHeart);
    this.load.image('potionOfMana', manaPotion);
    this.load.image('broom', escoba);
    this.load.image('fat', soda);
    this.load.image('FourLeafsClub', luckyClub);
    this.load.image('healingAmulet', crystalHeart);
    this.load.image('shadowCloak', speedyCloak);

    //Enemies
    this.load.spritesheet('arrow', arrow, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('knight_spritesheet', knight, { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('skeleton_spritesheet', skeleton, { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('poisonousGoblinSpritesheet', PoisonousGoblin, { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('carnivorousPlantSpritesheet', CarnivorousPlant, { frameWidth: 128, frameHeight: 128 });
    this.load.spritesheet('magicSkeletonSpritesheet', MagicSkeleton, { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('lavaGolemSpritesheet', LavaGolem, { frameWidth: 32, frameHeight: 32 })
    this.load.spritesheet('slimeSpritesheet', Slime, { frameWidth: 32, frameHeight: 32 })
    this.load.spritesheet('bookSpritesheet', Book, {frameWidth: 64, frameHeight: 64})
    this.load.spritesheet('standardSkeletonSpritesheet', StandardSkeleton, { frameWidth: 72, frameHeight: 72 });
    this.load.spritesheet('purpleMagicBallSpritesheet', PurpleMagicBall, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet('greenPoisonBallSpritesheet', GreenPoisonBall, { frameWidth: 32, frameHeight: 32 });

    //UI/HUD
    this.load.image('ui-heart-full', fullHeart);
    this.load.image('half-ui-heart', halfHeart);
    this.load.image('ui-heart-empty', emptyHeart);
    this.load.image('manaBar', manaBar);
    this.load.image('mainMana', mainMana);
    this.load.image('bossBar', BossBar);
    this.load.image('bossLife', BossLife);
    this.load.spritesheet('key', Uikey, { frameWidth: 32, frameHeight: 32 });
    this.load.image('ready_ui_shield', shieldReady);
    this.load.image('cd_ui_shield', shieldCD);
    this.load.image('flatbanner',flatBanner)



    //Audio
    this.load.audio('lavagolem',lavaSfx)
    this.load.audio('chestsfx',chestSFX)
    this.load.audio('icestaffsfx',icestaffSFX)
    this.load.audio('hoesfx',hoeSFX)
    this.load.audio('chargedsword',chargeswordSFX)
    this.load.audio('chargingsword',chargingswordSFX)
    this.load.audio('tutloop',tutloop)
    this.load.audio('libloop', libLoop)
    this.load.audio('libintro', libIntro)
    this.load.audio('gardintro', gardintro)
    this.load.audio('gardloop', gardloop)
    this.load.audio('maintitle',mainTitle)
    this.load.audio('treeintro',treeintro)
    this.load.audio('treeloop',treeloop)
    this.load.audio('evilintro',evilintro)
    this.load.audio('evilloop',evilloop)
    this.load.audio('firestaffsfx',firestaffSFX)
    this.load.audio('drainswordsfx',drainswordSFX)
    this.load.audio('swordsfx',swordSFX)
    this.load.audio('playerhit',playerhit)
    this.load.audio('nomana',nomana)
    this.load.audio('shotgunsfx',ShotgunSFX)
    this.load.audio('thompsonsfx',ThompsonSFX)
    this.load.audio('daggersfx',DaggerSFX)
    this.load.audio('buttonsfx',ButtonSFX)
    this.load.audio('keysfx',KeySFX)
    this.load.audio('treespawn',TreeSpawn)
    this.load.audio('treedie',TreeDie)
    this.load.audio('errorpuzzle', ErrorPuzzle)
    this.load.audio('demonspawn',DemonSpawn)
    this.load.audio('magelaugh',MageLaugh)
    this.load.audio('demonexplosion',DemonExplosion)
    this.load.audio('lifesfx',lifeSFX)

    // Background

    // Bosses
    // Tree
    this.load.spritesheet('bossTreeSpritesheet', BossTree, { frameWidth: 128, frameHeight: 64 });
    this.load.spritesheet('magoarbol',MageTree,{frameWidth:32,frameHeight:32})
    this.load.spritesheet('bossTreeMovementsSpritesheet', BossTreeMovements, { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('movingRootSpritesheet', MovingRoot, {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('surpriseRootSpritesheet', SurpriseRoot, {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('acornSpritesheet', Acorn, {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('acornShadowSpritesheet', AcornShadow, {frameWidth: 32, frameHeight: 32});
    this.load.spritesheet('arbolSpawn',ArbolTrans, { frameWidth: 128, frameHeight: 64 })

    // Evil Wizard
    this.load.spritesheet('evilWizardSpritesheet', EvilWizard, { frameWidth: 80, frameHeight: 80 });
    this.load.image('lavaPuddle', LavaPuddle);
    this.load.spritesheet('devilFire', DevilFire, {frameWidth: 64, frameHeight: 16});
    this.load.spritesheet('prespawn',PreSpawn, {frameWidth: 80, frameHeight: 80})

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
    let loadingText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 - 30, 'Loading...', { fontFamily: 'pixelFont', fontSize: 40, color: '#5e1675ff'}).setOrigin(0.5, 0.5);

    // Percent bar text
    let percentText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 70, '0%', { fontFamily: 'pixelFont', fontSize: 24, color: '#5e1675ff'}).setOrigin(0.5, 0.5);

    // Full screen button
    this.load.image('fullScreenButton', fullScreenButton);
    this.load.image('normalScreenButton', normalScreenButton);
  }

  loadFont(name, url) {
    let newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
  }

  /**
   * Creación de la escena. En este caso, solo cambiamos a la escena que representa el
   * nivel del juego
   */
  create() {
    this.scene.start('mainMenu');
  }
}