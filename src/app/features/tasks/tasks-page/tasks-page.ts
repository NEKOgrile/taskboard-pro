import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService, Task } from '../../../core/services/task-service';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskStats } from '../task-stats/task-stats';
import { TaskEdit } from '../task-edit/task-edit';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [AsyncPipe, TaskStats],
  templateUrl: './tasks-page.html',
  styleUrls: ['./tasks-page.scss']
})
export class TasksPage {

  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  // ajouer une tache
  addTask(title: string): void {
    if (!title.trim()) return;
    this.taskService.addTask(title);
  }

  // suprimer une tache
  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  // basculer etat tache
  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

  // mettre a jour le titre
  updateTask(id: number, title: string): void {
    this.taskService.updateTask(id, title);
  }

  // mettre en avant une tache
  highlight(task: Task): void {
    this.container.clear();
    const ref = this.container.createComponent(TaskHighlight);
    ref.instance.title = task.title;
  }

  // editer une tache
  edit(task: Task): void {
    this.container.clear();
    const ref = this.container.createComponent(TaskEdit);
    ref.instance.task = task;
    ref.instance.onSave.subscribe((newTitle: string) => {
      this.updateTask(task.id, newTitle);
      this.container.clear();
    });
    ref.instance.onCancel.subscribe(() => {
      this.container.clear();
    });
  }
}
