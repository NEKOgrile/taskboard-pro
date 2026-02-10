import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-highlight',
    changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <div class="task-highlight">
      <h3>Tâche mise en avant</h3>
      <p>{{ title }}</p>
    </div>
  `,
  styleUrls: ['./task-highlight.scss']
})
export class TaskHighlight {
  @Input() title = '';
}
