import gr_r9 from '../../../assets/gardens/tiles/gr_r9.json'
import Room from '../room.js';


export default class GRR9 extends Room {

    constructor() {
        super({ key: 'grR9', level:'gr' });
        this.key = 'grR9'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r9)
        super.preload();
    }


}