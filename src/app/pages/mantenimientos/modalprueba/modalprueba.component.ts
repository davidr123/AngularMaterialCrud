import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../pruebamat/pruebamat.component';

@Component({
  selector: 'app-modalprueba',
  templateUrl: './modalprueba.component.html',
  styles: [
  ]
})
export class ModalpruebaComponent  {

  constructor(public dialogRef: MatDialogRef<ModalpruebaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

 
  onNoClick(): void {
    this.dialogRef.close()
  }

}
