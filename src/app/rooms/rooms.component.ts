import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Pearl Lodge'
  numberOfRooms = 10
  hideRooms = false;
  selectedRoom! : RoomList
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5 
  }

  roomList : RoomList[] = []
  title : string = 'Menu'

  constructor() {}
  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {
    this.headerComponent.title = "Pearly Whites"
  }
  ngDoCheck(): void {
    console.log('on changes is called')
  }

  ngOnInit() : void {
    console.log(this.headerComponent)
    this.roomList = [{
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
    }]
  }

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent

  toggle(){
    this.hideRooms = !this.hideRooms
    this.title = 'Our Menu'
  }

  selectRoom(room : RoomList){
    this.selectedRoom = room
    console.log(room)
  }

  addRoom(){
    const room : RoomList = {
      roomNumber: 4,
      roomType : "Private Suite",
      amenities : "Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchenette, Living Room",
      price : 15000,
      photos : "https://unsplash.com/photos/KFDuhyW5H5w",
      checkinTime : new Date('7-Apr-2023'),
      checkoutTime : new Date('12-Apr-2023'),
      rating: 4.8
    }

    //this.roomList.push(room)
    this.roomList = [...this.roomList,room]
  }
}
