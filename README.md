# TaskboardPro

Bienvenue dans le projet **TaskboardPro** ! Ce projet est une application Angular développée dans le cadre des cours de M1. Il s'agit d'une taskboard (tableau de tâches) interactive permettant de gérer des tâches et des projets.

## Structure du Projet

Ce dépôt utilise des branches pour suivre l'avancement du projet. Chaque branche représente une étape spécifique du développement :

- **`main`** : Version finale complète du projet.
- **`branch-avancement-1`**, **`branch-avancement-2`**, etc. : Branches intermédiaires pour chaque étape du cours.

Pour voir les différentes étapes, vous pouvez basculer entre les branches à l'aide de Git.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [Angular CLI](https://angular.dev/tools/cli) (installé globalement via `npm install -g @angular/cli`)

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/taskboard-pro.git
   cd taskboard-pro
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancement du Serveur de Développement

Pour démarrer un serveur de développement local :

```bash
ng serve
```

Une fois le serveur lancé, ouvrez votre navigateur et allez à `http://localhost:4200/`. L'application se rechargera automatiquement à chaque modification des fichiers sources.

## Basculer entre les Branches

Pour explorer les différentes étapes du projet :

1. Listez les branches disponibles :
   ```bash
   git branch -a
   ```

2. Basculez vers une branche spécifique :
   ```bash
   git checkout nom-de-la-branche
   ```

3. Relancez le serveur si nécessaire :
   ```bash
   ng serve
   ```

## Génération de Code

Angular CLI offre des outils puissants pour générer du code. Pour créer un nouveau composant :

```bash
ng generate component nom-du-composant
```

Pour une liste complète des schémas disponibles (comme `components`, `directives`, ou `pipes`) :

```bash
ng generate --help
```

## Construction du Projet

Pour construire le projet :

```bash
ng build
```

Cela compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction de production optimise l'application pour les performances et la vitesse.

## Tests

### Tests Unitaires

Pour exécuter les tests unitaires avec [Vitest](https://vitest.dev/) :

```bash
ng test
```

### Tests de Bout en Bout (E2E)

Pour les tests de bout en bout :

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
