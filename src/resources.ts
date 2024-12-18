import { ImageSource, Loader } from "excalibur";
import playerImage from './images/alexis_stivens.png'
import monsterEggImage from './images/monster_egg.png'
// import enemyImage from './images/nogitsune.png'

export const Resources = {
  playerImage: new ImageSource(playerImage),
  monsterEggImage: new ImageSource(monsterEggImage)
//   enemyImage: new ImageSource(enemyImage)
}

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}