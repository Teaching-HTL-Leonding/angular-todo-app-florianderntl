import { Injectable } from '@angular/core';

export interface Task {
  description: string,
  assignedPerson: string,
  done: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Task[];

  constructor() {
    this.tasks = [
      { description: "Task1", assignedPerson: "Elias", done: false },
      { description: "Task2", assignedPerson: "Erik", done: true },
      { description: "Task2", assignedPerson: "", done: false },
    ];
  }

  public deleteTask(taskIx: number) {
    this.tasks.splice(taskIx, 1);
  }

  public addEmptyTask() {
    this.tasks.unshift({ description: "", assignedPerson: "", done: false });
  }
}
