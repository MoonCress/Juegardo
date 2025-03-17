import lb_e1 from '../../../assets/library/tiles/lb_e1.json'
import Room from '../room.js';


export default class LBE1 extends Room {

    constructor() {
        super({ key: 'lbE1', level:'lb' });
        this.key = 'lbE1'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }



    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_e1)
        super.preload();
    }


}