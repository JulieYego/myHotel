import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = []

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config : AppConfig,
    private http: HttpClient) { 
    //console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    console.log("Room service initialized......");
  }

  getRooms(){
    return this.http.get<RoomList[]>('/api/v1/rooms/getRooms')
  }

  addRoom(room : RoomList){
    return this.http.post<RoomList[]>('/api/v1/rooms/addRoom',room)
  }
}
