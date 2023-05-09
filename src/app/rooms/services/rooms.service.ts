import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList : RoomList[] = []
  //headers = new HttpHeaders({'token' : '234nsnjk5u9w'})

  getRooms$ = this.http.get<RoomList[]>('/api/v1/room/getRooms').pipe(
    shareReplay(1)
  )

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config : AppConfig,
    private http: HttpClient) { 
    //console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    console.log("Room service initialized......");
  }

  getRooms(){
    return this.http.get<RoomList[]>('/api/v1/room/getRooms')
  }

  addRoom(room : RoomList){
    return this.http.post<RoomList[]>('/api/v1/room/addRoom',room)
  }

  editRoom(room : RoomList){
    return this.http.put<RoomList[]>(`/api/v1/room/updateRoom/${room.roomNumber}`,room)
  }

  deleteRoom(id : number){
    return this.http.delete<string>(`/api/v1/room/deleteRoom/${id}`)
  }

  getPhotos(){
    const request = new HttpRequest(
      "GET",
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress : true,
      })
      return this.http.request(request)
  }
}
