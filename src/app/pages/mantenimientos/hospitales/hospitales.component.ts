import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { Hospital } from 'src/app/models/hospital.models';
import { HospitalesService } from 'src/app/services/hospitales.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  ELEMENT_DATA_HOSPITAL: Hospital[]=[];

  displayedColumnsHospitales=['avatar', 'nombre', 'acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

public cargando: boolean= true;
public hospitales: Hospital[]=[];

dataSource= new MatTableDataSource<Hospital>(this.ELEMENT_DATA_HOSPITAL);

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
 // this.dataSource.sort = this.sort;
  
}

  constructor( public dialog: MatDialog, private hospitalService:HospitalesService) { }

  ngOnInit(): void {
    this.CargarHospitales();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  CargarHospitales(){
    this.cargando=true
this.hospitalService.cargarhospitales().

subscribe(hospitalDB=>{
  this.cargando=false;
  console.log(hospitalDB);


  
} )

  }

}
