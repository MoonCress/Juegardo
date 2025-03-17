import gr_r2 from '../../../assets/gardens/tiles/gr_r2.json'
import Room from '../room.js';


export default class GRR2 extends Room {

    constructor() {
        super({ key: 'grR2', level:'gr' });
        this.key = 'grR2'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r2)
        super.preload();
    }


}