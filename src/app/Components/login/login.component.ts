import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/Services/UsuariosService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public api: UsuariosService) {

  }

  ngOnInit(): void {

  }

  MyForm = new FormGroup({
    Documento: new FormControl('',Validators.required, ),
    Nombre: new FormControl('', Validators.required),
    Apellido: new FormControl('', Validators.required),
    Correo: new FormControl('',Validators.required),
    Contraseña: new FormControl('', Validators.required)
  })

  CreateUser() {
      if (this.MyForm.valid){
        this.api.CreateUser(this.MyForm.value);
        console.log('registrado');
      }
      else{
        console.log('formulario no valido')

      }
      }
  }

