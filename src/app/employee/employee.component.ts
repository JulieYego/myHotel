import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService] // local instance
})
export class EmployeeComponent implements OnInit{
  empName : string = 'Dylan'

  constructor(@Self() private roomsService : RoomsService) {}

  ngOnInit(): void {
  }
}
