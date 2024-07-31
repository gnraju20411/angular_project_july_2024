import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  isVisable:Boolean = false;
  flag:Boolean = false;
  textData:string="";
  stateName:string="";
  val1:number=0;
  val2:number=0;
  cal="";
  currentValue:number=0;
  bgColor:boolean=true;

  toggleFlag(){
    this.isVisable = !this.isVisable;
  }

  // f2(){
  //   this.bgColor = "light";
  // }
}
