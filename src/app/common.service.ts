import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public countSub:BehaviorSubject<number>=new BehaviorSubject(0);
  constructor() { }
}
