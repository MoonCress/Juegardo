import lb_x4 from '../../../assets/library/tiles/lb_x4.json'
import Room from '../room.js';


export default class LBX4 extends Room {

    constructor() {
        super({ key: 'lbX4', level:'lb' });
        this.key = 'lbX4'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_x4)
        super.preload();
    }


}