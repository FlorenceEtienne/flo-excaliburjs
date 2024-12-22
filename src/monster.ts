import { Actor, Color, CollisionType, vec, Engine} from 'excalibur';
import { Resources } from './resources';
export class Monster extends Actor {
    constructor(props: {x: number; y: number; colorOfMonster: Color;}) {
        super({
            x: props.x,
            y: props.y,
            width: 64*5,
            height: 64*7,
            color: props.colorOfMonster,
            collisionType: CollisionType.Fixed
        })
    }
    onInitialize(engine: Engine): void {
        const monsterOneSprite = Resources.monsterOneImage.toSprite();
        monsterOneSprite.scale = vec(5, 5);
        this.graphics.add(monsterOneSprite);
    }
}

// export class MonsterEggs extends Actor {
//     constructor(props: {x: number; y: number; width: number; height: number;}) {
//         super({
//             x: props.x,
//             y: props.y,
//             width: props.width,
//             height: props.height,
//             collisionType: CollisionType.Fixed
//         })
//     }

//     onInitialize(engine: Engine): void {
//         this.graphics.add(Resources.monsterEggImage.toSprite())
//     }
// }