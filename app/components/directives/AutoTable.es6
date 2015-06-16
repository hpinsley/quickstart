import {DirectiveAnnotation as Directive, InjectAnnotation as Inject} from 'angular2/angular2'

@Directive({ 
	selector: '[auto-table]',
	   hostListeners: {
        'load': 'onLoad($event)',
		'click': 'onClick($event)',
		'show': 'onShow($event)',
		'mouseenter': 'onMouseEnter($event)'
     } 
})
export class AutoTable {
 	constructor() {
 		console.log('AutoTable constructed.');
	}
	
	onMouseEnter(event) {
		console.log('onMouseEnter', event);
	}
	
	onLoad(event) {
		console.log('onLoad ', event);
	}
	
	onShow(event) {
		console.log('onShow', event);
	}
	
	onClick(event) {
		console.log('onClick', event);
		$(event.target).css('background-color', 'green');
	}
}