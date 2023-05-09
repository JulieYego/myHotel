import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent implements OnInit{

  id : number = 0
  // id$ = this.router.params.pipe(
  //   map(params => params['id'])
  // )

  id$ = this.router.paramMap.pipe(map((params) => params.get('id')))

  constructor(private router : ActivatedRoute){}

  ngOnInit(): void {
    //this.id = this.router.snapshot.params['id']

    // this.router.params.subscribe((params) =>{
    //   this.id = params['id']
      
    // })

    
  }

}
