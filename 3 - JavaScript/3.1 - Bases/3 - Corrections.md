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

### 8

    function sample() {
      function specimen() {
        return 'a';
      }
      specimen(); // 'a'
    }
    sample();
    specimen(); // ReferenceError

La fonction `specimen` n'existe pas en dehors du contexte de la fonction `sample`.

### 9

    console.log(sample()); // 'a'
    
    function sample() {
      return 'a';
    }
    
    console.log(sample()); // 'a'

Les deux appels à la fonction `sample` retourne le même résultat. Même si elle n'apparait qu'après le premier appel dans le code source, la déclaration de la fonction `sample` est remontée par l'interpréteur lors de l'analyse du contexte.

### 10

    console.log(sample()); // ReferenceError
    
    var sample = function() {
      return 'a';
    }
    
    console.log(sample()); // 'a'

Contrairement aux déclarations de fonctions, les fonctions anonymes restent indéfinies dans les portions de code qui précèdent leur construction;



## Exercice 2<br />Couleurs hexadécimales vers RGB

    function colorHexaToRgb(hexa) {
      
      // Décomposition de la notation héxadécimale en composante de couleur
      var red = parseInt(hexa.slice(1, 3), 16);
      var green = parseInt(hexa.slice(3, 5), 16);
      var blue = parseInt(hexa.slice(5, 7), 16);
      
      // Construction de la notation RGB par concaténation
      var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
      
      return rgb;
    }
    
    console.log(colorHexaToRgb('#c2c6d8'));
    // "rgb(194, 198, 216)"


## Exercice 3<br />Couleurs RGB vers hexadécimales

    function colorRgbToHexa(rgb) {
    
      // Extraction des composantes de couleurs
      var colorString = rgb.slice(4, -1);
      var colors = colorString.split(', ');
    
      var red = parseInt(colors[0], 10).toString(16);
      var green = parseInt(colors[1], 10).toString(16);
      var blue = parseInt(colors[2], 10).toString(16);
      
      var hexa = '#' + red + green + blue; 
      
      return hexa;
    }
    
    console.log(colorRgbToHexa('rgb(194, 198, 216)'));
    // "#c2c6d8"


## Exercice 4<br />Compteur de mots

    function wordCount(string) {
      var words = string.split(' ');
      return words.length;
    }
    
    console.log(wordCount('Supercalifragilisticexpialidocious'));
    // 1
    
    var string = window.prompt("Veuillez saisir une phrase.");
    window.alert("Votre phrase comporte " + wordCount(string) + " mots pour " + string.length + " caractères.");


## Exercice 5<br />Devises

    function motto(family) {
      var houses = {
        "Stark":      "Winter is Coming",
        "Bolton":     "Our Blades Are Sharp", 
        "Karstark":   "The Sun of Winter", 
        "Mormont":    "Here We Stand", 
        "Corbois":    "Righteous in Wrath", 
        "Lannister":  "Hear Me Roar!", 
        "Sarwyck":    "Family is hope, protect it always", 
        "Crakehall":  "None So Fierce", 
        "Marpheux":   "Burning Bright", 
        "Baratheon":  "Ours is the Fury", 
        "Caron":      "No Song So Sweet", 
        "Grandison":  "Rouse Me Not", 
        "Penrose":    "Set Down Our Deeds", 
        "Lonbec":     "The Choice Is Yours", 
        "Greyjoy":    "We Do Not Sow", 
        "Morru":      "Though All Men Do Despise Us", 
      };
      
      return houses[family];
    }
    
    console.log(motto('Stark'));
    // "Winter Is Coming"


## Exercice 6<br />Devises (suite)

    function motto(family) {
      var houses = {
        "Stark":      "Winter is Coming",
        "Bolton":     "Our Blades Are Sharp", 
        "Karstark":   "The Sun of Winter", 
        "Mormont":    "Here We Stand", 
        "Corbois":    "Righteous in Wrath", 
        "Lannister":  "Hear Me Roar!", 
        "Sarwyck":    "Family is hope, protect it always", 
        "Crakehall":  "None So Fierce", 
        "Marpheux":   "Burning Bright", 
        "Baratheon":  "Ours is the Fury", 
        "Caron":      "No Song So Sweet", 
        "Grandison":  "Rouse Me Not", 
        "Penrose":    "Set Down Our Deeds", 
        "Lonbec":     "The Choice Is Yours", 
        "Greyjoy":    "We Do Not Sow", 
        "Morru":      "Though All Men Do Despise Us", 
      };
      
      if (!houses.hasOwnProperty(family)) {
        return '';
      }
      
      return houses[family];
    }
    
    console.log(motto('Mormont'));
    // "Here We Stand"
    
    console.log(motto('Targaryen'));
    // ""


## Exercice 7<br />Boucle `for`

### Série entière

    function integersSeries(start, end) {
      var integers = [];
      
      if (start > end) {
        var swap = start;
        start = end;
        end = swap;
      }
      
      for (var i = start; i <= end; i++) {
        integers.push(i);
      }
      return integers;
    }
    
    console.log(integersSeries(15, 7));
    // [7, 8, 9, 10, 11, 12, 13, 14, 15]

### Série entière paire

    function evenIntegersSeries(start, end) {
      var integers = [];
      
      if (start > end) {
        var swap = start;
        start = end;
        end = swap;
      }
      
      for (var i = start + (start % 2); i <= end; i = i + 2) {
        integers.push(i);
      }
      return integers;
    }
    
    console.log(evenIntegersSeries(7, 21));
    // [8, 10, 12, 14, 16, 18, 20]

### Série entière décroissante

    function decreasingIntegersSeries(start, end) {
      var integers = [];
      
      if (start > end) {
        var swap = start;
        start = end;
        end = swap;
      }
      
      for (var i = end; i >= start; i--) {
        integers.push(i);
      }
      return integers;
    }
    
    console.log(decreasingIntegersSeries(12, 6));
    // [12, 11, 10, 9, 8, 7, 6]


## Exercice 8<br />Boucle `while`

    function arraySum(array) {
      var sum = 0;
      while (0 != array.length) {
        sum += array.shift();
      }
      return sum;
    }
    
    console.log(arraySum([1, 2, 3, 5, 7, 11, 13]));
    // 42


## Exercice 9<br />Devise (III)

    function atArms(family) {
      var houses = {
        "Stark":      {
          motto: "Winter is Coming",
          overlord: null
          },
        "Bolton":     {
          motto: "Our Blades Are Sharp",
          overlord: "Stark"
          },
        "Karstark":   {
          motto: "The Sun of Winter",
          overlord: "Stark"
          },
        "Mormont":    {
          motto: "Here We Stand",
          overlord: "Stark"
          },
        "Corbois":    {
          motto: "Righteous in Wrath",
          overlord: "Stark"
          },
        "Lannister":  {
          motto: "Hear Me Roar!",
          overlord: null
          },
        "Sarwyck":    {
          motto: "Family is hope, protect it always",
          overlord: "Lannister"
          },
        "Crakehall":  {
          motto: "None So Fierce",
          overlord: "Lannister"
          },
        "Marpheux":   {
          motto: "Burning Bright",
          overlord: "Lannister"
          },
        "Baratheon":  {
          motto: "Ours is the Fury",
          overlord: null
          },
        "Caron":      {
          motto: "No Song So Sweet",
          overlord: "Baratheon"
          },
        "Grandison":  {
          motto: "Rouse Me Not",
          overlord: "Baratheon"
          },
        "Penrose":    {
          motto: "Set Down Our Deeds",
          overlord: "Baratheon"
          },
        "Lonbec":     {
          motto: "The Choice Is Yours",
          overlord: "Baratheon"
          },
        "Greyjoy":    {
          motto: "We Do Not Sow",
          overlord: null
          },
        "Morru":      {
          motto: "Though All Men Do Despise Us",
          overlord: "Greyjoy"
          },
      };
      
      var mottoes = [];
      
      if (!houses.hasOwnProperty(family)) {
        return mottoes;
      }
      mottoes.push(houses[family].motto);
      for (name in houses) {
        if (houses[name].overlord == family) {
          mottoes.push(houses[name].motto);
        }
      }
      
      return mottoes;
    }
    
    console.log(atArms('Baratheon'));
    // [ "Ours is the Fury",
    //   "No Song So Sweet",
    //   "Rouse Me Not",
    //   "Set Down Our Deeds",
    //   "The Choice Is Yours" ]


## Exercice 10<br />Somme de la diagonale d'une matrice

    function matrixDiagonalSum(matrix) {
      var sum  = 0;
      var rows = matrix.length;
      var cols = matrix[0].length;
      
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
          if (i == j) {
            sum += matrix[i][j];
          }
        }
      }
      
      return sum;
    }
    
    var matrix = [
      [1, 2, 3, 4],
      [2, 3, 4, 1],
      [3, 4, 1, 2],
      [4, 1, 2, 3]
    ];
    
    console.log(matrixDiagonalSum(matrix));
    // 8


## Exercice 11<br />Recherche dans un `Array`

    function inArray(needle, haystack) {
      var found = false;
      
      haystack.forEach(function(value, index, array) {
        if (value === needle) {
          found = true;
        }
      });
      
      return found;
    }
    
    var planets = [
      "Adipose 3", "Pyrovilia", "Trenzalore", "Apalapucia",
      "Skaro", "Clom", "Raxacoricofallapatorius", "Ry'leh"
    ];
    
    console.log(inArray("Galifrey", planets));
    // false


## Exercice 12<br />Recherche dans un `Array` (II)

    function inArray(needle, haystack) {
      return -1 !== haystack.indexOf(needle);
    }
    
    var planets = [
      "Adipose 3", "Pyrovilia", "Trenzalore", "Apalapucia",
      "Skaro", "Clom", "Raxacoricofallapatorius", "Ry'leh"
    ];
    
    console.log(inArray("Galifrey", planets));
    // false


## Exercice 13<br />Convertions de couleurs

    function colorHexaToRgb(hexa) {
      return 'rgb(' + [1, 3, 5].map(function(index) {
        return parseInt(hexa.slice(index, index + 2), 16);
      }).join(', ') + ')';
    }

    function colorRgbToHexa(rgb) {
      return '#' + rgb.slice(4, -1).split(', ').map(function(color) {
        return parseInt(color, 10).toString(16)
      }).join('');
    }
    
    console.log(colorHexaToRgb('#c2c6d8'));
    // 'rgb(194, 198, 216)'
    console.log(colorRgbToHexa('rgb(194, 198, 216)'));
    // '#c2c6d8'


## Exercice 14<br />Compression

    function compact(array) {
      var removed = ['', null, undefined, 0];
      return array.filter(function(value) {
        return -1 === removed.indexOf(value);
      });
    }
    
    console.log(compact(['a', '', 3.14, null, 'b', undefined, 12, 0]));
    // ['a', 3.14, 'b', 12]


## Exercice 15<br />Compte à rebours

    function countdown(array) {
      var sorted = array.sort(function(a, b) { return (b - a); });
      sorted.pop();
      sorted.push("Go");
      
      return sorted.join(', ');
    }
    
    console.log(countdown([ 5, 12, 3, 8, 1 ]));
    // "12, 8, 5, 3, Go"


## Exercice 16<br />Filmographie

    function sortFilmsBy(films, criterion) {
      return films.sort(function(a, b) {
        if (a[criterion] < b[criterion]) {
          return -1;
        }
        if (a[criterion] > b[criterion]) {
          return 1;
        }
        return 0;
      });
    }
    
    var films = [
      {
        title: "Conan le barbare",
        director: "John Milius",
        year: 1982,
        score: 6.9
      },
      {
        title: "Conan le destructeur",
        director: "Richard Fleischer",
        year: 1984,
        score: 5.8
      },
      {
        title: "Conan",
        director: "Marcus Nispel",
        year: 2011,
        score: 5.2 
      }
    ];
    
    console.log(sortFilmsBy(films, 'title'));
    // Le tableau `films`, par ordre alphabétique des titres :
    // Conan, Conan le barbare, Conan le destructeur
    
    console.log(sortFilmsBy(films, 'director'));
    // Le tableau `films`, par ordre alphabétique des noms de réalisateurs :
    // Conan le barbare, Conan, Conan le destructeur
    
    console.log(sortFilmsBy(films, 'year'));
    // Le tableau `films`, par ordre chronologique de sortie :
    // Conan le barbare, Conan le destructeur, Conan
    
    console.log(sortFilmsBy(films, 'score'));
    // Le tableau `films`, par ordre croissant des notes sur IMDB :
    // Conan le barbare, Conan le destructeur, Conan


## Exercice 17<br />Sous-ensemble

    function subsetOf(subset, set) {
      return subset.every(function(value) {
        return -1 !== set.indexOf(value);
      });
    }
    
    console.log(subsetOf([ 1, 3, 5 ], [ 1, 3, 5, 7, 11, 13 ]));
    // true


## Exercice 18<br />Somme sélective

    function sum(array) {
      return array.reduce(function(memo, value) {
        if (value > 0) {
          memo += value;
        }
        return memo;
      }, 0);
    }
    
    console.log(sum([ -5, -3, -1, 1, 3, 5 ]));
    // 9


## Exercice 19<br />Manipulation d'url

    var Url = {
    
      parseParameters: function(url) {
        return url.split('?').pop().split('&').reduce(function(params, param) {
          var parts = param.split('=');
          var name  = parts.shift();
          var value = parts.pop();
          
          params[name] = value;
          return params;
        }, {});
      },
    
      buildParameters: function(params) {
        var parameters = [];
        for (name in params) {
          parameters.push(name + '=' + params[name]);
        }
        return parameters.join('&');
      },
    
      mergeParameters: function(url, params) {
        var baseUrl    = url.split('?').shift();
        var parameters = Url.parseParameters(url);
        
        for (name in params) {
          parameters[name] = params[name];
        }
        
        return baseUrl + '?' + Url.buildParameters(parameters);
      },
    
    };
    
    var url    = "http://search.com/find?query=JavaScript&lang=fr";
    var params = { page: 2, lang: "en" };
    
    console.log(Url.parseParameters("http://search.com/find?query=JavaScript&lang=fr"));
    // { query: "JavaScript", lang: "fr" }
    
    console.log(Url.buildParameters({ page: 2, lang: "en" }));
    // "page=2&lang=en"

    console.log(Url.mergeParameters(url, params));
    // "http://search.com/find?query=JavaScript&lang=en&page=2"
