import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = 'task-tracker';
  showAddTask:boolean;
  subscription:Subscription;

  constructor(private uiService : UiService,private router : Router){
    this.subscription=this.uiService
    .onToggle()
    .subscribe(val =>{
      this.showAddTask=val;
    })
  }

  toggleAddClick(){
    this.uiService.toggleAddTask();
    
  }
  hasRoute(route :string){
    return this.router.url=== route;
  }

}
