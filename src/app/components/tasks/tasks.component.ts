import { Component,OnInit } from '@angular/core';
import {Task} from "../../Task";
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // define property
  // can loop through this array in 
  tasks : Task[]=[];

  // to use the service, have to add it as a provider in the constructor
  constructor (private taskService : TaskService){}
  // to access anything fron TaskService : this.taskService.<anything that service provides>
  // inside ngOnInit btw

  ngOnInit() : void
  {
    // subscribe to observable
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks=tasks;
    })
  }

}
