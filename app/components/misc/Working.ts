import {Component, View, Inject, NgFor, Observable} from 'angular2/angular2'

@Component({
    selector: 'working',
    appInjector: []
})
@View({
    templateUrl: 'app/components/misc/Working.html',
    directives: [NgFor]
})
export class Working {

    points:number[][]
    
    constructor() {
        this.addPoints();
        var x = Observable;
        console.log(x);
        
    }
    
    addPoints() {
        this.points = [];
        for (let i = 50; i < 500; i += 50) {
            for (let j = 50; j < 200; j += 100) {
                this.points.push([i, j]);
            }
        }        
    }
    
}