import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./resources";
import { Player } from "./player";
import { MonsterEggs } from "./monster";

class MainGame extends Engine {
  constructor() {
    super({
      width: 1920,
      height: 1080,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.fromRGB(72,111,56),
    });
  }

  initialize() {
    const player = new Player();

    const egg1 = new MonsterEggs({
      x: 128,
      y: 128,
      width: 16,
      height: 16,
      //colorOfObject: Color.fromRGB(19, 55, 29)
    });
    this.add(egg1); 
    
    const egg2 = new MonsterEggs({
      x: 500,
      y: 128,
      width: 16,
      height: 16,
      // colorOfObject: Color.fromRGB(19, 55, 29)
    });
    this.add(egg2);

    //the goal is to go to Nok Noks and collect the Magic cores they stole
    //(you got anti-magic abilities, which explains your time running out)

    //by clicking on the Nok Noks reveals a Magic core for a moment
    
    //you get the Magic cores and then click the machine to get a point
    //getting enough points, your supervisor gives you the win

    //three npcs as three important townsfolk
    //(the townsfolk are advanced Nok Noks that have been qurantined)
    //a shopkeeper gives you a document
    //a blacksmith gives you a document
    //a street rat (their parent a baker) gives you a document

    //by getting all documents you get a seperate ending where you're chilling
    //at your place in peace

    egg2.graphics.opacity = 0;
    egg1.on("pointerdown", () => {
      console.log("show on console");
      egg2.graphics.opacity = 1;
    })

    this.add(player);
    this.start(loader);

  }
}

const game = new MainGame();
game.initialize(); //fancy version of start
