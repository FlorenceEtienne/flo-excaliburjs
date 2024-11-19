import { Actor, Color, CollisionType } from "excalibur";

export class Paddle extends Actor {
  constructor(props: { x: number; y: number; colorOfBar: Color }) {
    super({
      width: 250,
      height: 10,
      color: props.colorOfBar,
      collisionType: CollisionType.Fixed,
      x: props.x,
      y: props.y,
    });
  }
}
