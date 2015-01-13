# Gabarits de pages

## Sommaire

* Gabarit statique
* Gabarit liquide
* `@viewport`
* `@media`
* Gabarit adaptatif
* Gabarit responsive
* L'approche "mobile first"


## Gabarit statique

À l'époque, pas si lointaine, où les ordinateurs étaient les seuls appareils capablent de naviguer sur Internet, la majorité des sites étaient construits sur un gabarit de page dit "statique". Toutes les dimensions (largeurs, hauteurs, tailles de polices…) étaient précisées en pixels et figées quelle que soit la taille de l'écran.

Cette solution a l'avantage d'être très simple à mettre en place car il n'est nécessaire de prendre qu'un seul cas d'affichage en compte. En revanche, si les dimensions de l'écran sont supérieures celles du site, l'espace non occupé de la page est simplement laissé vide. Si à l'inverse l'écran est trop petit pour accueillir le site dans l'une ou l'autre de ses dimensions, une barre de défilement est ajoutée pour permettre à l'utilisateur de se déplacer vers le contenu excédentaire.


## Gabarit liquide

Une solution pour résoudre le problème poser par les différentes tailles d'écran aux sites statiques est d'utiliser un gabarit de page dit "liquide". En spécifiant les dimensions des éléments structurant du gabarit de façon relative par rapport à l'espace disponible et non plus avec des tailles fixes, on peut obtenir un site qui occupera toujours la proportion attendu de cet espace.

La spécification CSS prévoit depuis longtemps de pouvoir définir des dimensions relatives au contexte, en utilisant des pourcentages (`%`).

**Exercice :** Design liquide

Si cette solution est plus souple que le gabarit statique, elle montre rapidement ses faiblesses lorsqu'il est question d'afficher un site à une dimension très éloignée de celle pour laquelle il a été prévu. Par exemple, si l'écran est beaucoup plus large que prévu, les éléments s'étirent démesurement en largeur. Les lignes de texte sont notamment allongées au point de devenir difficilement lisible. À l'inverse, sur un écran beaucoup plus étroit qu'attendu, les éléments sont comprimés et finissent par ne plus pouvoir accueillir leur contenu sans que celui ne déborde.

### Unités de longueur en CSS

Bien qu'ils ne soient pas considérés dans les spécifications comme une unité de mesure, les pourcentages sont acceptés dans la plupart des cas où une mesure est attendue. Lorsqu'ils sont utilisés pour spécifier une taille de police, on considère que `100%` correspond à la taille de police de l'élément courant, telle qu'héritée au titre des règles de police applicables à son parent.

La spécification CSS prévoit d'autres unités utilisables pour préciser des dimensions relatives au contexte :

* `ex`  
  Unité héritée de la typographie, elle représente la taille de police calculée de l'élément. Convertir `1ex` en pixels revient à mesurer la hauteur d'un `x` tel qu'il serait affiché en utilisant les règles de police applicables au contexte.  
* `em`  
  Autre unité héritée de la typographie, `1em` correspond à la hauteur d'un `M` tel qu'il serait affiché en utilisant les règles de police applicables au contexte, sans tenir compte de la famille de police appliquée (`font-family`). Cette différence avec `ex` rend `em` beaucoup plus simple à utiliser dans des documents utilisant plusieurs polices.  
  `em` est régulièrement utilisé pour créer des mises en page qui peuvent s'adapter à la taille des contenus tout en conservant le rythme vertical de la page.
* `rem` (root em)
  Convertir `1rem` en pixels revient à mesurer la hauteur d'un `M` tel qu'il serait affiché en utilisant les règles de police applicables à la racine du document (l'élément `html` dans une page web), sans tenir compte de la famille de police appliquée (`font-family`).  
  Cette unité offre les mêmes avantages qu'`em` tout en simplifiant grandement le calcul des tailles de polices par l'utilisation d'une référence unique.
* `vw` (viewport width), `vh` (viewport height) et `vmin` (viewport minimum)
  Relatives aux dimensions de la fenêtre, ces unités correspondent respectivement à 1% de sa largeur, de sa hauteur et de sa plus petite dimension.  
  Elles offrent les mêmes avantages que les pourcentages tout en simplifiant grandement le calcul des tailles de polices par l'utilisation d'une référence unique.

D'autres unités de mesure relatives (`ch`, équivalent de `ex` basé sur la largeur calculée d'un '0', et `vmax`, l'opposé de `vmin`) existent mais ne sont actuellement pas convenablement supportées par tous les navigateurs.

**Exercice :** Unités de longueur relatives

## `@viewport`

Si on oublie quelques tentatives plus ou moins réussies comme le WAP, le web n'est apparu sur mobile que très récemment et alors qu'il existait déjà des milliers de sites, tous construits pour s'afficher sur un écran d'ordinateur, selon l'une ou l'autre des techniques évoquées précédemment.

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

La spécification définie également d'autres critères pour cibler les périphériques en fonction de leur capacité à rendre les couleurs (`color`, `color-index` et `monochrome`) ou de leur méthode d'affichage (`scan` pour les téléviseurs, `grid` pour les affichages à chasse fixe).

**Exercice :** Media queries


## Gabarit adaptatif

Un gabarit adaptatif va utiliser les règles `@viewport` et `@media` pour définir plusieurs gabarits, chacun adapté à une plage de résolution d'écran. On peut considérer un gabarit adaptatif comme une série de gabarits statiques.

**Exercice :** Design adaptatif

Cette solution permet d'afficher un site de façon convenable sur un large panel d'écrans, sans pour autant s'adapter véritablement à chacun d'entre eux. La bonne exploitation de l'espace disponible repose essentiellement sur le choix des conditions appliquées aux règles `@media` distinguant le passage d'un gabarit statique à un autre. Elle reste cependant imparfaite car rien n'indique que tous les terminaux existants soient convenablement pris en compte et encore moins ceux à venir.


## Gabarit responsive

Un gabarit responsive combine une utilisation des règles `@viewport` et `@media` semblable à celle d'un gabarit adaptatif à des dimensions spécifiées de façon relative au contexte comme dans le cas d'un gabarit liquide pour s'adapter à toutes les résolutions d'écran. On peut considérer un gabarit responsive comme une série de gabarits liquides.

**Exercice :** Design responsive

Cette solution est actuellement la plus adaptée pour afficher un site dans les meilleures conditions possibles sur l'ensemble des terminaux. Elle est en outre suffisamment souple pour supporter sans faillir l'apparition de nouveaux terminaux aux dimensions différentes, dans une limite cependant raisonnable[^max-breakpoint].


> **Note**
> 
> Vous pouvez retrouver un résumé et un exemple des quatre types de gabarit sur <http://www.liquidapsive.com/>


## L'approche "mobile first"

Lorsqu'il s'agit d'adapter un gabarit de page déjà existant pour ordinateur de bureau vers le mobile, la solution la moins coûteuse, en temps et en effort, est de fonctionner par dégradation progressive. C'est ce que nous avons fait jusqu'à maintenant lors des exercices.

Cette approche présente cependant le gros défaut de donner le plus dur travail aux terminaux qui en ont théoriquement le moins les capacités. En définissant d'abord les styles appliqués sur de grands écrans avant de les réduire pour s'adapter aux plus petits, on oblige en effet les mobiles (par exemple) à interpréter l'ensemble des styles avant de pouvoir déterminer lesquels s'appliquent dans leur situation.

Pour ne pas pénaliser inutilement les terminaux mobiles et améliorer sensiblement les performances de rendu d'un site sur ce type d'appareils, une approche de plus en plus répandue est de déclarer d'abord les styles qui s'y appliquent avant d'utiliser les règles `@media` pour ajouter les styles supplémentaires applicables sur des terminaux plus grands. En procédant de cette façon, le rendu d'un site est calculé par amélioration progressive, en fonction des capacités du terminal.


[^screensizes]: <http://screensiz.es/>
[^les-mobiles-mentent]: [Les mobiles nous mentent !](http://blog.goetter.fr/articles/les-mobiles-nous-mentent/), par Raphaël Goetter
[^max-breakpoint]: À l'heure actuelle, les écrans sont régulièrement traités de façon unique dés lors qu'ils dépassent 1600px de largeur.
