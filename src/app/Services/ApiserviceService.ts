import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
   url:String="https://localhost:44374/api/"
   constructor(private http:HttpClient) { }


GetAllProductos(){
  return this.http.get(this.url+"Productos").subscribe((response) => {
    console.log(response);
  });

}
}
