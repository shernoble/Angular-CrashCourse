// service is like a class
import { Injectable } from '@angular/core';
import {Task} from "../Task";
import {TASKS} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // method to get tasks
  getTasks() : Task[]{
    return TASKS;
  }
}
