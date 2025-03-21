import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any=[];
  term:string='';
  column:string='';
  order:string='';
  limit:number=0;
  page:number=0;
  constructor(private _vehiceService:VehicleService){
    this.getVehicles();
  }

  getVehicles(){
    this._vehiceService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  filter(){
    this._vehiceService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  sort(){
    this._vehiceService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  pagination(){
    this._vehiceService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }
  delete(id:string){
    this._vehiceService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("Record Deleted Successfully!");
        this.getVehicles();
      },(err:any)=>{
        alert("Internal Sever Error")
      }
    )
  }
}
