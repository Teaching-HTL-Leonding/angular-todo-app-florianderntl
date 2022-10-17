import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from './tasks.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent {

  public assignedPersons: string[];
  public defaultAssignedPersonSelection: string;
  public showDoneTasks: boolean;
  public assignedPerson: string;
  public tasks!: Task[];

  constructor(public tasksService: TasksService) {
    this.assignedPersons = ["Me", "Erik", "Elias"];
    this.defaultAssignedPersonSelection = "ALL";
    this.showDoneTasks = true;
    this.assignedPerson = this.defaultAssignedPersonSelection;
    this.refresh();
  }

  public refresh() {
    this.tasks = this.tasksService.tasks;
    this.filterByDone(this.showDoneTasks);

    if (this.assignedPerson !== this.defaultAssignedPersonSelection) {
      this.filterByPerson(this.assignedPerson);
    }
  }

  private filterByPerson(name: string) {
    let tmpTasks = [];
    for (let task of this.tasks) {
      if (task.assignedPerson === name) {
        tmpTasks.push(task);
      }
    }
    this.tasks = tmpTasks;
  }

  private filterByDone(showDoneTasks: boolean) {
    let tmpTasks: Task[] = [];
    for (let task of this.tasks) {
      if (!task.done || task.done === showDoneTasks) {
        tmpTasks.push(task);
      }
    }
    this.tasks = tmpTasks;
  }

  public addEmptyTask() {
    this.assignedPerson = this.defaultAssignedPersonSelection;
    this.tasksService.addEmptyTask();
    this.refresh();
  }

  public deleteTask(taskIx: number) {
    this.tasksService.deleteTask(taskIx);
    this.refresh();
  }
}
