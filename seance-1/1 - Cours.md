# Séance 1 - Positionnement CSS

**Date :** 08/01/2014 - 9h30 / 12h30

## Sommaire

* Positionnement dans le flux
* display block|inline|inline-block
* float & clear
* position


## Positionnement dans le flux

Comme c'est le cas pour cette page, les éléments d'un document HTML sont par défaut affichés de gauche à droit et de haut en bas, dans l'ordre dans lequel ils apparaissent dans le code source.

En dehors de quelques cas particuliers, on peut classer les balises du langage HTML en deux grandes familles :

### Les balises de type bloc

Ces balises peuvent contenir d'autres balises de type bloc, des balises en ligne ou du texte[^html-vs-css]. Elles sont affichées avec un retour à la ligne avant leur ouverture et après leur fermeture.

Il s'agit généralement de balises structurantes, permettant d'organiser votre document.

Un élément de type bloc occupera par défaut toute la largeur disponible dans son conteneur.

### Les balises en ligne

Ces balises ne peuvent être utilisées qu'à l'intérieur d'une balise de type bloc. Elles sont affichées directement à la suite du contenu, sans saut de ligne.

Un élément en ligne n'occupera que l'espace minimum nécessaire à son affichage.

**Exercice 1 :** Types de balises


## La propriété `display`

La propriété CSS `display` permet de contrôler le comportement d'un élément HTML dans le flux. Elle accepte plusieurs valeurs[^display] dont les plus couramment utilisées sont :

* `none` : Permet de masquer un élément et ses descendants.
* `block` : Permet de forcer l'affichage d'un élément en tant que bloc.
* `inline` : Permet de forcer l'affichage en ligne d'un élément.
* `inline-block` : Permet de forcer l'affichage d'un élément comme un “bloc en ligne”.

**Exercice 2 :** Display

### table-*

Il ne s'agit pas d'une mais de plusieurs valeurs permettant de donner à des éléments le même comportement que les composants d'un tableau :

* `table` et `inline-table` pour reproduire le comportement de la balise `<table>`
* `table-caption` pour reproduire le comportement de la balise `<caption>`
* `table-column-group` pour reproduire le comportement de la balise `<colgroup>`
* `table-column` pour reproduire le comportement de la balise `<col>`
* `table-header-group` pour reproduire le comportement de la balise `<thead>`
* `table-footer-group` pour reproduire le comportement de la balise `<tfoot>`
* `table-row-group` pour reproduire le comportement de la balise `<tbody>`
* `table-row` pour reproduire le comportement de la balise `<tr>`
* `table-cell` pour reproduire le comportement des balises `<td>` et `<th>`

En terme de sémantique et d'accessibilité, il reste - et restera *a priori* - plus intéressant d'utiliser les balises HTML pour structurer des données tabulaires.

Le modèle d'agencement en tableau disponible en CSS (CSS table layout model) n'est à utiliser que pour résoudre des problèmes de disposition des blocs dans un document HTML.

Ex : colonnes de hauteurs égales, centrage vertical d'un contenu, …

**Exercice 3 :** CSS table layout model


## La propriété `float`

La propriété CSS `float` permet de sortir un élément HTML du flux pour le positionner de façon flottante à l'intérieur de son contexte.

Elle est complétée par la propriété `clear`, qui permet de forcer un élément à venir se placer après un élément flottant.

**Exercice 4 :** float & clear
**Exercice 5 :** CSS table layout model


## La propriété `position`

La propriété CSS `position` permet de définir des règles de placements alternatives pour les éléments à l'intérieur d'un document.

### static

Il s'agit de la valeur par défaut appliquée à tous les éléments lorsqu'ils sont positionnés normalement dans le flux.

**C'est la seule valeur de la propriété `position` pour laquelle les éléments voisins sont pris en compte.** Dans tous les autres cas, l'élément sera considéré comme extérieur au flux et l'espace qu'il occupe devra être aménagé sciemment.

### relative

Un élément positionné de façon relative sera d'abord rendu comme s'il appartenait au flux avant d'être décalé par rapport à cette origine.

Pour les éléments en position relative, les propriétés `top` ou `bottom` spécifient le décalage vertical depuis la position normale et les propriétés `left` ou `right` spécifient le décalage horizontal.

### absolute

Un élément positionné de façon absolue est retiré du flux et placé aux coordonnées définies par les propriétés `top`, `right`, `bottom` et `left`, considérées depuis le bord du plus proche ancêtre positionné.

### fixed

Un élément positionné de façon fixe est retiré du flux et placé aux coordonnées définies par les propriétés `top`, `right`, `bottom` et `left`, considérées depuis le bord de la fenêtre - ou de la page  dans le cas d'une impression -.

**Exercice 5 :** position



[^html-vs-css]: Il s'agit d'une définition générale selon la norme CSS. Cela ne remet pas en cause les spécificités propres à chaque élément HTML. Par exemple, la balise `p` est un élément de type bloc mais ne peut pas contenir que des balises en ligne, tandis que `form` ne peut accueillir que des éléments de type bloc.<br />Consulter la norme HTML ou [cet article sur Alsacréations](http://www.alsacreations.com/astuce/lire/55-balises-bloc-et-en-line-les-exceptions.html) pour d'autres exemples.
[^display]: [Display, vous connaissez ?](http://www.alsacreations.com/actu/lire/111-display-vous-connaissez.html), sur Alsacreation.