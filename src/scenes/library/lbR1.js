import lb_r1 from '../../../assets/library/tiles/lb_r1.json'
import Room from '../room.js';


export default class LBR1 extends Room {

    constructor() {
        super({ key: 'lbR1', level:'lb' });
        this.key = 'lbR1'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r1)
        super.preload();
    }


}