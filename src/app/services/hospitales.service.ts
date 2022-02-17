import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cargarhospital } from '../interfaces/cargarhospitales.interface';
import { Hospital } from '../models/hospital.models';

const base_url= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  get token(){
    return localStorage.getItem('token') || '';
  }


  get headers(){

    return {headers:{
      'x-token': this.token
    }}

  }


  constructor(private http: HttpClient) { }

  cargarhospital(){
const url= `${base_url}/hospitales`;
return this.http.get<Cargarhospital>(url, this.headers )
.pipe(
  map(resp=>{
    const hospital = resp.hospital.map(

      hosp=> new Hospital(hosp.nombre, hosp._id, hosp.img)
    )

    return{
      ok: resp.ok,
      hospital
    }

  })
)
  }


}
