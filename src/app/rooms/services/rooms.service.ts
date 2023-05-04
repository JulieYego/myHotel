import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType : "Deluxe Room",
      amenities : "Air Conditioning, Free Wi-Fi, TV, Bathroom, City View",
      price : 1500,
      photos : "https://unsplash.com/photos/VGs8z60yT2c",
      checkinTime : new Date('12-Feb-2023'),
      checkoutTime : new Date('16-Feb-2023'),
      rating: 4.5
    },{
      roomNumber: 2,
      roomType : "Standard Room",
      amenities : "Air Conditioning, Free Wi-Fi, Bathroom",
      price : 500,
      photos : "https://unsplash.com/photos/oxeCZrodz78",
      checkinTime : new Date('28-Feb-2023'),
      checkoutTime : new Date('1-Mar-2023'),
      rating: 3.141592
    },{
      roomNumber: 3,
      roomType : "Private Suite",
      amenities : "Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchenette, Living Room",
      price : 15000,
      photos : "https://unsplash.com/photos/KFDuhyW5H5w",
      checkinTime : new Date('7-Apr-2023'),
      checkoutTime : new Date('12-Apr-2023'),
      rating: 4.8
    }
  ]

  constructor() { 
    console.log("Room service initialized......");
    
  }

  getRooms(){
    return this.roomList
  }
}
