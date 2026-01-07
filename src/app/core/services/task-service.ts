import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { Notification } from './notification';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private notification = inject(Notification);

  private tasks: Task[] = [
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Créer TaskBoard Pro', completed: false }
  ];

  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable().pipe(
    tap(tasks => console.log('Nouvelle liste :', tasks)),
    delay(1000),
    map(tasks => tasks.filter(t => !t.completed))
  );

  allTasks$ = this.tasksSubject.asObservable();

  // ajouer une tache
  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
    this.notification.show(`Tâche "${title}" ajoutée`);
  }

  // suprimer une tache
  deleteTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
    if (task) {
      this.notification.show(`Tâche "${task.title}" supprimée`);
    }
  }

  // basculer etat tache
  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks);
      this.notification.show(`Tâche "${task.title}" marquée comme ${task.completed ? 'terminée' : 'en cours'}`);
    }
  }

  // mettre a jour une tache
  updateTask(id: number, title: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = title;
      this.tasksSubject.next(this.tasks);
      this.notification.show(`Tâche mise à jour: "${title}"`);
    }
  }
}
