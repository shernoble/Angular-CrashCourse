import { Component } from '@angular/core';
// importing component from core
// component declaration
@Component({
  // html tag that you are going to use to embed your component in index.html
  selector: 'app-root',
  // html file that we are using
  templateUrl: './app.component.html',
  // styles file we are using, can be more than one
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // put properties and any methods related to the component
  
}
