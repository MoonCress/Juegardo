import Phaser from "phaser";

import arma from "./arma";
import IceBall from "../projectiles/iceball";

const DAMAGE = 10;

export default class IceStaff extends arma {
 /**
     * Constructor del baston de fuego
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'iceStaff')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.SFX = this.scene.sound.add('icestaffsfx')
        this.delay = 250;
        this.x = x;
        this.y = y;

        this.id = 'iceStaff';
        this.setActive(true);
        this.setVisible(true);

        this.damage = DAMAGE;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
    getText(){
        return "WARNING, it burns";
    }


    attack(target) {
        //super.attackAction();
        if(this.x != 0 && this.y != 0){
            this.SFX.play()
            new IceBall(this.scene, this.x, this.y, target, true, this.damage);
        }
    }

    manaCost() {
        return 75;
    }
}