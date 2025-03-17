import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

export default class DrainSword extends meleeWeapon {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'drainsword');
        this.scene.add.existing(this);
        this.SFX = this.scene.sound.add('drainswordsfx')
        this.scene.physics.add.existing(this);
        this.delay = 500;
        this.damage = 4;

        this.id = 'drainsword';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    haveSlash() {
        return true;
    }

    attack(target) {
        super.attack(target);
        this.SFX.play()
    }

    getText(){
        return "I will consume thy enemies";
    }


    manaRegen() {
        return 0;
    }
}