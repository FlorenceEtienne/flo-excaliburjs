import { ImageSource, Loader } from "excalibur";
import playerImage from './images/alexis_stivens.png'

export const Resources = {
  playerImage: new ImageSource(playerImage),
}

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}