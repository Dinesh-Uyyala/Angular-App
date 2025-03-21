import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
employees=[
  {name:'Dinesh',id:239,position:'Corporate Trainer'},
  {name:'Vivek',id:142,position:'Developer'},
  {name:'Mahesh',id:415,position:'Developer'},
  {name:'Mani',id:432,position:'Developer'},
  {name:'Kala',id:106,position:'Designer'},
  {name:'Santhi',id:555,position:'Designer'}
]


employeedata:Boolean=true;

currentTime:Date=new Date();
constructor(){
  setInterval(()=> this.currentTime=new Date(),1000)
}

delete(i:number){
  console.log(i);
  this.employees.splice(i,1);
}
}
