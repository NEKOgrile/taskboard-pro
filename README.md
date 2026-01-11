# final

📚 Ce que j’ai appris

1. Pourquoi tester ?

Les tests permettent de vérifier que le code fonctionne correctement et continue de fonctionner après des modifications.

Sans tests, on risque de casser une fonctionnalité existante sans s’en rendre compte.

Exemple concret : après avoir modifié le TaskService, les tests m’ont permis de vérifier que addTask() et deleteTask() fonctionnaient toujours correctement.

2. Outils utilisés

Jasmine : framework de tests qui permet d’écrire les tests (describe, it, expect).

Karma : lanceur de tests qui exécute les tests dans un navigateur.

TestBed : outil Angular qui permet de créer un environnement de test pour les composants et services.

3. Concepts clés maîtrisés

AAA Pattern :

Arrange : préparer les données et le contexte

Act : exécuter la méthode à tester

Assert : vérifier le résultat attendu

Mocks : objets factices utilisés pour simuler des dépendances (ex : services).

Spies : permettent d’espionner une méthode pour vérifier si elle a été appelée.

Fixture & detectChanges() : nécessaires pour déclencher le cycle de vie Angular et mettre à jour le DOM lors des tests de composants.

4. Types de tests pratiqués

✅ Test d’une classe simple (sans Angular)

✅ Test d’un service

✅ Test d’un composant avec TestBed

✅ Test des @Input

✅ Test du DOM

5. Erreurs courantes rencontrées

Oublier detectChanges() : le DOM n’est pas mis à jour, le test échoue.

No provider for... : il faut ajouter le service manquant dans providers.

Tests dépendants entre eux : il faut réinitialiser l’état avant chaque test (beforeEach).

6. Commandes importantes
```
ng test                    # Lancer les tests
ng test --code-coverage    # Générer le rapport de couverture
```

7. Code Coverage atteint

Objectif : 70–80%

Mon résultat : environ 75% sur TaskBoard Pro

8. Difficultés rencontrées et solutions

| Difficulté | Solution trouvée |
|------------|------------------|
| Comprendre TestBed | Relire les exemples et pratiquer |
| Erreurs de providers | Ajouter les services nécessaires |
| Tests du DOM | Utiliser fixture.nativeElement |

9. Points à approfondir

- Tests d’intégration
- Tests E2E avec Cypress
- Mocking avancé de HttpClient
- Tests de services asynchrones

🎯 Projet : Tests TaskBoard Pro

Tests implémentés

**TaskService**

✅ addTask()

✅ deleteTask()

**TaskHighlight Component**

✅ Affichage du titre

✅ Test du @Input title

✅ Vérification du rendu DOM

Résultats

Tests réussis : OK (tous les tests passent)

Code coverage : ~75%

Temps d’exécution : quelques secondes

💡 Réflexion personnelle

Cette séquence m’a permis de comprendre l’intérêt des tests unitaires dans un projet Angular.
Même si l’écriture des tests demande du temps, elle évite beaucoup d’erreurs et rend le code plus fiable.
Je compte utiliser les tests systématiquement dans mes futurs projets, au moins pour les services et les composants principaux.

📚 Ressources consultées

- Angular Testing Guide
- Documentation Jasmine
- Supports de cours — Séquence 4
