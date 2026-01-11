import { TaskHighlight } from './task-highlight';

// tests simple de TaskHighlight
describe('TaskHighlight - Simple', () => {
  // Tests sans Angular - juste du TypeScript pur
  let component: TaskHighlight;
  
  it('devrait initialiser title avec une chaîne vide', () => {
    const component = new TaskHighlight();
    expect(component.title).toBe('');
    // console.log('test ok');
  });

  it('devrait permettre de changer le titr', () => {
    const component = new TaskHighlight();
    component.title = 'Tâche en avant';
    expect(component.title).toBe('Tâche en avant');
    // TODO: ajouter plus de tests ici pour le futur
  });
});
