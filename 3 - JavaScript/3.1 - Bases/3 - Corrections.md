# Bases du JavaScript<br />Corrections des exercices 


## Exercice 1<br />Portée des variables

Pour chacun des exemples de code suivants, précisez ce que retournent les lignes suivies de `// ?` et expliquez pourquoi.

### 1

    var a = 1;
    function sample() {
      var a = 2;
    }
    sample();
    console.log(a); // 1

La valeur de la variable `a` du contexte global n'est pas modifiée dans la fonction `sample` car cette fonction redéclare une variable `a`, locale donc propre à son contexte.

### 2

    var a = 1;
    function sample() {
      a = 2;
    }
    sample();
    console.log(a); // 2

La valeur de la variable `a` du contexte global est cette fois modifiée car la fonction `sample` lui réassigne la valeur '2' lorsqu'elle est appelée.

### 3

    function sample() {
      var a = 2;
    }
    sample();
    console.log(a); // ReferenceError

Ce code lève une exception de type `ReferenceError` car la variable `a` n'existe pas en dehors du contexte de la fonction `sample`.

### 4

    var a = 1;
    function sample() {
      a = 2;
    }
    console.log(a); // 1

La valeur de la variable `a` du contexte global n'est pas modifiée car, contrairement à la question 2, la fonction `sample` n'est jamais appelée.

### 5

    var a = 1;
    function sample() {
      var b = 2;
      function specimen() {
        console.log(a); // 1
        console.log(b); // 2
      }
      specimen();
    }
    sample();

La variable `b`, locale à la fonction `sample`, est visible depuis le contexte de la fonction `specimen` car les contextes des deux fonctions sont imbriquées, comme l'est celui de la fonction `sample` avec le contexte global. Ceci explique aussi que la variable `a` soit également visible.

### 6

    function sample() {
      a = 2;
    }
    sample();
    console.log(a); // 2

Bien que déclarée dans la fonction `sample`, `a` est définie comme une variable globale. Elle est donc visible quelque soit le contexte dés lors qu'elle a été déclarée.

### 7

    function sample() {
      a = 2;
    }
    console.log(a); // ReferenceError
    sample();

La variable globale `a` n'existe pas avant le premier appel de la fonction `sample`.


## Exercice 2<br />Couleurs héxadécimales vers RGB

    var hexa = '#c2c6d8';
    
    // Décomposition de la notation héxadécimale en composante de couleur
    var red = parseInt(hexa.slice(1, 2), 16);
    var green = parseInt(hexa.slice(3, 4), 16);
    var blue = parseInt(hexa.slice(5, 6), 16);
    
    // Construction de la notation RGB par concaténation
    var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    
    console.log(rgb);


## Exercice 3<br />Couleurs RGB vers héxadécimales

    var rgb = 'rgb(100, 50, 170)';
    
    // Extraction des composantes de couleurs
    var colorString = rgb.slice(4, -1);
    var colors = colorString.split(', ');
    
    var red = parseInt(colors[0], 10).toString(16);
    var green = parseInt(colors[1], 10).toString(16);
    var blue = parseInt(colors[2], 10).toString(16);
    
    var hexa = '#' + red + green + blue; 
    console.log(hexa);
