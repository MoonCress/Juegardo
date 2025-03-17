import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

const INIFINITY =  Number.MAX_SAFE_INTEGER;

export default class hoe extends meleeWeapon {
    constructor(scene, x, y) {
        super(scene, x, y, 'hoe');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.SFX = this.scene.sound.add('hoesfx')
        this.setOrigin(0,1);
        this.setDepth(8)
        this.delay = 100;
        this.damage = INIFINITY;
        this.hitboxMultiplier = 0.75;

        this.id = 'hoe';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
    }

    haveSlash() {
        return true;
    }

    isUltimateWeapon() {
        return true;
    }

    forwardSlash() {
        return false;
    }

    attack(target) {
        this.SFX.play()
        super.attack(target);
    }

    getText(){
        return "Cosecha propia";
    }

    manaRegen() {
        return this.scene.player.maxMana;
    }
}