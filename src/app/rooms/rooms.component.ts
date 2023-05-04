import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Pearl Lodge'
  numberOfRooms = 10
  hideRooms = false;
  numberOfGuests = 90
  selectedRoom! : RoomList
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5 
  }

  title = 'Room List'

  roomList : RoomList[] = []

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent

  @ViewChildren(HeaderComponent) headerChildren! : QueryList<HeaderComponent>


  // @ViewChild('child', { static:true }) childComponent! : RoomsListComponent

  // childMethod() {
  //   this.childComponent.sayHello()
  // }

  constructor(@SkipSelf() private roomsService : RoomsService) {}
  
  ngOnInit() : void {
    //console.log(this.headerComponent)
    this.roomList = this.roomsService.getRooms()
  }

  ngDoCheck(): void {
    console.log('on changes is called')
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Room View"
    this.headerChildren.last.title = "Last Title"
    //console.log(this.headerChildren);
  }
  
  ngAfterViewChecked(): void {}
  
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
