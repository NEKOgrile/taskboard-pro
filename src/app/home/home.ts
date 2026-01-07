import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TaskService } from '../core/services/task-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit, OnDestroy {

  // 🔹 Injection Angular 21
  private taskService = inject(TaskService);

  // 🔹 Observable des tâches (BehaviorSubject)
  tasks$ = this.taskService.tasks$;

  // 🔹 Timer asynchrone
  count = signal(0);
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.count.update(v => v + 1);
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // ✅ MÉTHODE APPELÉE PAR LE TEMPLATE
  addTask(title: string): void {
    if (!title.trim()) {
      return;
    }
    this.taskService.addTask(title);
  }
}
