import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hospital } from 'src/app/models/hospital.models';
import { HospitalesService } from 'src/app/services/hospitales.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public hospitales:Hospital[]=[];

  ELEMENT_DATA: Hospital[]=[];

  displayedColumns: string[] = ['avatar',  'nombre',  'acciones'];
  dataSource= new MatTableDataSource<Hospital>(this.ELEMENT_DATA);
    
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public cargando: boolean= true;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }


  constructor(private hospitalService: HospitalesService) { }

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

    this.hospitalService.cargarhospital()
    .subscribe(resp=> {
      this.hospitales= resp.hospital;
      console.log(this.hospitales);
    })
  }

}
