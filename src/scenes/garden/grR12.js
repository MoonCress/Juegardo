import gr_r12 from '../../../assets/gardens/tiles/gr_r12.json'
import Room from '../room.js';


export default class GRR12 extends Room {

    constructor() {
        super({ key: 'grR12', level:'gr' });
        this.key = 'grR12'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r12)
        super.preload();
    }


}