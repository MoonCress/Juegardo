import gr_e1 from '../../../assets/gardens/tiles/gr_e1.json'
import Room from '../room.js';


export default class GRE1 extends Room {

    constructor() {
        super({ key: 'grE1', level:'gr' });
        this.key = 'grE1'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_e1)
        super.preload();
    }


}