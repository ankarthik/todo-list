import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  id = 4;

  public tasks = [
    { 'id': 1, 'task': 'First task'},
    { 'id': 2, 'task': 'Second task'},
    { 'id': 3, 'task': 'Third task'}
  ];

  postTask (task) {
    task.id = this.id;
    this.tasks.push(task);
    this.id += 1;
  }

  getTasks () {
    return this.tasks;
  }

  updateTask (task) {
    this.tasks.filter((t) => {
      if (task.id === t.id) {
        t.task = task.task;
      }
    });
  }

  deleteTask (task) {
    let index: number;
    this.tasks.filter((t, i) => {
      if (task.id === t.id) {
        index = i;
      }
    });
    this.tasks.splice(index, 1);
  }
}
