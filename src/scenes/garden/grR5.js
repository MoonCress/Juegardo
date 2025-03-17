import gr_r5 from '../../../assets/gardens/tiles/gr_r5.json'
import Room from '../room.js';


export default class GRR5 extends Room {

    constructor() {
        super({ key: 'grR5', level:'gr' });
        this.key = 'grR5'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r5)
        super.preload();
    }


}