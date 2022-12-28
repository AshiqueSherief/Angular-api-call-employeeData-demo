import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  store :any
  
  apiGetter(){
    let url="http://localhost:12345/employees"
    return this.http.get(url)
  }
 
  apiDeleter(e:string){
   return  this.http.delete(`http://localhost:12345/employees/${e}`)
  }
  apiEditor(e:string){
    this.store=e
  }
}
