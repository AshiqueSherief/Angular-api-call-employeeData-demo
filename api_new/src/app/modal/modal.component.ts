import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public dialogRef:MatDialogRef<ModalComponent>) {}
  backer(){
    this.dialogRef.close
    ({event:"cancel"})
  }
  deleter(){
    this.dialogRef.close
    ({event:"delete"})
  }
}
