import ArmeriaPrueba from './scenes/armeriaPrueba.js';
import Boot from './scenes/boot.js';
import Phaser from 'phaser'
import MainMenu  from './scenes/mainMenu.js';
import GUI from './scenes/GUI.js';
import LBE1 from './scenes/library/lbE1.js';
import ARR1 from './scenes/armory/arR1.js'
import ARR2 from './scenes/armory/arR2.js'
import ARR3 from './scenes/armory/arR3.js'
import ARX1 from './scenes/armory/arX1.js'
import LBR1 from './scenes/library/lbR1.js';
import LBR2 from './scenes/library/lbR2.js';
import LBR3 from './scenes/library/lbR3.js'
import LBR4 from './scenes/library/lbR4.js';
import LBR5 from './scenes/library/lbR5.js';
import LBR6 from './scenes/library/lbR6.js';
import LBR7 from './scenes/library/lbR7.js';
import LBR8 from './scenes/library/lbR8.js';
import LBR9 from './scenes/library/lbR9.js';
import LBR10 from './scenes/library/lbR10.js';
import LBR11 from './scenes/library/lbR11.js';
import LBR12 from './scenes/library/lbR12.js';
import LBR13 from './scenes/library/lbR13.js';
import LBR14 from './scenes/library/lbR14.js';
import LBR15 from './scenes/library/lbR15.js';
import LBX1 from './scenes/library/lbX1.js';
import LBX2 from './scenes/library/lbX2.js';
import LBX3 from './scenes/library/lbX3.js';
import LBX4 from './scenes/library/lbX4.js';
import GRE1 from './scenes/garden/grE1.js';
import GRR1 from './scenes/garden/grR1.js';
import GRR2 from './scenes/garden/grR2.js';
import GRR3 from './scenes/garden/grR3.js'
import GRR4 from './scenes/garden/grR4.js';
import GRR5 from './scenes/garden/grR5.js';
import GRR6 from './scenes/garden/grR6.js';
import GRR7 from './scenes/garden/grR7.js';
import GRR8 from './scenes/garden/grR8.js';
import GRR9 from './scenes/garden/grR9.js';
import GRR10 from './scenes/garden/grR10.js';
import GRR11 from './scenes/garden/grR11.js';
import GRR12 from './scenes/garden/grR12.js';
import GRR13 from './scenes/garden/grR13.js';
import GRR14 from './scenes/garden/grR14.js';
import GRR15 from './scenes/garden/grR15.js';
import GRR16 from './scenes/garden/grR16.js';
import GRX1 from './scenes/garden/grX1.js';
import GRX2 from './scenes/garden/grX2.js';
import GRX3 from './scenes/garden/grX3.js';
import GRX4 from './scenes/garden/grX4.js';
import Controls00 from './scenes/00controlsMenu.js';
import Controls01 from './scenes/01controlsMenu.js';
import End from './scenes/end.js'
import Credits from './scenes/credits.js';

import { PhaserNavMeshPlugin } from "phaser-navmesh";


/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
let config = {
    type: Phaser.AUTO,
    parent: 'juego',
    width: 1024,
    height: 512,


    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    pixelArt: true,
    plugins: {
        scene: [
          {
            key: "PhaserNavMeshPlugin", // Key to store the plugin class under in cache
            plugin: PhaserNavMeshPlugin, // Class that constructs plugins
            mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
            start: true
          }
        ]
    },
    scene: [Boot, MainMenu, Controls00, Controls01, ArmeriaPrueba,ARR1,ARR2,ARR3,ARX1,LBE1,LBR1,LBR2,LBR3,LBR4,LBR5,LBR6,LBR7,LBR8,LBR9,LBR10,LBR11,LBR12,LBR13,LBR14,LBR15,LBX1,LBX2,LBX3,LBX4,GRE1,GRR1,GRR2,GRR3,GRR4,GRR5,GRR6,GRR7,GRR8,GRR9,GRR10,GRR11,GRR12,GRR13,GRR14,GRR15,GRR16,GRX1,GRX2,GRX3,GRX4, GUI, End,Credits],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    audio: {
        disableWebAudio: false, // Enable this if you want to use HTML5 Audio instead of Web Audio
        noAudio: false // Set to true if you want to disable audio entirely
    }
};

new Phaser.Game(config);
