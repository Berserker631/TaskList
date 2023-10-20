import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskListDataSource: [] = [];
  // displayedColumns: string[] = ['idTask', 'description', 'icon', 'dateStart', 'stimatedTime', 'priority', 'user'];
  displayedColumns: string[] = ['idTask', 'description', 'icon', 'dateStart', 'stimatedTime' ];
  // taskListDataSource: PeriodicElement[] = ELEMENT_DATA;

  constructor( private taskList: TaskListService){}

  ngOnInit(){
    this.taskList.getTaskList().subscribe({
      next: (response ) =>{
        this.taskListDataSource = response
      }
    })
  }

}
