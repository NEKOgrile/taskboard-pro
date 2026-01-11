import { TestBed } from '@angular/core/testing';
import { TaskService, Task } from './task-service';
import { Notification } from './notification';

// Tests du TaskService avec TestBed
describe('TaskService', () => {
  let service: TaskService;
  const debugMode = false; // a enlever

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaskService,
        { provide: Notification, useValue: { show: () => {} } }
        // TODO: ajouter HttpClient?
      ]
    });

    service = TestBed.inject(TaskService);
    service.clearTasks(); // remet a 0 entre chaque test
  });

  it('devrait être créé', () => {
    // simple: le service existe
    expect(service).toBeTruthy();
  });

  it('devrait ajouter une tache', () => {
    service.addTask('Apprendre les tests');

    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Apprendre les tests');
    expect(tasks[0].completed).toBe(false);
  });

  it('devrait ajouter plusieurs tâches', () => {
    service.addTask('Tâche 1');
    service.addTask('Tâche 2');
    service.addTask('Tâche 3');

    const tasks = service.getTasks();
    expect(tasks.length).toBe(3);
    expect(tasks[1].title).toBe('Tâche 2');
  });

  it('devrait supprimer une tâche', () => {
    service.addTask('Tâche temporaire');
    const taskId = service.getTasks()[0].id;

    service.deleteTask(taskId);

    expect(service.getTasks().length).toBe(0);
  });

  it('devrait marquer une tâche comme terminée', () => {
    service.addTask('Tâche à terminer');
    const taskId = service.getTasks()[0].id;

    service.toggleTask(taskId);

    const task = service.getTasks()[0];
    expect(task.completed).toBe(true);
  });

  it('devrait basculer l\'état complété', () => {
    service.addTask('Tâche toggleable');
    const taskId = service.getTasks()[0].id;

    expect(service.getTasks()[0].completed).toBe(false);

    service.toggleTask(taskId);
    expect(service.getTasks()[0].completed).toBe(true);

    service.toggleTask(taskId);
    expect(service.getTasks()[0].completed).toBe(false);
  });

  it('devrait mettre à jour le titre d\'une tâche', () => {
    service.addTask('Ancien titre');
    const taskId = service.getTasks()[0].id;

    service.updateTask(taskId, 'Nouveau titre');

    const task = service.getTasks()[0];
    expect(task.title).toBe('Nouveau titre');
  });

  it('devrait retourner toutes les tâches', () => {
    service.addTask('Tâche 1');
    service.addTask('Tâche 2');

    const tasks = service.getTasks();

    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBe(2);
  });

  it('devrait nettoyer les tâches', () => {
    service.addTask('Tâche 1');
    service.addTask('Tâche 2');
    expect(service.getTasks().length).toBe(2);

    service.clearTasks();

    expect(service.getTasks().length).toBe(0);
  });

  it('devrait attribuer un ID à chaque tâche', () => {
    service.addTask('Tâche 1');

    const tasks = service.getTasks();
    
    expect(tasks[0].id).toBeDefined();
    expect(typeof tasks[0].id).toBe('number');
    expect(tasks[0].id > 0).toBe(true);
  });

  it('ne devrait rien faire si on supprime un ID inexistant', () => {
    service.addTask('Tâche 1');
    const initialLength = service.getTasks().length;

    service.deleteTask(99999);

    expect(service.getTasks().length).toBe(initialLength);
  });

  it('devrait fournir un observable allTasks$', () => {
    return new Promise<void>((resolve) => {
      service.addTask('Observable test');

      service.allTasks$.subscribe((tasks: Task[]) => {
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('Observable test');
        resolve();
      });
    });
  });
});
