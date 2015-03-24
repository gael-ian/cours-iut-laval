# \<canvas\> - Prise en main


## Sommaire

* La balise \<canvas\>
* Le contexte bitmap
* Coordonnées 2D
* Dessiner dans un \<canvas\>
* Animer un \<canvas\>


## La balise \<canvas\>

La balise `<canvas>` est un élément apparu en HTML5 et aujourd'hui supporté par la grande majorité des navigateurs. Il fournit un surface de pixels sur laquelle il est possible de dessiner via une API JavaScript.

Par défaut, un `<canvas>` est un élément inline transparent mesurant 300x150 pixels.

    <canvas id="slate"></canvas>

La balise `<canvas>` accepte les attributs applicables à n'importe quelle balise HTML ainsi que `width` et `height`. Il est possible de définir un contenu alternatif pour les navigateurs ne supportant pas `<canvas>` de la même façon que pour un  `<object>`.


## Le contexte bitmap

La seule façon de modifier le contenu affiché par un `<canvas>` est d'utiliser l'API Javascript dédiée pour manipuler le contexte d'affichage bitmap qu'il représente.

La balise `<canvas>` est un élément du DOM, au même titre que n'importe quelle autre balise. Elle dispose cependant de quelques méthodes supplémentaires, permettant d'accéder au contexte bitmap qu'elle affiche :

* `getContext` : retourne un object représentant le contexte bitmap
* `toDataURL` : retourne le contenu affiché sérialisé sous forme d'une data-uri
* `toBlob` : retourne le contenu affiché sous forme d'un objet JavaScript de type Blob

Les fonctions de dessin sont accessibles depuis l'objet représentant le contexte bitmap. `<canvas>` supporte plusieurs types de contexte pour des modes de dessin différents.

    <canvas id="slate"></canvas>
    
    <script type="text/javascript">
      var slate = document.getElementById('slate');
      
      // Récupérer un contexte 2D
      var context2d = slate.getContext('2d');
      
      // Récupérer un contexte 3D
      var context3d = slate.getContext('webgl') || 
                      slate.getContext('experimental-webgl');
    </script>

Le contexte 2D est spécifié par le W3C [^2D-specification] et largement supporté. WebGL est une implémentation en JavaScript du standard OpenGL ES 2.0 spécifiée par Khronos Group [^webgl-specification] et n'est supportée que par les navigateurs les plus récents.  
Pour la suite du cours, nous ne nous intéresserons qu'au contexte 2D.


## Coordonnées 2D

<figure style="float: right">
  <img src="assets/canvas.png" alt="Coordonnées à l'intérieur d'un canvas" />
  <figcaption>
    Coordonnées à l'intérieur d'un canvas<br />
    Source: <a href="http://www.alsacreations.com/tuto/lire/1484-introduction.html">alsacreations.com</a>
  </figcaption>
</figure>

Le point d'origine (0, 0) est situé dans le coin supérieur gauche.

L'axe des abscisses s'étire dans le sens de la largeur ; l'axe des ordonnées dans le sens de la hauteur.

À l'intérieur du canvas, les coordonnées sont exprimées en pixels.

<div style="clear: both;"></div>

## Dessiner dans un \<canvas\>

L'objet retourné par `getContext('2d')`[^CanvasRenderingContext2D] est littéralement le crayon avec lequel nous allons pouvoir dessiné sur l'espace de pixels contenu dans le canvas : en modifiant les valeurs des propriétés de l'objet, on influence l'effet produit par le prochain coup de crayon ; en appelant l'une des méthodes de l'objet, on donne ou prépare un coup de crayon.

### Choisir sa couleur

Deux propriétés du contexte permettent de contrôler la couleur appliquée :

* `strokeStyle` le style utilisé pour le tracé des lignes et des contours
* `fillStyle`, le style appliqué pour le remplissage des zones

C'est deux propriétés peuvent prendre comme valeur une chaine de caractère contenant une couleur CSS, un dégradé ou un motif.

A la création du canvas, la couleur définie pour ces deux propriétés est le noir.

### Tailler son crayon

L'épaisseur des lignes et des contours tracés peut être contrôlés en modifiant la valeur de l'attribut `lineWidth`. Par défaut, elle est définie à 1px.

Les propriétés `lineCap` et `lineJoin` contrôlent respectivement l'allure des lignes lorsqu'elles se terminent et lorsqu'elles s'enchainent.

### Un simple cadre

Parce qu'il s'agit d'une des formes géométriques les plus simples à décrire et sans doute parce que la balise `<canvas>` en est un elle-même, le rectangle bénéficie d'un traitement particulier dans l'API de dessin 2D et dispose de 3 méthodes dédiées :

* `fillRect` pour tracer un rectangle plein
* `strokeRect` pour tracer les contours d'un rectangle
* `clearRect` pour effacer une zone rectangulaire

Ces trois méthodes attendent les mêmes arguments :

    context.fillRect(x, y, width, height);
    // Où x et y sont les coordonnées du coin supérieur gauche


**Exercice 1 :** Drapeaux

Pour toutes les autres formes, il faudra passer par les méthodes de contructions de chemins.

### Le chemin le plus court

On dit souvent que le plus court chemin entre deux points est la ligne droite. C'est vrai également dans l'API de dessin 2D de `<canvas>` où il n'existe pas de méthode pour tracer des lignes. Pour tracer la diagonale de notre canvas par exemple, il sera donc nécessaire de construire le chemin décrivant cette diagonale avant d'en demander le tracé du contour.

    // Démarrer un nouveau chemin
    context.beginPath();
    
    // Déplace le curseur en bas à gauche du canvas
    context.moveTo(0, context.canvas.height);
    // Ajouter au chemin une ligne reliant le point courant au coin supérieur droit.
    context.lineTo(context.canvas.width, 0);
    
    // Tracer le contour du chemin
    context.stroke();                           


**Exercice 2 :** Compositions

### Quelques détours

Les méthodes de constructions de chemins disponibles dans l'API de dessin 2D permettent de décrire des formes complexes avant d'en tracer les contours *- avec la méthode `stroke` -* ou de les remplir *- avec la méthode `fill` -*. À partir d'un nombre réduit de fonctions, il est possible de décrire toutes les formes géométriques, pas à pas.

Un triangle peut ainsi être décrit comme un chemin passant par trois points.

    // Démarrer un nouveau chemin
    context.beginPath();
    
    // Déplacer le curseur en bas à gauche du canvas
    context.moveTo(0, context.canvas.height);
    
    // Ajouter au chemin une ligne reliant le point courant
    // au point situé au milieu du bord supérieur
    context.lineTo(context.canvas.width / 2, 0);
    
    // Ajouter au chemin une ligne reliant le point courant
    // au point situé en bas à droite du canvas
    context.lineTo(context.canvas.width, context.canvas.height);
    
    // Fermer le chemin en reliant le point courant au point de départ
    context.closePath();
    
    // Tracer le contour du chemin
    context.stroke();
    
    // Remplir l'espace délimité par le chemin
    // (Ceci est possible car notre chemin est clos)
    context.fill();

**Exercice 3 :** Polygones

[^2D-specification]: <http://www.w3.org/TR/2dcontext/>
[^webgl-specification]: <https://www.khronos.org/registry/webgl/specs/1.0/>
[^CanvasRenderingContext2D]: <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D>