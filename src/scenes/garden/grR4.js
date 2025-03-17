import gr_r4 from '../../../assets/gardens/tiles/gr_r4.json'
import Room from '../room.js';


export default class GRR4 extends Room {

    constructor() {
        super({ key: 'grR4', level:'gr' });
        this.key = 'grR4'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r4)
        super.preload();
    }


}