# Séance 2 - Nouveautés CSS 3

**Date :** 08/01/2014 - 13h30 / 16h30

## Sommaire

* Webfonts
* Box-sizing
* Ombrage
* Dégradés
* Transitions
* Media queries
* Animations
* Transformations


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


[^web-safe-fonts]: [Safe web fonts](http://web.mit.edu/jmorzins/www/fonts.html)
[^webfont-converter]: [Webfont generator by FontSquirrel](http://www.fontsquirrel.com/tools/webfont-generator)
[^bulletproof-webfont]: [Further Hardening of the Bulletproof Syntax](http://www.fontspring.com/blog/further-hardening-of-the-bulletproof-syntax)