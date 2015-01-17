# Bases du JavaScript

## Sommaire

* Variables
* Constantes
* Fonctions
* Objets
* Types et structures natives
* Boucles


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

Il est possible de déclarer une fonction anynome partout où il est possible d'écrire une expression.


## Portée des variables

JavaScript supporte deux types de variables :

* Les variables locales, qui n'existent qu'à l'intérieur du contexte où elles ont été déclarées.
* Les variables globales, qui sont accessibles partout.

Dans un document HTML, le code JavaScript s'exécute par défaut dans le contexte de la fenêtre du navigateur (également accessible via la variable globale `window`).
L'interpréteur JavaScript déclarera un nouveau contexte d'exécution à l'intérieur de celui-ci pour chaque déclaration de fonction.

Lorsque le mot-clé `var` est omis, la variable est systématiquement déclarée comme globale, sans tenir compte du contexte dans lequelle elle est définie.

Les constantes suivent les mêmes règles de portées que les variables.
Le mot-clé `const` étant obligatoire, il est impossible de définir par mégarde une constante globale.

**Exercice :** Portée des variables


## Remontée des variables et des fonctions

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
    var a;            // La déclaration de `a` est remontée en tête du contexte global.
    console.log(a);   // N'ayant pas encore initialisée, elle vaut `undefined`.
    
    function sample() {
      var b;          // La déclaration de `b` est remontée en tête de son contexte.
      console.log(b);
      b = 4;
      console.log(b);
      
      c = 5;          // La déclaration de `c` reste inchangée car elle n'utilise
                      // pas le mot-clé `var`.
      console.log(c);
    }
    sample();
    
    a = 3;
    console.log(a);
    console.log(c);
    console.log(b);

Les déclarations de fonctions (de la forme `function name() {}`) subissent également le même sort. Ainsi ces fonctions sont-elles accessibles dans l'ensemble du contexte où elles sont déclarées, contrairement aux fonctions anonymes, qui sont créées au cours de l'exécution du script.

    /*
     * Ce que vous écrivez
     */
    add(1, 2);        // return 3
    //times(2, 2); // Si décommenté, déclenche une erreur :
                      // "TypeError : times is not a function"
    
    function add(a, b) {
      return a + b;
    }
    
    var times = function(a, b) {
      return a * b;
    }
    
    add(1, 2);         // return 3
    times(2, 2);    // return 4


    /*
     * Ce que l'interpréteur comprend
     */
    function add(a, b) {      // La fonction `add` est déclarée pour l'ensemble
      return a + b;           // du contexte.
    }
    
    var times;                // La déclaration de la variable `times` est
                              // remontée en tête du contexte global.
    
    add(1, 2);
    // times(2, 2);
    
    times = function(a, b) {  // La déclaration de la fonction anonyme reste
      return a * b;           // inchangée. La fonction n'existe pas tant qu'elle
    }                         // n'a pas été assignée à la variable `times`.
    
    add(1, 2);
    times(2, 2);

Les fonctions déclarées sous la forme `function name() {}` sont accessibles dans l'ensemble du contexte où elles sont déclarées.

    // Création d'une fonction anonyme
    add(1, 2);         // TypeError : add is not a function
    
    var add = function(a, b) {
      return a + b;
    };
    
    add(1, 2);         // return 3


**Pour simplifier les choses, il est recommandé** de toujours déclarer une variable en utilisant le mot-clé `var` et de regrouper les déclarations de variables et de fonctions au début d'un contexte.

**Exercice :** Fonctions


## Types primitifs et objets natifs

JavaScript dispose d'un typage faible et dynamique. Cela signifie qu'il n'est pas nécessaire de définir à l'avance le type d'une variable et que celle-ci pourra avoir différents types au cours de son existence (soit parce qu'une valeur d'un type différent lui aura été assigné, soit parce qu'elle aura été convertie).

### Types primitifs

JavaScript supporte 5 types de données primitifs, qui peuvent être utilisés directement à partir de leurs notations littérales.

#### Indéfini

La valeur `undefined` est utilisée partout où aucune valeur n'a été affectée au préalable.

    var a;
    console.log(a === undefined); // true

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
    var entier_base_10 = 42;
    var entier_base_16 = 0x2A;
    var entier_base_8  = 052;  // Cette notation ne fait plus partie des spécifications
                               // du langage mais reste supportée.
    console.log(entier_base_10 === entier_base_8);  // true
    console.log(entier_base_10 === entier_base_16); // true
    console.log(entier_base_16 === entier_base_8);  // true
    
    // Nombre décimaux
    var decimal = 314.159;
    var scientifique = 3.14159e2;
    console.log(decimal === scientific);  // true

#### Chaîne de caractères

Contrairement à d'autres langages de programmation, les chaînes de caractères sont immuables en JavaScript.

    var chaine_a = "Une chaîne de caractères";
    var chaine_b = 'Une chaîne de caractères';
    console.log(chaine_a === chaine_b);  // true
    
    var chaine_c = "L'hymne à la Joie fut composée par Ludwig van Beethoven.";
    var chaine_d = 'L\'hymne à la Joie fut composée par Ludwig van Beethoven.';
    console.log(chaine_c === chaine_d);  // true
    
    var chaine_e = "L'hymne à la Joie\nComposée par Ludwig van Beethoven.";


## Objets natifs

### Rappel sur la notion d'objet

En programmation, un objet est un conteneur englobant des informations et des mécanismes en rapport entre eux.

Un objet modélise souvent un élément tangible du monde réel.
Il répond à une description générique commune à tous les éléments de ce type, appelée **classe**, dont l'objet est une **instance**.
Les informations, propres à une instance, sont accessibles via les propriétés de cette instance.
Les mécanismes, commun à toutes les instances d'une même classe, sont applicables à une instance via ses méthodes.

Nous reviendrons plus tard sur cette notion et son implémentation en JavaScript.
Sachez cependant que les propriétés et les méthodes d'un objet sont accessibles en JavaScript à travers l'opérateur `.`.

    unObjet.property
    unObjet.method(params)

JavaScript est un langage orienté objet. Cela signifie que toutes les valeurs sont représentées dans l'interpréteur sous forme d'objets dont la classe définit le type. Si la liste des types d'objets nativement disponibles en Javascript[^objets-natifs] est relativement longue, nous ne nous intéresserons aujourd'hui qu'à quelqu'uns d'entre eux, très régulièrement utilisés. 

### Les types primitifs en tant qu'objets

Bien qu'ils soient considérés comme des types primitifs, les booléens, les nombres et les chaînes de caractères sont également décrits dans les spécifications du langage comme des types d'objets. À ce titre, ils peuvent être manipulés au travers de méthodes.

    console.log( 3.14159.toFixed(2) ); // 3.14
    console.log( "alphabet".toUpperCase() ); // ALPHABET

**Exercice :** Couleurs héxadécimales vers RGB

### Tableaux

En JavaScript, un tableau est une liste de valeurs, manipulable comme un tout.
Il existe plusieurs façons de créer un tableau :

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

    var tableau = [ 'e', 'i', 3.14159, -1 ];

Les tableaux sont indicés à partir de 0. Il est possible d'accéder directement à un élément d'un tableau en utilisant les crochets `[]`.

    var nains = ['Prof', 'Atchoum', 'Dormeur', 'Grincheux', 'Joyeux', 'Timide', 'Simplet'];
    
    console.log(nains[0]);  // "Prof"
    console.log(nains[3]);  // 'Grincheux'
    console.log(nains[6]);  // 'Simplet'

La taille d'un tableau est accessible à travers sa propriété `length`.

    var cavaliers = ['Famine', 'Guerre', 'Mort', 'Pollution'];
    console.log(cavaliers.length); // 4

À noter que les crochets et la propriété `length` fonctionnent de la même façon sur une chaîne de caractères.

**Exercice :** Tableaux

### Objects





JavaScript supporte nativement plusieurs types d'objets, notamment :

* `Boolean` pour des valeurs booléennes
* `Number` pour des nombres (entiers comme décimaux)
* `String` pour des chaines de caractères
* `Date` pour des dates 
* `Array` pour des listes de valeurs
* `Object`, utilisable pour stocker des associations clé-valeur. 


[^objets-natifs]: <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux>
