# Séance 3 - Outils de développement front

**Date :** 16/01/2014 - 9h30 / 12h30

## Sommaire

* Harmonisation des styles entre navigateurs
* Frameworks CSS : Blueprint, Bootstrap, Foundation
* Pré-processeurs : Less, Sass
* Post-processeurs
* Outils d'automatisation : Grunt / Gulp


## Harmonisation des styles entre navigateurs

Si la spécification HTML5 précise pour certaines balises les styles qui doivent leur être appliqués par défaut, ces indications n'existaient pas dans les versions précédentes. Pour afficher les documents HTML, chaque navigateur a dû faire le choix d'une mise en forme par défaut.

Pour simplifier l'intégration d'un site internet, il est indispensable d'harmoniser ces styles.

La technique du `reset` consiste à remettre à 0 un certains nombre de valeurs. Sous sa forme la plus simple, elle s'écrit en quelques lignes :

	* {
	  margin: 0;
	  padding: 0;
	}

En plus d'être très gourmande en ressource à cause de l'utilisation du sélecteur universel `*`, cette technique supprime également des styles que l'on peut souhaiter conserver, comme ceux des formulaires.

Des resets plus évolués existent aujourd'hui, qui gomment en partie ces défauts :

* [Le reset CSS d'Eric Meyer](http://meyerweb.com/eric/tools/css/reset/), sans doute le plus connu.
* [normalize.css](http://necolas.github.io/normalize.css/), qui se concentre sur l'harmonisation des styles plutôt que sur leur suppression systématique.

L'objectif est à chaque fois le même : fournir à l'intégrateur une ardoise vierge pour démarrer.


## Frameworks CSS

Les frameworks CSS vont plus loin que les resets, qu'ils utilisent quasi-systématiquement comme base. En s'appuyant sur un ensemble de bonnes pratiques, ils fournissent un ensemble de classes utilisables par les intégrateurs pour construire leurs pages plus rapidement.

Avec plus ou moins de succès, ils fournissent à l'intégrateur les outils pour rythmer les pages[^rythm] :

* Verticalement, en établissant une base typographique[^vertical-rythm]
* Horizontalement, en construisant suivant une grille[^css-grid]

Ils incluent généralement des styles de formulaires, éléments omniprésents sur le web et particulièrement difficile à intégrer de façon pertinente.

Exemples "historiques" :

* [Blueprint CSS](http://www.blueprintcss.org/)  
  L'un des premiers frameworks CSS à avoir été largement utilisé, il n'est aujourd'hui plus maintenu.
* [960gs](http://960.gs/)  
  A connu un fort succès grâce à la flexibilité de ses grilles

Des frameworks plus modernes :

* [Bootstrap](http://getbootstrap.com/)
* [Foundation](http://foundation.zurb.com/)
* [KNACSS](http://www.knacss.com/)

Les frameworks modernes vont au-delà de l'aide à l'intégration en fournissant des composants complets pour les pages web (menus déroulants, onglets, …
 et s'accompagnent de librairies JavaScript.
 
### Avantages

* Une bonne base pour démarrer une intégration
* Un ensemble de bonnes pratiques
* La compatibilité entre les navigateurs
* Un langage commun

### Inconvénient

* Des classes peu sémantiques
* Une structure HTML imposée
* Du code inutile
* Des styles par défaut parfois difficiles à oublier / pénibles à surdéfinir
 

## Pré-processeurs CSS

Les pré-processeurs CSS fournissent une couche d'abstraction au dessus du langage CSS pour lui ajouter des fonctionnalités qu'il n'intègre pas (encore) :

* Variables
* Boucles
* Fonctions
* Héritage
* …

Un des premiers usages a été de gommer les différences d'implémentation entre les navigateurs (préfixes vendeurs, …) à travers des fonctions.

Aujourd'hui, certains framework comme Foundation peuvent être utilisés tels quel ou exclusivement au travers de mixins, supprimant ainsi le défaut qui leur est le plus fréquemment reproché.

## Post-processeurs CSS

A force d'ajouter des fonctionnalités aux pré-processeurs CSS, il est venu à certains l'idée de distinguer ce qui tient lieu de l'abstraction au dessus de CSS des traitements qui doivent être appliqués à une feuille de styles avant sa mise en ligne. Ainsi sont nés les post-processeurs CSS.

Quelques cas d'utilisation :

* [Autoprefixer](https://github.com/ai/autoprefixer) ajoute les préfixes vendeurs en se basant sur CanIUse
* [pixrem](https://github.com/robwierzbowski/node-pixrem) ajoute un fallback en pixels aux dimensions écrites en `rem`
* [Move Media](https://github.com/reworkcss/rework-move-media) regroupe les déclarations correspondant au même media
* Minification
* Concaténation
* Validation
* …

## Outils d'automatisation

* Grunt
* Gulp

[^rythm]: [La macrotypographie de la page web](http://www.paris-web.fr/2010/programme/macrotypographie-page-web.php), présentation de Anne-Sophie Fradier lors de ParisWeb 2010.
[^vertical-rythm]: [Compose a vertical rythm](http://24ways.org/2006/compose-to-a-vertical-rhythm/).
[^css-grid]: [Grids are good](http://www.subtraction.com/pics/0703/grids_are_good.pdf), présentation de Mark Boulton sur l'utilisation d'une grille pour le redesign de Yahoo.
[framework-css]: [Comparaison des frameworks CSS](http://usablica.github.io/front-end-frameworks/compare.html)
[^grid-system]: <http://www.thegridsystem.org/>