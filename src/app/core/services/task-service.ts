import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// 1️⃣ Définir l’interface
export interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // 2️⃣ Tâches initiales typées
  private tasks: TaskItem[] = [
    { id: 1, title: 'Apprendre Angular', completed: false },
    { id: 2, title: 'Créer TaskBoard Pro', completed: false }
  ];

  // 3️⃣ BehaviorSubject typé
  private tasksSubject = new BehaviorSubject<TaskItem[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  // 4️⃣ Méthode pour ajouter une tâche
  addTask(title: string): void {
    const newTask: TaskItem = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }
}
