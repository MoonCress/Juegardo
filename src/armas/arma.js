import Phaser from "phaser";
import { eventManager as hudEvents } from "../eventCenter";
export default class arma extends Phaser.GameObjects.Sprite {
    /**
        * Constructor del jugador
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y, WeaponName) {
        super(scene, x, y, WeaponName)
        this.wName = WeaponName;
        this.setDepth(8);
        this.delayAttackAction = 150;
        this.setOrigin(0, 0.5);
        

        let overlapCollider = this.scene.physics.add.overlap(this, this.scene.player, (weapon) => {
                if (weapon.isMelee()) {
                    this.scene.player.takeMeleeWeapon(weapon);
                }
                else {
                    this.scene.player.takeRangedWeapon(weapon);
                }
                hudEvents.emit('newweapon',weapon.getText())
                weapon.setActive(false);
                weapon.setVisible(false);
                this.scene.physics.world.removeCollider(overlapCollider);
        });


        this.setActive(false);
        this.setVisible(false);
    }

    updatePosition(x,y) {
        this.x = x
        this.y = y
    }

    updateAngle(degrees, radians) {
        this.angle = degrees;
        //this.body.rotation = radians;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    modifiedDmg(weaponMultiplier) {
        this.wDmg = this.wDmg * weaponMultiplier;
    }

    //Propiedades de las armas
    isMelee() { 
        return false;
    }
    haveSlash() {
        return false;
     }
    havePuncture() { 
        return false;
    }
    isUltimateWeapon() {
        return false;
    }
    isLethalForYouCarefull() {
        return false;
    }
}