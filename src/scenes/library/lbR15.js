import lb_r15 from '../../../assets/library/tiles/lb_r15.json'
import Room from '../room.js';


export default class LBR15 extends Room {

    constructor() {
        super({ key: 'lbR15', level:'lb' });
        this.key = 'lbR15'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r15)
        super.preload();
    }


}