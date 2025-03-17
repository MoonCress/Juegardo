import ar_r2 from '../../../assets/armory/tiles/arR2.json'
import Room from '../room.js';

export default class ARR2 extends Room {

    constructor() {
        super({ key: 'arR2',level:'ar' });
        this.key = 'arR2'
        this.level = 'ar'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }

    preload() {
        this.load.tilemapTiledJSON('tilemap', ar_r2)
        super.preload();
    }










}