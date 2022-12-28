import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  details: any
  constructor(private appService: AppService, private http: HttpClient, public dialog:MatDialog,) { setTimeout(()=>{
    this.appService.apiGetter().subscribe(data => { console.log("data",data); this.details = data; console.log("details",this.details)})

  },500)
  }

  
  deleter(e:string) {
    console.log("id=.",e)
    const dialogRef=this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe((res)=>{
      console.log("res",res)
      if (res.event==="delete")
      
      this.appService.apiDeleter(e).subscribe((data)=>(console.log(data)))
      setTimeout(()=> {this.appService.apiGetter().subscribe((data)=>(this.details = data))},800)
    })

 
  }

  editor(e:string) {
    console.log("id=.",e)
    this.appService.apiEditor(e)
  }
}
