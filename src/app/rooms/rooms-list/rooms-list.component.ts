import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  //can be used as a property of the <hinv-rooms-list> tag
  @Input() rooms: RoomList[] =[]

  @Input() title: string = ''

  @Input() numOfGuests : number = 0

  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes is:",changes);
    //this.title = changes['title'].currentValue.toUpperCase()
  }

  ngOnInit() : void {}

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }

  sayHello() {
    console.log("Hello from child component")
  }

  ngOnDestroy(): void {
    console.log('on destroy is called');
  }

}
