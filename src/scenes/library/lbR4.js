import lb_r4 from '../../../assets/library/tiles/lb_r4.json'
import Room from '../room.js';


export default class LBR4 extends Room {

    constructor() {
        super({ key: 'lbR4', level:'lb' });
        this.key = 'lbR4'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r4)
        super.preload();
    }


}