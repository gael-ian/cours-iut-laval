# Fonctions<br />Corrections des exercices 

## Exercice 1<br />Jeu de nim

    function nim(coins, callback) {
      var turns = 0;
      var player, message, number;
      
      do {
        turns  += 1;
        player  = (turns % 2 != 0 ? 'A' : 'B');
        message = [
          "Tour n°" + turns,
          "Joueur " + player,
          "Pièces restantes : " + coins,
          "Combien de pièces retirez-vous ? (de 1 à 3)"
        ].join("\n");

        number = parseInt(prompt(message), 10);
        if (number < 1 || number > 3) {
          alert("Vous devez prendre de 1 à 3 pièces.");
          continue;
        }
        
        coins -= number;
      } while (coins > 0);
      
      callback((player == 'A' ? 'B' : 'A'), turns);
    }
    
    nim(Math.ceil(Math.random() * 12), function(winner, turns) {
      alert("Joueur " + winner + " remporte la partie en " \
        + turns + "tour(s).");
    });


## Exercice 2<br />Liens

    function linkTo(label, href, klass, title, id) {
      var parameters = {
        'href':  href,
        'class': (klass || 'link-primary'),
        'title': (title || label)
      };
      if (id) {
        parameters.id = id;
      }
      
      var htmlAttributes = [];
      for (param in parameters) {
        if (parameters[param]) {
          htmlAttributes.push(param + '="' + parameters[param] + '"'); 
        }
      }
      
      return '<a ' + htmlAttributes.join(' ') + '>' + label + '</a>';
    }
    
    console.log(linkTo("Astronomy Picture of the Day",
                       "http://apod.nasa.gov/apod/",
                       "link-primary",
                       "Daily astronomy picture from professional astronomers",
                       "apod"));
    
    // '<a href="http://apod.nasa.gov/apod/" class="link-primary" id="apod"
    //     title="Daily astronomy picture from professional astronomers">
    //     Astronomy Picture of the Day</a>';


## Exercice 3<br />Liens (II)

    function linkTo(label, href, attributes) {
      var defaultAttributes = {
        'href':  href,
        'class': 'link-primary',
        'title': label
      };
      
      for (attr in defaultAttributes) {
        if (!attributes.hasOwnProperty(attr) || !attributes[attr]) {
          attributes[attr] = defaultAttributes[attr]; 
        }
      }
      
      var htmlAttributes = [];
      for (attr in attributes) {
        if (attributes[attr]) {
          htmlAttributes.push(attr + '="' + attributes[attr] + '"'); 
        }
      }
      
      return '<a ' + htmlAttributes.join(' ') + '>' + label + '</a>';
    }
    
    console.log(linkTo("La Grande Évasion", "http://www.lagrandeevasion.fr/", {
      'class': 'link-discovery',
      'rel':   'external'
    }));
    
    // '<a href="http://www.lagrandeevasion.fr/"
    //     class="link-discovery"
    //     title="La Grande Évasion"
    //     rel="external">La Grande Évasion</a>';


## Exercice 4<br />Calcul de moyenne

    function average() {
      var numbers = Array.prototype.slice.call(arguments);
      return (numbers.reduce(function(sum, number) {
        return sum + number;
      }, 0) / numbers.length);
    }
    
    console.log(average(12, 8));
    // 10
    
    console.log(average(8, 4, 12, 16));
    // 10
