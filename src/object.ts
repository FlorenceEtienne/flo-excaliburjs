import { Actor, CollisionType, Color } from "excalibur";

export class Object extends Actor {
  constructor(props: { x: number; y: number; width: number; height: number; colorOfObject: Color }) {
    super({
      width: props.width,
      height: props.height,
      x: props.x,
      y: props.y,
      collisionType: CollisionType.Passive,
      color: props.colorOfObject,
    });
  }
}