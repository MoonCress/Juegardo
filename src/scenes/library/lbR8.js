import lb_r8 from '../../../assets/library/tiles/lb_r8.json'
import Room from '../room.js';


export default class LBR8 extends Room {

    constructor() {
        super({ key: 'lbR8', level:'lb' });
        this.key = 'lbR8'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r8)
        super.preload();
    }


}