import { Actor, Color, vec, CollisionType, Engine } from 'excalibur';
import { Resources } from './resources';

export class Townsfolk extends Actor {
    constructor(props: {x: number; y: number; colorOfNPC: Color;}) {
        super({
            x: props.x,
            y: props.y,
            width: 64*5,
            height: 64*7,
            color: props.colorOfNPC,
            collisionType: CollisionType.Fixed
        });
    }
    
    onInitialize(engine: Engine): void {
        const townsfolkOneSprite = Resources.townsfolkOneImage.toSprite();
        townsfolkOneSprite.scale = vec(5, 5);
        this.graphics.add(townsfolkOneSprite);
    }
}