import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  details: any;
  constructor(private appService: AppService, private http: HttpClient) {
    this.appService.apiGetter().subscribe(data => { console.log(data); this.details = data })
  }

  employeeForm = new FormGroup({
    name:new FormControl(this.appService.store.name),
    phone:new FormControl(this.appService.store.phone),
    email:new FormControl(this.appService.store.email),
    designation:new FormControl(this.appService.store.designation), 
    place:new FormControl(this.appService.store.place),
    address:new FormControl(this.appService.store.address)
  })

  apitest() {
    console.warn(this.details)
  }
  clicker() {

    this.http.put(`http://localhost:12345/employees/${this.appService.store.empId}`,
      {
        name: this.employeeForm.value.name,
        email: this.employeeForm.value.email,
        designation: this.employeeForm.value.designation,
        phone: this.employeeForm.value.phone,
        place: this.employeeForm.value.place,
        address: this.employeeForm.value.address,
      }).subscribe((data) => console.log("data",data))
      this.employeeForm.reset()
  }
  

}
