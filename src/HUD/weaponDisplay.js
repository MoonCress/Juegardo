import Phaser from "phaser";

export default class weaponDisplay extends Phaser.GameObjects.Group {
    /**
        * Constructor
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y, width, height, initialWeaponName) {
        super(scene);
        this.x = x;
        this.y = y;

        //NO FUNCIONA
        this.frame = new Phaser.GameObjects.Graphics(scene);
        this.frame.lineStyle(2, 0xffffff);
        this.frame.strokeRect(x, y, width, height);

        this.showedWeapon = this.create(x, y, initialWeaponName);
        this.showedWeapon.setScale(3);

        //NO FUNCIONA
        this.weaponText = this.scene.add.text(
            scene,
            this.x,
            this.y + 60,
            initialWeaponName,
            {
                fontSize: "16px",
                color: "#ffffff",
                align: "center",
            }
        )
        this.weaponText.setOrigin(0.5, 0.5);

        this.add(this.frame);
        this.add(this.showedWeapon);
        this.add(this.weaponText);

        this.setDepth(8);
        this.scene.add.existing(this);
    }

    updateDisplay(newWeaponName) {
        this.showedWeapon.setTexture(newWeaponName);
        this.weaponText.setText(newWeaponName);
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt);
    }
}