import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline templete!</h1>
  // <p> Come on come on turn up the music </p>`,
  styleUrls: ['./app.component.css']
  //styles: [`h1 { color : red }`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
  role = 'Manager'
}
