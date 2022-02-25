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
}
