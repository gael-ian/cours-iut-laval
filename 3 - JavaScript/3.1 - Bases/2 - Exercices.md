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


## Exercice 2<br />Fonctions




## Exercice 2<br />Couleurs hexadécimales vers RGB

Parmis les système de notation des couleurs en CSS, on trouve :

* La notation hexadécimale : `#c2c6d8`
* La notation RGB : `rgb(194, 198, 216);`

Écrivez une fonction `colorHexaToRgb` qui prend en paramètre une couleur selon la notation hexadécimale et retourne la notation RGB correspondante.
 
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

Écrivez une fonction `colorRgbToHexa` qui prend en paramètre une couleur selon la notation RGB et retourne la notation hexadécimale correspondante.

Vous testerez votre fonction avec au moins tous les exemples donnés à l'exercice 2.

> Fonctions JavaScript utiles :
>
> * [String.split](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split)


## Exercice 4<br />Compteurs de mots

Écrivez une fonction `wordCount` qui prend en paramètre une chaîne de caractère et retourne le nombre de mots qu'elle contient.

Vous complèterez cette exercice en écrivant un script qui demande à l'utilisateur de saisir une chaîne de caractères et affiche ensuite le nombre de mots dans cette phrase et sa longueur totale.
La communication avec l'utilisateur se ferra au travers des boites de dialogue du navigateur.

> Fonctions JavaScript utiles :
>
> * [Window.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt)
> * [Window.alert](https://developer.mozilla.org/en-US/docs/Web/API/window.alert)


## Exercice 5<br />Compteurs de mots

Écrivez une fonction `wordCount` qui prend en paramètre une chaîne de caractère et retourne le nombre de mots qu'elle contient.

Vous complèterez cette exercice en écrivant un script qui demande à l'utilisateur de saisir une chaîne de caractères et affiche ensuite le nombre de mots dans cette phrase et sa longueur totale.
La communication avec l'utilisateur se ferra au travers des boites de dialogue du navigateur.

> Fonctions JavaScript utiles :
>
> * [Window.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt)
> * [Window.alert](https://developer.mozilla.org/en-US/docs/Web/API/window.alert)

