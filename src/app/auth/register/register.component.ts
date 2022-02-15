import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

const base_url= environment.base_url;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmited= false;

public FormRegister= this.fb.group({
  nombre: ['', Validators.required],
  email:['', [Validators.required, Validators.email]],
  password:['', Validators.required],
  password2:['', Validators.required],
  terminos:[false, Validators.required], 
},{
  
  validators:this.ContrasenasIguales('password','password2')
})


  constructor(private fb:FormBuilder, private http:HttpClient, private usuarioSrvice:UsuariosService
    ,private route:Router) { }

  ngOnInit(): void {
  }

  ContrasenasIguales(password1: string, password2:string){

    return(formgroup:FormGroup)=>{
      const paswwordControl1= formgroup.get(password1)
      const paswwordControl2= formgroup.get(password2)
    
 if(paswwordControl1?.value=== paswwordControl2?.value){
      paswwordControl2?.setErrors(null);
      
    }else{
      paswwordControl2?.setErrors({NoesIgual:true})
    }
  }

  }

  CampoNovalido(campo:string): boolean{

  if(this.FormRegister.get(campo)?.invalid && this.formSubmited){
    return true;
  }else{
    return false;
  }

  }

  ConstrasenasNoIguales(){
const pass1= this.FormRegister.get('password')?.value;
const pass2= this.FormRegister.get('password2')?.value;

if(pass1!==pass2 && this.formSubmited){
  return true;
}else
{
  return false;
}

  }

  CrearUsuarios(){
    this.formSubmited=true;



this.usuarioSrvice.crearUsuario(this.FormRegister.value).
subscribe(resp=>{
  console.log('usuario creado')
  console.log(resp);
  this.route.navigateByUrl('/dashboard');
}, (err=>{
  console.log(err)
}))


  }

}
