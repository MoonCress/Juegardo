import gr_r3 from '../../../assets/gardens/tiles/gr_r3.json'
import Room from '../room.js';


export default class GRR3 extends Room {

    constructor() {
        super({ key: 'grR3', level:'gr' });
        this.key = 'grR3'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r3)
        super.preload();
    }


}