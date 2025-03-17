import ar_r3 from '../../../assets/armory/tiles/arR3.json'
import Room from '../room.js';

export default class ARR3 extends Room {

    constructor() {
        super({ key: 'arR3',level:'ar' });
        this.key = 'arR3'
        this.level = 'ar'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }

    preload() {
        this.load.tilemapTiledJSON('tilemap', ar_r3)
        super.preload();
    }










}