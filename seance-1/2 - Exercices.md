# Séance 1 - Positionnement CSS<br />Exercices


## Exercice 1<br />Types de balises

Replacez chacune des balises suivantes dans sa famille :

* `<h1>`
* `<strong>`
* `<blockquote>`
* `<ul>`
* `<a>`
* `<li>`
* `<img>`
* `<section>`
* `<input>`
* `<p>`

**Pour les exercices suivants, utiliser le fichier [index.html](./2 - Exercices/index.html) comme point de départ.**

## Exercice 2<br />Display

Le site étant encore en construction, les liens du menu de navigation ont été masqués en utilisant la valeur `none` pour la propriété `display`.

Modifiez les styles appliqués aux liens du menu de navigation pour appliquer successivement à la propriété `display` les valeurs `block`, `inline` et `inline-block`. Dans chaque cas, observez le rendu obtenu et notez comment sont prises en compte les différentes règles appliquées aux liens, en faisant varier leur valeur si besoin.

## Exercice 3<br />CSS table layout model

Le site intégrera finalement un blog qui doit être accessible dans le menu en plus des autres pages.

Modifiez le code HTML du menu pour y ajouter un lien vers une nouvelle page “Blog”.

Le menu est maintenant trop grand pour s'insérer dans l'espace disponible. Modifiez les styles appliqués au bloc `nav` et à son contenu pour corriger ce problème en conservant des liens de largeurs identiques entre elles et en utilisant le modèle d'agencement en tableau CSS.

Cela résoud-il votre problème si on souhaite ajouter une nouvelle page au menu ?

## Exercice 4<br />float & clear

Modifiez la mise en page de la section `.main` pour placer les informations sur l'auteur dans une colonne flottante à droite occupant un tier de la largeur disponible.

Commentez le rendu obtenu. Comment résoudre ce problème ?

Modifiez les styles appliqués à `.main figure` pour placer l'image et sa légende flottantes à gauche du paragraphe qui suit.

Quelle différence y a-t-il par rapport à la situation précédente ?
Partant de ce constat, le problème précédent aurait-il pû être résolu sans modifier le code HTML ?

## Exercice 5<br />CSS table layout model

Les maquettes initiales prévoyaient que les deux colonnes de la section `.main` remplissent systématiquement toute la hauteur.

Modifiez la mise en page de la section `.main` pour répondre à cette contrainte en utilisant le modèle d'agencement en tableau CSS. Est-il pertinent dans ce cas ?

## Exercice 6<br />position

Modifiez les styles appliqués à `.main figcaption` pour que la légende vienne se superposer à l'image.

On décide d'ajouter un côté social au site en ajoutant la remontée automatique du dernier tweet de @CrashTestDummy dans l'en-tête. Décommentez le code HTML correspondant et modifiez la feuille de style pour placer le Tweet comme une bulle de 400px de large près de la tête du personnage en utilisant `position: absolute`.

Puis vint le jour où Twitter autorisa les retours à la ligne dans les tweets. Transformez le paragraphe `.last-tweet` en balise `pre`. Que pouvez-vous en conclure sur l'usage du positionnement absolu ?