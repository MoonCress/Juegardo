import gr_r13 from '../../../assets/gardens/tiles/gr_r13.json'
import Room from '../room.js';


export default class GRR13 extends Room {

    constructor() {
        super({ key: 'grR13', level:'gr' });
        this.key = 'grR13'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r13)
        super.preload();
    }


}