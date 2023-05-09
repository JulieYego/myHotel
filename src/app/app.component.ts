import { Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, OnInit, Optional, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token'; 
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline templete!</h1>
  // <p> Come on come on turn up the music </p>`,
  styleUrls: ['./app.component.css']
  //styles: [`h1 { color : red }`]
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(
    @Optional() private loggerService : LoggerService,
    @Inject(localStorageToken) private localStorage : any,
    private initService : InitService
    ) {
      console.log(initService.config);  
    }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()')
    this.name.nativeElement.innerText = "Melting"
    this.localStorage.setItem('name' , 'Pearl Lodge')    
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
