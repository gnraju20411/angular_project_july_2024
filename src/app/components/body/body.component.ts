import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DatabindingComponent } from "../databinding/databinding.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CardComponent, DatabindingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
