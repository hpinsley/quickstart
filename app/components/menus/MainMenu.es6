import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'

@Component({
    selector: 'main-menu'
})
@View({
    templateUrl: 'app/components/menus/MainMenu.html',
    directives: []
})

export class MainMenu {

    constructor() {
    }
}