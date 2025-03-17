import gr_r14 from '../../../assets/gardens/tiles/gr_r14.json'
import Room from '../room.js';


export default class GRR14 extends Room {

    constructor() {
        super({ key: 'grR14', level:'gr' });
        this.key = 'grR14'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r14)
        super.preload();
    }


}