# Séance 2 - Nouveautés CSS3<br />Exercices

## Exercice 1<br />Modèles de boite

    .column {
      box-sizing: border-box;
      width: 300px;
    }

Le modèle de boite `border-box` permet de spécifier la largeur d'un bloc sans avoir à lui soustraire le padding et l'épaisseur de la bordure. En cela, il est beaucoup plus logique à utiliser que le modèle traditionnel `content-box`.

Lorsque vous utilisez des propriétés prefixées, veillez à toujours écrire la version canonique en dernier, afin qu'elle prenne la proirité sur les autres une fois qu'elle sera pleinement supportée par les navigateurs.


## Exercice 2<br />Webfonts

    @font-face {
      font-family: "Sanidana";
      src: url("../fonts/sanidana.eot");
      src: url("../fonts/sanidana.eot?#iefix") format("eot"),
           url("../fonts/sanidana.woff2") format("woff2"),
           url("../fonts/sanidana.woff") format("woff"),
           url("../fonts/sanidana.ttf") format("truetype"),
           url("../fonts/sanidana.svg#sinadana") format("svg");
      font-weight: normal;
      font-style: normal;
      font-variant: normal;
    }
    
    h1, h2 {
      font-family: "Sanidana", "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
    }

En règle générale, il est recommandé de ne pas utiliser plus de trois polices de caractères au sein d'un même travail. Ceci afin de ne pas perdre l'utilisateur et de ne pas surcharger la page.

Quelques conférences intéressantes :

* [La typographie comme outil de design](http://www.paris-web.fr/2010/programme/la-typographie-comme-outil-de-design.php)
* [La macrotypographie de la page web](http://www.paris-web.fr/2010/programme/macrotypographie-page-web.php)

## Exercice 3<br />Ombrages

### text-shadow

    h1 {
      text-shadow:  0px  2px #000000,
                    2px  0px #000000,
                    0px -2px #000000,
                    -2px 0px #000000,
                    0px  4px #f6dd00,
                    4px  0px #f6dd00,
                    0px -4px #f6dd00,
                    -4px 0px #f6dd00;
    }
    
    h1 small {
      text-shadow: 0px  2px #ffffff,
                   2px  0px #ffffff,
                   0px -2px #ffffff,
                   -2px 0px #ffffff;
    }

Un rayon de flou négatif ne sera pas pris en compte et rendra la déclaration de l'ombre invalide.

### box-shadow

    .social a:hover {
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.6);
    }

Un rayon de flou non nul crée une zone de transition au long de laquelle l'ombre s'estompe peu à peu jusqu'à devenir totalement transparente.

Une distance de propagation non nulle étend l'ombre au delà des dimensions du bloc et la rend visible sur plusieurs côtés.


## Exercice 4<br />Transitions

    /* Les images de fond doivent être présentes hors champ au début de l'animation. */
    .social a {
      background-position: center 300px;
      background-repeat: no-repeat;
    }
    .twitter    { background-image: url(../images/twitter.png);     }
    .github     { background-image: url(../images/github.png);      }
    .deviantart { background-image: url(../images/deviantart.png);  }
    
    /* Transition de l'état normal à l'état hover */
    .social a {
      transition: box-shadow 0.5s linear 0s,
                  min-height 1s ease-in-out 0.5s,
                  background-color 1s ease-in-out 0.5s,
                  background-position 0.5s ease-in-out 1s;
    }

Il n'est pas possible de définir des transitions différentes entre le passage de l'état normal à l'état :hover d'un lien et le passage inverse car les navigateurs ne font pas de distinction sur le sens d'une transition.

Les transitions s'appliquent mal sur la graisse d'une police car d'une part peu d'entre elles prévoient plusieurs niveaux de graisses et d'autre part l'animation est prévue pour être faite par pas par les navigateurs.

Pour un détail des propriétés qui peuvent être animées et de la façon dont elles doivent évoluer au cours d'une animation, se reporter à [la spécification CSS dédiée](http://www.w3.org/TR/css3-transitions/#animatable-types).

## Exercice 5<br />Animations

    @keyframes glow {
      from {
        text-shadow: 0px 0px 0px #ccc,
                     0px 0px 0px #ccc,
                     0px 0px 0px #ccc,
                     0px 0px 0px #ccc;
      }
      
      70% {
        text-shadow: 0px  2px 0px #ddd,
                     2px  0px 0px #ddd,
                     0px -2px 0px #ddd,
                     -2px 0px 0px #ddd;
      }
      
      to {
        text-shadow: 0px  4px 1px #fff,
                     4px  0px 1px #fff,
                     0px -4px 1px #fff,
                     -4px 0px 1px #fff;
      }
    }
    
    h1 small {
      animation: glow linear 3s infinite alternate-reverse;
    }

Pardon aux familles…

## Exercice 6<br />Design adaptatif

    @media screen and (max-width: 960px) {
      .wrapper {
         width: 100%;
      }
      
      .main {
        padding-bottom: 200px;
        background: transparent url(../images/dummy.png) bottom center no-repeat;
      }
      
      h1 {
        font-size: 2em;
        margin: 1em auto;
      }
      
      .column {
        width: 100%;
        margin: 10px 0;
      }
    }

Ceci n'est qu'un exemple simpliste d'adaptation d'un design pour mobiles, l'utilisation des media-queries n'étant qu'une fraction du travail nécessaire.

