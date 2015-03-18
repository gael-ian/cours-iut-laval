# Programmation Orienté Objet


## Sommaire

* Définir un objet
* Héritage
* Mixins


## Définir un objet

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
      getFullName: function() {
        return [this.firstName, this.lastName].join(' ');
      }
    };

Introduite par ECMAScript 5.1, une notation plus longue expose un peu plus précisemment le comportement interne du langage :

    // Créer un nouvel objet
    var Person = Object.create(Object.prototype);
    // Il est possible de définir un objet sans prototype
    // avec `var Person = Object.create(null);`
    
    // Ajouter une propriété à cet objet :
    Object.defineProperty(Person, 'firstname', {
      
      value:        'Bruce',  // Valeur initiale de la propriété
      
      writable:     true,     // Cette propriété doit-elle être modifiable ?
      
      enumerable:   true,     // Cette propriété doit-elle apparaître lors d'une
                              // énumération, par exemple dans une boucle
                              // `for (property in object) {}`
      
      configurable: true      // Le comportement de cette propriété doit-il
                              // pouvoir être modifié ?
    });
    
    Object.defineProperty(Person, 'lastName', {
      value:        'Wayne',
      writable:     true,
      enumerable:   true,
      configurable: true
    });
    
    // Par défaut, une propriété crée via `O.property = 'value';` sera
    // modifiable, énumérable et reconfigurable

    // Ajouter une "méthode" à cet objet :
    Object.defineProperty(Person, 'getFullName', {
      value:        function() {
        return [this.firstName, this.lastName].join(' ');
      },
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
      // L'objet créé serait remplacé par la valeur retournée et aurait donc
      // été instancié pour rien.
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


## Héritage

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

## Mixins

JavaScript ne supporte pas l'héritage multiple. Pour partager des fonctions entre objets qui n'appartiennent pas à la même chaine de prototypes, il est relativement simple d'écrire un système (naïf) de mixins pour étendre horizonalement les objets.

    function mixin(target, source) {
      for (var method in source) {
        target[method] = source[methodName];
      }
    }
    
    var hasVehicle = {
      vehicleName:    '',
      drive: function(name) {
        console.log("Rangez les pousettes, voilà " + this.getFullName() + \
          " au volant de sa " this.vehicleName);
      }
    };
    
    var canFly = {
      fly: function() {
        console.log("C'est un avion ? C'est un oiseau ? Non, c'est " + \
          this.getFullName());
      }
    };
    
    // Tous les super-héros ont un véhicule ?
    mixin(SuperHero.prototype, hasVehicle);
    // Tous les super-héros peuvent voler ?
    mixin(SuperHero.prototype, canFly);
    
    var batman   = new SuperHero('Batman', 'Bruce', 'Wayne');
    var superman = new SuperHero('Superman', 'Clark', 'Kent');
    
    mixin(batman, hasVehicle); // Et une ceinture
    mixin(superman, canFly);   // Et pleins d'autres trucs

<http://yehudakatz.com/2011/08/12/understanding-prototypes-in-JavaScript/>