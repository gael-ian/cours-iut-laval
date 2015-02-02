# Bases du JavaScript

## Sommaire

* Variables
* Constantes
* Fonctions
* Portée des variables et des fonctions
* Types primitifs
* Objets natifs
* Structures conditionnelles
* Itérations


## Variables

Les variables sont utilisées comme des noms symboliques désignant les valeurs utilisées dans un script.
Il existe deux méthodes pour déclarer une variable :

* En utilisant le mot-clé `var` : `var name;`, ou `var name = value;` si on souhaite définir la valeur de la variable en même temps qu'on la déclare.
* En assignant une valeur à une variable : `name = value;`. Ceci déclare obligatoirement une variable globale (voir Portée des variables).

Une variable dont la valeur n'a pas encore été définie vaut `undefined`.  
Faire appel à une variable non définie déclenche une erreur (de type `ReferenceError`).


## Constantes

Il est également possible de définir des constantes à l'aide du mot-clé `const`.
Vous pouvez considérer une constante comme une variable dont la valeur ne peut être modifiée.


## Fonctions

Comme tous les langages de programmation, JavaScript permet aux développeurs de créer leurs propres fonctions.

La méthode la plus simple pour créer une nouvelle fonction est d'utiliser une déclaration de fonction, reconnaissable à sa forme `function name() {}` :

    function add(a, b) {
      return a + b;
    }
    
    add(1, 2); // return 3

JavaScript permet également de créer des fonctions anonymes, qui pourront être utilisées de la même façon :

    var add = function(a, b) {
      return a + b;
    };
    
    add(1, 2); // return 3

Il est possible de déclarer une fonction anonyme partout où il est possible d'écrire une expression.


## Portée des variables et des fonctions

JavaScript supporte deux types de variables :

* Les variables locales, qui n'existent qu'à l'intérieur du contexte où elles ont été déclarées.
* Les variables globales, qui sont accessibles partout.

Dans un document HTML, le code JavaScript s'exécute par défaut dans le contexte de la fenêtre du navigateur (également accessible via la variable globale `window`).
L'interpréteur JavaScript déclarera un nouveau contexte d'exécution à l'intérieur de celui-ci pour chaque déclaration de fonction.

Lorsque le mot-clé `var` est omis, la variable est systématiquement déclarée comme globale, sans tenir compte du contexte dans lequelle elle est définie.

Les constantes suivent les mêmes règles de visibilité que les variables.
Le mot-clé `const` étant obligatoire, il est impossible de définir par mégarde une constante globale.

Les fonctions suivent elles aussi les mêmes règles de visibilité que les variables.
Ainsi une fonction définie à l'intérieure d'une autre ne pourra pas être utilisée en dehors de celle-ci.

### Remontée des variables et des fonctions

Le fonctionnement de l'interpréteur JavaScript peut parfois sembler étrange. Ainsi en JavaScript, il est possible de faire référence à une variable avant que celle-ci ne soit déclarée. Ce concept est appelé « remontée » (hoisting en anglais) car, en quelque sorte, l'interpréteur « remonte » les déclarations de variables utilisant le mot-clé `var` en tête du contexte où elles sont faites.

Seule la déclaration est remontée et non l'initialisation. Ainsi, les variables qui n'ont pas encore été initialisées renverront la valeur `undefined.`

    /*
     * Ce que vous écrivez
     */
    console.log(a);   // Retourne "undefined"
    
    function sample() {
      console.log(b); // Retourne "undefined"
      var b = 4;
      console.log(b); // Retourne "4"
      c = 5;
      console.log(c); // Retourne "5"
    }
    sample();
    
    var a = 3;
    console.log(a);  // Retourne "3"
    console.log(c);  // Retourne "5" car `c` est une variable globale.
    console.log(b);  // Lève une exception de type `ReferenceError`
                     // car `b` n'existe pas dans ce contexte.


    /*
     * Ce que l'interpréteur comprend
     */
    var a;            // La déclaration de `a` est remontée en tête
                      // du contexte global.
    console.log(a);   // N'ayant pas encore initialisée, elle vaut `undefined`.
    
    function sample() {
      var b;          // La déclaration de `b` est remontée en tête
                      // de son contexte.
      console.log(b);
      b = 4;
      console.log(b);
      
      c = 5;          // La déclaration de `c` reste inchangée car elle
                      // n'utilise pas le mot-clé `var`.
      console.log(c);
    }
    sample();
    
    a = 3;
    console.log(a);
    console.log(c);
    console.log(b);

Les déclarations de fonctions (de la forme `function name() {}`) subissent également le même sort.
Ainsi ces fonctions sont-elles accessibles dans l'ensemble du contexte où elles sont déclarées, contrairement aux fonctions anonymes, qui sont créées au cours de l'exécution du script.

    /*
     * Ce que vous écrivez
     */
    add(1, 2);        // return 3
    //times(2, 2);    // Si décommenté, déclenche une erreur :
                      // "TypeError : times is not a function"
    
    function add(a, b) {
      return a + b;
    }
    
    var times = function(a, b) {
      return a * b;
    }
    
    add(1, 2);      // return 3
    times(2, 2);    // return 4


    /*
     * Ce que l'interpréteur comprend
     */
    function add(a, b) {     // La fonction `add` est déclarée pour l'ensemble
      return a + b;          // du contexte.
    }
    
    var times;               // La déclaration de la variable `times` est
                             // remontée en tête du contexte global.
    
    add(1, 2);
    // times(2, 2);
    
    times = function(a, b) { // La déclaration de la fonction anonyme reste
      return a * b;          // inchangée. La fonction n'existe pas tant
    }                        // qu'elle n'a pas été assignée à la variable `times`.
    
    add(1, 2);
    times(2, 2);

**Exercice :** Portée des variables et des fonctions.

**Pour simplifier les choses, il est recommandé** de toujours déclarer une variable en utilisant le mot-clé `var` et de regrouper les déclarations de variables et de fonctions au début d'un contexte.


## Types primitifs et objets natifs

JavaScript dispose d'un typage faible et dynamique. Cela signifie qu'il n'est pas nécessaire de définir à l'avance le type d'une variable et que celle-ci pourra avoir différents types au cours de son existence (soit parce qu'une valeur d'un type différent lui aura été assignée, soit parce qu'elle aura été convertie).

### Types primitifs

JavaScript supporte 5 types de données primitifs, qui peuvent être utilisés directement à partir de leurs notations littérales.

#### Indéfini

La valeur `undefined` est utilisée partout où aucune valeur n'a été affectée au préalable.

    var a;
    console.log(a === undefined); // true

Si une fonction ne définit aucune instruction `return`, la valeur retournée par cette fonction sera `undefined`.

    function add(a, b) {
      var result = a + b;
    }
    console.log(add(1, 2)); // undefined

#### Nul

La valeur `null` représente la nullité, au sens où aucune valeur n'est présente.

    var nul = null;

#### Booléen

Un booléen peut avoir deux valeurs : `true` et `false`.

    var vrai = true;
    var faux = false;

#### Nombre

JavaScript ne possède qu'un seul type pour représenter les nombres, entiers comme décimaux.

    // Nombre entiers
    var entierBase10 = 42;
    var entierBase16 = 0x2A;
    var entierBase8  = 052;  // Cette notation ne fait plus partie des 
                             // spécifications du langage mais reste
                             // supportée.
    
    console.log(entierBase10 === entierBase8);  // true
    console.log(entierBase10 === entierBase16); // true
    console.log(entierBase16 === entierBase8);  // true
    
    // Nombre décimaux
    var decimal = 314.159;
    var scientifique = 3.14159e2;
    console.log(decimal === scientific);  // true

#### Chaîne de caractères

Contrairement à d'autres langages de programmation, les chaînes de caractères sont immuables en JavaScript.

    var chaineA = "Une chaîne de caractères";
    var chaineB = 'Une chaîne de caractères';
    console.log(chaineA === chaineB);  // true
    
    var chaineC = "L'hymne à la Joie fut composée par Ludwig van Beethoven.";
    var chaineD = 'L\'hymne à la Joie fut composée par Ludwig van Beethoven.';
    console.log(chaineC === chaineD);  // true
    
    var chaineE = "L'hymne à la Joie\nComposée par Ludwig van Beethoven.";


## Objets natifs

### Rappel sur la notion d'objet

En programmation, un objet est un conteneur englobant des informations et des mécanismes en rapport entre eux.

Un objet modélise souvent un élément tangible du monde réel.
Il répond à une description générique commune à tous les éléments de ce type, appelée **classe**, dont l'objet est une **instance**.
Les informations, propres à une instance, sont accessibles via les propriétés de cette instance.
Les mécanismes, commun à toutes les instances d'une même classe, sont applicables à une instance via ses méthodes.

Nous reviendrons plus tard sur cette notion et son implémentation en JavaScript.
Sachez cependant que les propriétés et les méthodes d'un objet sont accessibles en JavaScript à travers l'opérateur `.` (ou avec les crochets`[]`, mais cet usage est plus rare).

    unObjet.property        <=>   unObjet['property']
    unObjet.method(params)  <=>   unObjet['method'](params)

JavaScript est un langage orienté objet. Cela signifie que toutes les valeurs sont représentées dans l'interpréteur sous forme d'objets dont la classe définit le type. Si la liste des types d'objets nativement disponibles en Javascript[^objets-natifs] est relativement longue, nous ne nous intéresserons aujourd'hui qu'à quelqu'uns d'entre eux, très régulièrement utilisés. 

### Les types primitifs en tant qu'objets

Bien qu'ils soient considérés comme des types primitifs, les booléens, les nombres et les chaînes de caractères sont également décrits dans les spécifications du langage comme des types d'objets. À ce titre, ils peuvent être manipulés au travers de méthodes.

    console.log( 3.14159.toFixed(2) ); // 3.14
    console.log( "alphabet".toUpperCase() ); // ALPHABET

**Exercice :** Couleurs hexadécimales vers RGB

### Tableaux

En JavaScript, un `Array` est une liste de valeurs, manipulable comme un tout.
Il existe plusieurs façons de créer un `Array` :

    // En passant les valeurs à inclure dans la liste au constructeur.
    var mousquetaires = new Array("Athos", "Portos", "Aramis");
    
    // En utilisant la notation littérale des tableaux
    var fromages = [ "Gorgonzola", "Mozarella", "Chèvre" ];
    
    // En précisant la taille du tableau
    var tableau = new Array(3);

> **Note :**
> Cette dernière notation peut être source d'erreurs, par exemple si vous souhaitez créer un tableau dont le seul élément présent à l'initialisation est un entier.
> Les tableaux en JavaScript s'aggrandissant automatiquement lors de l'ajout d'un élément, le plus simple est d'utiliser systématiquement la notation litérale.

Un tableau peut contenir n'importe quel type de valeurs et toutes les valeurs d'un tableau n'ont pas obligatoirement à être du même type.

    var euler = [ 'e', 'i', 3.14159, -1 ];

À l'intérieur d'un tableau, les éléments sont ordonnées. Les positions sont numérotées à partir de 0.
Il est possible d'accéder directement à un élément d'un tableau en utilisant les crochets `[]`.

    var nains = ['Prof', 'Atchoum', 'Dormeur', 'Grincheux', 'Joyeux', 'Timide', 'Simplet'];
    
    console.log(nains[0]);  // "Prof"
    console.log(nains[3]);  // 'Grincheux'
    console.log(nains[6]);  // 'Simplet'

La taille d'un tableau est accessible à travers sa propriété `length`.

    var cavaliers = ['Famine', 'Guerre', 'Mort', 'Pollution'];
    console.log(cavaliers.length); // 4

À noter que les crochets et la propriété `length` fonctionnent de la même façon sur une chaîne de caractères.

**Exercice :** Couleurs RGB vers hexadécimales  
**Exercice :** Compteurs de mots

### Objets JSON

Bien que ce ne soit pas leur seul rôle dans le langage, les `Object`s de JavaScript permettent de stocker simplement des ensembles de clés et de valeurs.
Il existe plusieurs façons de créer un `Object` :

    // En utilisant le constructeur `Object` avant d'assigner
    // les valeurs aux clés.
    var point = new Object();
    point.x = 12;
    point.y = 24;
    
    // En utilisant la notation littérale des objets
    var coordinates = { latitude: 48.0858628, longitude: -0.7586913 };

Les clés d'une table d'association doivent obligatoirement des chaines de caractères ou des symboles valides (comme ceux utilisés pour les noms de variables).
Les valeurs peuvent être de n'importe quel type et toutes n'ont pas obligatoirement à être du même type.

    var options = {
      container: "#galery",
      title: "Les compagnes du 10ème Docteur"
      legends: [ "Rose Tyler", "Martha Jones", "Donna Noble" ],
      maxWidth: 200,
      displayControls: true
    };

Ils peuvent être utilisé dans de nombreux contextes :

* Comme des tables d'associations, pour stocker une valeur et un nom qui lui est associé.
* Comme des structures, pour stocker des informations structurées sans aller jusqu'à définir un nouveau type de données.
* Comme des modules, pour regrouper des valeurs et des fonctions relatives à une même problématique.  

Un exemple de ce dernier cas est le [module JavaScript `Math`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math), qui regroupe toutes les fonctions et constantes mathématiques du langage.

    /*
     * Exemple d'utilisation d'un Object en tant que table d'association.
     *
     * La clé est le nom du film et la valeur le nombre d'entrées
     * réalisées en France en 2014.
     */    
    var top5BoxOffice2014 = {
      "Qu'est-ce qu'on a fait au Bon Dieu ?": 12237274,
      "Supercondriaque":                       5268599,
      "Lucy":                                  5201019,
      "Le Hobbit : La bataille des 5 armées":  4685341,
      "La Famille Bélier":                     3983184
    }
    
    /*
     * Exemple d'utilisation d'un Object en tant que structure.
     *
     * Chaque clé est une propriété de la structure.
     * Plusieurs films structurés selon le même modèle pourront ainsi
     * être comparés plus facilement ou manipulés ensemble.
     */
    var film = {
      name: "Interstellar",
      director: "Christopher Nolan",
      releaseYear: 2014,
      casting: [ "Matthew McConaughey", "Anne Hathaway", "Michael Caine" ]
    };
    
    /*
     * Exemple d'utilisation d'un Object en tant que module.
     */
    var StringInflector = {
      MAX_LENGTH: 255,
      
      shorten: function(string) {
        return string.slice(0, StringInflector.MAX_LENGTH).trim();
      },
      
      lower: function(string) {
        return string.toLowerCase();
      },
             
      parameterize: function(string) {
        var lower  = StringInflector.lower(string);
        var short  = StringInflector.shorten(lower);
        return short.split(' ').join('-');
      }
    };

**Exercice :** Devises


## Structures conditionnelles

JavaScript supporte les structures conditionnelles que l'on rencontre habituellement dans presque tous les langages de programmation :

* `if … else …` pour les combinaisons de conditions simples
* `switch` pour simplifier l'écriture de combinaisons de conditions plus complexes 

Leur écriture est la même que dans tous les langages dont la syntaxe est inspirée du langage C :

    if (condition) {
      // Ce code ne sera exécuté que si la condition est évaluée à true.
    }
    
    if (condition) {
      // Ce code ne sera exécuté que si la condition est évaluée à true.
    } else {
      // Ce code ne sera exécuté que si la condition est évaluée à false.
    }
    
    if (condition 1) {
      // Ce code ne sera exécuté que si la condition 1 est évaluée à true.
    } else if (condition 2) {
       // Ce code ne sera exécuté que si la condition 2 est évaluée à true.
    } else {
      // Ce code ne sera exécuté que si ni la condition 1 ni la condition 2
      // n'ont été évaluée à true.
    }
    
    switch (expression) {
      case value 1:
        // Ce code ne sera exécuté que si l'expression vaut "value 1".
        break;
        
      case value 2:
        // Ce code ne sera exécuté que si l'expression vaut "value 2".
        break;
        
      case value 3:
        // Ce code ne sera exécuté que si l'expression vaut "value 3".
        break;
        
      default:
        // Ce code sera exécuté dans tous les autres cas.
        break;
    }

**Exercice :** Devises (II)


## Itérations

### Boucle `for`

> Pour {compteur} allant de {valeur initiale} à {valeur finale} par pas de {increment}

Une boucle `for` doit être employée à chaque fois que l'on connait à l'avance le nombre d'itérations.

    var i;
    for (i = 0; i < 10; i = i + 1) {
      /*
       * La variable `i` est utilisé comme compteur.
       * `i = 0` déclare la valeur initiale du compteur.
       * `i < 10` est une condition qui doit être vraie tant que le compteur
       * n'a pas atteint la valeur finale
       * `i++` est l'instruction exécutée à la fin de chaque itération pour
       * faire évoluer la valeur du compteur.
    }
    
    // Cette boucle `for` peut être abrégée en :
    for (var i = 0; i < 10; i++) {
    }

Les instructions placées à l'intérieur d'une boucle `for` ne doivent pas modifier la valeur du compteur !
Cela pourrait amener la boucle à se terminer prématuremment ou, pire, à ne jamais se terminer.

**Exercice :** Séries

### Boucle `while`

> Tant que {condition} faire

Une boucle `while` doit être employée lorsqu'on ne connaît pas à l'avance le nombre d'itérations.

    while (condition) {
      // Ce code sera exécuté tant que la condition est vérifiée. 
    }

Contrairement à une boucle `for` où cela est déconseillé, les instructions à l'intérieur d'une boucle `while` doivent permettre de sortir de la boucle en invalidant la condition.

    var i = 0;
    while (i < 10) {
      i++;  // Sans incrémentation de `i` à l'intérieur de la boucle la condition
            // `i < 10` reste toujours vérifiée. La boucle est alors infinie. 
    }

**Exercice :** Sommes

### Boucle `do… while`

> Répéter … tant que {condition}

Une boucle `do… while` doit être employée lorsqu'on ne connaît pas à l'avance le nombre d'itérations mais que l'on sait que les instructions qu'elle contient devront être exécutées au moins une fois.

    do {
      // Ce code sera exécuté une fois
      // puis répété tant que la condition est vérifiée.
    } while (condition)

Bien qu'utile en théorie, en pratique la boucle `do… while` est rarement utilisée.


En plus de trois structures itératives classiques, JavaScript fournit également des outils pour boucler sur l'ensemble des propriétés d'un `Object` ou d'un tableau.

### Parcourir un `Object`

Une boucle `for … in …` peut être utilisée pour parcourir toutes les propriétés d'un `Object`.

    for (property in object) {
      // A chaque itération de cette boucle, la variable `property` prend le nom
      // d'une des propriétés de `object`.
      
      // Ce parcours est fait sans ordre particulier et se termine quand toutes
      // les propriétés ont été parcourues.
    }

**Exercice :** Devises (III)

### Parcourir un `Array`

Le moyen le plus simple pour parcourir les éléments d'un `Array` est d'utiliser une boucle `for` et la notation par crochets `[]` pour accéder successivement à tous les éléments.

**Exercice :** Somme de la diagonale d'une matrice

Cette méthode a cependant le défaut de ne fonctionner que sur des `Array` dont les indices sont continus, ce qui n'est pas systématiquement le cas.
L'objet `Array` fournit une autre méthode pour parcourir son contenu via la méthode `Array.forEach`.

    var planets = [
      "Adipose 3", "Pyrovilia", "Trenzalore", "Apalapucia",
      "Skaro", "Clom", "Raxacoricofallapatorius", "Ry'leh"
    ];
    
    // La méthode `Array.forEach` prend une fonction en argument.
    // Cette fonction sera appelée successivement pour chaque élément.
    planets.forEach(function(value, index, array) {
      /*
       * La fonction reçoit 3 arguments :
       * - La valeur courante du tableau
       * - L'indice courant
       * - Le tableau
       */
    });

**Exercice :** Recherche dans un `Array`  
**Exercice :** Recherche dans un `Array` (II)

D'autres méthodes de l'objet `Array` permettent de transformer une liste en appliquant une même fonction à chacun de ses membres (`map`), de la filtrer (`filter`), de la trier (`sort`), de tester la valeur de ses éléments (`every`, `some`) ou de la réduire (`reduce`).

**Exercice :** Convertions de couleurs  
**Exercice :** Compression  
**Exercice :** Compte à rebours  
**Exercice :** Filmographie  
**Exercice :** Sous-ensemble  
**Exercice :** Somme sélective  
**Exercice :** Manipulation d'urls  

[^objets-natifs]: <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux>
