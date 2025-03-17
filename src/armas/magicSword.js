//arma que cuando tienes toda la vida aparte de atacar hace un disparo hacia delante
import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";
import MagicBullet from "../projectiles/magicBullet";

export default class magicSword extends meleeWeapon {
    constructor(scene, x, y) {
        super(scene, x, y, 'magicSword');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 300;
        this.damage = 6;
        this.hitboxMultiplier = 3;

        this.id = 'magicSword';
        this.setActive(true);
        this.setVisible(true);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    haveSlash() {
        return true;
    }
    getText(){
        return "Is dangerous to go alone";
    }

    attack(target) {
        super.attack(target);
        if(this.scene.player.actualLife === this.scene.player.maxLife) {
            if(this.x != 0 && this.y != 0)
                new MagicBullet(this.scene, this.x, this.y, target, true, this.damage/3);
        }
    }

    manaRegen() {
        return 12;
    }
}