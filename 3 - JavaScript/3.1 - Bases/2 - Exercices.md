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


## Exercice 5<br />Devises

Écrivez une fonction `motto` qui retourne la devise associée à l'une des grandes familles de Westeros dont le nom sera passé en paramêtre (en tant que chaîne de caractères).
Si un nom de famille inconnu est passé en paramêtre, la fonction retourne une chaîne vide.

<table>
  <thead>
    <tr>
      <th>Famille</th>
      <th>Devise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Targaryen</td>
      <td>Fire and Blood</td>
    </tr>
    <tr>
      <td>Stark</td>
      <td>Winter is Coming</td>
    </tr>
    <tr>
      <td>Bolton</td>
      <td>Our Blades Are Sharp</td>
    </tr>
    <tr>
      <td>Greyjoy</td>
      <td>We Do Not Sow</td>
    </tr>
    <tr>
      <td>Tully</td>
      <td>Family, Duty, Honor</td>
    </tr>
    <tr>
      <td>Arryn</td>
      <td>As High as Honor</td>
    </tr>
    <tr>
      <td>Lannister</td>
      <td>Hear Me Roar!</td>
    </tr>
    <tr>
      <td>Tyrell</td>
      <td>Growing Strong</td>
    </tr>
    <tr>
      <td>Baratheon</td>
      <td>Ours is the Fury</td>
    </tr>
    <tr>
      <td>Martell</td>
      <td>Unbowed, Unbent, Unbroken</td>
    </tr>
  </tbody>
</table>


## Exercice 6<br />Devises (suite)

Si la fonction précédente est appelée avec le nom d'une famille inconnue, elle retourne `undefined`.
Modifiez la fonction pour qu'elle retourne une chaîne vide si un nom de famille inconnu est passé en paramêtre.

> Fonctions JavaScript utiles :
>
> * [Object.hasOwnProperty](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty)


## Exercice 7<br />Boucles `for`

### Série entière 

Écrivez une fonction `integersSeries` qui prend deux nombres entiers `start` et `end` en paramêtres.
Cette fonction retourne un tableau des nombres entiers compris entre `start` et `end`, inclus.
Si `end` est inférieur à `start`, vous inverserez les bornes avant de construire le tableau.

> Fonctions JavaScript utiles :
>
> * [Array.push](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)

### Série entière paire

Écrivez une seconde fonction `evenIntegersSeries` qui ne retourne que les nombres entiers pairs compris entre les deux bornes passées en paramêtres.

> Fonctions JavaScript utiles :
>
> * L'opérateur [%](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_arithm%C3%A9tiques#Remainder)

### Série entière décroissante

Écrivez une seconde fonction `decreasingIntegersSeries` qui retourne les nombres entiers compris entre les deux bornes passées en paramêtres par ordre décroissant.


## Exercice 8<br />Boucles `while`

Écrivez une fonction `sum` qui prend en argument un tableau de nombres (entiers ou non).
Cette fonction retourne la somme des nombres présents dans le tableau.

> Fonctions JavaScript utiles :
>
> * [Array.shift](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift)

-------------------

Faire la somme de la diagnoale d'une matrice

---

Manipuler les paramètres d'une url

---

Trouver l'élément manquant dans une liste

---

Compte à rebour à partir d'un tableau non trié

---

Jeu de tir à la corde par équipe

---

Réimplémenter in_array(needle, haystack)

---

Nombres Harshad / Niven, Nombres premiers, ...

---

Détection de palindrome

---

Inversion de chaine (par caractère, par mot)

---

Compacter un tableau

---

Fonctions de recherche dans un tableau : all, any, none

---

Compter le nombre d'occurence dans un tableau

---

Tri d'objet

---

Système de like
