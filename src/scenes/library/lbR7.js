import lb_r7 from '../../../assets/library/tiles/lb_r7.json'
import Room from '../room.js';


export default class LBR7 extends Room {

    constructor() {
        super({ key: 'lbR7', level:'lb' });
        this.key = 'lbR7'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r7)
        super.preload();
    }


}