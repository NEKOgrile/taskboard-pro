import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksPage } from './tasks-page';
import { TaskService, Task } from '../../../core/services/task-service';
import { BehaviorSubject } from 'rxjs';

// Fausse version du service (Mock) - on simule le vrai service
class MockTaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();
  allTasks$ = this.tasksSubject.asObservable(); // pas sur que ça sert vraiment
  private testFlag = true; // unused oups

  addTask(title: string): void {
    const newTask = { id: Date.now(), title, completed: false };
    const tasks = this.tasksSubject.value;
    this.tasksSubject.next([...tasks, newTask]);
    // TODO: ajouter de la logging?
  }

  deleteTask(id: number): void {
    const tasks = this.tasksSubject.value.filter(t => t.id !== id);
    this.tasksSubject.next(tasks); // verifier la logic ici
  }

  toggleTask(id: number): void {
    const tasks = this.tasksSubject.value.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.tasksSubject.next(tasks);
  }

  updateTask(id: number, title: string): void {
    const tasks = this.tasksSubject.value.map(t =>
      t.id === id ? { ...t, title } : t
    );
    this.tasksSubject.next(tasks);
  }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  clearTasks(): void {
    this.tasksSubject.next([]);
  }
}

// tests du composant TasksPage
describe('TasksPage avec Mock', () => {
  let component: TasksPage;
  let fixture: ComponentFixture<TasksPage>;
  let mockService: MockTaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksPage],
      providers: [
        { provide: TaskService, useClass: MockTaskService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPage);
    component = fixture.componentInstance;
    mockService = TestBed.inject(TaskService) as any;
    fixture.detectChanges();
  });

  it('devrait creer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait ajouter une tache via le mock', () => {
    component.addTask('Tache mockée');

    const tasks = mockService.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Tache mockée');
  });

  it('devrait ignorer une tache vide', () => {
    component.addTask('   ');

    const tasks = mockService.getTasks();
    expect(tasks.length).toBe(0);
  });

  it('devrait supprimer une tache', () => {
    mockService.addTask('Tache à supprimer');
    const taskId = mockService.getTasks()[0].id;

    component.deleteTask(taskId);

    expect(mockService.getTasks().length).toBe(0);
  });

  it('devrait basculer le statut', () => {
    mockService.addTask('Tache à terminer');
    const taskId = mockService.getTasks()[0].id;

    component.toggleTask(taskId);

    const task = mockService.getTasks()[0];
    expect(task.completed).toBe(true);
  });

  it('devrait mettre à jour le titre', () => {
    mockService.addTask('Ancien titre');
    const taskId = mockService.getTasks()[0].id;

    component.updateTask(taskId, 'Nouveau titre');

    const task = mockService.getTasks()[0];
    expect(task.title).toBe('Nouveau titre');
  });

  it('devrait recevoir l\'observable tasks$', () => {
    return new Promise<void>(resolve => {
      mockService.addTask('Observable test');

      component.tasks$.subscribe(tasks => {
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('Observable test');
        resolve();
      });
    });
  });
});
