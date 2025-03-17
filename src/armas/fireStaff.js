import Phaser from "phaser";

import Fireball from "../projectiles/fireball";
import arma from "./arma";

const DAMAGE = 4;

export default class FireStaff extends arma {
 /**
     * Constructor del baston de fuego
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */


    constructor(scene, x, y) {
        super(scene, x, y, 'fireStaff')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.SFX = this.scene.sound.add('firestaffsfx')
        this.delay = 350;
        this.x = x;
        this.y = y;
       
        this.id = 'fireStaff';
        this.setActive(true);
        this.setVisible(true);

        this.damage = DAMAGE;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    attack(target) {
        if(this.x != 0 && this.y != 0){
            this.SFX.play()
            new Fireball(this.scene, this.x, this.y, target, true, this.damage);
        }
    }

    getText(){
        return "";
    }

    manaCost() {
        return 15;
    }
}