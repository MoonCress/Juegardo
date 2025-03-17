import lb_r13 from '../../../assets/library/tiles/lb_r13.json'
import Room from '../room.js';


export default class LBR13 extends Room {

    constructor() {
        super({ key: 'lbR13', level:'lb' });
        this.key = 'lbR13'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r13)
        super.preload();
    }


}