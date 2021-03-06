import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2'

import {Employee} from './employee'
import {EmployeeForm} from './EmployeeForm'
import {EmployeeList} from './EmployeeList'

@Component({
    selector: 'employee-page'
})
@View({
    templateUrl: 'app/components/employees/EmployeePage.html',
    directives: [EmployeeForm, EmployeeList]
})

export class EmployeePage {

    constructor() {
    }
}