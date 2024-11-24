import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./loader";
import { Player } from "./player";
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
    // this.input.pointers.primary.on("move", (e) => {
    //   paddle1.pos.x = e.worldPos.x;
    // });

    const player = new Player({
      x: 176,
      y: 224,
      colorOfPlayer: Color.fromRGB(0, 0, 0),
    });
    this.add(player);

    // this.input.

    this.start(loader);
  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
