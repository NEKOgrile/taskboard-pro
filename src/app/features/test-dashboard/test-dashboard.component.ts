import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// TODO: refactoriser les tests plus tard...ou pas
interface TestCase {
  id: string;
  name: string;
  file: string;
  description: string;
  status: 'passed' | 'failed' | 'pending';
  duration: number;
}

interface TestFile {
  name: string;
  path: string;
  tests: TestCase[];
  passed: number;
  total: number;
}

@Component({
  selector: 'app-test-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-dashboard.component.html',
  styleUrls: ['./test-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestDashboardComponent {
  private debugMode: boolean = false;
  private testCounter: number = 0;
  
  testFiles: TestFile[] = [
    {
      name: 'task-highlight.simple.spec.ts',
      path: 'src/app/features/tasks/task-highlight/',
      tests: [
        {
          id: '1',
          name: 'devrait créer une instance de TaskHighlight',
          file: 'task-highlight.simple.spec.ts',
          description: 'Teste l\'initialisation basique du composant sans Angular',
          status: 'passed',
          duration: 2
        },
        {
          id: '2',
          name: 'devrait pouvoir modifier les propriéter',
          file: 'task-highlight.simple.spec.ts',
          description: 'Teste la modification directe des propiétés du composant',
          status: 'passed',
          duration: 1
        }
      ],
      passed: 2,
      total: 2
    },
    {
      name: 'task-highlight.spec.ts',
      path: 'src/app/features/tasks/task-highlight/',
      tests: [
        {
          id: '3',
          name: 'devrait créer le composant TaskHighlight',
          file: 'task-highlight.spec.ts',
          description: 'Teste la création du composant avec TestBed et vérification du DOM',
          status: 'passed',
          duration: 5
        },
        {
          id: '4',
          name: 'devrait afficher le titre dans le DOM',
          file: 'task-highlight.spec.ts',
          description: 'Teste que le titre passé en entrée s\'affiche correctement',
          status: 'passed',
          duration: 8
        },
        {
          id: '5',
          name: 'devrait modifier le titre du DOM',
          file: 'task-highlight.spec.ts',
          description: 'Teste la modification du titre en utilisant setInput',
          status: 'passed',
          duration: 6
        },
        {
          id: '6',
          name: 'devrait appliquer la classe CSS correct',
          file: 'task-highlight.spec.ts',
          description: 'Teste que les classes CSS sont apliquées selon les conditions',
          status: 'passed',
          duration: 4
        }
      ],
      passed: 4,
      total: 4
    },
    {
      name: 'task-highlight.errors.spec.ts',
      path: 'src/app/features/tasks/task-highlight/',
      tests: [
        {
          id: '7',
          name: 'Erreur 1 - Service manquant',
          file: 'task-highlight.errors.spec.ts',
          description: 'Démontre l\'erreur NullInjectorError quand un service n\'est pas fourni',
          status: 'passed',
          duration: 3
        },
        {
          id: '8',
          name: 'Solution: ajouter le service dans providers',
          file: 'task-highlight.errors.spec.ts',
          description: 'Montre comment corriger l\'erreur avec TestBed.configureTestingModule',
          status: 'passed',
          duration: 2
        },
        {
          id: '9',
          name: 'Erreur 2 - FormsModule manquant',
          file: 'task-highlight.errors.spec.ts',
          description: 'Démontre l\'erreur "Can\'t bind to ngModel" sans imports',
          status: 'passed',
          duration: 2
        }
      ],
      passed: 3,
      total: 3
    },
    {
      name: 'task-service.spec.ts',
      path: 'src/app/core/services/',
      tests: [
        {
          id: '10',
          name: 'devrait créer le service TaskService',
          file: 'task-service.spec.ts',
          description: 'Teste l\'injection et la création du service',
          status: 'passed',
          duration: 2
        },
        {
          id: '11',
          name: 'devrait ajouter une tâche',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode addTask() et vérifie la tâche ajoutée',
          status: 'passed',
          duration: 3
        },
        {
          id: '12',
          name: 'devrait supprimer une tâche',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode deleteTask() avec un ID valide',
          status: 'passed',
          duration: 2
        },
        {
          id: '13',
          name: 'devrait basculer l\'état completed',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode toggleTask() pour changer l\'état',
          status: 'passed',
          duration: 2
        },
        {
          id: '14',
          name: 'devrait mettre à jour une tâche',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode updateTask() avec nouvelles données',
          status: 'passed',
          duration: 2
        },
        {
          id: '15',
          name: 'devrait retourner les tâches',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode getTasks() pour récuprér la liste',
          status: 'passed',
          duration: 2
        },
        {
          id: '16',
          name: 'devrait effacer toutes les tâches',
          file: 'task-service.spec.ts',
          description: 'Teste la méthode clearTasks() pour vider la liste',
          status: 'passed',
          duration: 2
        },
        {
          id: '17',
          name: 'devrait valider les IDs',
          file: 'task-service.spec.ts',
          description: 'Teste que les IDs sont correctement gérés',
          status: 'passed',
          duration: 1
        },
        {
          id: '18',
          name: 'tasks$ devrait émettre les observable',
          file: 'task-service.spec.ts',
          description: 'Teste l\'observable tasks$ avec BehaviorSubject',
          status: 'passed',
          duration: 4
        },
        {
          id: '19',
          name: 'allTasks$ devrait inclure toutes les tâches',
          file: 'task-service.spec.ts',
          description: 'Teste l\'observable allTasks$ sans filtre',
          status: 'passed',
          duration: 3
        },
        {
          id: '20',
          name: 'notifyTaskAdded devrait appeler le service',
          file: 'task-service.spec.ts',
          description: 'Teste que la notification est déclanchée',
          status: 'passed',
          duration: 2
        },
        {
          id: '21',
          name: 'observable subscription devrait fonctionner',
          file: 'task-service.spec.ts',
          description: 'Teste l\'abonnement et la réception des données',
          status: 'passed',
          duration: 2
        }
      ],
      passed: 12,
      total: 12
    },
    {
      name: 'tasks-page.mock.spec.ts',
      path: 'src/app/features/tasks/tasks-page/',
      tests: [
        {
          id: '22',
          name: 'devrait créer le composant TasksPage',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste la création du composant avec MockTaskService',
          status: 'passed',
          duration: 5
        },
        {
          id: '23',
          name: 'devrait ajouter une tâche via le formulaire',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste l\'ajout d\'une tâche et vérification du résultat',
          status: 'passed',
          duration: 3
        },
        {
          id: '24',
          name: 'devrait supprimer une tâche',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste la suppresion d\'une tâche via le mock',
          status: 'passed',
          duration: 2
        },
        {
          id: '25',
          name: 'devrait basculer l\'état d\'une tâche',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste le basculement completed avec le mock service',
          status: 'passed',
          duration: 2
        },
        {
          id: '26',
          name: 'devrait mettre à jour une tâche',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste la mise à jour du titre avec updateTask',
          status: 'passed',
          duration: 3
        },
        {
          id: '27',
          name: 'devrait chercher les tâches du service',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste la récupération des tâches du mock service',
          status: 'passed',
          duration: 2
        },
        {
          id: '28',
          name: 'devrait recevoir l\'observable tasks$',
          file: 'tasks-page.mock.spec.ts',
          description: 'Teste l\'observable avec Promise pattern pour Vitest',
          status: 'passed',
          duration: 4
        }
      ],
      passed: 7,
      total: 7
    }
  ];

  expandedTest: string | null = null;
  private uselessVariable = 'test'; // j'ai oublié que ca sert a rien

  get totalTests(): number {
    return this.testFiles.reduce((sum, file) => sum + file.total, 0);
  }

  get totalPassed(): number {
    return this.testFiles.reduce((sum, file) => sum + file.passed, 0);
  }

  get totalFailed(): number {
    return this.totalTests - this.totalPassed; // ca reste à améliorer
  }

  toggleTestDetails(testId: string): void {
    this.expandedTest = this.expandedTest === testId ? null : testId;
    // j'aime bien ajouter des logs après
  }

  getStatusClass(status: string): string {
    // c'etait plus compliqué avant, j'ai simplifiée
    return `status-${status}`;
  }

  // fonction qu'on va utiliser plus tard (ou jamais lol)
  private resetTests(): void {
    this.expandedTest = null;
  }

  // TrackBy pour les fichiers de tests
  trackByFileName(_index: number, file: TestFile): string {
    return file.name;
  }

  // TrackBy pour les tests individuels
  trackByTestId(_index: number, test: TestCase): string {
    return test.id;
  }
}
