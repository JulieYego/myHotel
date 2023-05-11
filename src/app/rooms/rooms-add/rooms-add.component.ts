import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomNumber: 0,
    roomType: '',
    roomAmenities: '',
    roomPrice: 0,
    roomPhoto: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    roomRating: 0,
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  AddRoom(roomsForm : NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room Added Successfully';
      //roomsForm.reset()
      roomsForm.resetForm({
        roomNumber: 0,
        roomType: '',
        roomAmenities: '',
        roomPrice: 0,
        roomPhoto: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        roomRating: 0,
      })
    });
  }
}
