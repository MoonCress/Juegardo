import Phaser from "phaser";

import arma from "./arma";
import PlayerHitBox from "../playerHitbox";
import meleeWeapon from "./meleeWeapon";

const DAMAGE = 5;
export default class Spear extends meleeWeapon {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'spear');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 250;
        this.damage = DAMAGE;
        this.hitboxMultiplier = 2;
        this.attackSfx = this.scene.sound.add('daggersfx')
        this.id = 'spear';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    havePuncture() {
        return true;
    }

    attack(target) {
        this.attackSfx.play()
       super.attack(target);
    }

    getText(){
        return "It stings";
    }


    manaRegen() {
        return 15;
    }
}