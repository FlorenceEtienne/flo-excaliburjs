import { Engine } from "excalibur";
import { loader } from "./loader";

class NightScene extends Engine {
    initialize() {
        this.start(loader)
    }
}

const scene_one = new NightScene();

scene_one.initialize();