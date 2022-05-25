import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../Models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  url: String="https://localhost:44374/api/"
  constructor(public http: HttpClient) { }

  GetAllUsuarios() {
    return this.http.get(this.url+"Usuarios");
  }

  public CreateUser(Usuario : UserI){
    this.http.post(this.url+"Usuarios",Usuario).subscribe(response =>{

      console.log(response);

    });
    }

  }





