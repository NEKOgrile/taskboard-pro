import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../../core/services/task-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-stats',
  imports: [AsyncPipe],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.scss',
})
export class TaskStats {

  private taskService = inject(TaskService);

  // calculer les stat avec map
  stats$ = this.taskService.allTasks$.pipe(
    map(tasks => {
      const total = tasks.length;
      const completed = tasks.filter(t => t.completed).length;
      const active = total - completed;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { total, completed, active, percentage };
    })
  );
}
