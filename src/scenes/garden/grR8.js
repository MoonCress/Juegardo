import gr_r8 from '../../../assets/gardens/tiles/gr_r8.json'
import Room from '../room.js';


export default class GRR8 extends Room {

    constructor() {
        super({ key: 'grR8', level:'gr' });
        this.key = 'grR8'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r8)
        super.preload();
    }


}