import lb_x3 from '../../../assets/library/tiles/lb_x3.json'
import Room from '../room.js';


export default class LBX3 extends Room {

    constructor() {
        super({ key: 'lbX3', level:'lb' });
        this.key = 'lbX3'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_x3)
        super.preload();
    }


}