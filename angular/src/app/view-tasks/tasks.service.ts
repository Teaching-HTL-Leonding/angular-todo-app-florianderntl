import { Injectable } from '@angular/core';

export interface Task {
  description: string,
  assignedPerson: string,
  done: boolean
  // constructor(public description: string = "", public assignedPerson: string = "", public done: boolean = false) { }
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks: Task[];
  // public tasks!: Task[];  // used for filtering

  constructor() {
    this.tasks = [
      { description: "Task1", assignedPerson: "Elias", done: false },
      { description: "Task2", assignedPerson: "Erik", done: true },
      { description: "Task2", assignedPerson: "", done: false },
    ];

    // this.resetFilter();
  }

  // public resetFilter() {
  //   this.tasks = this._tasks;
  // }

  // public filterByPerson(name: string) {
  //   let tmpTasks = [];
  //   for (let task of this.tasks) {
  //     if (task.assignedPerson === name) {
  //       tmpTasks.push(task);
  //     }
  //   }
  //   this.tasks = tmpTasks;
  // }

  // public filterByDone(showDoneTasks: boolean) {
  //   let tmpTasks = [];
  //   for (let task of this.tasks) {
  //     if (!task.done || task.done === showDoneTasks) {
  //       tmpTasks.push(task);
  //     }
  //   }
  //   this.tasks = tmpTasks;
  // }

  public deleteTask(taskIx: number) {
    this.tasks.splice(taskIx, 1);
  }

  public addEmptyTask() {
    this.tasks.unshift({ description: "", assignedPerson: "", done: false });
    // this.resetFilter();
  }
}
