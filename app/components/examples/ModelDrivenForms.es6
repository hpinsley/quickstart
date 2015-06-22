import {
  ComponentAnnotation as Component,
  ViewAnnotation as View,
} from 'angular2/angular2';

import {formDirectives} from 'angular2/forms';

@Component({selector: 'model-driven-forms'})
@View({
  template: `<h1>Model Driven Forms</h1>`,
  directives: [formDirectives]
})
export class ModelDrivenForms {

  constructor() {
  }
}