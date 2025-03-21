import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
      // baseUrl:string="/assets/data.json";
  baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';
  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  getVehicle(id:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }

  getFilteredVehicles(term:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term)
  }

  getSortedVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order)
  }

  getPaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+page);
  }
  deleteVehicle(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }
  
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }
  updateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}
