import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from 'src/app/models/usuario.models';
import { FileUploadsService } from 'src/app/services/file-uploads.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  FormPerfil:FormGroup;
 public usuario:Usuario;
 public imagenSubir: File;

 public imgTemp:any;

  constructor(private fb:FormBuilder, private  usuarioService: UsuariosService,
    private fileUploadService: FileUploadsService) { 
this.usuario= usuarioService.usuario;
    
  }

  ngOnInit(): void {

    this.FormPerfil= this.fb.group({
      nombre:[this.usuario.nombre ,Validators.required],
      email:[this.usuario.email, [Validators.required, Validators.email]]
    });
  }

  ActualizarPerfil(){
    this.usuarioService.actualizarUsuario(this.FormPerfil.value)
    .subscribe(resp=>{
     const{nombre, email}= this.FormPerfil.value;

this.usuario.nombre= nombre;
this.usuario.email= email;

Swal.fire('Guardado', 'Los cambios han sido actualizados', 'success');

      console.log(resp);
    }, (err)=>{
      Swal.fire('Error', err.error.msg , 'error')
    })
    console.log(this.FormPerfil.value);

  }

  cambiarImagen( file:File){
    console.log(file)
    this.imagenSubir= file;

    if(!file){return this.imgTemp=null;}

    const reader= new FileReader();
    const url64= reader.readAsDataURL(file);

    reader.onloadend=()=>{
      this.imgTemp= reader.result;

    }

  }

  ActualizarFotoPerfil(){

    this.fileUploadService.ActualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid)
 .then( img =>{
   this.usuario.img= img;
   console.log(img)
 } );

 Swal.fire('Guardado', 'La foto de perfil  a sido actualizada', 'success');

  }
}
