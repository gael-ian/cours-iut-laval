# Design adaptatif

## Sommaire

* `@viewport`
* `@media`

## `@viewport`

Si on oublie quelques tentatives plus ou moins réussies comme le WAP, le web n'est apparu sur mobile que très récemment et alors qu'il existait déjà des milliers de sites, tous construits pour s'afficher sur un écran d'ordinateur.

Pour afficher ces sites sur des écrans de petites tailles sans briser leur mise en page, les navigateurs mobiles ont fait le choix d'utiliser par défaut une fenêtre virtuelle de dimensions bien supérieures à celle de l'écran et de laisser l'utilisateur zoomer sur les parties qu'il souhaite consulter.

Ce comportement n'est cependant pas le plus adapté dans le cas d'un site prévu pour être consulté sur des mobiles. Prises en compte uniquement par les navigateurs mobiles, les règles `@viewport` permettent de contrôler les dimensions de la fenêtre virtuelle du navigateur.

> **Note**
> 
> Les règles `@viewport` sont encore en cours de spécification et ne sont pas supportées par la plupart des navigateurs qui implémentent pour le moment un équivalent sous la forme de la balise `<meta name="viewport" />`.
>
> La syntaxe diffère entre les règles `@viewport` et la balise `<meta name="viewport" />` mais cette dernière étant la seule utilisable à l'heure actuelle, cette section se concentrera sur leur écriture.

Le contenu de la balise `<meta name="viewport" />` peut accueillir plusieurs propriétés, séparées par des virgules :

* `width` pour fixer la largeur du viewport, en pixel ou *via* le mot-clé `device-width`
* `height` pour fixer la hauteur du viewport, en pixel ou *via* le mot-clé `device-height`
* `initial-scale` pour fixer le niveau de zoom au chargement de la page
* `maximum-scale` et `minimum-scale` pour fixer les limites du zoom acceptées
* `user-scalable` pour indiquer si l'utilisateur peut ou non zoomer dans la page

Étant donnés la très grande variété des tailles et des résolutions d'écrans mobiles[^screensizes] et le fait que les navigateurs mobiles mentent régulièrement sur leurs capacités[^les-mobiles-mentent], la balise `<meta name="viewport" />` est courament écrite sous cette forme :

    <meta name="viewport" content="width=device-width,initial-scale=1" />

* `width=device-width` défini la largeur du viewport à celle de l'appareil. La page utilisera tout l'espace disponible quelque soient les dimensions de l'écran.
* `initial-scale=1` rétabli le niveau de zoomau chargement de la page à 1.
* `user-scalable=no` indique qu'il n'est pas possible à l'utilisateur de zoomer. `maximum-scale=1` est utilisé en complément, pour les navigateurs ne supportant pas `user-scalable`.

## `@media`

Les règles `@media` sont apparues en CSS2 et permettent de cibler les supports auxquels doivent s'appliquer les styles qu'elles contiennent. Elles ont depuis longtemps été utilisées *via* l'attribut `media` de la balise `link` pour déclarer les feuilles de styles spécifiques à l'impression par exemple.

    <link rel="stylesheet" type="text/css" href="/assets/stylesshets/style.css" />
    <link rel="stylesheet" type="text/css" href="/assets/stylesshets/print.css" media="print" />

Là où CSS2 ne supporte que des conditions sur le type de media dans une règle `@media`, CSS3 permet de distinguer plus finement les appareils en enrichissant les critères disponibles avec notamment :

* `width`, `height` et `aspect-ratio` qui indiquent respectivement la largeur, la hauteur et les proportions de la fenêtre.
* `device-width`, `device-height` et `device-aspect-ratio` qui indiquent respectivement la largeur, la hauteur et les proportions de l'écran
* `orientation`
* `resolution`

À l'exception de `orientation` pour lequel cela n'aurait pas de sens, tous ces critères peuvent être préfixés de `min-` ou `max-` pour écrire les conditions d'une requête media.

    @media screen and (min-device-width: 960px) and (max-resolution: 124dpi) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués :
       * 
       * - que sur écrans
       * - uniquement si la largeur de l'écran est supérieure ou égale à 960px
       * - uniquement si la résolution de l'écran est inférieure ou égale à 124dpi
       */
    }

La spécification définie également d'autres critères pour cibler les périphériques en fonction de leur capacité à rendre les couleurs (`color`, `color-index` et `monochrome`) ou de leur méthode d'affichage (`scan` pour les téléviseurs, `grid` pour les affichage à chasse fixe).

**Exercice :** Design adaptatif

[^screensizes]: <http://screensiz.es/>
[^les-mobiles-mentent]: [Les mobiles nous mentent !](http://blog.goetter.fr/articles/les-mobiles-nous-mentent/), par Raphaël Goetter