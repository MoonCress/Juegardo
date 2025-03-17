import gr_r7 from '../../../assets/gardens/tiles/gr_r7.json'
import Room from '../room.js';


export default class GRR7 extends Room {

    constructor() {
        super({ key: 'grR7', level:'gr' });
        this.key = 'grR7'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r7)
        super.preload();
    }


}