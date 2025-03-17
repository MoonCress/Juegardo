import PoisonousGoblin from "../poisonousGoblin"
import Knight from "../knight"
import Skeleton from "../archerSkeleton"
import MagicSkeleton from "../magicSkeleton"
import StandardSkeleton from "../standardSkeleton"
import CarnivorousPlant from "../carnivorousPlant"
import Slime from "../slime"
import LavaGolem from "../lavaGolem"    

export default class EnemySpawnerEvilWizard {

    constructor(scene,target){
        this.enemyPool = [LavaGolem]
        this.scene = scene
        this.target = target
    }

    spawnEnemy(x, y){
        let randomIndex = Math.floor(Math.random() * this.enemyPool.length);
        let randomEnemy = this.enemyPool[randomIndex];
        new randomEnemy(this.scene, x, y,this.target);
    }
}