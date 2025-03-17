import gr_x3 from '../../../assets/gardens/tiles/gr_x3.json'
import Room from '../room.js';


export default class GRX3 extends Room {

    constructor() {
        super({ key: 'grX3', level:'gr' });
        this.key = 'grX3'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_x3)
        super.preload();
    }


}