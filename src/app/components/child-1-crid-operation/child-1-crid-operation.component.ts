import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-child-1-crid-operation',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, FormsModule],
  templateUrl: './child-1-crid-operation.component.html',
  styleUrl: './child-1-crid-operation.component.css',
  inputs:['employees'],
})
export class Child1CridOperationComponent {
  employees:any;
  p:any;

  deleteMe(id:any)
  {
    this.employees.splice(id,1);
  }
}

