import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean=false;
  private subject =new Subject<any>();

  constructor() { }

  // called when "Add" btn is clckd
  // when that happens, subscribe to onToggle();
  toggleAddTask():void{
    this.showAddTask=!this.showAddTask;
    // val=his.showAddTask passed in next()
    // val is caught in header.ts and sets the toggle
    this.subject.next(this.showAddTask);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
