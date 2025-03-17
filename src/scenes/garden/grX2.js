import gr_x2 from '../../../assets/gardens/tiles/gr_x2.json'
import Room from '../room.js';


export default class GRX2 extends Room {

    constructor() {
        super({ key: 'grX2', level:'gr' });
        this.key = 'grX2'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_x2)
        super.preload();
    }


}