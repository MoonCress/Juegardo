import Phaser from "phaser";

//import arma from "./arma";
//import PlayerHitBox from "../playerHitbox";
import meleeWeapon from "./meleeWeapon";


export default class dagger extends meleeWeapon {
 /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */
    constructor(scene, x, y) {
        super(scene, x, y, 'dagger');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 250;
        this.damage = 2;
        this.attackSfx = this.scene.sound.add('daggersfx')
        this.id = 'dagger';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
    }

    havePuncture() {
        return true;
    }

    attack(target) {
        this.playAttackSfx()
        super.attack(target);
    }

    playAttackSfx(){
        this.attackSfx.play()
    }

    getText(){
        return "";
    }


    manaRegen() {
        return 15;
    }
}