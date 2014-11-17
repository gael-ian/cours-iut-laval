# Séance 1 - Positionnement CSS<br />Corrections des exercices


## Exercice 1<br />Types de balises

### Balises de type bloc

* `<h1>`
* `<blockquote>`
* `<section>`
* `<p>`
* `<ul>`

### Balises en ligne

* `<strong>`
* `<img>`
* `<input>`

### Autres balises

#### `<li>`

La valeur de propriété `display` associée par défaut aux balises `<li>` est `list-item`, qui implique une gestion des puces et numérotations par le navigateur.

#### `<a>`

Historiquement balise en ligne, la balise `<a>` peut être utilisée en HTML5 pour englober des balises de types bloc et rendre l'ensemble d'un bloc cliquable sans devoir faire appel à JavaScript.


## Exercice 2<br />Display

### block

L'élément s'affiche comme un bloc occupant toute la largeur de son conteneur. Il est possible d'en contrôler les dimensions et les espacements verticaux comme horizontaux.

L'alignement vertical de son contenu *via* `vertical-align` n'est pas pris en compte.

### inline

Sur une balise en ligne, il est possible de contrôler via CSS l'alignement vertical de son contenu (`vertical-align`) mais pas ses dimensions (*via* les propriétés `width`, `height` et leurs dérivés).

Les espacements verticaux (*via* les propriétés `margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`) sont affichés mais ne font pas varier la hauteur de ligne du conteneur.

### inline-block

L'élément s'intègre dans le flux horizontal comme élément en ligne, mais il est possible d'en contrôler les dimensions et les espacements verticaux comme horizontaux.

La propriété `vertical-align` peut également lui être appliquée pour contrôler le positionnement vertical de la boite par rapport aux autres éléments situés sur la même ligne.

## Exercice 3<br />CSS table layout model

	nav {
	  /* `display: table` ne respecte pas la largeur spécifiée
	   * et étire le menu si le contenu dépasse
	   */
	  display: inline-table;
	  
	  /* Recrée la marge de 5px entre chaque onglet */
	  border-collapse: separate;
	  border-spacing: 5px 0;
	  
	  /* Supprime visuellement cette marge pour le premier onglet */
	  margin-left: -5px;
	}
	
	nav a,
	nav i {
	  display: table-cell;
	  min-width: 20%;
	}

Le modèle d'agencement en tableau CSS ne résoud pas le problème d'un menu devant s'adapter automatiquement en fonction du nombre d'éléments qu'il contient. Il propose seulement une méthode alternative.

## Exercice 4<br />float & clear

	.main {
	  display: inline-block;
	}
	
	.main article,
	.main aside {
	  float: left;
	}
	
	.main article {
	  width: 620px;
	}
	
	.main aside {
	  width: 300px;
	}
	
	.main figure {
	  float: left;
	}

Les éléments positionnés grâce à la propriété `float` n'appartiennent plus au flux de la page et ne sont donc pas pris en compte pour l'aggrandissement de leur conteneur, `.main`.

Pour résoudre le problème, il faut indiquer au navigateur que les éléments flottants doivent être interrompus à la fermeture de la section `.main`. Plusieurs méthodes sont envisageables :

### clearer

Consiste à ajouter un bloc vide à la fin de la section `.main` auxquel on appliquera une règle `clear: both`. Cette méthode est simple mais pollue le code HTML avec des éléments inutiles.

### `clearfix`

Consiste à appliquer la règle `clear: both` sur un élément vide factice, construit à partir du pseudo-élément `:after` de la section `.main`.

Le pseudo-élément ne doit pas être vide pour être généré et doit supporter la propriété CSS `clear`.

	.main:after {
	  content: "";
	  display: table;
	  clear: both;
	}

### Contexte de formattage de bloc

Consiste à créer pour la section `.main` un nouveau contexte de formattage de blocs qui prendra en charge l'interruption des flottants

Un contexte de formatage de blocs[^bloc-formatting-context] est créé dans les situations suivantes :

* L'élément racine ou quelque chose qui le contient
* Les éléments flottants
* Les éléments avec une position absolue (éléments avec la propriété position à absolute ou fixed)
* Les blocs en ligne
* Les cellules de tableau
* Les titres de tableau
* Les éléments où overflow a une valeur autre que visible
* Les boîtes flexibles

C'est cette dernière méthode qui est appliquée d'emblée dans le cas de la `figure` placée comme flottante à gauche du texte, le bloc `article` qui la contient disposant de son propre context de formattage de bloc depuis qu'il est lui-même flottant.

## Exercice 5<br />CSS table layout model

	/*
	 * Facultatif : comme dans le cas d'un tableau HTML, la spécification
	 * CSS prévoit que le navigateur se charge d'ajouter automatiquement un
	 * conteneur de type `table-row` pour englober les cellules si aucun
	 * n'est déclaré (ou `table` pour englober les lignes, …)
	 *
	 * Il n'est bien sûr pas recommandé de se reposer sur ce comportement.
	 */
	.main {
	  display: table-row;
	}
	
	.main article,
	.main aside {
	  display: table-cell;
	}

Le modèle d'agencement en tableau CSS est justifié dans ce cas car il permet d'obtenir le résultat attendu en un nombre très réduit de lignes et sans devoir modifier le balisage HTML à seule fin de présentation.

## Exercice 6<br />position

	.main figure {
	  position: relative;
	}
	
	.main figcaption {
	  position: absolute;
	  top: 0;
	  left: 0;  /* Pour satisfaire ces deux déclarations, le 
	  right: 0;  * navigateur ferra coïncider les bords du 
	             * bloc positionné avec ceux de son conteneur.
	             */
	}
	
	header {
	  position: relative;
	}
	
	.last-tweet {
	  position: absolute;
	  top: 10px;
	  right: 140px;
	  
	  width: 400px;
	  padding: 10px;
	  margin: 0;
	  
	  background: #fff;
	  border-radius: 5px;
	  
	  font-size: 0.7em;
	}

Si le positionnement absolu est indispensable dans certains cas, il est à utiliser avec précaution dés lors que la taille des éléments positionnés peut varier.

[^bloc-formatting-context]: [Explications détaillées](http://www.alsacreations.com/astuce/lire/1543-le-contexte-de-formatage-block-en-css.html) et illustrées sur Alsacréation