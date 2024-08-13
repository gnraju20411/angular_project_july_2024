import { Component, EventEmitter, OnInit } from '@angular/core';
import * as data from './employeeData.json';
import { Child2CridOperationComponent } from '../child-2-crid-operation/child-2-crid-operation.component';
import { Child1CridOperationComponent } from '../child-1-crid-operation/child-1-crid-operation.component';



@Component({
  selector: 'app-parent-crid-operation',
  standalone: true,
  imports: [Child1CridOperationComponent, Child2CridOperationComponent],
  templateUrl: './parent-crid-operation.component.html',
  styleUrl: './parent-crid-operation.component.css',
  outputs:['employees']

})
export class ParentCridOperationComponent {
  employees = (data as any).default;
  copyEmployees = this.employees;

  nameEvent = new EventEmitter();

  name: string = 'Sachin Tendulkar';

  sendDataToParent() {
    this.nameEvent.emit(this.employees);
  }
}
