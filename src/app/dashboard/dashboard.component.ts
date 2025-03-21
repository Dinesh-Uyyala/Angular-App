import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { DummyComponent } from '../dummy/dummy.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _loginService:LoginService){}
  logout(){
    this._loginService.logout();
  }

  openLink(event: MouseEvent): void {
    event.preventDefault();
  }
}
