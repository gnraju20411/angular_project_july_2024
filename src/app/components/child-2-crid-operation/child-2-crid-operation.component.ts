import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-2-crid-operation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-2-crid-operation.component.html',
  styleUrl: './child-2-crid-operation.component.css',
  inputs:['employees']
})
export class Child2CridOperationComponent {
  employees:any;
  EmpId:any;
  EmpName:any;
  EmpJobTitle:any;
  EmpSalary:any;
  copyEmployee:any;

  addEmp(){
    this.copyEmployee={"id": this.EmpId, "name": this.EmpName, "job_titles": this.EmpJobTitle, "salary": this.EmpSalary};
    this.employees.push(this.copyEmployee);
  }
}
