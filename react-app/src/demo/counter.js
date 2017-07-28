export class Counter {
    constructor() {

    }

    start() {
        this.count = 0;

        setInterval( ()=> {
            let title ="counter";
            this.count ++;
        }, 2000)
    }
}