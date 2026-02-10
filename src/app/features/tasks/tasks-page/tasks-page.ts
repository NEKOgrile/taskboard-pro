import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService, Task } from '../../../core/services/task-service';
import { TaskHighlight } from '../task-highlight/task-highlight';
import { TaskStats } from '../task-stats/task-stats';
import { TaskEdit } from '../task-edit/task-edit';

@Component({
  selector: 'app-tasks-page',
   changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, TaskStats, TaskHighlight, TaskEdit],
  templateUrl: './tasks-page.html',
  styleUrls: ['./tasks-page.scss']
})
export class TasksPage {

  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  // État des composants affichés
  highlightedTask: Task | null = null;
  editingTask: Task | null = null;

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
    this.editingTask = null;
  }

  // mettre en avant une tache
  highlight(task: Task): void {
    this.highlightedTask = task;
  }

  // editer une tache
  edit(task: Task): void {
    this.editingTask = task;
  }

  // annuler l'édition
  cancelEdit(): void {
    this.editingTask = null;
  }
}
