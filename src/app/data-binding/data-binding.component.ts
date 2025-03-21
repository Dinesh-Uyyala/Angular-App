import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // age:number=20;
  // name:string='Dinesh';

  // isIndian:Boolean=true;
  // mobile:string='+91';

  num1:number=0;
  num2:number=0;
  sum:number=0;

  calculate(){
    console.log(this.num1,this.num2);
    this.sum=this.num1+this.num2;
    console.log(this.sum);
  }

  submit(){
    alert("You have clicked the button !")
  }

  typing(){
    alert("You are typing !")
  }
}
