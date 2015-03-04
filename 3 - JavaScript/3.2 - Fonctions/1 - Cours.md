# Fonctions


## Sommaire

* Fonctions de rappel
* Fonctions et paramètres


## Fonctions de rappel

En JavaScript, il est fréquent de voir une fonction prendre une autre fonction comme argument. C'est le cas par exemple de beaucoup de méthodes disponibles sur les `Array` étudiées au cours précédent ou des gestionnaires d'évènements.

Ces fonctions passées en paramètres sont appelées des fonctions de rappel.

    var top3Singles = [
      "Pharrell Williams - Happy",
      "Lilly Wood and the Prick - Prayer in C",
      "Sia - Chandelier"
    ];
    // `forEach` exécute la fonction de rappel passée en argument
    // pour chaque entrée du tableau `top3Singles`.
    top3Singles.forEach(function(single, index, top) {
      console.log("N°" + index + " des singles en France en 2014 : " + single);
    });
    
    // La fonction ajoutée au gestionnaire d'évènements de l'élément `body`
    // sera appelée à chaque clic.
    document.body.addEventListener('click', function(event) {
      console.log('(' + [ event.pageX, event.pageY ].join(', ') + ')');
    });

Prendre en charge une fonction de rappel parmi les paramètres d'une fonction peut être un bon moyen pour permettre aux développeurs qui utiliseront la fonction de modifier légèrement son comportement sans pour autant devoir la réécrire intégralement (ex: la méthode `sort` d'un objet `Array`, qui permet de redéfinir la méthode de comparaison entre deux éléments sans réécrire tout un algorythme de tri) ou pour préparer l'exécution d'un code à la fin d'un traitement long (ex: jQuery supporte des fonctions de rappel sur toutes ses méthodes d'animation et sur les requêtes AJAX). 

À l'intérieur de la fonction appelée, la fonction de rappel est vue comme un argument ordinaire. Il est fréquent de placer les fonctions de rappel en dernier argument d'une fonction et de nommer le paramètre correspondant `callback`.

    function sample(arg1, arg2, callback) {
      /*
       * Lorsque la fonction `sample` est appelée comme ci-dessous :
       * - `arg1` vaut `1`
       * - `arg2` vaut `2`
       * - `callback` est une fonction stockée dans une variable
       */
    }
    
    sample(1, 2, function() {
      // Ce code sera exécuté à chaque fois que la fonction `sample`
      // ferra appel à la fonction `callback`.
    });

### Que contient une variable dans laquelle est stockée une fonction ?

En JavaScript, les fonctions sont considérées comme des objets, au même titre que les autres types de données manipulables.
Lorsqu'une fonction est stockée dans une variable, cette variable contient donc un objet représentant la fonction et dont il est possible d'accéder à des propriétés et des méthodes qui lui sont propres.

    var num = 12;
    var add = function(a, b) {
      return a + b;
    };
    
    console.log(typeof num);  // 'number'
    console.log(typeof add);  // 'function'
    
    // L'attribut `length` d'un objet de type `function` indique
    // le nombre d'arguments attendus
    
    console.log(add.length);  // 2

### Comment appeler une fonction stockée dans une variable ?

JavaScript propose trois façons différentes pour demander l'exécution d'un objet de type `function` :

* En utilisant l'identifiant de la variable stockant l'objet pour appeler directement la fonction, comme on le ferrait avec n'importe quelle autre.  
  Les paramètres passés à la fonction doivent dans ce cas être précisés entre parenthèses.
* En appelant la méthode `call` de l'objet.  
  Cette fonction attend un premier paramètre que nous définirons pour le moment à `null`. Les paramètres suivants seront passés à la fonction appelée.
* En appelant la méthode `apply` de l'objet.  
  Cette fonction attend un premier paramètre que nous définirons pour le moment à `null`. Les paramètres qui devront être passés à la fonction appelée, peuvent être précisés sous la forme d'un tableau, en seconde argument.

L'utilisation d'une de ces trois méthodes plutôt que des deux autres dépend du contexte dans lequel on souhaite exécuter la fonction.
Nous reviendrons plus tard sur la signification du premier argument attendu par les méthodes `call` et `apply` des objets de type `function`.

    var add = function(a, b) {
      return a + b;
    }
    
    // Appel direct
    add(1, 2);
    
    // Call
    add.call(null, 1, 2);
    
    // Apply
    add.apply(null, [1, 2]);

**Exercice :** Jeu de nim


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

**Exercice :** Liens

Quand un trop grand nombre de paramètres d'une fonction peuvent être optionnels, on utilisera de préférence un `Object` unique, comme une table d'association pour passer les options à la fonction. Celui-ci sera généralement fusionné à l'intérieur de la fonction avec une autre table d'association reprenant les options par défaut.

    function setupGalery(container, options) {
      var defaultOptions = {
        title: "",
        legends: [],
        maxWidth: 750,
        displayControls: true,
        transitionDuration: 300,
        pauseOnHover: true
      };
      
      // Les tables d'associations `options` et `defaultOptions` devront être
      // fusionnées pour établir la liste complète des options applicables.
    }

    setupGalery(document.getElementById('galery'), {
      title: "Les compagnes du 11ème Docteur",
      legends: [ "Amelia Pond", "River Song", "Clara Oswald" ],
      maxWidth: 200,
      displayControls: true
    });

**Exercice :** Liens (II)

### Paramètres surnuméraires

Si l'interpréteur JavaScript accepte qu'une fonction soit appelée avec moins d'arguments que prévu lors de sa définition, il accepte également l'inverse. Ceci permet d'écrire simplement des fonctions acceptant un nombre variable d'arguments.

Pour accéder à ces paramètres supplémentaires, on utilisera la variable locale `arguments`.
Accessible à l'intérieur de n'importe quelle fonction, cette variable spécifique est automatiquement déclarée par l'interpréteur et contient la liste des arguments passés à la fonction. 

    function sample() {
      return arguments;
    }
    
    console.log(sample(2, 4, 6)); // [2, 4, 6]

L'objet `arguments` se comporte comme un `Array` dans le sens où il possède une propriété `length` et supporte la notation par crochets `[]` pour accéder à la liste des arguments. Il ne possède cependant aucune des méthodes accessibles des `Array`.


    function howManyArguments() {
      return arguments.length;
    }
    
    console.log(howManyArguments(2, 4, 6)); // 3
    
    function thirdOf() {
      return arguments[2];
    }
    
    console.log(howManyArguments(2, 4, 6)); // 6

L'objet `arguments` peut cependant être converti en un `Array` en lui appliquant la méthode `slice` de l'objet `Array`, accessible via `Array.prototype.slice`.

    function sample() {
      // On transpose l'objet `argument` dans le tableau `args`.
      var args = Array.prototype.slice.call(arguments);
      
      // Dans la suite de la fonction, `args` est un `Array` qui
      // contient l'ensemble des arguments passés à la fonction,
      // dans l'ordre où ils ont été transmis.
    }

Nous reviendrons plus tard sur la signification du `prototype` dans cet exemple.

**Exercice :** Calcul de moyennes

Ces souplesses de l'interpréteur peuvent également être exploitées dans un autre contexte. Ainsi, si vous devez écrire une fonction de rappel théoriquement appelée avec plusieurs arguments mais que vous savez n'avoir besoin que de quelques-uns d'entre eux, vous pouvez simplement ignorer les suivants.

    var top3Singles = [
      "Pharrell Williams - Happy",
      "Lilly Wood and the Prick - Prayer in C",
      "Sia - Chandelier"
    ];

    top3Singles.forEach(function(single, index) {
      // Les fonctions de rappel utilisées avec `forEach` recoivent normalement
      // 3 paramètres mais nous savons ici que nous n'avons besoin que des deux
      // premiers.
      
      console.log("N°" + index + " des singles en France en 2014 : " + single);
    });

    var top3Artists = top3Singles.reduce(function(top, single) {
      // Ici, nous n'avons besoin ni de l'index ni du tableau au complet.
      
      top.push(single.split('-')[0]);
      return top;
    }, []);
