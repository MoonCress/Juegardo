import lb_r5 from '../../../assets/library/tiles/lb_r5.json'
import Room from '../room.js';


export default class LBR5 extends Room {

    constructor() {
        super({ key: 'lbR5', level:'lb' });
        this.key = 'lbR5'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r5)
        super.preload();
    }


}