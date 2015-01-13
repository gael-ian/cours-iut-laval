# Gabarits de pages<br />Corrections des exercices


# Exercice 1<br />Gabarit liquide

Se reporter au fichier `3 - Corrections/exercice-1.html` et à la feuille de style `3 - Corrections/assets/stylesheets/liquid.css`.


# Exercice 2<br />Unités de longueur relatives

Se reporter au fichier `3 - Corrections/exercice-2.html` et à la feuille de style `3 - Corrections/assets/stylesheets/static-relative.css`.


# Exercice 3<br />Media queries

    @media only screen and (max-width : 480px) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués
         que sur écrans et uniquement si la largeur de l'écran est supérieure ou
         égale à 480px.
         On cible a priori les téléphones.
      */
    }
    
    @media only screen and (min-width : 481px) and (max-width : 960px) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués
         que sur écrans et uniquement si la largeur de l'écran est comprise entre
         760px et 960px.
         
         On cible a priori les tablettes.
      */
    }
    
    @media only screen  and (min-width : 600px)
                        and (max-width : 960px)
                        and (orientation : landscape) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués
         que sur écrans, uniquement si la largeur de l'écran est comprise entre
         600px et 960px, pour une orientation paysage.
         
         On cible a priori les tablettes en mode paysage.
      */
    }
    
    @media only screen  and (min-width: 640px)
                        and (max-width: 960px)
                        and (min-resolution: 96dpi) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués
         que sur écrans, uniquement si la largeur de l'écran est comprise entre
         640px et 900px, pour une résolution minimum de 96 dpi.
         
         On cible a priori les téléphones récents, dotés d'écran HDPI.
      */
    }
    
    @media only screen  and (min-device-pixel-ratio:2.0)
                        and (max-height:600px)
                        and (max-width:640px)
                        and (device-aspect-ratio: 16/9)
                        and (orientation:landscape) {
      /* Les styles décrits à l'intérieur de cette règle @media ne seront appliqués
         que sur écrans, uniquement si la hauteur de l'écran est supérieure à 600px,
         si la largeur de l'écran est supérieure à 640px et 900px, si le ratio
         largeur/hauteur de l'écran est 16/9 et pour une orientation paysage.
         
         On cible a priori les iPad Mini (et pas grand chose d'autre…).
      */
    }


# Exercice 4<br />Design adaptatif

Se reporter au fichier `3 - Corrections/exercice-4.html` et à la feuille de style `3 - Corrections/assets/stylesheets/adaptative.css`.


# Exercice 5<br />Design responsive

Se reporter au fichier `3 - Corrections/exercice-5.html` et à la feuille de style `3 - Corrections/assets/stylesheets/responsive.css`.

