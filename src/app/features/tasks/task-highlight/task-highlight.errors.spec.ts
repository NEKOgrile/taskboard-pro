/**
 * Exemples d'erreurs courantes en tests Angular
 */

import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// Erreur 1: NullInjectorError
class TaskService {
  getTasks() {
    return ['Tâche 1', 'Tâche 2'];
  }
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  template: `<div>{{ tasks.length }} tâches</div>`
})
class TaskListComponent {
  tasks: string[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }
}

describe('Erreur 1 - Service manquant', () => {
  it('Solution: ajouter le service dans providers', async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListComponent],
      providers: [TaskService]
    }).compileComponents();

    const fixture = TestBed.createComponent(TaskListComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

// Erreur 2: Can't bind to 'ngModel'
@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  template: `<input [(ngModel)]="taskTitle" />`
})
class TaskInputComponent {
  taskTitle = '';
}

describe('Erreur 2 - FormsModule manquant', () => {
  it('Solution: FormsModule est dans les imports', async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInputComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(TaskInputComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

// Erreur 3: No provider for HttpClient
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
class TaskApiService {
  constructor(private http: HttpClient) {}

  fetchTasks() {
    return this.http.get('/api/tasks');
  }
}

@Component({
  selector: 'app-task-api',
  standalone: true,
  template: `<div>{{ tasks }}</div>`
})
class TaskApiComponent {
  tasks: any[] = [];

  constructor(private taskApiService: TaskApiService) {}
}

describe('Erreur 3 - HttpClient non fournit', () => {
  it('Solution: ajouter provideHttpClient()', async () => {
    await TestBed.configureTestingModule({
      imports: [TaskApiComponent],
      providers: [
        TaskApiService,
        provideHttpClient()
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(TaskApiComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
