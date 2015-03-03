# Fonctions<br />Exercices

## Exercice 1<br />Jeu de nim

Les jeux de Nim sont des jeux de prise opposant deux joueurs, fréquemment joués avec des pièces, des allumettes ou des jetons.
À tour de rôle, chaque joueur doit retirer d'un ou plusieurs tas un ou plusieurs éléments. Il existe de nombreuses variantes, possédant chacune des dispositions de départ différentes des éléments à prendre (en un ou plusieurs tas, de tailles identiques ou différentes…), des règles de prise différentes (avec ou sans limites, depuis un ou plusieurs tas…) et des conditions de victoire différentes.

Dans cet exercice, nous implémenterons un jeu de nim simple, selon les règles suivantes :

* Les pièces sont disposées en un tas unique.
* Un joueur peut à son tour prendre de 1 à 3 pièces.
* Le joueur qui retire la ou les dernières pièces du tas est déclaré perdant.

Complétez la fonction `nim` qui implémentera ce jeu, telle que :

* Le nombre de pièces présentes dans le tas au début de la partie est attendu en premier paramètre
* Une fonction de rappel est attendue en second paramètre et sera exécutée en fin de partie. Elle recevra en argument le nom du joueur vainqueur.
* À chaque tour de jeu, une boite de dialogue du navigateur est utilisée pour demander au joueur combien de pièces il souhaite retirer du tas.  
  Le message reprendra le numéro du tour courant, le nom du joueur courant ("A" pour les tours impairs, "B" pour les tours pairs) et le nombre de pièces restantes.
* On s'assurera que les joueurs prennent bien entre 1 et 3 pièces durant leur tour.
  Dans le cas contraire, un message de rappel des règles est affiché puis le joueur doit préciser à nouveau le nombre de pièce qu'il souhaite retirer. 

Les boites de dialogue du navigateur qui demandent aux joueurs des informations aux joueurs utiliseront la méthode [window.prompt](https://developer.mozilla.org/fr/docs/Web/API/Window/prompt).
Les autres boites de dialogue utiliseront la méthode [window.alert](https://developer.mozilla.org/fr/docs/Web/API/Window/alert).

    function nim(coins, callback) {
      // Complétez la fonction
    }
    
    nim(Math.ceil(Math.random() * 12), function(winner, turns) {
      alert("Joueur " + winner + " remporte la partie en " + turns + "tour(s).");
    });


## Exercice 2<br />Liens

Complétez la fonction `linkTo`, qui prend en argument deux paramètres obligatoire `label` et `href` et retourne le code HTML d'un lien.

    function linkTo(label, href) {
      // Complétez la fonction
    }
    
    console.log(linkTo("La Garde de Nuit", "http://www.lagardedenuit.com/"));
    // '<a href="http://www.lagardedenuit.com/">La Garde de Nuit</a>';

Ajoutez à cette méthode des paramètres optionnels autorisant à une classe CSS appliquée au lien (par défaut `link-primary`), son `title` (par défaut identique à `label`) et son `id` (sans valeur par défaut).

    console.log(linkTo("Astronomy Picture of the Day", "http://apod.nasa.gov/apod/",
      "link-primary", "Daily astronomy picture from professional astronomers", "apod"));
    // '<a href="http://apod.nasa.gov/apod/" class="link-primary" id="apod"
    //     title="Daily astronomy picture from professional astronomers">
    //     Astronomy Picture of the Day</a>';


## Exercice 3<br />Liens (II)

Remplacer dans la fonction `linkTo` les trois paramètres optionnels par un unique paramètre `attributes`. Vous ferrez en sorte que les valeurs par défaut mise en place à l'exercice précédent reste valable et que n'importe quel attribut passé dans cette table d'association soit appliqué au lien généré.

    console.log(linkTo("Astronomy Picture of the Day", "http://apod.nasa.gov/apod/",
      "link-primary", "Daily astronomy picture from professional astronomers", "apod"));
    // '<a href="http://apod.nasa.gov/apod/" class="link-primary" id="apod"
    //     title="Daily astronomy picture from professional astronomers">
    //     Astronomy Picture of the Day</a>';

## Exercice 4<br />Calcul de moyenne

Complétez la function `average` qui prend en paramètre un nombre variable de nombre et en retourne la moyenne.

    function average() {
      // Complétez la fonction
    }
    
    console.log(average(12, 8));
    // 10
    
    console.log(average(8, 4, 12, 16));
    // 10
