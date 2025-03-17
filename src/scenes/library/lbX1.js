import lb_x1 from '../../../assets/library/tiles/lb_x1.json'
import Room from '../room.js';


export default class LBX1 extends Room {

    constructor() {
        super({ key: 'lbX1', level:'lb' });
        this.key = 'lbX1'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_x1)
        super.preload();
    }


}