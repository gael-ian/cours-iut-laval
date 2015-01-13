# Gabarits de pages<br />Exercices


# Exercice 1<br />Gabarit liquide

Dupliquez la feuille de styles `static.css` pour créer une feuille de styles `liquid.css`.
Modifiez cette feuille de styles pour transformer le gabarit statique du site en un gabarit liquide.

Observez les limites de cette solution en redimensionnant la fenêtre de votre navigateur.


# Exercice 2<br />Unités de longueur relatives

Dupliquez la feuille de styles `static.css` pour créer une feuille de styles `static-relative.css`.
Modifiez cette feuille de styles pour définir en une seule fois :

* Les espacements internes appliqués aux listes d'actions sur les contenus.
* La taille des bordures appliquées aux blocs `.brick-header`
* Le rayon des bordures appliquées aux avatars
* Les marges appliquées au contenu (p) des blocs `.brick-header`
* Les marges appliquées aux paragraphes
* Les marges appliquées aux articles

Modifiez la déclaration des styles des titres pour que l'échelle typographique soit conservées si la taille de police de base du document venait à être modifiée.
Testez le résultat en utilisant le zoom de votre navigateur.


# Exercice 3<br />Media queries

Pour chacune des règles `@media` suivantes, explicitez les conditions dans lesquelles les règles qu'elles contiennent seront appliquées et déterminez le type de terminal ciblé.

    @media only screen and (max-width : 480px) {}
    
    @media only screen and (min-width : 481px) and (max-width : 960px) {}
    
    @media only screen  and (min-width : 600px)
                        and (max-width : 960px)
                        and (orientation : landscape) {}
                        
    @media only screen  and (min-width: 640px)
                        and (max-width: 960px)
                        and (min-resolution: 96dpi) {}
                        
    @media only screen  and (min-device-pixel-ratio:2.0)
                        and (max-height:600px)
                        and (max-width:640px)
                        and (device-aspect-ratio: 16/9)
                        and (orientation:landscape) {}


# Exercice 4<br />Design adaptatif

Dupliquez la feuille de styles `static-relative.css` pour créer une feuille de styles `adaptative.css`.
Modifiez cette feuille de styles pour transformer le gabarit statique du site en un gabarit adaptatif.
Vous devrez prendre en compte :

* Les écrans de bureau de grande taille  
  Qui afficheront une version identique au gabarit statique.
* Les écrans de bureau de petite taille ou ordinateur portable    
  Considérées comme d'une largeur maximum de 1000px.   
  En dessous de cette limite :  
    - Le menu n'est plus affiché dans une barre latérale mais sous forme de barre de navigation horizontale.  
      Les liens, occupant chacun 200px de largeur, sont régulièrement répartis sur la largeur et leur libellé est centré à l'intérieur du cadre.  
      Leurs bordures, au survol ou non, disparaissent.
* Les tablettes  
  Considérées comme d'une largeur maximum de 800px.  
  En dessous de cette limite :  
    - Les libellés du formulaire sont affichés au dessus de leur label.  
      La mention des champs obligatoires est accolées au libellé et non plus au champ.
    - Les images de la galerie sont affichées par deux.  
      Elles continuent à occuper le maximum de l'espace disponible dans leur conteneur.
    - Les commentaires sont affichés en pleine largeur sous le contenu commenté.
* Les petites tablettes  
  Considérées comme d'une largeur maximum de 600px.  
  En dessous de cette limite :  
    - La marge intérieure des liens du menu est réduite de moitié.
    - L'avatar n'est plus affiché en tête du formulaire de publication.  
      Les marges intérieures du block sont ajustées pour présenter autant d'espace au dessus et en dessous du titre.  
      Une marge inférieure supplémentaire est ajoutée pour décoller le libellé du formulaire du bord supérieur.
    - Le bouton de soumission du formulaire est affiché sur toute la largeur.
    - Les liens d'actions sur les publications sont affichées sous forme de liste verticale.  
      Les bordures sont ajustées en conséquences.
    - Les images de la galerie sont affichées seules.  
      Elles continuent à occuper le maximum de l'espace disponible dans leur conteneur.
    - Les commentaires sont affichés en pleine largeur sous le contenu commenté.
* Les téléphones mobiles  
  Considérées comme d'une largeur maximum de 380px (mais toujours supérieure à 320px).  
  En dessous de cette limite :  
    - Le menu n'est plus affiché.
    - Les avatars ne sont plus affichés.
    - Les liens d'actions du formulaire de soumission ne sont plus affichés.

Observez les limites de cette solution en redimensionnant la fenêtre de votre navigateur.


# Exercice 5<br />Design responsive

Dupliquez la feuille de styles `adaptative.css` pour créer une feuille de styles `responsive.css`.
Modifiez cette feuille de styles pour transformer le gabarit adaptatif obtenu à l'exercice précédent du site en un gabarit responsive.
On considérera que dans sa version la plus grande, le gabarit reste statique.

Observez les limites de cette solution en redimensionnant la fenêtre de votre navigateur.


# Exercice 6<br />Mobile first

Dupliquez la feuille de styles `responsive.css` pour créer une feuille de styles `responsive-mobile-first.css`.
Modifiez cette feuille de styles pour appliquer l'approche "mobile first".
