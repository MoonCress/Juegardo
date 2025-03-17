import lb_x2 from '../../../assets/library/tiles/lb_x2.json'
import Room from '../room.js';


export default class LBX2 extends Room {

    constructor() {
        super({ key: 'lbX2', level:'lb' });
        this.key = 'lbX2'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_x2)
        super.preload();
    }


}