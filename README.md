# TaskboardPro

## Séquence 3 — Lazy Loading & Composants dynamiques

Dans cette séquence, j'ai travaillé sur l'optimisation et la structuration de l'application Angular.

J'ai mis en place le Lazy Loading pour les pages /tasks et /about. Ça permet de charger le code d'une fonctionnalité seulement quand l'utilisateur en a besoin, ce qui améliore les performances de l'application. Pour ça, chaque fonctionnalité est organisée dans un dossier features/ avec son propre fichier routes.ts.

J'ai aussi ajouté un formulaire pour saisir le nom d'une tâche. L'utilisateur peut ajouter une tâche via un champ input et un bouton, ou directement avec la touche Entrée.

Ensuite, j'ai implémenté la suppression des tâches avec un bouton "Supprimer". La logique est gérée dans le service avec l'opérateur filter() pour retirer la tâche du tableau de manière réactive.

Enfin, j'ai découvert les composants dynamiques avec ViewContainerRef et createComponent(). Le composant TaskHighlight est créé dynamiquement quand l'utilisateur clique sur "Mettre en avant", sans être présent dans le template HTML au départ.
