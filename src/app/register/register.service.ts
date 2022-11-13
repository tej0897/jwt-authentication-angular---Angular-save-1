import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(empID: string, empName:string, password:string):Observable<any>{
    return this.http.post('http://localhost:8080/auth/emp/registerEmp',{empID, empName ,password})
  }
}
