import Phaser from 'phaser'

/**
 * Escena de fin de juego. Cuando se han recogido todas las estrellas, se presenta un
 * texto que indica que el juego se ha acabado.
 * Si se pulsa cualquier tecla, se vuelve a iniciar el juego.
 */
export default class End extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'end' });
  }

  init(obj){
    obj.jk.stopAllMusic()
  }

  /**
   * Creación de la escena. Tan solo contiene el texto que indica que el juego se ha acabado
   */
  create() {
    this.scene.stop('gui');
    this.add.text(503, 200,"GAME OVER" , { fontFamily: 'pixelFont', fontSize: 150, color: '#808080' }).setOrigin(0.5, 0.5);
    this.add.text(500, 190,"GAME OVER" , { fontFamily: 'pixelFont', fontSize: 150, color: '#ffffffff' }).setOrigin(0.5, 0.5);
    this.add.text(500, 300,"Press any key to restart" , { fontFamily: 'pixelFont', fontSize: 25, color: '#ffffffff' }).setOrigin(0.5, 0.5);

    // Añadimos el listener para cuando se haya pulsado una tecla. Es probable que no
    // lleguemos a ver el mensaje porque veníamos con una tecla pulsada del juego (al 
    // ir moviendo al jugador). Se puede mejorar añadiendo un temporizador que 
    // añada este listener pasado un segundo
    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('mainMenu',{started: true});
    }, this);
  }

}