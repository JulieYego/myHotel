import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  empName : string = 'Dylan'

  constructor() {}

  ngOnInit(): void {
  }

}
