import Phaser from "phaser";

import arma from "./arma";
import Knife from "../projectiles/knife";

const DAMAGE = 3;

export default class MagicKnife extends arma {
    /**
        * Constructor del baston de fuego
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */


    constructor(scene, x, y) {
        super(scene, x, y, 'magicknife')
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 250;
        this.x = x;
        this.y = y;

        this.id = 'magicknife';
        this.setActive(true);
        this.setVisible(true);

        this.damage = DAMAGE;
    }
    getText(){
        return "It is not a table";
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    attack(target) {
        if (this.x != 0 && this.y != 0)
            for (let i = 0; i < 10; i++) {
                new Knife(this.scene, this.x + (-5 + i * 2), this.y + (-5 + i * 2), target, true, this.damage);
            }
    }

    manaCost() {
        return 50;
    }
}