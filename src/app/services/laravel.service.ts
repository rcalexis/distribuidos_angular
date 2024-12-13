import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaravelService {
  private _url ='http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) {

   }

   service_Get(Modelo: string, Dato: string | number = ''){
    return this.http.get(`${this._url}/${Modelo}/${Dato}`);  //

   }

   service_Post(Modelo: string, Dato: string | number = '', parametro:any){
    return this.http.post(`${this._url}/${Modelo}/${Dato}`, parametro);  //

   }
   service_Patch(Modelo: string, Dato: string | number = '', parametro:any){
    return this.http.patch(`${this._url}/${Modelo}/${Dato}`, parametro);  //

   }
   service_Delete(Modelo: string, Dato: string | number = ''){
    return this.http.delete(`${this._url}/${Modelo}/${Dato}`);  //

   }

}
