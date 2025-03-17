import lb_r10 from '../../../assets/library/tiles/lb_r10.json'
import Room from '../room.js';


export default class LBR10 extends Room {

    constructor() {
        super({ key: 'lbR10', level:'lb' });
        this.key = 'lbR10'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r10)
        super.preload();
    }


}