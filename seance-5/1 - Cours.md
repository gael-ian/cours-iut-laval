# Séance 5 - Programmation objet en JavaScript

**Date :** 22/01/2014 - 13h30 / 16h30


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


## Programmation Orienté Objet


