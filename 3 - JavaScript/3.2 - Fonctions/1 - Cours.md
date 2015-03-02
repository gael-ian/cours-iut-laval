# Fonctions


## Sommaire

* Fonction de rappel
* Fonctions et paramètres
* Contexte d'exécution


## Fonction de rappel

En JavaScript, il est fréquent de voir une fonction prendre une autre fonction comme argument. C'est le cas par exemple de beaucoup de méthodes disponibles sur les `Array` étudiée au cours précédent ou des gestionnaires d'évènements.

Ces fonctions passées en paramètres sont appelées des fonctions de rappel.

    var top3Singles = [
      "Pharrell Williams - Happy",
      "Lilly Wood and the Prick - Prayer in C",
      "Sia - Chandelier"
    ];
    // `forEach` exécute la fonction de rappel passée en argument
    // pour chaque entrée du tableau `top3Singles`.
    top3Singles.forEach(function(single, index, top) {
      console.log("N°" + index + " des singles les plus vendus en France en 2014 : " + single);
    });
    
    // La fonction ajoutée au gestionnaire d'évènements de l'élément `body`
    // sera appelée à chaque clic.
    document.body.addEventListener('click', function(event) {
      console.log('(' + [ event.pageX, event.pageY ].join(', ') + ')');
    });



## Fonctions et paramètres

### Paramètres optionnels

Javascript ne possède pas de syntaxe pour définir une valeur par défaut aux paramètres d'une fonction lors de sa déclaration.

L'interpréteur accepte cependant qu'une fonction soit appelée sans qu'une valeur ne soit obligatoirement précisée pour chacun des arguments. Les paramètres non fournis sont alors initialisés à l'intérieur de la fonction avec la valeur non définie `undefined`. Ce comportement peut être exploité pour définir des valeurs par défaut aux paramètres.

    function hello(name) {
      if (name === undefined) {
        name = "World";
      }
      return "Hello " + name + "!";
    }
    
    console.log(hello('Sir'));  // "Hello Sir!"
    console.log(hello());       // "Hello World!"

Une notation plus concise est d'utiliser l'opérateur ternaire pour écrire la condition.

    function hello(name) {
      name = (name === undefined) ? "World" : name;
      return "Hello " + name + "!";
    }

Si aucune valeur acceptable pour le paramètre pour lequel on souhaite définir une valeur par défaut ne peut être évaluée comme étant égale à `false`, une version encore plus courte est possible.

    function hello(name) {
      name = name || "World";
      return "Hello " + name + "!";
    }

**Exercice :** ?

### Paramètres surnuméraires

Si l'interpréteur JavaScript accepte qu'une fonction soit appelée avec moins d'arguments que prévu lors de sa définition, il accepte également l'inverse. Ceci permet d'écrire simplement des fonctions acceptant un nombre variable d'arguments.

Pour accéder à ces paramètres supplémentaires, on utilisera la variable locale `arguments`.
Accessible à l'intérieur de n'importe quelle fonction, cette variable spécifique est automatiquement déclarée par l'interpréteur et contient la liste des arguments passés à la fonction. 

    function sample() {
      return arguments;
    }
    
    console.log(sample(2, 4, 6));

L'objet `arguments` se comporte comme un `Array` dans le sens où il possède une propriété `length` et supporte la notation par crochets `[]` pour accéder à la liste des arguments. Il ne possède cependant aucune des méthodes accessibles des `Array`.


    function howManyArguments() {
      return arguments.length;
    }
    
    console.log(howManyArguments(2, 4, 6)); // 3
    
    function thirdOf() {
      return arguments[2];
    }
    
    console.log(howManyArguments(2, 4, 6)); // 6

L'objet `arguments` peut cependant être converti en `Array` en lui appliquant la méthode `slice`.

    function sum() {
      // On transpose l'objet `argument` dans le tableau `args`.
      var args = Array.prototype.slice.call(arguments);
      
      return args.reduce(function(sum, value) {
        return sum + value;
      }, 0);
    }

**Exercice :** Maximum
**Exercice :** Moyennes


## Contexte d'exécution