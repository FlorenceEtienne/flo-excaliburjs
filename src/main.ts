import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./loader";
// import { Player } from "./player";
// import { Object } from "./object";
// import { Paddle } from "./paddle";
// import { Ball } from "./ball";
//assignment - add two balls that move in different directions and recreate sprites from mock as
//temperory Actors
class MainGame extends Engine {
  constructor() {
    super({
      width: 1080,
      height: 720,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.Gray,
    });
  }

  initialize() {
    // this.input.pointers.primary.on("move", (e) => {
    //   paddle1.pos.x = e.worldPos.x;
    // });

    // const player = new Player ({
    //   x: 512,
    //   y: 224,
    //   colorOfPlayer: Color.fromRGB(0, 0, 0),
    // });
    // this.add(player);

    // const counter = new Object ({
    //   width: 512,
    //   height: 192,
    //   x: 1080,
    //   y: 256,
    //   colorOfObject: Color.fromRGB(0, 0, 0),
    // });
    // this.add(counter);

    // const machine = new Object ({
    //   width: 192,
    //   height: 224,
    //   x: 1512,
    //   y: 240,
    //   colorOfObject: Color.fromRGB(0, 0, 0),
    // });
    // this.add(machine);

    // const bed = new Object ({
    //   width: 1080,
    //   height: 256,
    //   x: 0,
    //   y: 960,
    //   colorOfObject: Color.fromRGB(0, 0, 0),
    // });
    // this.add(bed);

    // // this.input.

    this.start(loader);
  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
