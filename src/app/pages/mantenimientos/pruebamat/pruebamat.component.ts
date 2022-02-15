import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalpruebaComponent } from '../modalprueba/modalprueba.component';


export class DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-pruebamat',
  templateUrl: './pruebamat.component.html',
  styles: [
  ]
})
export class PruebamatComponent implements OnInit {

 

  animal: DialogData;
  name: DialogData;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalpruebaComponent, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
