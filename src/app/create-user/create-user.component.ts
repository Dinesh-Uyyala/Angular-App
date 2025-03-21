import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { tcsMail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup=new FormGroup({
    name:new FormControl(),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(100)]),
    email:new FormControl('',[Validators.required,Validators.email,tcsMail]),
    phone:new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      pin:new FormControl()
    }),
    type:new FormControl(),
    // busFee:new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl()
      })
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        console.log(data);
        if(data=='dayScholar'){
          this.userForm.addControl('busFee', new FormControl());
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

  submit(){
    console.log(this.userForm);
  }
}
