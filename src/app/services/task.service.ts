// service is like a class
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Task} from "../Task";
import {TASKS} from "../mock-tasks";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  // method to get tasks
  getTasks() : Observable<Task[]>{
    // of() -> turns inside into observable
    // getting data from backend
    return this.http.get<Task[]>(this.apiUrl);
  }
}
