import { ImageSource, Loader } from "excalibur";
import playerImage from './images/alexis_stivens.png';
import alexisMenuImage from './images/alexis_stivens_menu_spr.png';
import townsfolkOneImage from './images/townsfolk_one.png';
import monsterOneImage from './images/monster_one.png'

export const Resources = {
  playerImage: new ImageSource(playerImage),
  alexisMenuImage: new ImageSource(alexisMenuImage),
  townsfolkOneImage: new ImageSource(townsfolkOneImage),
  monsterOneImage: new ImageSource(monsterOneImage)
}

//exports the sprites into a loader, which 'addResource' method
//from loader makes them an object for everytime the game is loaded
export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}