import gr_r15 from '../../../assets/gardens/tiles/gr_r15.json'
import Room from '../room.js';


export default class GRR15 extends Room {

    constructor() {
        super({ key: 'grR15', level:'gr' });
        this.key = 'grR15'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r15)
        super.preload();
    }


}