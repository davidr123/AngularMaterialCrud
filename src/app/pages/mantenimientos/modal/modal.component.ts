import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.models';
import { FileUploadsService } from 'src/app/services/file-uploads.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {
  

  constructor( 
   private fileUploadService: FileUploadsService,
     public imagenModalService: ModalImagenService, 
     public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Usuario) {

   // this.usuario= usuarioService.usuario;
console.log(data)
   
   }

  public imagenSubir: File;
  public usuario:Usuario;
  public imgTemp:any;
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.imgTemp= null;
    this.dialogRef.close();
  }

 
  ActualizarFotoPerfil(){


    const id= this.imagenModalService.id;
    const tipo= this.imagenModalService.tipo

    this.fileUploadService.ActualizarFoto(this.imagenSubir, tipo, id)
 .then( img =>{

  Swal.fire('Guardado', 'La foto de perfil  a sido actualizada', 'success');
   this.imagenModalService.nuevaImagen.emit(img);
   this.onNoClick();
   console.log('viene',img)
 
 },error=>{
  Swal.fire('Error', 'no se pudo cargar la imagen de perfil', 'error');
 });



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



}
