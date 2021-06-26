import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EmployeeList } from '../model/employee-list';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  public getAllEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/employees");    
  }

  public getEmployee(id: number):Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/employee/" + id);
  }
}
