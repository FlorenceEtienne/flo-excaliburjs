import { Actor, CollisionType, Color } from "excalibur";

export class Player extends Actor {
  constructor(props: { x: number; y: number; colorOfPlayer: Color }) {
    super({
      width: 128,
      height: 256,
      x: props.x,
      y: props.y,
      collisionType: CollisionType.Passive,
      color: props.colorOfPlayer,
    });
  }
}
