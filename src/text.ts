import { Actor, Text, Font, Engine } from 'excalibur';

export class WinningText extends Actor {
    constructor() {
        super({
            x: (480*4)/2,
            y: (360*3)/2
        })  
    }

    onInitialize(engine: Engine): void {
        const win = new Text({
            text: 'You Win',
            font: new Font({
                family: 'Micro 5',
            }),
        })
        this.graphics.use(win);
    }
};

export class Instructions extends Actor {
    constructor() {
        super({
            x: 1920 - 256,
            y: 1080 - 196
        })
    }

    onInitialize(engine: Engine): void {
        const instructionText = new Text({
            text: 'Move and interact using M1',
            font: new Font({
                family: 'Micro 5',
            }),
        })
        this.graphics.use(instructionText);
    }
}