## Séquence 3 — Lazy Loading & Composants dynamiques

Dans cette séquence, j’ai travaillé sur l’optimisation et la structuration
de l’application Angular.

J’ai mis en place le Lazy Loading pour les pages /tasks et /about.
Cela permet de charger le code d’une fonctionnalité uniquement lorsque
l’utilisateur en a besoin, ce qui améliore les performances de l’application.
Pour cela, chaque fonctionnalité est organisée dans un dossier features/
avec son propre fichier routes.ts.

J’ai également ajouté un formulaire permettant de saisir le nom d’une tâche.
L’utilisateur peut ajouter une tâche via un champ input et un bouton,
ou directement avec la touche Entrée.

Ensuite, j’ai implémenté la suppression des tâches grâce à un bouton
"Supprimer". La logique est gérée dans le service avec l’opérateur filter()
afin de retirer la tâche du tableau de manière réactive.

Enfin, j’ai découvert les composants dynamiques avec ViewContainerRef
et createComponent(). Le composant TaskHighlight est créé dynamiquement
lorsque l’utilisateur clique sur "Mettre en avant", sans être présent
dans le template HTML au départ.
