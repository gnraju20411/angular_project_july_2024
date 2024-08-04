import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DatabindingComponent } from "../databinding/databinding.component";
import { CardTableComponent } from "../card-table/card-table.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, DatabindingComponent, CardTableComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
