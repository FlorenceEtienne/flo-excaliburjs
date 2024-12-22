import { DisplayMode, Engine, Color, Keys} from "excalibur";
import { loader } from "./resources";
import { Player } from "./player";
import { Townsfolk } from "./townsfolk";
import { Monster } from "./monster";
import { WinningText } from "./text";
import { Instructions } from "./text";

class MainGame extends Engine {
  constructor() {
    const scaleHori = 4;
    const scaleVert = 3;
    super({
      width: 480 * scaleHori,
      height: 360 * scaleVert,
      antialiasing: false,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.fromRGB(72,111,56),
    });
  }

  initialize() {
    const player = new Player();    
    this.add(player);

    const townsfolkOne = new Townsfolk({
          x: 512,
          y: 256,
          colorOfNPC: Color.Red
    });
    this.add(townsfolkOne);

    const monsterOne = new Monster({
      x: 768,
      y: 256,
      colorOfMonster: Color.Red
    })
    this.add(monsterOne);

    const winningText = new WinningText();
    this.add(winningText);

    const instructions = new Instructions();
    this.add(instructions);

    winningText.graphics.opacity = 0;

    monsterOne.graphics.opacity = 0;
    townsfolkOne.on("pointerdown", () => {
      monsterOne.graphics.opacity = 1;
    });

    monsterOne.on("pointerdown", () => {
      monsterOne.graphics.opacity = 0;
      player.graphics.opacity = 0;
      townsfolkOne.graphics.opacity = 0;
      instructions.graphics.opacity = 0;
      winningText.graphics.opacity = 1;
    });

    if (this.input.keyboard.isHeld(Keys.R)) {
      monsterOne.graphics.opacity = 1;
      player.graphics.opacity = 1;
      townsfolkOne.graphics.opacity = 1;
      instructions.graphics.opacity = 1;
      winningText.graphics.opacity = 0;
    }
    
    this.start(loader);
  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
