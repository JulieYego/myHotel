import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  //can be used as a property of the <hinv-rooms-list> tag
  @Input() rooms: RoomList[] =[]

  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.title = changes['title'].currentValue.toUpperCase()
    
  }

  ngOnInit() : void {}

  selectRoom(room : RoomList){
    this.selectedRoom.emit(room)
  }

  extradets(){
    console.log("Extra deets (from rooms-list)")
  }

}
