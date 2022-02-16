import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospital.models';

const base_url= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private http: HttpClient) { }

  get token(){
    return localStorage.getItem('token') || '';
  }

  

  get headers(){

    return {headers:{
      'x-token': this.token
    }}

  }

  CargarHospitales(){
    
  
    const url = `${base_url}/hospitales`
    return this.http.get(url, this.headers)
    
  
  }



  crearHospitales(nombre:string){
    const url= `${base_url}/hospitales`;
    return this.http.post(url, {nombre}, this.headers );
  }

  actualizarHospitales(_id:string, nombre:string){
    const url= `${base_url}/hospitales/${_id}`;
    return this.http.put(url, {nombre},this.headers );


  }


}
