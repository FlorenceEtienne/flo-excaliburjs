import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./resources";
import { Player } from "./player";
import { Townsfolk } from "./townsfolk";
import { Monster } from "./monster";
// import { MonsterEggs } from "./monster";

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

    monsterOne.graphics.opacity = 0;
    townsfolkOne.on("pointerdown", () => {
      monsterOne.graphics.opacity = 1;
    });
    
    this.start(loader);
  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
