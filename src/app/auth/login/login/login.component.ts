import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public formlogin= this.fb.group({

    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    remmenber:[false]

  })



  constructor(private fb:FormBuilder, private usuarioService:UsuariosService, 
    private route: Router) { }

  ngOnInit(): void {

  
  }


 

  LoginUser(){
    this.usuarioService.loginUsuario(this.formlogin.value)
    .subscribe(resp=>{
      console.log('ingreso exitoso')
      this.route.navigateByUrl('/dashboard');
      console.log(resp)
    });
  }





}
