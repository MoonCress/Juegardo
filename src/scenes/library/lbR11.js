import lb_r11 from '../../../assets/library/tiles/lb_r11.json'
import Room from '../room.js';


export default class LBR11 extends Room {

    constructor() {
        super({ key: 'lbR11', level:'lb' });
        this.key = 'lbR11'
        this.level ='lb'
        this.x = 0;
        this.y = 0;
        this.loadScene = this.loadScene.bind(this);
    }


    preload() {
        this.load.tilemapTiledJSON('tilemap', lb_r11)
        super.preload();
    }


}