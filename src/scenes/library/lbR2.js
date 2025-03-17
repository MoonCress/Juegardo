import lb_r2 from '../../../assets/library/tiles/lb_r2.json'
import Room from '../room.js';


export default class LBR2 extends Room {

    constructor() {
        super({ key: 'lbR2', level:'lb' });
        this.key = 'lbR2'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r2)
        super.preload();
    }


}