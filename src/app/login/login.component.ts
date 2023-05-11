import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email : string = ''
  password : string = ''

  constructor(private route : Router){}

  ngOnInit(): void {}

  Login(){
    if (this.email === 'jules@gmail.com' && this.password === 'jules123') {
      //this.route.navigate(['/rooms','add])
      this.route.navigateByUrl('/add')
    }
  }

}
