import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo-1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo-1.component.html',
  styleUrl: './form-demo-1.component.css'
})
export class FormDemo1Component {
  submitMyForm(formData: any) {
    console.log(formData)
  }
}
