import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./loader";
// import { Paddle } from "./paddle";
// import { Ball } from "./ball";
//assignment - add two balls that move in different directions and recreate sprites from mock as
//temperory Actors
class MainGame extends Engine {
  constructor() {
    super({
      width: 1920,
      height: 1080,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.White,
    });
  }

  initialize() {
    // const paddle1 = new Paddle({ x: 500, y: 500, colorOfBar: Color.Red });
    // this.add(paddle1);

    // const paddle2 = new Paddle({ x: 100, y: 100, colorOfBar: Color.Orange });
    // this.add(paddle2);

    // this.input.pointers.primary.on("move", (e) => {
    //   paddle1.pos.x = e.worldPos.x;
    // });

    // const ball1 = new Ball({
    //   x: 500,
    //   y: 300,
    //   colorOfBall: Color.Black,
    // });
    // this.add(ball1);

    this.start(loader);
  }
}

const game = new MainGame();
game.initialize();
