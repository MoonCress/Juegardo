//arma con mucho daño pero que si te pegan, mueres
import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

export default class lethalSword extends meleeWeapon {
    constructor(scene, x, y) {
        super(scene, x, y, 'lethalSword');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 200;
        this.damage = 45;
        this.hitboxMultiplier = 3;

        this.id = 'lethalSword';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    haveSlash() {
        return true;
    }

    isLethalForYouCarefull() {
        return true;
    }

    attack(target) {
        super.attack(target);
    }
    getText(){
        return "Watch your back";
    }

    manaRegen() {
        return 10;
    }
}