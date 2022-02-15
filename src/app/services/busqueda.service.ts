import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.models';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  public usuario:Usuario;

  get token(){
     return localStorage.getItem('token') || '';
  }

  get headers(){
    
    return { headers:{
      'x-token': this.token
    }
  }
  }

  get uid(){
    return this.usuario.uid || '';
  }

  constructor(private http: HttpClient) { }


  buscarColeccion(
    tipo:'usuarios' | 'medicos' | 'hospitales',
    termino: string,

  ){
    // http://localhost:3005/api/todo/coleccion/medicos/S
 
   const url= `${base_url}/todo/coleccion/${tipo}/${termino}`;

   return this.http.get<any[]>(url, this.headers).
   pipe(
     map((resp:any)=> resp.resultados )
   );


 
    }
   

}
