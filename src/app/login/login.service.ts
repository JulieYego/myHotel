import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false
  isAdmin: boolean = false

  login(email : string, password : string){
    if (email === 'jules@gmail.com' && password === 'jules123') {
      //this.route.navigate(['/rooms','add])
      this.isLoggedIn = true
      this.isAdmin = true
    }

    if (email === 'user@gmail.com' && password === 'jules123') {
      //this.route.navigate(['/rooms','add])
      this.isLoggedIn = true
      this.isAdmin = false
    }
    return this.isLoggedIn
  }

  constructor() { }
}
