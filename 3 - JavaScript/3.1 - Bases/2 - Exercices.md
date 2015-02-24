# Bases du JavaScript<br />Exercices


## Exercice 1<br />Portée des variables

Pour chacun des exemples de code suivants, précisez ce que retournent les lignes suivies de `// ?` et expliquez pourquoi.

### 1

    var a = 1;
    function sample() {
      var a = 2;
    }
    sample();
    console.log(a); // ?

### 2

    var a = 1;
    function sample() {
      a = 2;
    }
    sample();
    console.log(a); // ?

### 3

    function sample() {
      var a = 2;
    }
    sample();
    console.log(a); // ?

### 4

    var a = 1;
    function sample() {
      a = 2;
    }
    console.log(a); // ?

### 5

    var a = 1;
    function sample() {
      var b = 2;
      function specimen() {
        console.log(a); // ?
        console.log(b); // ?
      }
      specimen();
    }
    sample();

### 6

    function sample() {
      a = 2;
    }
    sample();
    console.log(a); // ?

### 7

    function sample() {
      a = 2;
    }
    console.log(a); // ?
    sample();

### 8

    function sample() {
      function specimen() {
        return 'a';
      }
      specimen(); // ?
    }
    sample();
    specimen(); // ?

### 9

    console.log(sample()); // ?
    
    function sample() {
      return 'a';
    }
    
    console.log(sample()); // ?

### 10

    console.log(sample()); // ?
    
    var sample = function() {
      return 'a';
    }
    
    console.log(sample()); // ?


## Exercice 2<br />Couleurs hexadécimales vers RGB

Parmis les système de notation des couleurs en CSS, on trouve :

* La notation RGB : `rgb(194, 198, 216);`
* La notation hexadécimale : `#c2c6d8`

Dans chacune de ces notations, les couleurs sont exprimées selon leurs proportions de rouge, de vert et de bleu.
La notation RGB indique ces trois valeurs au format décimal, sur une échelle de 0 à 255.
Dans la notation hexadécimale, les paires de caractères correspondent à ces mêmes valeurs, converties en base 16.

Complétez le corps de la fonction `colorHexaToRgb` qui prend en paramètre une couleur selon la notation hexadécimale et retourne la notation RGB correspondante.

    function colorHexaToRgb(hexa) {
      // À compléter
    }
    
    console.log(colorHexaToRgb('#c2c6d8'));
    // "rgb(194, 198, 216)"
 
Vous testerez votre fonction avec plusieurs couleurs.
Exemples :

* `#c2c6d8` => `rgb(194, 198, 216)`
* `#0c0c0c` => `rgb(12, 12, 12)`
* `#6432aa` => `rgb(100, 50, 170)`
* `#fac805` => `rgb(250, 200, 5)`

> Fonctions JavaScript utiles :
>
> * [String.slice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice)
> * [parseInt](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt)


## Exercice 3<br />Couleurs RGB vers hexadécimales

Complétez le corps de la fonction `colorRgbToHexa` qui prend en paramètre une couleur selon la notation RGB et retourne la notation hexadécimale correspondante.

    function colorRgbToHexa(rgb) {
      // À compléter
    }
    
    console.log(colorRgbToHexa('rgb(194, 198, 216)'));
    // "#c2c6d8"

Vous testerez votre fonction avec au moins tous les exemples donnés à l'exercice 2.

> Fonctions JavaScript utiles :
>
> * [String.split](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split)


## Exercice 4<br />Compteurs de mots

Complétez le corps de la fonction `wordCount` qui prend en paramètre une chaîne de caractère et retourne le nombre de mots qu'elle contient.

    function wordCount(string) {
      // À compléter
    }
    
    console.log(wordCount('Supercalifragilisticexpialidocious'));
    // 1

Vous complèterez cette exercice en écrivant un script qui demande à l'utilisateur de saisir une chaîne de caractères et affiche ensuite le nombre de mots dans cette phrase et sa longueur totale.
La communication avec l'utilisateur se ferra au travers des boites de dialogue du navigateur.

> Fonctions JavaScript utiles :
>
> * [Window.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt)
> * [Window.alert](https://developer.mozilla.org/en-US/docs/Web/API/window.alert)


## Exercice 5<br />Devises

Complétez le corps de la fonction `motto` qui retourne la devise associée à l'une des grandes familles de Westeros dont le nom sera passé en paramêtre (en tant que chaîne de caractères).

    function motto(family) {
      // À compléter
    }
    
    console.log(motto('Stark'));
    // "Winter Is Coming"

<table>
  <thead>
    <tr>
      <th>Famille</th>
      <th>Devise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stark</td>
      <td>Winter Is Coming</td>
    </tr>
    <tr>
      <td>Bolton</td>
      <td>Our Blades Are Sharp</td>
    </tr>
    <tr>
      <td>Karstark</td>
      <td>The Sun of Winter</td>
    </tr>
    <tr>
      <td>Mormont</td>
      <td>Here We Stand</td>
    </tr>
    <tr>
      <td>Corbois</td>
      <td>Righteous in Wrath</td>
    </tr>
    <tr>
      <td>Lannister</td>
      <td>Hear Me Roar!</td>
    </tr>
    <tr>
      <td>Sarwyck</td>
      <td>Family is hope, protect it always</td>
    </tr>
    <tr>
      <td>Crakehall</td>
      <td>None So Fierce</td>
    </tr>
    <tr>
      <td>Marpheux</td>
      <td>Burning Bright</td>
    </tr>
    <tr>
      <td>Baratheon</td>
      <td>Ours is the Fury</td>
    </tr>
    <tr>
      <td>Caron</td>
      <td>No Song So Sweet</td>
    </tr>
    <tr>
      <td>Grandison</td>
      <td>Rouse Me Not</td>
    </tr>
    <tr>
      <td>Penrose</td>
      <td>Set Down Our Deeds</td>
    </tr>
    <tr>
      <td>Lonbec</td>
      <td>The Choice Is Yours</td>
    </tr>
    <tr>
      <td>Greyjoy</td>
      <td>We Do Not Sow</td>
    </tr>
    <tr>
      <td>Morru</td>
      <td>Though All Men Do Despise Us</td>
    </tr>
    
  </tbody>
</table>


## Exercice 6<br />Devises (II)

Si la fonction précédente est appelée avec le nom d'une famille inconnue, elle retourne `undefined`.
Modifiez la fonction pour qu'elle retourne une chaîne vide si un nom de famille inconnu est passé en paramêtre.

> Fonctions JavaScript utiles :
>
> * [Object.hasOwnProperty](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty)


## Exercice 7<br />Boucle `for`

### Série entière 

Complétez le corps de la fonction `integersSeries`, qui prend deux nombres entiers `start` et `end` en paramêtres et retourne un tableau des nombres entiers compris entre ces deux bornes, incluses.
Si `end` est inférieur à `start`, vous inverserez les bornes avant de construire le tableau.

    function integersSeries(start, end) {
      // À compléter
    }
    
    console.log(integersSeries(15, 7));
    // [7, 8, 9, 10, 11, 12, 13, 14, 15]

> Fonctions JavaScript utiles :
>
> * [Array.push](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)

### Série entière paire

Complétez le corps de la fonction `evenIntegersSeries`, qui ne retourne que les nombres entiers pairs compris entre les deux bornes passées en paramêtres.

    function evenIntegersSeries(start, end) {
      // À compléter
    }
    
    console.log(evenIntegersSeries(7, 21));
    // [8, 10, 12, 14, 16, 18, 20]

> Fonctions JavaScript utiles :
>
> * L'opérateur [%](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques#Remainder)

### Série entière décroissante

Complétez le corps de la fonction `decreasingIntegersSeries`, qui retourne les nombres entiers compris entre les deux bornes passées en paramêtres par ordre décroissant.

    function decreasingIntegersSeries(start, end) {
      // À compléter
    }
    
    console.log(decreasingIntegersSeries(12, 6));
    // [12, 11, 10, 9, 8, 7, 6]


## Exercice 8<br />Boucle `while`

Complétez le corps de la fonction `arraySum`, qui prend en argument un tableau de nombres (entiers ou non) et retourne la somme des nombres présents dans le tableau.

    function arraySum(start, end) {
      // À compléter
    }
    
    console.log(arraySum([1, 2, 3, 5, 7, 11, 13]));
    // 42

> Fonctions JavaScript utiles :
>
> * [Array.shift](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift)


## Exercice 9<br />Devise (III)

Complétez le corps de la fonction `toArms`, qui prend en argument le nom d'une famille sous forme de chaîne de caractères et retourne un tableau constitué de sa devise et de celles de tous ses vassaux.

Vous reprendrez comme base la table d'association construite à l'exercice 6, en associant à chaque famille une mention de sa maison suzeraine.

    function atArms(family) {
      // À compléter
    }
    
    console.log(atArms('Baratheon'));
    // [ "Ours is the Fury",
    //   "No Song So Sweet",
    //   "Rouse Me Not",
    //   "Set Down Our Deeds",
    //   "The Choice Is Yours" ]

<table>
  <thead>
    <tr>
      <th>Famille</th>
      <th>Suzerain</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stark</td>
      <td></td>
    </tr>
    <tr>
      <td>Bolton</td>
      <td>Stark</td>
    </tr>
    <tr>
      <td>Karstark</td>
      <td>Stark</td>
    </tr>
    <tr>
      <td>Mormont</td>
      <td>Stark</td>
    </tr>
    <tr>
      <td>Corbois</td>
      <td>Stark</td>
    </tr>
    <tr>
      <td>Lannister</td>
      <td></td>
    </tr>
    <tr>
      <td>Sarwyck</td>
      <td>Lannister</td>
    </tr>
    <tr>
      <td>Crakehall</td>
      <td>Lannister</td>
    </tr>
    <tr>
      <td>Marpheux</td>
      <td>Lannister</td>
    </tr>
    <tr>
      <td>Baratheon</td>
      <td></td>
    </tr>
    <tr>
      <td>Caron</td>
      <td>Baratheon</td>
    </tr>
    <tr>
      <td>Grandison</td>
      <td>Baratheon</td>
    </tr>
    <tr>
      <td>Penrose</td>
      <td>Baratheon</td>
    </tr>
    <tr>
      <td>Lonbec</td>
      <td>Baratheon</td>
    </tr>
    <tr>
      <td>Greyjoy</td>
      <td></td>
    </tr>
    <tr>
      <td>Morru</td>
      <td>Greyjoy</td>
    </tr>
  </tbody>
</table>


## Exercice 10<br />Somme de la diagonale d'une matrice

Complétez le corps de la fonction `matrixDiagonalSum`, qui prend en argument une matrice de nombres (entiers ou non) et retourne la somme des nombres présents sur la diagonale de la matrice.


    function matrixDiagonalSum(matrix) {
      // À compléter
    }
    
    // var matrix = ?;
    console.log(matrixDiagonalSum(matrix));

## Exercice 11<br />Recherche dans un `Array`

Complétez le corps de la fonction `inArray`, qui prend deux arguments :
 
* `needle`, un élément à rechercher
* `haystack`, un tableau dans lequel rechercher l'élément

La fonction retournera `true` si l'élément est trouvé dans le tableau, `false` sinon.

    function inArray(needle, haystack) {
      // À compléter
    }
    
    var planets = [
      "Adipose 3", "Pyrovilia", "Trenzalore", "Apalapucia",
      "Skaro", "Clom", "Raxacoricofallapatorius", "Ry'leh"
    ];
    
    console.log(inArray("Galifrey", planets));
    // false


## Exercice 12<br />Recherche dans un `Array` (II)

Réécrire la fonction `inArray` de l'exercice précédent sans parcourir le tableau.

> Fonctions JavaScript utiles :
>
> * [Array.indexOf](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf)


## Exercice 13<br />Convertions de couleurs

Réécrire les fonctions `colorHexaToRgb` et `colorRgbToHexa` sous une forme la plus courte possible.

> Fonctions JavaScript utiles :
>
> * [Array.map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map)
> * [Array.join](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join)


## Exercice 14<br />Compression

Complétez le corps de la fonction `compact`, qui prend en argument un tableau et retourne une copie de ce tableau dans laquelle tous les éléments dont la valeur est `undefined`, `null`, `""` ou `0` ont été retirés.

    function compact(array) {
      // À compléter
    }
    
    console.log(compact(['a', '', 3.14, null, 'b', undefined, 12, 0]));
    // ['a', 3.14, 'b', 12]

> Fonctions JavaScript utiles :
>
> * [Array.filter](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)


## Exercice 15<br />Compte à rebours

Complétez le corps de la fonction `countdown`, qui prend en argument un tableau d'entiers.
Cette fonction doit trier les éléments du tableau dans l'ordre décroissant puis construire une chaine de caractères reprenant tous ces éléments séparés par une virgule, à l'exception du dernier qui sera remplacé par "Go".

    function countdown(array) {
      // À compléter
    }
    
    console.log(countdown([ 5, 12, 3, 8, 1 ]));
    // "12, 8, 5, 3, Go"

> Fonctions JavaScript utiles :
>
> * [Array.sort](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)
> * [Array.pop](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop)


## Exercice 16<br />Filmographie

Complétez le corps de la fonction `sortFilmsBy`, qui prend en argument un tableau de films, représenté chacun par un `Object`, et un critère de tri, sous forme d'une chaine de caractère.
Cette fonction retournera une copie du tableau triée selon le critère passé en argument.

    function sortFilmsBy(films, criterion) {
      // À compléter
    }
    
    var films = [
      // À compléter
    ];
    
    console.log(sortFilmsBy(films, 'title'));

<table>
  <thead>
    <tr>
      <th>Titre</th>
      <th>Réalisateur</th>
      <th>Année de sortie</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Conan le barbare</td>
      <td>John Milius</td>
      <td>1982</td>
      <td>6.9</td>
    </tr>
    <tr>
      <td>Conan le destructeur</td>
      <td>Richard Fleischer</td>
      <td>1984</td>
      <td>5.8</td>
    </tr>
    <tr>
      <td>Conan</td>
      <td>Marcus Nispel</td>
      <td>2011</td>
      <td>5.2</td>
    </tr>
  </tbody>
</table>


## Exercice 17<br />Sous-ensemble

Complétez le corps de la fonction `subsetOf`, qui prend en argument deux tableaux et retourne `true` si tous les éléments du premier tableau sont présents dans le second, `false` sinon.

    function subsetOf(subset, set) {
      // À compléter
    }
    
    console.log(subsetOf([ 1, 3, 5 ], [ 1, 3, 5, 7, 11, 13 ]));
    // true

> Fonctions JavaScript utiles :
>
> * [Array.every](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every)


## Exercice 18<br />Somme sélective

Complétez le corps de la fonction `sum`, qui prend en argument un tableau de nombres (entiers ou non) et retourne la somme de tous les nombres positifs incluent dans ce tableau.

    function sum(array) {
      // À compléter
    }
    
    console.log(sum([ -5, -3, -1, 1, 3, 5 ]));
    // 9

> Fonctions JavaScript utiles :
>
> * [Array.reduce](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce)


## Exercice 19<br />Manipulations d'url

Écrire un module `Url` qui comportera trois fonctions :

* `parseParameters`  
  Cette fonction prend en argument une url et retourne ses paramètres sous la forme d'un `Object`.
* `buildParameters`  
  Cette fonction prend en argument une collection de paramètres sous la forme d'un `Object` et les retourne sous forme d'une chaine utilisable dans une url. 
* `mergeParameters`  
  Cette fonction prend en argument une url et une collection de paramètres sous la forme d'un `Object` et retourne une url complète.
  Les paramètres présents dans l'url passée en argument doivent être conservés, sauf si une valeur différente est précisée dans le second argument.

Par simplicité, on considérera que :

* Les paramètres sont séparés de l'url de base par un unique signe `?`
* Les paramètres sont séparés entre eux par un signe `&`
* Les noms et les valeurs des paramètres ne contiennent jamais de signes `=`, `&` ou `?`
* Les paramètres sont définis sur un seul niveau et portent des valeurs uniques

Exemples :

    var url    = "http://search.com/find?query=JavaScript&lang=fr";
    var params = { page: 2, lang: "en" };
    
    console.log(Url.parseParameters("http://search.com/find?query=JavaScript&lang=fr"));
    // { query: "JavaScript", lang: "fr" }
    
    console.log(Url.buildParameters({ page: 2, lang: "en" }));
    // "page=2&lang=en"

    console.log(Url.mergeParameters(url, params));
    // "http://search.com/find?query=JavaScript&lang=en&page=2"
