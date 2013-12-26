# Séance 2 - Nouveautés CSS 3

**Date :** 08/01/2014 - 13h30 / 16h30

## Sommaire

* Modèles de boite
* Webfonts
* Ombrages
* Transitions
* Dégradés
* Media queries
* Animations
* Transformations


## Modèles de boite

<figure style="float: right">
  <figcaption>content-box vs border-box</figcaption>
  <img src="assets/box-sizing.png" alt="content-box vs border-box" />
</figure>

Le modèle de boites utilisé pour calculer les dimensions d'un bloc peut désormais être sélectionné parmi plusieurs alternatives grâce à la propriété `box-sizing`.

### content-box

Il s'agit de la valeur par défaut et historiquement la seule valeur supportée par les navigateurs. Les dimensions d'une boite sont calculées sans tenir compte de son espacement intérieur (`padding`) et de ses bordures.

### padding-box

Les dimensions d'une boite sont calculées en tenant compte de son espacement intérieur (`padding`) mais pas de ses bordures. Cette valeur a été ajouté récemment à la spécification et n'est pas encore convenablement supportée par tous les navigateurs.

### border-box

Les dimensions d'une boite sont calculées en tenant compte de son espacement intérieur (`padding`) et de ses bordures.

*Note : Cette propriété doit pour le moment être préfixée pour être utilisée sous Firefox et sous Webkit.*

**Exercice 1 :** Modèles de boites


## Webfonts

### `@font-face`

Après avoir été retirée au passage de CSS 2 à CSS 2.1, la déclaration `@font-face` a fait son retour en CSS 3. Si les designers devaient auparavant se contenter d'une poignée de polices dites "web safe" [^web-safe-fonts], il est désormais possible d'utiliser des polices personnalisées dans les pages web.

Leur utilisation est cependant compliquée par des incompatibilités d'implémentation entre les navigateurs (et quelques bugs). Selon la plage de navigateurs supportés, elles doivent être fournies :

* Au format SVG pour Safari iOS <= 4.1
* Au format EOT pour Internet Explorer <= 8.0
* Au format OpenType ou TrueType pour le navigateur Android <= 4.3, Safari iOS <= 4.3, Safari OS X <= 5.1
* Au format WOFF pour les navigateurs les plus récents

Une police étant rarement fournie dans chacun de ces formats, elle devra être convertie avant d'être utilisée [^webfont-converter]. 

Actuellement, la méthode recommandée pour déclarer une police web [^bulletproof-webfont] est la suivante :

	```
	/*
	  Version commentée
	*/
	@font-face {
	
	  /* Nom de la police
	     Tel qu'il sera utilisé ensuite dans les déclarations `font` / `font-family` */
	  font-family: "Open Sans";
	  
	   /* Internet Explorer 9 ne comprend pas la déclaration complète
	      lorsqu'utilisé avec le mode de compatibilité */
	  src: url("/fonts/opensans.eot");
	  
	  src: 
	       /* Version EOT pour Internet Explorer <= 8
	          Le "?" permet de contourner un bug du parser CSS.
	          
	          Le vrai nom du format des polices EOT est "embedded-opentype" mais
	          préciser un mauvais format force IE 9+ à utiliser le format WOFF */
	       url("/fonts/opensans.eot?") format("eot"),
	       
	       /* Version WOFF pour les navigateurs récents */
	       url("/fonts/opensans.woff") format("woff"),
	       
	       /* Version TrueType pour les navigateurs ne supportant pas le format WOFF */
	       url("/fonts/opensans.ttf") format("truetype"),
	       
	       /* Version SVG pour navigateurs mobiles anciens
	          L'ancre est obligatoire pour indiquer à Safari iOS où trouver
	          la déclaration de la police à l'intérieur du fichier SVG. */
	       url("/fonts/opensans.svg#open_sans") format("svg")
	       	       
	       ;
	  
	  /* Précision de la variante de la police (pour compatibilité avec Webkit) */
	  font-weight: normal;
	  font-style: normal;
	  font-variant: normal;
	}
	
	/* Version courte */
	@font-face {
	  font-family: "Open Sans";
	  src: url("/fonts/opensans.eot");
	  src: url("/fonts/opensans.eot?") format("eot"),
	       url("/fonts/opensans.woff") format("woff"),
	       url("/fonts/opensans.ttf") format("truetype"),
	       url("/fonts/opensans.svg#open_sans") format("svg");
	  font-weight: normal;
	  font-style: normal;
	  font-variant: normal;
	}
	
	```

### Licences

Comme pour les images, assurez-vous de toujours disposer des droits nécessaires avant d'utiliser une police sur le web.

### Alternatives

S'assurer du meilleur chargement possible d'une police personnalisée n'exclu pas de porter attention aux alternatives proposées. Elles seront utiles lorsque le navigateur ne supporte pas `@font-face`, lorsque le fichier est indisponible ou durant son téléchargement, lorsque la police choisie ne supporte pas certains caractères, …

De nombreux articles et outils sont disponibles sur Internet pour sélectionner les alternatives les plus adaptées.  
Exemples :

* [CSS Font stacks](http://cssfontstack.com/) pour un certain nombre de polices couramment utilisées
* [Font stack builder](http://www.erin-lawrence.com/webfonts/) intègre des statistiques sur la disponibilité des polices


**Exercice 2 :** Webfonts


## Ombrage

La spécification CSS 3 prévoit d'appliquer des ombres aux blocs et aux textes d'un document HTML. Si le support est parfois encore récent, les propriétés `box-shadow` et `text-shadow` se dégradent gracieusement sans effort.

### text-shadow

	text-shadow: (horizontal-offset vertical-offset (blur radius)? color?)*;

L'ombre d'un texte est définie par :

* Un décalage horizontal (vers la droite)
* Un décalage vertical (vers le bas)
* Un rayon de flou (optionnel)
* Une couleur (optionnelle)

Le rayon de flou détermine la distance en pixels sur laquelle la couleur de l'ombre s'estompera avant de devenir totalement transparente. Un rayon de flou de 0px correspond à une bordure nette de l'ombre.

### box-shadow

	box-shadow: (horizontal-offset vertical-offset (blur radius (spread distance))? color? inset?)*;

L'ombre d'une boite est définie par les mêmes propriétés que l'ombre d'un texte, auxquelles s'ajoutent :

* Une distance de propagation (optionnelle), précisant l'écart à appliquer aux dimensions de la boite pour calculer celles de l'ombre
* Le mot-clé `inset` s'il s'agit d'une ombre intérieure

Dans les deux cas, il est possible d'appliquer plusieurs ombres simultannement en les déclarant séparées par des virgules.

**Exercice 3 :** Ombrages


## Transitions

Les transitions CSS permettent de définir comment doivent évoluer les propriétés d'un élément lorsque celui-ci change d'état, suite à un événement natif (survol, focus, …) ou à une modification appliquée *via* JavaScript.

### Définir une transition

Une transition se défini à travers plusieurs propriétés :

* `transition-property`, qui attend comme valeur le nom de la propriété CSS qui devra évoluer au cours de la transition. Les mots-clés `all` et `none` sont acceptés pour indiquer respectivement toutes les propriétés ou aucune.
* `transition-duration`, qui attend comme valeur une durée correspondant au temps nécessaire à la réalisation de la transition.
* `transition-delay`, qui attend comme valeur une durée correspondant au temps d'attente avant le début de la transition.
* `transition-timing-function`, qui attend comme valeur le nom de la fonction qui devra être utilisée pour calculer l'évolution des valeurs de la propriété animée au cours de la transition.

Ces quatres propriétés peuvent également être utilisées avec des valeurs multiples, séparées par des virgules. L'animation se fera dans ce cas en appliquant à chaque propriété listée pour `transition-property` la durée, le delai et la fonction d'animation présente au même indice dans les listes passées à `transition-duration`, `transition-delay` et `transition-timing-function`.

	```
	h1 {
	  font-size: 16px;
	  line-height: 1.5;
	  text-indent: 0;
	}
	
	h1.heavy {
	  font-size: 22px;
	  line-height: 2;
	  text-indent: 20px;
	  
	  /*
	    Lorsqu'un élément `h1` recevra la classe .heavy, il sera animé comme suit :
	    
	    - Après un delai de 0s, la taille de la police passera en 1s de 16px à 22px
	    - Après un délai de 0.5s, la hauteur de ligne passera en 0.5s de 1.5 à 2
	    - Après un délai de 1.5s, l'indentation du texte passera en 2s de 0 à 20px
	    
	    L'animation complète sera étalée sur 3.5s.
	  */
	  transition-property: font-size, line-height, text-indent;
	  transition-duration: 1s, 0.5s, 2s;
	  transition-delay: 0s, 0.5s, 1.5s;
	}
	```

Un raccourci `transition` est disponible pour définir une animation en une fois. Comme les autres, cette propriété accepte les valeurs multiples.

	```
	h1.heavy {
	  […]
	  /* Équivalent utilisant la notation raccourcie */
	  transition: font-size 1s 0s,
	  			  line-height 0.5s 0.5s,
	  			  text-indent 2s 1.5s;
	}
	```

### Fonctions d'interpolation

<http://easings.net/fr>

[^web-safe-fonts]: [Safe web fonts](http://web.mit.edu/jmorzins/www/fonts.html)
[^webfont-converter]: [Webfont generator by FontSquirrel](http://www.fontsquirrel.com/tools/webfont-generator)
[^bulletproof-webfont]: [Further Hardening of the Bulletproof Syntax](http://www.fontspring.com/blog/further-hardening-of-the-bulletproof-syntax)