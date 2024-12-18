import { Actor, Color, CollisionType, Engine} from 'excalibur';
import { Resources } from './resources';
// export class Monsters extends Actor {
//     constructor(props: {x: number; y: number; width: number; height: number; colorOfObject: Color;}) {
//         super({
//             x: props.x,
//             y: props.y,
//             width: props.width,
//             height: props.height,
//             color: props.colorOfObject,
//             collisionType: CollisionType.Fixed
//         })
//     }
//     onInitialize(engine: Engine): void {
//         this.graphics.add(Resources.enemyImage.toSprite())
//     }
// }

export class MonsterEggs extends Actor {
    constructor(props: {x: number; y: number; width: number; height: number;}) {
        super({
            x: props.x,
            y: props.y,
            width: props.width,
            height: props.height,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine): void {
        this.graphics.add(Resources.monsterEggImage.toSprite())
    }
}