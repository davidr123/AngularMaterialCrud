import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginInterface } from '../interfaces/login-interface';

import {catchError, delay, map, tap} from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario.models';
import { CargarUsuario } from '../interfaces/cargarusuario-interface';


const base_url= environment.base_url;

@Injectable({
  providedIn: 'root'
})



export class UsuariosService {

  //http://localhost:3005/api/usuarios

  //http://localhost:3005/api/usuarios

public usuario:Usuario;

  constructor(private http:HttpClient) {

   }

  get token(){
    return localStorage.getItem('token') || '';
  }

  get uid(){
    return this.usuario.uid || '';
  }

  get headers(){

    return {headers:{
      'x-token': this.token
    }}

  }


  ValidarToken():Observable<boolean>{

    localStorage.getItem('token') || '';
    const url= `${base_url}/login/renew`
   return this.http.get(url, this.headers).
   pipe(
     map((resp:any)=>{
      

       const {
        nombre,
        email,
        img='',
        role,
        uid
     }= resp.usuario;

     this.usuario= new Usuario(nombre, email, img, role, uid);
     localStorage.setItem('token', resp.token);
     return true;
     }),
     
     catchError(error=>of(false))
   );
    

  }



  crearUsuario(data:LoginInterface){

  const url= `${base_url}/usuarios`;

  return this.http.post(url, data).pipe(
    map((resp:any)=>{
      localStorage.setItem('token', resp.token);
    })
  );;

  }

  
loginUsuario(data:LoginInterface){

    const url= `${base_url}/login`;
  
    return this.http.post(url, data).pipe(
      map((resp:any)=>{
        localStorage.setItem('token', resp.token);
      })
    );
  
    }


    logout(){
      localStorage.removeItem('token');

    }


    actualizarUsuario(data:{nombre:string, email: string, role:string}){
      //http://localhost:3005/api/usuarios/61d23b1becb11e35555ad9db

      data={
        ... data,
        role:this.usuario.role
      }

      const url=`${base_url}/usuarios/${this.uid}`;
       return this.http.put(url, data, this.headers);
    }


 
cargarusuario(desde:number=0){

  //http://localhost:3005/api/usuarios/
  const url = `${base_url}/usuarios?desde=/${desde}`;
 return this.http.get<CargarUsuario>(url,  this.headers ).
 pipe(
   delay(1000),
   map(resp=>{

    const usuario = resp.usuarios.map(

      user=> new Usuario(user.nombre, user.email, user.img, user.role, user.uid)
    )

    return{
      total:resp.total,
      usuario
    };
   } )
 )

}


borrarusuario( usuario:Usuario)
{
//http://localhost:3005/api/hospitales/619be1de8c20c6087b78e813
  const url = `${base_url}/usuarios/${usuario.uid}`;

  return this.http.delete(url, this.headers);

}




}
