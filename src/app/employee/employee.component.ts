import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  role:string='';

  name:string='';
  id:number=0;
  position:string='';
  package:number=0;

  employees=[
    {name:'Dinesh',id:239,position:'Corporate Trainer', package:600000},
    {name:'Vivek',id:142,position:'Developer', package:480000},
    {name:'Mahesh',id:415,position:'Developer', package:1800000},
    {name:'Mani',id:432,position:'Developer', package:1500000},
    {name:'Kala',id:106,position:'Designer', package:480000},
    {name:'Santhi',id:555,position:'Designer', package:240000}
  ]

  sort(){
    this.employees.sort((a:any,b:any)=>a.package-b.package);
  }
  delete(i:number){
    console.log(i);
    this.employees.splice(i,1);
  }
  filter(){
    this.employees=this.employees.filter((employee:any)=>employee.position==this.role);
  }
  bonus(){
    this.employees=this.employees.map((employee:any)=>{
      employee.package=employee.package+20000;
      return employee;
    })
  }
  total(){
    let totatCost = this.employees.reduce((sum:any,employee:any)=>sum+employee.package,0);
    alert(totatCost);
  }

  add(){
    let employee={
      name:this.name,
      id:this.id,
      position:this.position,
      package:this.package
    }
    this.employees.unshift(employee);
  }
}
