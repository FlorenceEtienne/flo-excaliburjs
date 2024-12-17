import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./loader";
import { Player } from "./player";

class MainGame extends Engine {
  constructor() {
    super({
      width: 480,
      height: 360,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.Gray,
    });
  }

  initialize() {
    const player = new Player();
    
    this.add(player);
    this.start(loader);

  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
