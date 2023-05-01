import { Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline templete!</h1>
  // <p> Come on come on turn up the music </p>`,
  styleUrls: ['./app.component.css']
  //styles: [`h1 { color : red }`]
})
export class AppComponent implements AfterViewInit, OnInit {
  ngOnInit(): void {
    console.log(this.name.nativeElement.innerText = "Melting")
  }
  
  title = 'hotelinventoryapp';
  role = 'Manager'

  // ViewContainerRef API creates an instance of the user template and inserts it into the DOM 
  //@ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms = 50
  }

  @ViewChild('name', { static:true }) name!: ElementRef

}
