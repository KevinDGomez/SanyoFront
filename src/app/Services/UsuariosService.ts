import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url:string="https://localhost:44377/api/"
  constructor(private http: HttpClient) { }

  GetAllUsuarios() {
    return this.http.get(this.url+"Usuarios");
  }

  // GetAllUsuarios() {
  //   return this.http.get(this.url + 'Usuarios').subscribe((response) => {
  //     console.log(response);
  //   });
  // }
}



