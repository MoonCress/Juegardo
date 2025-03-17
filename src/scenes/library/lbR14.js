import lb_r14 from '../../../assets/library/tiles/lb_r14.json'
import Room from '../room.js';


export default class LBR14 extends Room {

    constructor() {
        super({ key: 'lbR14', level:'lb' });
        this.key = 'lbR14'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r14)
        super.preload();
    }


}