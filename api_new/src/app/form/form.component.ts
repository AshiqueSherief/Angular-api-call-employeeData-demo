import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  details: any;
  constructor(private appService: AppService, private http: HttpClient) {
    this.appService.apiGetter().subscribe(data => { console.log(data); this.details = data })
  }

  employeeForm = new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    designation:new FormControl(''), 
    place:new FormControl(''),
    address:new FormControl('')
  })

  apitest() {
    console.warn(this.details)
  }
  clicker() {

    this.http.post("http://localhost:12345/employees",
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
