# Séance 2 - Nouveautés CSS3<br />Exercices

Pour les exercices suivants, utiliser le fichier [index.html](./2 - Exercices/index.html) comme point de départ.


## Exercice 1<br />Modèles de boite

Modifier la classe .column pour utiliser le modèle de boite `border-box`.  


## Exercice 2<br />Webfonts

Modifier les styles des titres `h1` et `h2` pour utiliser la police "Sanidana".


## Exercice 3<br />Ombrages

### text-shadow

Ajouter une ombre noire sur le texte du titre `h1`.  
Les couleurs de l'ombre et du texte doivent s'inverser à l'intérieur de la balise small.

Que se passe-t-il si vous ne précisez pas de couleurs ?
Que se passe-t-il si vous indiquez un décalagage horizontal négatif ?
Que se passe-t-il si vous indiquez un décalagage vertical négatif ?
Que se passe-t-il si vous indiquez un rayon de flou négatif ?
Comment obtenir une ombre qui englobe l'ensemble du texte ?

Ajouter une seconde ombre jaune (#f6dd00) sur le texte du titre `h1`.

### box-shadow

Ajouter une ombre au survol sous les liens vers Twitter, Github et DevianART.

Que se passe-t-il si vous indiquez un rayon de flou différent de 0 ?
Que se passe-t-il si vous indiquez une distance de propagation différente de 0 ?


## Exercice 4<br />Transitions

Modifier les styles appliqués aux liens vers Twitter, Github et DeviantArt pour ajouter au survol une transition telle que :

* L'ombre apparaisse en premier, sur 0.5s avec une progression linéaire
* La hauteur de la boite et la couleur de fond évoluent ensuite, sur 1s, avec une progression amortie au début et à la fin
* L'image de fond apparaisse en dernier, remontant du bas de la boite, sur 0.5s, avec une progression par palier

Définir ensuite l'animation inverse à utiliser lorsque la souris quitte le lien. Décrire et expliquer le comportement observé.

Modifier la transition pour augmenter la graisse du texte contenu dans les paragraphes. Décrire et expliquer le comportement observé.