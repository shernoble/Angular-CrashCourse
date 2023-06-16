import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text:string;
  @Input() color:string;
  @Output() btnClick=new EventEmitter();
  // eventEmitter: Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.
  // Data flows into your component via property bindings and flows out of your component through event bindings.
  // If you want your component to notify his parent about something you can use the Output decorator with EventEmitter to create a custom event.
  

  OnClick(){
    this.btnClick.emit();
    
  }
}
