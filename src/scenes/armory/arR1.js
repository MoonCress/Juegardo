import ar_r1 from '../../../assets/armory/tiles/arR1.json'
import Room from '../room.js';


export default class ARR1 extends Room {

    constructor() {
        super({ key: 'arR1', level:'ar' });
        this.key = 'arR1'
        this.level = 'ar'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', ar_r1)
        super.preload();
    }


}