import ar_x1 from '../../../assets/armory/tiles/arX1.json'
import Room from '../room.js';

export default class ARX1 extends Room {

    constructor() {
        super({ key: 'arX1',level:'ar' });
        this.key = 'arX1'
        this.level = 'ar'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }

    preload() {
        this.load.tilemapTiledJSON('tilemap', ar_x1)
        super.preload();
    }










}