import gr_r16 from '../../../assets/gardens/tiles/gr_r16.json'
import Room from '../room.js';


export default class GRR16 extends Room {

    constructor() {
        super({ key: 'grR16', level:'gr' });
        this.key = 'grR16'
        this.level = 'gr'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', gr_r16)
        super.preload();
    }


}