import {
  Component,
  ViewChild,
  ViewContainerRef,
  inject
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../../../core/services/task-service';
import { TaskHighlight } from '../task-highlight/task-highlight';

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

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  showHighlight(title: string) {
    this.container.clear();

    const componentRef =
      this.container.createComponent(TaskHighlight);

    componentRef.instance.title = title;
  }
}
