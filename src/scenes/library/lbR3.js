import lb_r3 from '../../../assets/library/tiles/lb_r3.json'
import Room from '../room.js';


export default class LBR3 extends Room {

    constructor() {
        super({ key: 'lbR3', level:'lb' });
        this.key = 'lbR3'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r3)
        super.preload();
    }


}