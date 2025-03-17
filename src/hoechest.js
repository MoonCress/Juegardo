import Phaser from 'phaser';
import CollisionHitbox from './collisionHitbox';
import lootGenerator from './lootGenerator';
import hoe from './armas/HOE';


/**
 * Clase que representa un cofre en el juego.
 */
export default class HoeChest extends Phaser.GameObjects.Sprite {
    /**
     * Constructor del cofre.
     * @param {Phaser.Scene} scene La escena a la que pertenece el cofre.
     * @param {number} x Coordenada X del cofre.
     * @param {number} y Coordenada Y del cofre.
     * @param {number} width Ancho del cofre.
     * @param {number} height Altura del cofre.
     * @param {Phaser.GameObjects.Sprite} player El jugador del juego.
     * @param {function} overlapCallback La función de devolución de llamada para manejar la superposición con el jugador.
     * @param {function} exitCallback La función de devolución de llamada para manejar cuando se detiene la superposición.
     */
    constructor(scene, x, y, width, height, player, opened) {
        super(scene, x, y, 'hoechest');

        this.SFX = this.scene.sound.add('chestsfx')

        // Añadir el cofre a la escena y habilitar la física
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setImmovable(true)
        this.body.setSize(this.width * 2, this.height * 2, true);

        this.jug = player

        this.hb = new CollisionHitbox(scene, x, y, width, height)
        // Variable para rastrear la superposición
        this.isOverlapping = false;

        this.open = opened;

        this.setDepth(7);
        this.scene = scene;

        this.anims.create({
            key: 'idle_chest',
            frames: scene.anims.generateFrameNumbers('hoechest', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: 0 // Play the animation only once
        });

        this.anims.create({
            key: 'open_chest',
            frames: scene.anims.generateFrameNumbers('hoechest', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: 0 // Play the animation only once
        });

        this.anims.create({
            key: 'selected_chest',
            frames: scene.anims.generateFrameNumbers('hoechest', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1 // Play the animation only once
        });

        if (!this.open)
            this.anims.play('idle_chest');
        else
            this.anims.play('open_chest');
        // Detectar superposición con el jugador y llamar a la función de devolución de llamada
        scene.physics.add.overlap(this, player, () => {
            this.isOverlapping = true; // Establecer como verdadero cuando hay superposición
            // console.log("Entro")
            if (!this.open)
                this.anims.play('selected_chest');
        });



    }

    preUpdate(t,dt){
        super.preUpdate(t,dt)

        if (!this.checkOverlap(this.getBounds(), this.jug.getBounds())) {
            // exitCallback();
            // console.log("Salgo")
            this.isOverlapping = false; // Establecer como falso cuando no hay superposición
            if (!this.open)
                this.anims.play('idle_chest');

        }

        if (this.isOverlapping && !this.open) {
            if (this.jug.getIsFPressed()) {
                this.open = true;
                this.scene.chestWasOpened();
                this.SFX.play()
                this.anims.play('open_chest');
                this.generateLoot()
            }
        }
    }

    generateLoot() {
       new hoe(this.scene,this.x,this.y+50)
    }


    checkOverlap(rectA, rectB) {
        return Phaser.Geom.Intersects.RectangleToRectangle(rectA, rectB);
    }
}
