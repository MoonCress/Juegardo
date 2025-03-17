import Phaser from 'phaser';
import Reticle from './reticle.js';
import { eventManager as hudEvents } from './eventCenter.js';
import FireStaff from './armas/fireStaff.js';

/**
 * Clase que representa el jugador del juego. El jugador se mueve por el mundo usando los cursores.
 * También almacena la puntuación o número de estrellas que ha recogido hasta el momento.
 */
export default class Player extends Phaser.GameObjects.Sprite {

    /**
     * Constructor del jugador
     * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
     * @param {number} x Coordenada X
     * @param {number} y Coordenada Y
     */

    constructor(scene, x, y, life, maximumLife, mana, maximumMana, weaponMult, moveSpeed, lck, MeleeWeaponArray, RangedWeaponArray, ActMelIndex, ActRangIndex, lastWeaponUsed, keys, usedShield) {
        super(scene, x, y, 'player');

        if (lastWeaponUsed === null)//Primera vez
            lastWeaponUsed = MeleeWeaponArray[ActMelIndex];

        /**RELATIVO A LA ESCENA**/
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        /**RELATIVO A BODY**/
        if(this.scene.enviromental !== undefined)
        this.scene.enviromental.add(this)
        this.setScale(1);
        this.body.setSize(this.width * 0.4, this.height * 0.65, true);
        this.body.setOffset(this.width * 0.3, this.height * 0.35);
        this.setOrigin(0.25, 0.65);
        //Booleano para interactuar
        this.isFPressed = false

        //Cosas adicionales al propio cuerpo que van junto a el
        this.escudo = this.scene.add.sprite(this.x, this.y, 'escudo');
        this.scene.physics.add.existing(this.escudo);
        this.escudo.setDepth(8); //Por encima de player
        this.escudo.body.setSize(this.width * 0.4, this.height * 0.65, true);
        this.escudo.body.setOffset(this.width * 0.3, this.height * 0.35);
        this.escudo.setOrigin(0.25, 0.65);
        this.escudo.setVisible(false);

        this.sombrerinni = this.scene.add.sprite(this.x, this.y, 'sombreroPajero');
        this.scene.physics.add.existing(this.sombrerinni);
        this.sombrerinni.setDepth(8); //Por encima de player
        this.sombrerinni.body.setSize(this.width * 0.4, this.height * 0.65, true);
        this.sombrerinni.body.setOffset(this.width * 0.3, this.height * 0.35);
        this.sombrerinni.setOrigin(0.25, 0.65);
        this.sombrerinni.setVisible(false);


        /**ESTADISTICAS**/
        //CAPADO inferiormente a 1 y superiormente a 20
        //Vida inicial = 10
        this.lifeInferiorCap = 1;
        this.lifeSuperiorCap = 20;
        this.maxLife = (maximumLife === 0) ? 10 : maximumLife;
        this.actualLife = (life === 0) ? 10 : life;

        //CAPADO inferiormente a 10 y superiormente a 1000
        //Cuando no se tiene mana suficiente para hacer el ataque, se hace igual con una potencia proporcional al mana gastado de lo que cuesta el ataque
        //Mana inicial = 250
        this.manaInferiorCap = 10;
        this.manaSuperiorCap = 1000;
        this.maxMana = (maximumMana === 0) ? 250 : maximumMana;
        this.actualMana = (mana === 0) ? 250 : mana;

        //Modificador de daño de las armas
        this.weaponMultiplier = weaponMult;

        //CAPADO, inferiormente a 30 y superiormente a 200
        this.movSpeedInferiorCap = 30;
        this.movSpeedSuperiorCap = 200;
        this.movSpeed = (moveSpeed === 0) ? 100 : moveSpeed;

        this.luck = (lck === 0) ? 1 : lck;
        this.reticle = new Reticle(this.scene, x, y - 30);

        this.key = keys;

        //CINEMATICA
        this.cutscenePlaying = false;

        /**CONTROLES**/
        //Direcciones
        this.w = this.scene.input.keyboard.addKey('W');
        this.a = this.scene.input.keyboard.addKey('A');
        this.s = this.scene.input.keyboard.addKey('S');
        this.d = this.scene.input.keyboard.addKey('D');

        //Interacciones
        this.q = this.scene.input.keyboard.addKey('Q');
        this.e = this.scene.input.keyboard.addKey('E');
        this.f = this.scene.input.keyboard.addKey('F');
        this.shift = this.scene.input.keyboard.addKey('SHIFT');
        this.meleeMode = true;
        this.canAttack = true;
        this.canBeDamaged = true;
        this.iFrame = false;
        this.shieldCooldown = 0;
        this.shieldUptime = 0;
        this.usedShield = usedShield;

        //SONIDO
        this.initAudio()

        /**ANIMACIONES**/
        this.playerDead = false

        this.anims.create({
            key: 'idleDown',
            frames: this.anims.generateFrameNumbers('player_idle', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'idleUp',
            frames: this.anims.generateFrameNumbers('player_idle', { start: 2, end: 3 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'idleRight',
            frames: this.anims.generateFrameNumbers('player_idle', { start: 4, end: 5 }),
            frameRate: 3,
            repeat: -1
        });

        this.anims.create({
            key: 'walkDown',
            frames: this.anims.generateFrameNumbers('player_spritesheet', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walkUp',
            frames: this.anims.generateFrameNumbers('player_spritesheet', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'walkRight',
            frames: this.anims.generateFrameNumbers('player_spritesheet', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'dying',
            frames: this.anims.generateFrameNames('playerDying_spritesheet', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: 0
        });

        //Interaccion de la animacion de muerte
        this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
            if (this.anims.getName() === 'dying') {
                this.active = false;
                this.scene.scene.start('end',{jk:this.scene.jukebox});
            }
        });

        //Interacciones del teclado
        this.q.on('down', () => {
            if (this.meleeMode) {
                this.meleeIndex = this.meleeIndex - 1;
                if (this.meleeIndex < 0)
                    this.meleeIndex = this.meeleWeapons.length - 1;
                this.updatedWeapon(this.meleeIndex);
            }
            else {
                this.rangedIndex = this.rangedIndex - 1;
                if (this.rangedIndex < 0)
                    this.rangedIndex = this.rangedWeapons.length - 1;
                this.updatedWeapon(this.rangedIndex);
            }
        });

        this.e.on('down', () => {
            if (this.meleeMode) {
                this.meleeIndex = (this.meleeIndex + 1) % this.meeleWeapons.length;
                this.updatedWeapon(this.meleeIndex);
            }
            else {
                this.rangedIndex = (this.rangedIndex + 1) % this.rangedWeapons.length;
                this.updatedWeapon(this.rangedIndex);
            }
        });

        //Esucdo del jugador, falta añadir la animacion del escudo
        this.shift.on('down', () => {
            if (this.shieldCooldown === 0) {
                this.canBeDamaged = false;
                this.escudo.setVisible(true);
                let timer = this.scene.time.addEvent({
                    delay: 3000,
                    callback: this.scene.player.shieldOnCD,
                    callbackScope: this
                });
            }
        });

        this.f.on('down', () => {
            this.isFPressed = true;
        })

        this.f.on('up', () => {
            this.isFPressed = false;
        })

        //Cursor de ataque y eventos del cursor (faltan los hover para cambiar la textura del raton)
        this.lastClick = '';
        this.changedWeapon = true;
        this.scene.input.mouse.disableContextMenu();
        this.scene.input.on('pointerup', pointer => {
            if (pointer.rightButtonReleased()) {
                if (this.canAttack) {
                    this.meleeMode = false;
                    this.updatedWeapon(this.rangedIndex);
                    if (this.lastClick !== 'left') {
                        this.playerAttacks();
                    }
    
                    this.lastClick = 'right';
                }
            }
            else if (pointer.leftButtonReleased()) {
                if (this.canAttack) {
                    this.meleeMode = true;
                    this.updatedWeapon(this.meleeIndex);
                    if (this.lastClick !== 'right') {
                        this.playerAttacks();
                    }
    
                    this.lastClick = 'left';
                }
            }
        });

        this.scene.input.on('pointermove', () => {
            this.reticle.x = this.scene.input.activePointer.worldX;
            this.reticle.y = this.scene.input.activePointer.worldY;
        });

        /**ARRAYS DE OBJETOS Y ARMAS**/
        //Nota: ver como se pasa entre las escenas
        this.meeleWeapons = MeleeWeaponArray;
        this.rangedWeapons = RangedWeaponArray;
        this.meleeIndex = ActMelIndex;
        this.rangedIndex = ActRangIndex;
        this.weaponDelay = 0;

        this.equipedWeapon = lastWeaponUsed;

        if (this.meleeMode) {
            this.rangedWeapons[this.rangedIndex].setVisible(false)
        } else {
            this.meeleWeapons[this.meleeIndex].setVisible(false)
        }

        //SONIDO
        this.nomanaSfx = this.scene.sound.add('nomana')
    }

    /**
     * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
     * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
     * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
     * @override
     */
    preUpdate(t, dt) {
        //Si no está muerto
        super.preUpdate(t, dt);
        if (!this.playerDead && this.actualLife > 0) {
            if(!this.canAttack) {
                this.weaponDelay += dt;
                if (this.weaponDelay >= this.equipedWeapon.delay) {
                    this.weaponDelay = 0;
                    this.canAttack = true;
                }
            }

            //MOVIMIENTO DEL JUGADOR
            //Notas: imprimir la fuerza y que animacion se usa va por separado porque si no produce bugs
            let stopped = true;
            this.body.setVelocity(0);

            //Parte de imprimir la fuerza
            if (this.a.isDown) {
                this.direction = 'left';
                stopped = false;
                this.body.setVelocityX(-this.movSpeed);
            }
            else if (this.d.isDown) {
                this.direction = 'right';
                stopped = false;
                this.body.setVelocityX(this.movSpeed);
            }

            if (this.w.isDown) {
                this.direction = 'up';
                stopped = false;
                this.body.setVelocityY(-this.movSpeed);
            }
            else if (this.s.isDown) {
                this.direction = 'down';
                stopped = false;
                this.body.setVelocityY(this.movSpeed);
            }


            //Parte de la animacion
            if (this.a.isDown || (this.a.isDown && this.w.isDown) || (this.a.isDown && this.s.isDown)) {
                this.setFlipX(true);
                this.play('walkRight', true);
            }
            else if (this.d.isDown || (this.d.isDown && this.w.isDown) || (this.d.isDown && this.s.isDown)) {
                this.setFlipX(false);
                this.play('walkRight', true);
            }

            if (this.w.isDown && !(this.a.isDown || this.d.isDown)) {
                this.play('walkUp', true);
            }
            else if (this.s.isDown && !(this.a.isDown || this.d.isDown)) {
                this.play('walkDown', true);
            }

            if (stopped && this.actualLife > 0) {
                if (this.direction === 'up')
                    this.play('idleUp', true);
                else if (this.direction === 'down')
                    this.play('idleDown', true);
                else if (this.direction === 'right') {
                    this.setFlipX(false);
                    this.play('idleRight', true);
                }
                else {
                    this.setFlipX(true);
                    this.play('idleRight', true);
                }
                this.body.setVelocity(0);
            }

            let angleToReticle = Phaser.Math.Angle.Between(this.x, this.y, this.reticle.x, this.reticle.y);
            let maxRange = 20;
            let offsetX = Math.cos(angleToReticle) * maxRange;
            let offsetY = Math.sin(angleToReticle) * maxRange;
            let newWepX = this.x + offsetX;
            let newWepY = this.y + offsetY;

            this.equipedWeapon.updatePosition(newWepX, newWepY);
            this.equipedWeapon.updateAngle(Phaser.Math.RadToDeg(angleToReticle), angleToReticle);

            this.escudo.copyPosition(this);
            this.sombrerinni.copyPosition(this);
        } else
            this.body.setVelocity(0)
    }

    /**FUNCION PARA QUE EL JUGADOR ATAQUE */
    playerAttacks() {
        if (!this.active) { return; }
        if (this.canAttack) {
            if (!this.meleeMode) {
                if (this.actualMana - this.equipedWeapon.manaCost() >= 0) {
                    this.actualMana -= this.equipedWeapon.manaCost();
                } else {
                    this.nomanaSfx.play()
                    return;
                }

            }
            this.equipedWeapon.attack(this.reticle);
            hudEvents.emit('updateMana', [this.actualMana, this.maxMana]);
            this.canAttack = false;
        }
    }

    regenMana() {
        if (this.active === false) { return; }
        if (this.actualMana + this.equipedWeapon.manaRegen() >= this.maxMana)
            this.actualMana = this.maxMana;
        else
            this.actualMana += this.equipedWeapon.manaRegen();
        hudEvents.emit('updateMana', [this.actualMana, this.maxMana]);
    }



    /**Funcion que se llama cuando el jugador recibe daño */
    receiveDamage(damage) {
        if(this.playerDead === false) {
            if (this.actualLife > 0) {
                if (this.active === false) { return; }
                if (this.canBeDamaged && !this.iFrame) {
                    if (this.equipedWeapon.isLethalForYouCarefull())
                        this.actualLife = 0;
                    else
                        this.actualLife -= damage;
    
                    if (this.actualLife <= 0)
                        this.died();
    
                    hudEvents.emit('updateHealth', this.actualLife);
    
                    this.scene.tweens.add({
                        targets: this,
                        alpha: 0,
                        ease: Phaser.Math.Easing.Elastic.InOut,
                        duration: 40,
                        repeat: 1,
                        yoyo: true,
                        onStart: () => {
                            this.setTint(0xff0000);
                        },
                        onComplete: () => {
                            this.clearTint();
                            this.setAlpha(1);
                        }
                    });

                    this.startIFrame();
                    this.playerHitSfx.play();
                }
            }
            else if (this.actualLife <= 0)
                this.died();
        }
    }

    died() {
        this.scene.input.keyboard.removeKey(this.w, true);
        this.scene.input.keyboard.removeKey(this.a, true);
        this.scene.input.keyboard.removeKey(this.s, true);
        this.scene.input.keyboard.removeKey(this.d, true);
        this.playerDead = true;
        this.body.setVelocity(0);
        this.body.enable = false;
        this.stop();
        this.anims.remove('idleDown');
        this.anims.remove('idleRight');
        this.anims.remove('idleUp');
        this.anims.remove('walkDown');
        this.anims.remove('walkRight');
        this.anims.remove('walkUp');
        this.play('dying', true);
    }

    startIFrame() {
        this.iFrame = true;
        this.invFrames = this.scene.time.addEvent( {
            delay: 1000,
            callback: this.scene.player.iFrameEnded,
            callbackScope: this
        });
    }

    iFrameEnded() {
        this.iFrame = false;
        this.invFrames.remove(false);
    }

    //Relativo a las armas
    updatedWeapon(index) {
        if (this.active === false) { return; }
        this.equipedWeapon.setVisible(false);
        if (this.meleeMode) {
            this.equipedWeapon = this.meeleWeapons[index];
            this.equipedWeapon.setVisible(true);
            if (this.equipedWeapon.isUltimateWeapon())
                this.sombrerinni.setVisible(true);
            else
                this.sombrerinni.setVisible(false);
        }
        else {
            this.equipedWeapon = this.rangedWeapons[index];
            this.equipedWeapon.setVisible(true);
            this.sombrerinni.setVisible(false);
        }

        this.weaponDelay = 0;
        hudEvents.emit('updateDisplayedWeapon', this.equipedWeapon.wName);
    }

    takeMeleeWeapon(weapon) {
        if (this.active === false) { return; }
        this.meeleWeapons.push(weapon);
    }

    takeRangedWeapon(weapon) {
        if (this.active === false) { return; }
        this.rangedWeapons.push(weapon);
    }

    //Relativo al escudo
    shieldOnCD() {
        this.shieldCooldown = 1;
        this.canBeDamaged = true;
        this.escudo.setVisible(false);
        this.usedShield = true;
        hudEvents.emit('updateShield', false);

        let cdShield = this.scene.time.addEvent({
            delay: 10000,
            callback: this.scene.player.shieldOffCD,
            callbackScope: this
        });
    }

    shieldOffCD() {
        this.shieldCooldown = 0;
        this.usedShield = false;
        hudEvents.emit('updateShield', true);
    }

    //Relativo al cambio de estadisticas
    /*A la vida*/
    heal(healthPack) {
        if (this.active === false) { return; }
        if (this.actualLife + healthPack < this.maxLife)
            this.actualLife += healthPack;
        else
            this.actualLife = this.maxLife;
        hudEvents.emit('updateHealth', this.actualLife);
    }

    increaseHealth(lifePoints) {
        if (this.active === false) { return; }
        if (this.maxLife + lifePoints < this.lifeSuperiorCap) {
            this.maxLife += lifePoints;
        }
        else {
            this.maxLife = this.lifeSuperiorCap;
        }

        this.actualLife = this.maxLife;
        hudEvents.emit('updateHealth', this.actualLife);
    }

    addHealth(lifePoints) {
        this.actualLife += lifePoints
        if (this.actualLife > this.maxLife)
            this.actualLife = this.maxLife
        hudEvents.emit('updateHealth', this.actualLife);
    }

    decreaseHealth(lifePoints) {
        if (this.active === false) { return; }
        if (this.maxLife - lifePoints > this.lifeInferiorCap) {
            this.maxLife -= lifePoints;
        }
        else {
            this.maxLife = this.lifeInferiorCap;
        }

        if (this.actualLife > this.maxLife)
            this.actualLife = this.maxLife;
        hudEvents.emit('updateHealth', this.actualLife);
    }

    //Llaves
    addKey() {
        this.key++;

        hudEvents.emit('updateKeys', this.key)
    }

    decreaseKey() {
        this.key--;

        hudEvents.emit('updateKeys', this.key)
    }

    getNumberOfKeys() {
        return this.key;
    }

    /*Al mana*/
    recoverMana(manaPoints) {
        if (this.active === false) { return; }
        if (this.actualMana + manaPoints >= this.maxMana)
            this.actualMana = this.maxMana;
        else
            this.actualMana += manaPoints;
        hudEvents.emit('updateMana', [this.actualMana, this.maxMana]);
    }

    increaseMana(manaPoints) {
        if (this.active === false) { return; }
        if (this.maxMana + manaPoints < this.manaSuperiorCap) {
            this.maxMana += manaPoints;
        }
        else {
            this.maxMana = this.manaSuperiorCap;
        }
        hudEvents.emit('updateMana', [this.actualMana, this.maxMana]);
    }

    decreaseMana(manaPoints) {
        if (this.active === false) { return; }
        if (this.maxMana - manaPoints > this.manaInferiorCap) {
            this.maxMana -= manaPoints;
        }
        else {
            this.maxMana = this.manaInferiorCap;
        }

        if (this.actualMana > this.maxMana)
            this.actualMana = this.maxMana;
        hudEvents.emit('updateMana', [this.actualMana, this.maxMana]);
    }

    /*A la velocidad de movimiento*/
    //Falta que te puedan ralentizar, con un tween deberia bastar
    increaseMovSpeed(moveModifier) {
        if (this.active === false) { return; }
        if (this.movSpeed + moveModifier < this.movSpeedSuperiorCap)
            this.movSpeed += moveModifier;
        else
            this.movSpeed = this.movSpeedSuperiorCap;
    }

    decreaseMovSpeed(moveModifier) {
        if (this.active === false) { return; }
        if (this.movSpeed - moveModifier > this.movSpeedInferiorCap)
            this.movSpeed -= moveModifier;
        else
            this.movSpeed = this.movSpeedInferiorCap;
    }

    slowed(slowing, totalTime) {
        if (this.active === false) { return; }
        let initialMovSpeed = this.movSpeed;
        this.scene.tweens.add({
            targets: this,
            duration: totalTime,
            onStart: () => {
                this.decreaseMovSpeed(slowing);
            },
            onComplete: () => {
                this.movSpeed = initialMovSpeed;
            }
        });
    }

    fastened(speed, totalTime) {
        if (this.active === false) { return; }
        let initialMovSpeed = this.movSpeed;
        this.scene.tweens.add({
            targets: this,
            duration: totalTime,
            onStart: () => {
                this.increaseMovSpeed(speed);
            },
            onComplete: () => {
                this.movSpeed = initialMovSpeed;
            }
        });
    }

    changeMoveSpeed(moveMultiplier) {
        if (this.active === false) { return; }
        if (this.movSpeed * moveMultiplier < this.movSpeedSuperiorCap)
            this.movSpeed *= moveMultiplier;
        else
            this.movSpeed = this.movSpeedSuperiorCap;
    }

    initAudio() {
        this.playerHitSfx = this.scene.sound.add('playerhit')
    }

    /*A la suerte*/
    increaseLuck(hiddenLuckModifier) {
        if (this.active === false) { return; }
        this.luck += hiddenLuckModifier;
    }

    //Otras cosas
    getIsFPressed() {
        return this.isFPressed;
    }

    isProjectile() {
        return false;
    }


}
