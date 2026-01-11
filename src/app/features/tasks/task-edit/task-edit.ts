import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../core/services/task-service';

@Component({
  selector: 'app-task-edit',
  imports: [FormsModule],
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.scss',
})
export class TaskEdit implements OnChanges {
  @Input() task!: Task;
  @Output() onSave = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();

  newTitle = '';

  // quand la tache change, mettre a jour le titre
  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'] && this.task) {
      this.newTitle = this.task.title;
    }
  }

  // sauvegarder les changement
  save() {
    this.onSave.emit(this.newTitle);
  }

  // anuler l'edition
  cancel() {
    this.onCancel.emit();
  }
}
