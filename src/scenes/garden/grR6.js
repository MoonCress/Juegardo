import gr_r6 from '../../../assets/gardens/tiles/gr_r6.json'
import Room from '../room.js';


export default class GRR6 extends Room {

    constructor() {
        super({ key: 'grR6', level:'gr' });
        this.key = 'grR6'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r6)
        super.preload();
    }


}