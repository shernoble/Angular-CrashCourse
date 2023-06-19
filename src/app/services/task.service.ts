// service is like a class
import { Injectable } from '@angular/core';
import {Task} from "../Task";
import {TASKS} from "../mock-tasks";
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // method to get tasks
  getTasks() : Observable<Task[]>{
    // of() -> turns inside into observable
    const tasks=of(TASKS);
    return tasks;
  }
}
