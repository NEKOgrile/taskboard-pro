import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../../core/services/task-service';
import { TaskHighlight } from '../task-highlight/task-highlight';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tasks-page.html',
  styleUrls: ['./tasks-page.scss']
})
export class TasksPage {

  private taskService = inject(TaskService);
  tasks$ = this.taskService.tasks$;

  @ViewChild('highlightContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  addTask(title: string): void {
    this.taskService.addTask(title);
  }

  highlight(task: Task): void {
    // Efface le contenu précédent
    this.container.clear();

    // Crée le composant dynamique
    const ref = this.container.createComponent(TaskHighlight);

    // Passe les données au composant
    ref.instance.title = task.title;
  }
}
