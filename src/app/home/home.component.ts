import { Component, OnInit } from '@angular/core';

import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: any;

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit(): void {
    this.taskDataService.getTasks()
      .subscribe((response: any) => {
        this.tasks = response;
        console.log(this.tasks);
      });
  }
}
