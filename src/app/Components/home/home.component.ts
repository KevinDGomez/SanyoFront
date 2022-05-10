import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/ApiserviceService';
import { UsuariosService } from 'src/app/Services/UsuariosService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaUsuario:any = [];
  constructor(public api: ApiserviceService, public usuarios: UsuariosService) { }

    ngOnInit(): void {
      let Usuarios= this.usuarios.GetAllUsuarios();
      console.log(Usuarios);
  }

  // GetAllUsuarios(){
  //   let usuarios = this.usuarios.GetAllUsuarios();
  //   console.log(usuarios);
  // }

  GetAllProductos(){
    this.usuarios.GetAllUsuarios().subscribe(response=>{
      this.listaUsuario = response;
      console.log(response);

    });
  }

}
