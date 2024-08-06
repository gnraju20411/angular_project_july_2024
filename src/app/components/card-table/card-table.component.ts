import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-card-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-table.component.html',
  styleUrl: './card-table.component.css'
})
export class CardTableComponent {
  flag:Boolean=false;
  products = [
    {Id: 1, Name: "Iphone 15", Color: "Pink", Prise: 50000, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 2, Name: "Iphone 14", Color: "Black", Prise: 45000, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 3, Name: "Iphone 13", Color: "Pink", Prise: 55000, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 4, Name: "Iphone 12", Color: "Red", Prise: 12548, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 5, Name: "OnePlus 9R", Color: "Pink", Prise: 45847, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 6, Name: "Iphone X", Color: "Blue", Prise: 55884, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 7, Name: "OnePlus 12R", Color: "Blue", Prise: 45874, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 8, Name: "Iphone SE", Color: "Black", Prise: 25000, Description: "Testing the cards...", ImageUrl: "...", Status: true},
    {Id: 9, Name: "Iphone 7", Color: "Green", Prise: 18000, Description: "Testing the cards...", ImageUrl: "...", Status: true}
  ];

  ASC()
  {
    this.products.sort((a:any, b:any)=> b.Prise - a.Prise);
  };
  
  DES()
  {
    this.products.sort((a:any, b:any)=> a.Prise - b.Prise);
  };
}
