import Phaser from "phaser";

import poisonStaff from './armas/poisonStaff'
import iceStaff from './armas/iceStaff'
import megaEspadaMortal from "./armas/megaEspadaMortal";
import hoe from "./armas/HOE";
import Shotgun from "./armas/shotgun";
import Thompson from "./armas/thompson";
import DrainSword from "./armas/drainSword";
import ChargeSword from "./armas/chargeSword";
import ChofSword from "./armas/ChofSword";
import PoisonDagger from "./armas/poisonDagger";
import Spear from "./armas/spear";
import magicSword from "./armas/magicSword";
import lethalSword from "./armas/lethalSword";
import MagicKnife from "./armas/magicKnife";


import halfHeart from './objetos/halfHeart';
import heart from './objetos/heart';
import manaPotion from './objetos/manaPotion';
import key from "./objetos/key";
import FourLeafsClub from "./objetos/4-leafsClub";
import heartAmulet from "./objetos/heartAmulet";
import nowYouAreFat from "./objetos/nowYouAreFat";
import shadowCloak from "./objetos/shadowCloak";
import broom from "./objetos/broom";

let weaponsPool = [[poisonStaff, ChofSword, Spear], [FourLeafsClub, heartAmulet, nowYouAreFat, shadowCloak, broom], [iceStaff, Thompson, ChargeSword, PoisonDagger, magicSword, MagicKnife], [megaEspadaMortal, DrainSword, lethalSword, Shotgun]];


export default class lootGenerator {
    constructor(scene, x, y, luck) {

        this.itemsPool = [halfHeart, heart, manaPotion];

        this.scene = scene;
        this.x = x;
        this.y = y;
        this.playerLuck = luck;
    }

    generateWeapon() {
        let dataGenerator = new Phaser.Math.RandomDataGenerator();
        let tier = Math.random();
        let index = -1;
        if (weaponsPool.length > 0 && weaponsPool !== undefined)
            do {
                tier += this.playerLuck/10
                if (tier >= 0 && tier <= 0.4) {//Tier C
                    index = 0;
                } else if (tier > 0.4 && tier <= 0.65) {//Tier B
                    index = 1;
                } else if (tier > 0.65 && tier <= 0.9) { //Tier A
                    index = 2
                } else { //Tier S
                    index = 3;
                }
                tier = Math.random();
            } while (weaponsPool[index].length <= 0)

        let newWeapon;
        if (index !== -1)
            newWeapon = Phaser.Math.RND.pick(weaponsPool[index])
        else
            return;
        // Remove the selected weapon class from the tier array
        weaponsPool[index].splice(weaponsPool[index].indexOf(newWeapon), 1);

        // If the tier array becomes empty, remove the entire tier from the weapons pool
        if (weaponsPool[index].length === 0) {
            weaponsPool.splice(weaponsPool.indexOf(tier), 1);
        }

        return new newWeapon(this.scene, this.x, this.y);
    }

    generateLoot() {
        let randomIndex = Math.floor(Math.random() * this.itemsPool.length);
        let loot = this.itemsPool[randomIndex];
        return new loot(this.scene, this.x, this.y);
    }

    generateKey(){
        return new key(this.scene,this.x,this.y)
    }
}