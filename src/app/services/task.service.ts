// service is like a class
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Task} from "../Task";



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

  delTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
