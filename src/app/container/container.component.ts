import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild (EmployeeComponent) employeeContent! : EmployeeComponent
  
  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.employeeContent);
    this.employeeContent.empName = 'Morty' 
  }

  ngOnInit(): void { }

}
