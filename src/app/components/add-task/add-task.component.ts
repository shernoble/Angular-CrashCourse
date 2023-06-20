import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task>=new EventEmitter();

  text:string;
  day:string;
  reminder:boolean=false;
  // to create a 2-way data-bindin between this property and the form inout , need to use directive called ngModel(part of the forms module-include in app-component)

  constructor(){}

  onSubmit(){
    if(!this.text){
      alert("Please enter a task!");
      return;
    }
    // can take default date at current day and time
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;


  }
}
