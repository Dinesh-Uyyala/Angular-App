import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  id:any;
  constructor(private _vehicleService:VehicleService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        _vehicleService.getVehicle(this.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }
  public vehicleForm:FormGroup= new FormGroup({
  Vehicle: new FormControl(),
  cost:new FormControl(),
  color:new FormControl(),
  fuel:new FormControl(),
  image:new FormControl(),
})

submit(){

  if(this.id){
  this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle Data Updated Successfully");
      this._router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )
  }else{
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Vehicle Created Successfully!");
        this._router.navigateByUrl("/dashboard/vehicle")
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
    }
  }  
}
