import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = 'Pearl Lodge'
  numberOfRooms = 10
  hideRooms = false;
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5 
  }

  roomList : RoomList[] = [{
    roomNumber: 1,
    roomType : "Deluxe Room",
    amenities : "Air Conditioning, Free Wi-Fi, TV, Bathroom, City View",
    price : 1500,
    photos : "https://unsplash.com/photos/VGs8z60yT2c",
    checkinTime : new Date('12-Feb-2023'),
    checkoutTime : new Date('16-Feb-2023')
  },{
    roomNumber: 2,
    roomType : "Standard Room",
    amenities : "Air Conditioning, Free Wi-Fi, Bathroom",
    price : 500,
    photos : "https://unsplash.com/photos/oxeCZrodz78",
    checkinTime : new Date('28-Feb-2023'),
    checkoutTime : new Date('1-Mar-2023')
  },{
    roomNumber: 3,
    roomType : "Private Suite",
    amenities : "Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchenette, Living Room",
    price : 15000,
    photos : "https://unsplash.com/photos/KFDuhyW5H5w",
    checkinTime : new Date('7-Apr-2023'),
    checkoutTime : new Date('12-Apr-2023')
  }]

  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
