import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeServiceService } from '../services/employee-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListEmployeesComponent implements OnInit {

  constructor(private service: EmployeeServiceService,private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'yearSalary', 'jobTitleName'];
  id:any;
  public employees: Employee[] = [];

  ngOnInit(): void {
  }

  search(){
    console.log(this.id);
    if(this.id == undefined || this.id == null){        
      this.service.getAllEmployees().subscribe(data => {
        console.log(data.employees); 
        this.employees = data.employees;
      },
      (error) => {
        console.log("server error")
      });
    }else{      
      this.service.getEmployee(this.id).subscribe(data => {
        console.log(data); 
        this.employees = [];
        this.employees.push(data);
      },
      (error) => {
        console.log("server error")
        this.employees = [];
        this._snackBar.open("Employee id not found","Ok", {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
        });
      });

    }
  }
}
