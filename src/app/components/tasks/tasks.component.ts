import { Component } from '@angular/core';
import {Task} from "../../Task";
import {TASKS} from "../../mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // define property
  // can loop through this array in 
  tasks : Task[]=TASKS;

}
