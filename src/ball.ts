import { Actor, Color, CollisionType } from "excalibur";

export class Ball extends Actor {
  constructor(props: { x: number; y: number; colorOfBall: Color }) {
    super({
      width: 50,
      height: 50,
      color: props.colorOfBall,
      collisionType: CollisionType.Passive,
      x: props.x,
      y: props.y,
      radius: 100,
    });
  }
}
