📚 Synthèse de la séquence
⚡ Ce que j’ai compris sur la performance

Au début, je pensais que la performance c’était surtout des petites optimisations techniques. En réalité, j’ai compris que c’est surtout une question de méthode.

La chose la plus importante que j’ai retenue, c’est : mesurer avant d’optimiser.
Avec DevTools et Lighthouse, on peut voir concrètement ce qui ne va pas.
Optimiser sans mesurer, ça ne sert à rien.

Quand j’ai lancé Lighthouse, j’étais à 25% en performance, mais je me suis rendu compte que ma RAM tournait à 100% à côté. Donc le score n’était pas totalement représentatif. Ça m’a montré que l’environnement joue aussi un rôle.

J’ai aussi appris à utiliser OnPush pour éviter que Angular fasse trop de vérifications inutiles.
Le trackBy dans les *ngFor est aussi important pour éviter de recréer le DOM à chaque changement.

Le lazy loading permet de ne pas tout charger au démarrage, ce qui rend l’application plus rapide au lancement.

Et enfin, découper en petits composants aide beaucoup : c’est plus clair, plus simple à maintenir, et plus facile à optimiser.

🔒 Ce que j’ai retenu sur la sécurité

La sécurité doit être pensée dès le début.

Je dois toujours partir du principe qu’une donnée utilisateur peut être malveillante.

Utiliser {{ }} au lieu de innerHTML est plus sûr, car Angular protège automatiquement contre les injections XSS.

La validation côté frontend est utile, mais la vraie sécurité doit être côté serveur.

J’ai aussi découvert l’importance d’une Content Security Policy pour limiter les scripts autorisés.

🧪 Ce que j’ai appris sur les tests

Avant, je voyais les tests comme quelque chose de secondaire.
Maintenant, je comprends que c’est essentiel.

Les tests permettent de vérifier que le code fonctionne, mais surtout qu’il continue de fonctionner après des modifications.

Par exemple, après avoir modifié le TaskService, j’ai pu vérifier que addTask() et deleteTask() fonctionnaient toujours.

J’ai appris le pattern AAA l’utilisation des mocks et des spies, et l’importance de detectChanges() pour mettre à jour le DOM dans les tests.

J’ai aussi fait quelques erreurs, mais ça m’a aidé à mieux comprendre Angular.

💭 Mon ressenti

Cette séquence m’a fait comprendre que la performance, la sécurité et les tests ne sont pas des détails.

Même si ça demande plus de travail au début, ça rend le projet plus propre et plus fiable.
