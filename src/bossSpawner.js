import PoisonousGoblin from "./enemies/poisonousGoblin"
import Knight from "./enemies/knight"
import Skeleton from "./enemies/archerSkeleton"
import MagicSkeleton from "./enemies/magicSkeleton"
import StandardSkeleton from "./enemies/standardSkeleton"
import Slime from "./enemies/slime"
import CarnivorousPlant from "./enemies/carnivorousPlant"
import Book from "./enemies/book"
import LavaGolem from "./enemies/lavaGolem"
import BossTree from "./enemies/bossTree/bossTree"
import EvilWizard from './enemies/bossEvilWizard/evilWizard'

export default class BossSpawner {

    constructor(scene, x, y, target, level) {
        if (level === 'lb')
            this.enemyPool = [EvilWizard]
        else if (level === 'gr')
            this.enemyPool = [BossTree]
        this.scene = scene
        this.x = x
        this.y = y
        this.target = target
        //this.scene.add.existing(this);
        let boss = this.enemyPool[0];
        new boss(this.scene, this.x, this.y, this.target);

    }





}