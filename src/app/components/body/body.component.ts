import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DatabindingComponent } from "../databinding/databinding.component";
import { CardTableComponent } from "../card-table/card-table.component";
import { EmployeeCridComponent } from "../employee-crid/employee-crid.component";
import { PipesComponent } from '../pipes/pipes.component';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, DatabindingComponent, 
    CardTableComponent, EmployeeCridComponent, 
    PipesComponent, CategoriesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
