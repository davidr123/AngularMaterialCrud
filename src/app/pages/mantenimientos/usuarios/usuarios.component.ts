import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { delay, Subscription } from 'rxjs';



import { Usuario } from 'src/app/models/usuario.models';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
import { ModalComponent } from '../modal/modal.component';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,  AfterViewInit, OnDestroy {

  public TotalUsuario:number=0;
  public usuario:Usuario[]=[];

  ELEMENT_DATA: Usuario[]=[];


  public imgSubs:Subscription;
  public cargando: boolean= true;
  public tipo:  'usuarios'|'medicos'|'hospitales';
  public id: string;
  public img: string;

  
  displayedColumns: string[] = ['avatar', 'email', 'nombre', 'role', 'acciones'];
dataSource= new MatTableDataSource<Usuario>(this.ELEMENT_DATA);
  
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  
}
  constructor(private usuarioService: UsuariosService, private busquedaService: BusquedaService,
    public dialog: MatDialog, private moadalImagenService: ModalImagenService) {


     
    
   }
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  

  ngOnInit(): void {
    this.CargarUsuarios();
    this.imgSubs= this.moadalImagenService.nuevaImagen
    .pipe(
      delay(100)
    )
    .subscribe(img=>{
      
      console.log('usuario',img)
      this.CargarUsuarios();
    })
  }

 



  CargarUsuarios(){
   this.cargando= true;
this.usuarioService.cargarusuario(0).
subscribe(resp=>{
 this.TotalUsuario= resp.total;
 this.usuario= resp.usuario;

 this.dataSource.data= resp.usuario
this.cargando=false;
 
})

  }

  BuscarPalabra(termino: string){
this.busquedaService.buscarColeccion('usuarios', termino)
.subscribe(resultados=>{
  console.log(resultados)
  this.usuario= resultados;
  

});

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

BorrarUsuario(usuario:Usuario){

  if(usuario.uid === this.usuarioService.uid){
    return Swal.fire('Error', `No puede borrarse a usted mismi ${usuario.nombre}`, 'error');
  }

  Swal.fire({
    title: 'Borrar Usuario',
    text: `Estas seguro que deseas borrar a ${usuario.nombre}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',

    confirmButtonText: 'Si, borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.usuarioService.borrarusuario(usuario)
      .subscribe(resp=>{
        this.CargarUsuarios();
        Swal.fire('Usuario Borrado', `${usuario.nombre} fue eliminado correctamente`, 'success')
        console.log(resp)
       
      } );
    }
  })



}


abrirModal(usuario:Usuario) {
  console.log(usuario)


}

openDialog(usuario:Usuario) {
  console.log(usuario)
  const dialogRef = this.dialog.open(ModalComponent, {
  
    width:'1700px,',
    data: {img: this.moadalImagenService.abriImagenModal('usuarios', usuario.uid, usuario.img) },

    
  });


  
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}

}