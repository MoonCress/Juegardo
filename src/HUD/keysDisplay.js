import Phaser from 'phaser';

export default class KeyDisplay extends Phaser.GameObjects.Group { 
    constructor(scene, x, y, spriteKey, initialKeys) {
        super(scene);

        // Crear el sprite de la llave
        this.keySprite = this.create(x, y - 20, spriteKey);
        this.keySprite.anims.create({
            key:'idle',
            frames: this.keySprite.anims.generateFrameNumbers('key', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.keySprite.anims.create({
            key:'obtainedKey',
            frames: this.keySprite.anims.generateFrameNumbers('key', { start: 0, end: 23 }),
            frameRate: 10
        });

        // Crear el texto de la cantidad de llaves
        this.keyText = this.scene.add.text(x + 20, y - 30, initialKeys.toString(), { fontFamily: 'pixelFont', fontSize: 30, color: '#ffffffff' });
        this.add(this.keyText);

        // Agregar el grupo a la escena
        this.scene.add.existing(this);

        this.keySprite.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if(this.keySprite.anims.getName() === 'obtainedKey')
                this.keySprite.play('idle');
        });
    }

    // Método para actualizar la cantidad de llaves mostrada en el texto
    updateKeys(keys) {
        this.keyText.setText(keys.toString());
        this.keySprite.play('obtainedKey');
    }
}