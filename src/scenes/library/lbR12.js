import lb_r12 from '../../../assets/library/tiles/lb_r12.json'
import Room from '../room.js';


export default class LBR12 extends Room {

    constructor() {
        super({ key: 'lbR12', level:'lb' });
        this.key = 'lbR12'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r12)
        super.preload();
    }


}