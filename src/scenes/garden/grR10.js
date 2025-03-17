import gr_r10 from '../../../assets/gardens/tiles/gr_r10.json'
import Room from '../room.js';


export default class GRR10 extends Room {

    constructor() {
        super({ key: 'grR10', level:'gr' });
        this.key = 'grR10'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r10)
        super.preload();
    }


}