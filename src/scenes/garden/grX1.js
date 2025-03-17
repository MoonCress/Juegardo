import gr_x1 from '../../../assets/gardens/tiles/gr_x1.json'
import Room from '../room.js';


export default class GRX1 extends Room {

    constructor() {
        super({ key: 'grX1', level:'gr' });
        this.key = 'grX1'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_x1)
        super.preload();
    }


}