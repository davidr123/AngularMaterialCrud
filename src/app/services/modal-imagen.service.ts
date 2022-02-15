import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url= environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  public tipo:  'usuarios'|'medicos'|'hospitales';
  public id: string;
  public img: string;

  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  public _ocultarModdal: boolean=true;

  

  constructor() { }

  get ocultarModal(){
    return this._ocultarModdal;
    }

  abriImagenModal(
    tipo:'usuarios'| 'medicos'| 'hospitales',
    id: string,
    img:string='no-image'
  ){
   this.tipo= tipo;
    this.id= id;
  


this.img= `${base_url}/upload/${tipo}/${img}`;



  }

  cerrarModal(){
    return  this._ocultarModdal=true;
  }
}
