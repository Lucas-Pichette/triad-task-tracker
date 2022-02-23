import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  API_URL = 'https://pokeapi.co/api/v2/pokemon';
  tasks: any;

  constructor(private http: HttpClient) { }
  //response.hasOwnProperty('results')
  public getTasks() {
    this.tasks = this.http.get(`${this.API_URL}?limit=10`);
    return this.tasks;
  }
}
