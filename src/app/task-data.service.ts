import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  API_URL = 'http://34.221.191.169:8000/tasks/';
  tasks: any;

  constructor(private http: HttpClient) { }
  //response.hasOwnProperty('results')
  public getTasks() {
    this.tasks = this.http.get(`${this.API_URL}`);
    return this.tasks;
  }

  public deleteTask(id: number) {
    console.log("DELETING TASK: ", id);
    let headers = {body: `{"id":"${id}"}`};
    return this.http.delete(`${this.API_URL}`, headers);
  }

  public updateTaskCompletion(id: number) {
    console.log("UPDATING TASK: ", id);
    let body = `{"id":"${id}"}`;
    return this.http.patch(`${this.API_URL}`, body);
  }

  public createTask(name: string) {
    console.log("CREATING TASK: ", name);
    let body = `{"name":"${name}","completed":"False"}`;
    return this.http.post(`${this.API_URL}`, body);
  }
}
