import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

const DAMAGE = 4;
export default class PoisonDagger extends meleeWeapon {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'poisondagger');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 250;
        this.damage = DAMAGE;
        this.hitboxMultiplier = 2;

        this.id = 'poisondagger';
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
        super.attack(target);
    }

    getText(){
        return "It was very hard to do the poison";
    }


    manaRegen() {
        return 20;
    }
}