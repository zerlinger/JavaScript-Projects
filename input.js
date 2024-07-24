export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";



export class Input {
    constructor() {
        this.keys = [];

        window.addEventListener('keydown', e => {
            if (e.key === 'ArrowUp' || e.key.toLocaleLowerCase() === 'w') {
                this.keyPressed(UP);
            } else if (e.key === 'ArrowDown' || e.key.toLocaleLowerCase() === 's') {
                this.keyPressed(DOWN);
            } else if (e.key === 'ArrowLeft' || e.key.toLocaleLowerCase() === 'a') {
                this.keyPressed(LEFT);
            } else if (e.key === 'ArrowRight' || e.key.toLocaleLowerCase() === 'd') {
                this.keyPressed(RIGHT);
            }
        })
        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowUp' || e.key.toLocaleLowerCase() === 'w') {
                this.keyReleased(UP);
            } else if (e.key === 'ArrowDown' || e.key.toLocaleLowerCase() === 's') {
                this.keyReleased(DOWN);
            } else if (e.key === 'ArrowLeft' || e.key.toLocaleLowerCase() === 'a') {
                this.keyReleased(LEFT);
            } else if (e.key === 'ArrowRight' || e.key.toLocaleLowerCase() === 'd') {
                this.keyReleased(RIGHT);
            }
        })        
    }
    keyPressed(key) {
        if (this.keys.indexOf(key) === -1){
            this.keys.unshift(key);
        }
        console.log(key, this.keys);
    }
    keyReleased(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) return;
        this.keys.splice(index, 1);       
    }
    get lastKey() {
        return this.keys[0];
    }
}