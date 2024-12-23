import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./resources";
// import { Player } from "./player";

class MainGame extends Engine {
  constructor() {
    super({
      width: 1920,
      height: 1080,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.DarkGray,
    });
  }

  initialize() {
    // const player = new Player();

    // // egg2.graphics.opacity = 0;
    // // egg1.on("pointerdown", () => {
    // //   console.log("show on console");
    // //   egg2.graphics.opacity = 1;
    // // })

    // this.add(player);
    this.start(loader);

  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
