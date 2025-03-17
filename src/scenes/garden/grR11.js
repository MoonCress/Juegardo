import gr_r11 from '../../../assets/gardens/tiles/gr_r11.json'
import Room from '../room.js';


export default class GRR11 extends Room {

    constructor() {
        super({ key: 'grR11', level:'gr' });
        this.key = 'grR11'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r11)
        super.preload();
    }


}