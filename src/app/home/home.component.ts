import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ages:number=20;
  user:User={
    name:'Dinesh',
    age:28,
    mobile:8798786785,
  }
}
