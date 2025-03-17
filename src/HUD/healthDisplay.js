import Phaser from 'phaser';

export default class HealthDisplay extends Phaser.GameObjects.Group { 
    /**
        * Constructor del jugador
        * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
        * @param {number} x Coordenada X
        * @param {number} y Coordenada Y
        */
    constructor(scene, x, y, initialHealth,maxHealth) {
        super(scene);

        this.maxHealth = 20; // 20 de vida como maximo
        this.currentHealth = initialHealth;
        this.currentMaxHealth = maxHealth
        this.x = x;
        this.y = y;
        //Crea todo los corazones y los pone inactivos y no visibles
        this.hearts = this.createMultiple ({
            key: 'ui-heart-full',
            setXY: {
                x: this.x,
                y: this.y,
                stepX: 40
            },
            frameQuantity: this.maxHealth / 2, // Cantidad de corazones
            active: false,
            visible: false,
        });

        //la cantidad de corazones iniciales, se ponen activos y visibles
        for(let i = 0; i < this.currentMaxHealth / 2; i ++) {
            this.hearts[i].setScale(2);
            this.hearts[i].setActive(true).setVisible(true);
        }

        this.updateHearts();
    }

    updateHealth(newPlayerHealth) {
        this.currentHealth = newPlayerHealth;

        this.updateHearts();
    }

    updateHearts() {
        for(let i = 0; i < this.getLength(); i++) {
            let heart = this.hearts[i];
            if(i < this.countActive(true)) { //los que estan activos
                if(this.currentHealth >= (i + 1) * 2)
                    heart.setTexture('ui-heart-full');
                else if(this.currentHealth % 2 === 1 && Math.floor(this.currentHealth / 2) === i)
                    heart.setTexture('half-ui-heart');
                else
                    heart.setTexture('ui-heart-empty');
                heart.setScale(2);
            }
            else { //No estan activos
                if(this.currentHealth >= (i + 1) * 2) {
                    heart.setActive(true).setVisible(true);
                    heart.setScale(2);
                }
                else if(this.currentHealth === ((i + 1) * 2) - 1) {
                    heart.setActive(true).setVisible(true);
                    heart.setTexture('half-ui-heart');
                    heart.setScale(2);
                }
                else {
                    heart.setActive(false).setVisible(false);
                }
            }
        }
    }
}