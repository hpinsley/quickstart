import { ComponentAnnotation as Component, ViewAnnotation as View, InjectAnnotation as Inject} from 'angular2/angular2';
import {forms, FormBuilder, required, materialDesign} from 'angular2/forms';

class Address {
  constructor() {
    this.street = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.residential = true;
  }
} 

@Component({
  selector: 'form-example',
  appInjector: [FormBuilder]
})
@Template({
  // Form layout is automatic from the structure
  inline: `<form [form-structure]="form"></form>`,
  directives: [forms]
})
class FormExample {
  constructor(@Inject(FormBuilder) fb) {
    this.address = new Address();

    // defining a form structure and initializing it using 
    // the passed in model
    this.form = fb.fromModel(address, [
      // describe the model field, labels and error handling
      {field: 'street', label: 'Street', validator: required},
      {field: 'city', label: 'City', validator: required},
      {field: 'state', label: 'State', size: 2, 
              validator: required},
      {field: 'zip', label: 'Zip', size: 5, 
              validator: zipCodeValidator},
      {field: 'isResidential', type: 'checkbox', 
              label: 'Is residential'}
    ], {
      // update the model every time an input changes
      saveOnUpdate: true,
      // Allow setting different layout strategies
      layoutStrategy: materialDesign
    });
  }
}

function zipCodeValidator(control) {
  if (! control.value.match(/\d\d\d\d\d(-\d\d\d\d)?/)){
    return {invalidZipCode: true};
  }
}
