import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm! : FormGroup

  constructor(private configService : ConfigService,private fb: FormBuilder){}
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      //roomId : [''],
      roomId : new FormControl({ value:'2',disabled:true}),
      guestName : [''],
      guestEmail : [''],
      checkinDate : [''],
      checkoutDate : [''],
      bookingStatus : [''],
      bookingAmount : [''],
      bookingDate : [''],
      phoneNumber : [''],
      guestCount : [''],
    })
  }

  addBooking(){
    console.log(this.bookingForm.getRawValue);
  }

}
