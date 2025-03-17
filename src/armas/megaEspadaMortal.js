import Phaser from "phaser";

import arma from "./arma";
import PlayerHitBox from "../playerHitbox";
import meleeWeapon from "./meleeWeapon";

const DAMAGE = 30;
export default class BigSword extends meleeWeapon {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'espadaCheta');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.angleOfRotation = 120;
        this.delay = 1000;
        this.damage = DAMAGE;
        this.hitboxMultiplier = 4.5;

        this.id = 'espadaCheta';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
    }
    getText(){
        return "Its SOOOO big";
    }

    haveSlash() {
        return true;
    }

    attack(target) {
        super.attack(target);
    }

    manaRegen() {
        return 170;
    }
}