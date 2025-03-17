import gr_r1 from '../../../assets/gardens/tiles/gr_r1.json'
import Room from '../room.js';


export default class GRR1 extends Room {

    constructor() {
        super({ key: 'grR1', level:'gr' });
        this.key = 'grR1'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r1)
        super.preload();
    }


}