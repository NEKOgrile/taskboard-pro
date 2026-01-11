import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskHighlight } from './task-highlight';

// tests pour TaskHiglight avec TestBed
describe('TaskHighlight', () => {
  let component: TaskHighlight;
  let fixture: ComponentFixture<TaskHighlight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskHighlight]
      // providers: [] // j'en aurais eu besoin?
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskHighlight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // verifier que le composant existe
    expect(component).toBeTruthy();
  });

  it('devrait afficher le titr dans le DOM', () => {
    fixture.componentRef.setInput('title', 'Ma tâche');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    // TODO: refactoriser ce test
    expect(compiled.querySelector('p')?.textContent?.trim())
      .toBe('Ma tâche');
  });

  it('devrait mettre à jour le titr', () => {
    fixture.componentRef.setInput('title', 'Première tâche');
    fixture.detectChanges();
    
    let element = fixture.nativeElement.querySelector('p');
    expect(element?.textContent?.trim()).toBe('Première tâche');

    fixture.componentRef.setInput('title', 'Deuxième tâche');
    fixture.detectChanges();

    element = fixture.nativeElement.querySelector('p');
    expect(element?.textContent?.trim()).toBe('Deuxième tâche');
  });

  it('devrait afficher le titre vide par défaut', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p')?.textContent).toBe('');
  });
});
