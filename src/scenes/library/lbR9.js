import lb_r9 from '../../../assets/library/tiles/lb_r9.json'
import Room from '../room.js';


export default class LBR9 extends Room {

    constructor() {
        super({ key: 'lbR9', level:'lb' });
        this.key = 'lbR9'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r9)
        super.preload();
    }


}