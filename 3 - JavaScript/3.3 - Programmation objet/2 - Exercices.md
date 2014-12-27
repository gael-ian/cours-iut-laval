# Programmation objet en JavaScript<br />Exercices 


## Les héros font la course

Pour cette exercice, vous utiliserez comme base de travail les fichiers du répertoire `2 - Exercices`.  
**Vous travaillerez dans le fichier `main.js`.**

### 1. Modèle de base

Ecrire une classe `Vehicle`, possédant les attributs suivants :

* Une vitesse maximum, fixée à 100km/h.
* Un coefficient d'accélération, fixé à 1.2.
* Un coefficient de freinage, fixé à 0.8.
* Une vitesse courante, initialement à 0.
* Une position sur le circuit, initialement à 0.
* Des options, représentées par un objet javascript pouvant être passé au constructeur

Ecrire pour cette classe `Vehicle` les méthodes suivantes :

* `getPosition`: retourne la position du véhicule sur le circuit
* `accelerate`: Multiple la vitesse par le coefficient d'accélération et ajoute 1 au résultat. La vitesse d'un véhicule ne doit jamais dépasser sa vitesse maximale.
* `brake`: Multiple la vitesse par le coefficient de freinage
* `updatePosition`: incrémente la position du véhicule selon sa vitesse. La position d'un véhicule doit toujours être exprimée sous la forme d'un entier.
* `run`

La méthode `run` est appelée par la fonction `loop`, définie dans le fichier `index.html`. Elle recoit en paramètre la course qui est en train de se courrir.

Lors d'un appel à la méthode `run`, un véhicule doit :

* Accélérer si la vitesse maximale permise sur le circuit (sans crash) le lui permet.
* Ralentir si sa vitesse est supérieure à la vietesse maximale permise sur le circuit.
* Avancer


### 2. Chacun son style

Décliner la classe `Vehicle` en trois classes :

* `Car`:
	- Vitesse maximum : 160km/h
	- Coefficient d'acceleration : 1.2
	- Coefficient de freinage : 0.85
* `Van`:
	- Vitesse maximum : 120km/h
	- Coefficient d'acceleration : 1.15
	- Coefficient de freinage : 0.9
* `Scooter`:
	- Vitesse maximum : 140km/h
	- Coefficient d'acceleration : 1.25
	- Coefficient de freinage : 0.8

Modifier le fichier `index.html` de sorte que :

* Batman conduise une voiture
* Les Tortue ninjas conduisent un van
* Fantomette consuise un scooter

### 3. Pimp my ride

Les véhicules des héros ne sont rien sans gadgets !

Modifier la méthode `run` de la classe `Vehicle` pour ajouter un appel à une méthode `action` au début de chaque tour de jeu.

Ecrire la méthode `action` de sorte à ce qu'elle exécute toutes les méthodes de l'objet dont le nom commence par `action_`.

Ecrire deux modules javascript :

* `AReaction`, contenant une méthode `action_areaction`
* `LanceMissile`, contenant une méthode `action_lancemissile`

`AReaction` doit permettre de déclencher des fusées de propulsion un certains nombre de fois dans la course. L'action des fusées est identique à 3 accélérations mais n'est pas limitée par la vitesse maximale du véhicule.

`LanceMissile` doit permettre de tirer sur un concurrent plus avancé un certain nombre de fois dans la course. L'action d'un missile est de ralentir le véhicule ciblé de 30%.

Modifier le fichier `index.html` pour équiper les véhicules avant le départ de la course de la façon suivante :

* La Batmobile est `AReaction` (3 charge) et `LanceMissile` (2 charges)
* Le TurtleVan est `LanceMissile` (5 charges)
* La Fantomobile est `AReaction` (5 charges)
