# Séquence 2 – Logique réactive du flux de données

## 1. Structure du flux
Le service `TaskService` utilise un **BehaviorSubject** pour stocker et diffuser la liste des tâches.
Le composant `Home` s’abonne à ce flux via la propriété `tasks$`
et le **pipe `async`** dans le template.

## 2. Mise à jour des données
La méthode `addTask()` ajoute une nouvelle tâche dans le service,
puis appelle `next()` sur le BehaviorSubject afin d’émettre la nouvelle liste.

La vue est automatiquement mise à jour sans rechargement de la page.

## 3. Points clés retenus
- Le **BehaviorSubject** conserve la dernière valeur et la diffuse aux abonnés.
- Le **pipe `async`** gère automatiquement l’abonnement et le désabonnement.
- Le flux de données suit le schéma :
  **service → composant → template**
- Les données restent cohérentes et réactives dans toute l’application.
