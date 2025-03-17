import Phaser from "phaser";

import meleeWeapon from "./meleeWeapon";

export default class ChargeSword extends meleeWeapon {
    /**
        * Constructor del jugador
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y) {
        super(scene, x, y, 'chargesword');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.delay = 800;
        this.damage = 6;
        this.level = 0;
        this.hitboxMultiplier = 2.5;

        this.id = 'chargesword';
        this.setActive(true);
        this.setVisible(true);

        this.chargedSFX = this.scene.sound.add('chargedsword')
        this.chargingSFX = this.scene.sound.add('chargingsword')

        this.anims.create({
            key: 'level0',
            frames: this.anims.generateFrameNumbers('chargesword', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'level1',
            frames: this.anims.generateFrameNumbers('chargesword', { start: 1, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'level2',
            frames: this.anims.generateFrameNumbers('chargesword', { start: 2, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'level3',
            frames: this.anims.generateFrameNumbers('chargesword', { start: 3, end: 4 }),
            frameRate: 7,
            repeat: -1
        });
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }

    haveSlash() {
        return true;
    }

    getText(){
        return "Charging...";
    }


    attack(target) {
        this.level++;
        switch (this.level) {
            case 0:
                this.chargingSFX.play()
                this.anims.play('level0')
                break;
            case 1:
                this.chargingSFX.play()
                this.anims.play('level1')
                break;
            case 2:
                this.chargingSFX.play()
                this.anims.play('level2')
                break;
            case 3:
                this.chargedSFX.play()
                this.anims.play('level3')
                break;
            default:
                this.chargingSFX.play()
                this.anims.play('level0')
                break;
        }
        if (this.level === 4)
            this.damage = this.damage * 4
        if (this.level > 4) {
            this.level = 0
            this.damage = this.damage / 4
        }
        this.attack2(target)
    }

    attack2(target) {
        super.attack(target);
    }

    manaRegen() {
        return 10;
    }
}