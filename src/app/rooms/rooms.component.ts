import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Pearl Lodge'
  numberOfRooms = 10
  hideRooms = true;
  numberOfGuests = 90
  selectedRoom! : RoomList
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5 
  }

  title = 'Room List'

  roomList : RoomList[] = []

  stream = new Observable(observer => {
    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    //observer.error('error')
  })

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent

  @ViewChildren(HeaderComponent) headerChildren! : QueryList<HeaderComponent>


  // @ViewChild('child', { static:true }) childComponent! : RoomsListComponent

  // childMethod() {
  //   this.childComponent.sayHello()
  // }

  totalBytes = 0

  subscription! : Subscription

  error$ : Subject<string> = new Subject<string>

  getErrors$ = this.error$.asObservable()

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      //console.log(err);
      this.error$.next(err.message)
      return of([])
    })
  )

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(
    @SkipSelf() private roomsService : RoomsService, 
    private configService : ConfigService
    ) {}
  
  ngOnInit() : void {
    //console.log(this.headerComponent)
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    this.stream.subscribe((data) => console.log(data))
    // this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    //   //console.log(this.roomList);
    // })

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type){
        case HttpEventType.Sent: {
          console.log('Request Sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }

      }
      
    })
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
      "roomNumber": 2,
      "roomType" : "Private Suite",
      "roomAmenities" : "Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchenette, Living Room",
      "roomPrice" : 15000,
      "roomPhoto" : "https://unsplash.com/photos/KFDuhyW5H5w",
      "checkinTime" : new Date('7-Apr-2023'),
      "checkoutTime" : new Date('12-Apr-2023'),
      "roomRating": 4.8
    }

    //this.roomList.push(room)
    //this.roomList = [...this.roomList,room]
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  editRoom(){
    const room : RoomList = {
      "roomNumber": 2,
      "roomType" : "Private Suite",
      "roomAmenities" : "Air Conditioning, Free Wi-Fi, TV, Bathroom, Kitchenette, Living Room",
      "roomPrice" : 15000,
      "roomPhoto" : "https://unsplash.com/photos/KFDuhyW5H5w",
      "checkinTime" : new Date('7-Apr-2023'),
      "checkoutTime" : new Date('12-Apr-2023'),
      "roomRating": 1.7
    }

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  deleteRoom(){
    this.roomsService.deleteRoom(6).subscribe((data) => {

    })
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
