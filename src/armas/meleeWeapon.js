import Phaser from "phaser";
import arma from "./arma";

import PlayerHitBox from "../playerHitbox";

export default class meleeWeapon extends arma {
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this.wName = name;
        this.hasAttacked = false;
        this.timeOnField = 0;
        this.angleOfRotation = 60;
        this.hitboxMultiplier = 4;
        this.x = x;
        this.y = y;
    }

    preUpdate(t, dt) {
        super.preUpdate(t, dt)
        if(this.hasAttacked) {
            this.timeOnField += dt;
            if(this.timeOnField >= this.delayAttackAction) {
                this.hasAttacked = false;
                this.timeOnField = 0;
                this.attackFinished();
            }
        }
    }

    isMelee() {
        return true;
    }
    forwardSlash() {
        return true;
    }

    attackAction() {
        if (this.haveSlash()) {
            let initialRotation = this.angle;
            if(this.forwardSlash()) {
                this.scene.tweens.add({
                    targets: this,
                    angle:  initialRotation + this.angleOfRotation,
                    duration: 250,
                    onComplete: () => {
                        this.angle = initialRotation;
                    }
                });
            }
            else {
                this.scene.tweens.add({
                    targets: this,
                    angle:  initialRotation - this.angleOfRotation,
                    duration: 250,
                    onComplete: () => {
                        this.angle = initialRotation;
                    }
                });                   
            }
        }

        if (this.havePuncture()) {
            let initialX = this.x;
            let initialY = this.y;
            let forwardDistance = 25;
            let finalX = this.x + Math.cos(this.rotation) * forwardDistance;
            let finalY = this.y + Math.sin(this.rotation) * forwardDistance;
            this.scene.tweens.add({
                targets: this,
                x: finalX,
                y: finalY,
                duration: 100,
                onComplete: () => {
                    this.completePuncture(initialX, initialY);
                }
            });
        }

 }

    completePuncture(goToX, goToY) {
        this.scene.tweens.add({
            targets: this,
            x: goToX,
            y: goToY,
            duration: 100
        });
    }

    attack(target) {
        this.attackAction();
        this.hasAttacked = true;

        // Obtener la rotación actual del arma
        let angle = Phaser.Math.DegToRad(this.angle);

        // Calcular las dimensiones de la hitbox en función del tamaño del arma
        let hitboxWidth
        let hitboxHeight
        if (Math.abs(Math.cos(angle)) > 0.6) {
            // El arma mira hacia la derecha o hacia la izquierda
            hitboxWidth = this.width * this.hitboxMultiplier;
            hitboxHeight = this.height * this.hitboxMultiplier;
        } else {
            // El arma mira hacia arriba o hacia abajo
            hitboxWidth = this.height * this.hitboxMultiplier;
            hitboxHeight = this.width * this.hitboxMultiplier;
        }


        // Calcular las coordenadas de la hitbox relativas al arma
        let hitboxOffsetX = this.width * 0.4 * Math.cos(angle); // Ajusta el factor según lo deseado
        let hitboxOffsetY = this.height * 0.4 * Math.sin(angle); // Ajusta el factor según lo deseado

        // Calcular las coordenadas absolutas de la hitbox en el mundo
        let hitboxX = this.x + hitboxOffsetX;
        let hitboxY = this.y + hitboxOffsetY;

        this.attackHitbox = new PlayerHitBox(this.scene, hitboxX, hitboxY, hitboxWidth, hitboxHeight, this.damage, this.angle,this.id);
    }

    getText(){
        return "PRUEBA";
    }


    attackFinished() {
        if(this.attackHitbox)
            this.attackHitbox.destroy();
    }
}