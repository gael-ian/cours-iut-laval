# Programmation objet en JavaScript


## Sommaire

* Variables
* Fonctions
* Prototype & Héritage


## Variables

### Déclaration

Déclaration d'une variable, 2 méthodes :

* `var name;`
* `var name = value;`
* `name = value;`

Une variable dont la valeur n'a pas encore été définie vaut `undefined`.
Faire appel à une variable non définie lance une exception `ReferenceError`.

### Portée des variables

Différence entre variables globales et variables locales :

* Une variable locale n'existe qu'à l'intérieur de la fonction où elle a été déclarée
* Une variable globale est accessible partout

Lorsque le mot-clé `var` est omis, la variable est systématiquement déclarée comme globale, sans tenir compte du contexte dans lequelle elle est définie.

`"use strict";` interdit la création "par erreur" d'une variable globale par l'oubli du mot-clé `var`.


## Fonctions

    // Création d'une fonction avec la déclaration function
    add(1, 2);         // return 3
    
    function add(a, b) {
      return a + b;
    }
    
    add(1, 2);         // return 3

Les fonctions déclarées sous la forme `function name() {}` sont accessibles dans l'ensemble du contexte où elles sont déclarées.

    // Création d'une fonction anonyme
    add(1, 2);         // TypeError : add is not a function
    
    var add = function(a, b) {
      return a + b;
    };
    
    add(1, 2);         // return 3

Les fonctions anonymes sont des fonctions créées au cours de l'exécution du script et ne sont pas accessible avant leur déclaration.
Il est possible de déclarer une fonction anynome partout où il est possible d'écrire une expression.

    // Création d'une fonction à la fois anonyme et nommée
    factoriel(3);       // ReferenceError: factoriel is not defined
    f(3);               // TypeError: f is not a function
    
    var f = function factoriel(n) {
      return (n > 1 ? n * factoriel(n-1) : 1);
    };
    
    factoriel(3);       // ReferenceError: factoriel is not defined
    f(3);               // return 6

Il est possible de nommer une fonction anonyme. Ceci ajoute la possibilité d'appeler la fonction depuis elle-même.

Utilisations des fonctions anonymes :

* Fonctions à usage unique
* Création conditionnelle d'une fonction
* Cloisonnement d'un code en utilisant une fonction anonyme directement appelée

    // Script isolé dans son propre contexte
    ;(function() {
    
      // Tout code écrit ici est exécuté en dehors du contexte global
      
    })();
    
    
    // Rendre certains éléments du contexte global utilisables
    ;(function(dep, w) {
    
      // A l'intérieur de cette fonction, l'objet `window` est accessible via `w`
      // (et `window` puisque c'est une variable globale)
      
    })(dependance, window);
    
    
    // Rendre certaines fonctions utilisables dans le contexte global
    var RMath = (function() {
    
      function puissance(n, e) {
        return (e < 1 ? 1 : (n * puissance(n, e - 1)) );
      }
    
      function factoriel(n) {
        return (n <= 1 ? 1 : (n * factoriel(n-1)) );
      }
      
      function fibonacci(n) {
        return (n <= 1 ? n : (fibonacci(n-2) + fibonacci(n-1)) );
      }
      
      return {
        'factoriel': factoriel,
        'fibonacci': fibonacci
      };
      
    })();
    
    RMath.fibonacci(3);     // Return 
    RMath.factoriel(3);     // Return 6
    RMath.puissance(2, 3);  // TypeError: RMath.puissance is not a function

### Valeurs par défaut des paramètres

JavaScript ne prévoit pas de syntaxe pour définir la valeur par défaut des arguments d'une fonction.
En revanche, il autorise à appeler une fonction avec un nombre d'arguments différents de celui indiqué par sa définition.

Si une fonction est appelée avec un nombre d'arguments inférieur, ceux qui n'auront pas été défini vaudront `undefined`.

    function arrondi(valeur, precision) {
      var precision = precision || 2;
      return valeur.toFixed(precision);
    }

Si une fonction est appelée avec un nombre d'arguments supérieur, ceux qui n'auront pû être assignés à aucun des arguments définis de la fonction seront accessible via l'objet `arguments` (toujours disponible à l'intérieur d'une fonction).

    function applyFunction(functionName /*, args */) {
      var args = Array.prototype.slice(arguments, 1);
      return window[functionName].apply(this, args);
    }


## Programmation Orienté Objet


### Définir un objet

Un objet JavaScript est défini par :

* Une collection de couples clé-valeurs, appelées propriétés.
* Un prototype, propriété pointant vers un autre objet qui sert de modèle

Si on tente d'accéder à une propriété d'un objet qui n'a pas encore été définie, JavaScript cherchera cette propriété dans le prototype de l'object.
Si nécessaire, il poussera cette recherche dans le prototype du prototype, remontant ainsi la chaine des prototypes jusqu'au bout.

    // Créer un nouvel objet
    var Person = new Object();
    
    // Ajouter une propriété à cet objet :
    Person.firstName = 'Bruce';
    Person['lastName'] = 'Wayne'; // Equivalent
    
    // Ajouter une "méthode" à cet objet :
    Person.getFullName = function() {
      return [this.firstName, this.lastName].join(' ');
    };

Ceci peut être écrit de façon plus concise :

    var Person = {
      firstName:   'Bruce',
      lastName:    'Wayne',
      getFullName: function() { return [this.firstName, this.lastName].join(' '); }
    };

Introduite par ECMAScript 5.1, une notation plus longue expose un peu plus précisemment le comportement interne du langage :

    // Créer un nouvel objet
    var Person = Object.create(Object.prototype);
    // Il est possible de définir un objet sans prototype avec `var Person = Object.create(null);`
    
    // Ajouter une propriété à cet objet :
    Object.defineProperty(Person, 'firstname', {
      
      value:        'Bruce',  // Valeur initiale de la propriété
      
      writable:     true,     // Cette propriété doit-elle être modifiable ?
      
      enumerable:   true,     // Cette propriété doit-elle apparaître lors d'une énumération,
                              // par exemple dans une boucle `for (property in object) {}`
      
      configurable: true      // Le comportement de cette propriété doit-il pouvoir être modifié ?
    });
    
    Object.defineProperty(Person, 'lastName', {
      value:        'Wayne',
      writable:     true,
      enumerable:   true,
      configurable: true
    });
    
    // Par défaut, une propriété crée via `O.property = 'value';` sera modifiable, énumérable et reconfigurable

    // Ajouter une "méthode" à cet objet :
    Object.defineProperty(Person, 'getFullName', {
      value:        function() { return [this.firstName, this.lastName].join(' '); },
      writable:     true,
      enumerable:   true,
      configurable: true
    });

Défini de cette façon, un objet n'est rien de plus qu'un conteneur pour des valeurs et des fonctions.

Avantages :

* Fournissent un contexte pour regrouper propriétés et méthodes

Inconvénients :

* Doivent être instanciés avec `var i = Object.create(O);`
* Les propriétés de chaque instance doivent être définies une à une après création
* Méthodes et propriétés ne sont pas distinguables

Pour se rapprocher du comportement des types natifs fournis par JavaScript, il est nécessaire de définir un constructeur.
En JavaScript, cela passe par la définition d'une fonction.

    var Person = function() {
      // Properties
      this.firstName = 'Bruce';
      this.lastName  = 'Wayne';
      
      // Methods
      this.getFullName = function() {
        return [this.firstName, this.lastName].join(' ');
      };
    };
    
    var p = new Person();

Ceci est possible car en JavaScript, une fonction est considérée comme un objet à part entière.

Il est possible d'ajouter des arguments au constructeur comme à n'importe quelle fonction.

    var Person = function(firstName, lastName) {
      // Properties
      this.firstName = firstName;
      this.lastName  = lastName;
      
      // Methods
      this.getFullName = function() {
        return [this.firstName, this.lastName].join(' ');
      };
      
      // Un constructeur ne doit **jamais** retourner de valeur.
      // L'objet créé serait remplacé par la valeur retournée et aurait donc été instancié pour rien.
    };
    
    var p = new Person('Bruce', 'Wayne');

Avantages :

* Peuvent être instanciés de la même façon que les objets natifs du langage
* Les méthodes de l'objet peuvent accéder aux variables locales du constructeur, qui peuvent être utilisée comme des attributs privés

Inconvénients :

* Méthodes et propriétés ne sont pas distinguables
* Les méthodes sont redéfinies pour chaque instance lors de sa création, ce qui augmente la consommation mémoire du script

La solution à ces inconvénients est de définir les méthodes d'une classe dans son prototype.

    var Person = function(firstName, lastName) {
      // Properties
      this.firstName = firstName;
      this.lastName  = lastName;
    };
    
    Person.prototype = {
      getFullName: function() {
        return [this.firstName, this.lastName].join(' ');
      }
    };
    
    var p = new Person('Bruce', 'Wayne');
    
Avantages :

* Les méthodes sont définies une fois seulement, dans le prototype de l'objet

Inconvénients :

* Le prototype de l'objet est intégralement remplacé, niant toute possibilité d'héritage

Ce dernier inconvénient peut être contourné simplement :

    var Person = function(firstName, lastName) {
      this.firstName = firstName;
      this.lastName  = lastName;
    };
    
    Person.prototype.getFullName = function() {
      return [this.firstName, this.lastName].join(' ');
    };
    
    var p = new Person('Bruce', 'Wayne');


### Héritage

En JavaScript, l'héritage n'existe pas plus que les classes. Il est cependant possible de reproduire un comportement identique en utilisant le chainage de prototype. C'est exactement ce que propose de faire `Object.create`.

    var SuperHero = Object.create(Person.prototype);
    
    SuperHero.prototype.getSecretIdentity = function() {
      return this.getFullName();
    };
    
    var batman = new SuperHero('Bruce', 'Wayne');

Cette méthode ne permet cependant pas de modifier le comportement du constructeur de l'objet.
La solution est de définir d'abord le constructeur du nouvel objet puis de redéfinir son prototype.

    var SuperHero = function(name, firstName, lastName) {
      this.name      = name;
      this.firstName = firstName;
      this.lastName  = lastName;
    };
    
    SuperHero.prototype = Object.create(Person.prototype);
    
    SuperHero.prototype.getFullName = function() {
      return this.name;
    };
      
    SuperHero.prototype.getSecretIdentity = function() {
      return [this.firstName, this.lastName].join(' ');
    };
    
    var batman = new SuperHero('Batman', 'Bruce', 'Wayne');

Plutôt que de réécrire le code du constructeur de l'objet parent dans le constructeur de chacun de ses enfants, il est préférable d'appliquer la fonction en question au contexte du nouvel objet.

    var SuperHero = function(name, firstName, lastName) {
      Person.call(this, firstname, lastName);
      this.name      = name;
    };
    
    SuperHero.prototype = Object.create(Person.prototype);
    
    SuperHero.prototype.getFullName = function() {
      return this.name;
    };
      
    SuperHero.prototype.getSecretIdentity = function() {
      return [this.firstName, this.lastName].join(' ');
    };
    
    var batman = new SuperHero('Batman', 'Bruce', 'Wayne');

### Mixins

JavaScript ne supporte pas l'héritage multiple. Pour partager des fonctions entre objets qui n'appartiennent pas à la même chaine de prototypes, il est relativement simple d'écrire un système (naïf) de mixins pour étendre horizonalement les objets.

    function mixin(target, source) {
      for (var method in source) {
        target[method] = source[methodName];
      }
    }
    
    var hasVehicle = {
      vehicleName:    '',
      drive: function(name) {
        console.log("Rangez les pousettes, voilà " + this.getFullName() + " au volant de sa " this.vehicleName);
      }
    };
    
    var canFly = {
      fly: function() {
        console.log("C'est un avion ? C'est un oiseau ? Non, c'est " + this.getFullName());
      }
    };
    
    mixin(SuperHero.prototype, hasVehicle); // Tous les super-héros ont un véhicule ?
    mixin(SuperHero.prototype, canFly);     // Tous les super-héros peuvent voler ?
    
    var batman   = new SuperHero('Batman', 'Bruce', 'Wayne');
    var superman = new SuperHero('Superman', 'Clark', 'Kent');
    
    mixin(batman, hasVehicle); // Et une ceinture
    mixin(superman, canFly);   // Et pleins d'autres trucs

<http://yehudakatz.com/2011/08/12/understanding-prototypes-in-JavaScript/>