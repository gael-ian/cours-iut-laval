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


## Exercice 2<br />Fonctions

?


## Exercice 2<br />Couleurs héxadécimales vers RGB

Parmis les système de notation des couleurs en CSS, on trouve :

* La notation héxadécimale : `#c2c6d8`
* La notation RGB : `rgb(194, 198, 216);`

Écrivez un script permettant de passer de la notation héxadécimale à la notation RGB et d'afficher le résultat dans la console. 
Votre script devra fonctionner pour n'importe quelle couleur.

Exemples :

* `#c2c6d8` => `rgb(194, 198, 216)`
* `#0c0c0c` => `rgb(12, 12, 12)`
* `#6432aa` => `rgb(100, 50, 170)`
* `#fac805` => `rgb(250, 200, 5)`

> Fonctions JavaScript utiles :
>
> * [String.slice](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice)
> * [parseInt](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt)


## Exercice 3<br />Couleurs RGB vers héxadécimales

Écrivez un script permettant de passer de la notation RGB à la notation héxadécimale et d'afficher le résultat dans la console.
Votre script devra fonctionner avec tous les exemples donnés à l'exercice 2.

> Fonctions JavaScript utiles :
>
> * [String.split](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split)
