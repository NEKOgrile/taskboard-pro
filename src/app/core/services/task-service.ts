import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Créer TaskBoard Pro', completed: false }
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  // 👇 RXJS OPERATORS ICI (séquence 5)
  tasks$ = this.tasksSubject.asObservable().pipe(
    tap(tasks => console.log('Nouvelle liste :', tasks)),
    delay(1000),
    map(tasks => tasks.filter(t => !t.completed))
  );

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }
}
