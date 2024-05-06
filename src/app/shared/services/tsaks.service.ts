import { Injectable } from '@angular/core';
import { Tsak } from '../interfaces/tsak';

@Injectable({
  providedIn: 'root'
})
export class TsaksService {

  constructor() { 
    let storedData = localStorage.getItem('task');
    if (storedData) {
      this.task = JSON.parse(storedData);
    }
    else {
      this.task = [];
    }
  }
  task: Tsak[] = [
  ]
  delete(i:number) {
    this.task.splice(i, 1);
    this.saveData();
  }
  addTask(title:any , description:any) {
    this.task.push({
      title,
      description
    })
        this.saveData();

  }
  update(id:any ,  item:any) {
    this.task[id] = item;
        this.saveData();

  }
  saveData() {
    localStorage.setItem('task' ,JSON.stringify(this.task))
  }
}
