// import { Actor, Engine, Color, Vector, vec, CollisionType } from "excalibur";
// import { startingPosition } from "./startingPosition";
// import { Resources } from "./resources";

// export class Player extends Actor {
//     constructor() {
//         const position = startingPosition;

//         super({
//             pos: position,
//             width: 16,
//             height: 16,
//             color: Color.fromRGB(0, 80, 80),
//             collisionType: CollisionType.Active
//         });
//     }

//     lastPosition = startingPosition;
//     isMoving = false;

//     private setLocationAsFollow(vec: Vector) {
//         this.lastPosition = vec;
//         this.isMoving = true;
//     }

//     //once the game initializes, the follower function will initialize with it
//     onInitialize(engine: Engine): void {
//         this.graphics.add(Resources.playerImage.toSprite());
        
//         engine.input.pointers.primary.on('down', (event) => {
//             const clickedPosition = event.worldPos;
//             this.setLocationAsFollow(clickedPosition);

//             this.actions
//             .easeTo(clickedPosition.x, clickedPosition.y, 1000) //position on the x axis, position on the y axis, duration in millisecs
//             .callMethod(() => {
//                 this.isMoving = false;
//             });
//         });
//     }

//     onPostUpdate(): void {
//         if (!this.isMoving) {
//             this.stop();
//         }
//     }

//     stop() {
//         this.vel = vec(0, 0); //velocity isn't there
//         this.acc = vec(0, 0); //acceleration isn't there
//     }
// }