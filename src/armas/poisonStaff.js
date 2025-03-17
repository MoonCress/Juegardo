import Phaser from "phaser";

import Bullet from "../projectiles/bullet";
import arma from "./arma";
    
const DAMAGE = 6;

export default class PoisonStaff extends arma {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'poisonStaff')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 300;
        this.x = x;
        this.y = y;

        this.id = 'poisonStaff';
        this.setActive(true);
        this.setVisible(true);

        this.damage =  DAMAGE;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
    }

    getText(){
        return "It was very hard to do the poison x2";
    }


    attack(target) {
        if(this.x != 0 && this.y != 0)
            new Bullet(this.scene, this.x, this.y, target, true, this.damage);
    }

    manaCost() {
        return 20;
    }
}