import {DirectiveAnnotation as Directive, InjectAnnotation as Inject} from 'angular2/angular2'

@Directive({ 
	selector: '[auto-table]' 
})
export class AutoTable {
 		constructor() {
 			console.log('AutoTable constructed.');
	}
}