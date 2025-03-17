import gr_x4 from '../../../assets/gardens/tiles/gr_x4.json'
import Room from '../room.js';


export default class GRX4 extends Room {

    constructor() {
        super({ key: 'grX4', level:'gr' });
        this.key = 'grX4'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_x4)
        super.preload();
    }


}