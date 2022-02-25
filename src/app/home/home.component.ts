import { Component, OnInit } from '@angular/core';

import { TaskDataService } from '../task-data.service';

import { interval, Subscription } from 'rxjs';

export interface Task {
  id: number,
  name: string,
  completed: boolean
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: any;
  visible_tasks: any;
  subscription!: Subscription;

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit(): void {
    this.taskDataService.getTasks()
      .subscribe((response: any) => {
        this.tasks = response;
        this.sort_tasks();
      });
      
      //emit value in sequence every 10 second
      const source = interval(20000);
      this.subscription = source.subscribe(val => this.taskDataService.getTasks()
        .subscribe((response: any) => {
          this.tasks = response;
        }));
  }

  public sort_tasks(): void {
    // sort in reversed order, since completed (1) should be on bottom instead of top
    this.tasks.reverse(function(x: Task, y: Task) {
      return Number(x.completed) - Number(y.completed);
    });
  }

  public update_task(id: number) {
    this.taskDataService.updateTaskCompletion(id)
      .subscribe((response: any) => {
        this.sort_tasks();
      });
  }

  public new_task_modal(): void {
    // Open new task modal
    if(document.getElementById("new-task-modal")) {
      if(document.getElementById("new-task-modal")!.style.display === "none") {
        document.getElementById("new-task-modal")!.style.display = "flex";

        document.getElementById("new-task-plus-icon")!.style.transform = "rotate(45deg)";
      } else{
        document.getElementById("new-task-modal")!.style.display = "none";
      
        document.getElementById("new-task-plus-icon")!.style.transform = "rotate(0deg)";
      }
    }
  }

  public create_new_task(): void {
    // close the modal
    this.new_task_modal();

    const inputElement = document.getElementById("new-task-name") as HTMLInputElement;
    let task_name = inputElement!.value;

    this.taskDataService.createTask(task_name)
      .subscribe((response: any) => {
        this.taskDataService.getTasks()
          .subscribe((response: any) => {
            this.tasks = response;
          });
      });
    
  }

  public delete_task(id: number): void {
    this.taskDataService.deleteTask(id)
      .subscribe((response: any) => {
        this.taskDataService.getTasks()
          .subscribe((response: any) => {
            this.tasks = response;
          });
      });

  }
}
