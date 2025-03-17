import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

export default class ChofSword extends meleeWeapon {

    constructor(scene, x, y) {
        super(scene, x, y, 'espadaNormalucha');
        this.scene.add.existing(this);
        this.SFX = this.scene.sound.add('swordsfx')
        this.scene.physics.add.existing(this);
        this.delay = 300;
        this.damage = 1;
        this.hitboxMultiplier = 3;

        this.id = 'espadaNormalucha';
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
        this.SFX.play()
        super.attack(target);
    }

    manaRegen() {
        return 50;
    }

    getText(){
        return "Carefull, it cuts butter"
    }

}