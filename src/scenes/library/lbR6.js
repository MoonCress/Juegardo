import lb_r6 from '../../../assets/library/tiles/lb_r6.json'
import Room from '../room.js';


export default class LBR6 extends Room {

    constructor() {
        super({ key: 'lbR6', level:'lb' });
        this.key = 'lbR6'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r6)
        super.preload();
    }


}