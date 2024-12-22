import { Actor, Engine, Color, Vector, vec, CollisionType } from "excalibur";
import { startingPosition } from "./startingPosition";
import { Resources } from "./resources";

export class Player extends Actor {
    constructor() {
        const position = startingPosition;

        super({
            pos: position,
            width: 64*2,
            height: 64*2,
            color: Color.fromRGB(0, 80, 80),
            collisionType: CollisionType.Active
        });
    }

    lastPosition = startingPosition;
    isMoving = false;

    private setLocationAsFollow(vec: Vector) {
        this.lastPosition = vec;
        this.isMoving = true;
    }

    //once the game initializes, the follower function will initialize with it
    onInitialize(engine: Engine): void {
        const playerSprite = Resources.playerImage.toSprite();
        playerSprite.scale = vec(5, 5);
        this.graphics.add(playerSprite);
        
        engine.input.pointers.primary.on('down', (event) => {
            const clickedPosition = event.worldPos;
            this.setLocationAsFollow(clickedPosition);

            this.actions
            .easeTo(clickedPosition.x, clickedPosition.y, 1000) //position on the x axis, position on the y axis, duration in millisecs
            .callMethod(() => {
                this.isMoving = false;
            });

            // if()
        });
    }

    onPostUpdate(): void {
        if (!this.isMoving) {
            this.stop();
        }
    }

    stop() {
        this.vel = vec(0, 0); //velocity isn't there
        this.acc = vec(0, 0); //acceleration isn't there
    }
}

export class Alexis extends Actor {
    constructor() {
        super({
            x: 0,
            y: 1080,
            width: 64,
            height: 64
        })
    }
    
}