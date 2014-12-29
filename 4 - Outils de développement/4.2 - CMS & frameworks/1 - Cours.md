# Tour d'horizon des CMS / Framework

## Sommaire

* Systèmes de gestion de contenus
* Frameworks
* Micro-frameworks

## Systèmes de gestion de contenus

### Principe

Les systèmes de gestion de contenus sont des applications qui peuvent installées sur un serveur web pour servir de base à la construction d'un site web, idéalement sans connaissances préalables.

### Avantages

* Fonctionnalités de base déjà en place (parfois avancées selon l'outil. ex: Prestashop)
* Théoriquement pas nécessaire de savoir coder
* Simple à l'installation
* Possibilité de solutions hébergées

### Inconvénients

* Maintenabilité
* Trop rigide ou configurable à l'excès
* Impose le modèle de données
* Saisie des contenus parfois difficile
* Rapidement complexe quand les plugins se multiplient
* Développement des plugins parfois difficile
* Difficilement déménageable du fait du stockage en base de données
* Difficulté de mise à l'échelle

### Quelques exemples

* [Wordpress](http://wordpress.org/) (PHP)
* [Drupal](https://drupal.org/) (PHP)
* [CMS made simple](http://www.cmsmadesimple.fr/) (PHP)
* [ezPublish](http://ez.no/fr/) (PHP)
* [Spip](http://www.spip.net/) (PHP)
* [Plone](http://plone.org/) (Python)
* [Django CMS](https://www.django-cms.org/) (Python)
* [Radiant CMS](http://radiantcms.org/) (Ruby)

#### WordPress

Wordpress était à l'origine un moteur de blog.
Au fil des versions, il a été enrichi pour lui ajouter une gestion des pages et en faire un CMS plus complet.

* Langage : PHP
* Date de création : 2003
* Version courante : 4.0.1
* Particularités : loop, action / filter

##### Points forts

* Gestion des medias
* Extensible par plugins
* Themes

##### Points faibles

* Extensible par plugins
* Performances


#### Drupal

Drupal est un CMS initialement à vocation communautaire.

* Langage : PHP
* Date de création : 2001
* Version courante : 7.34
* Particularités : gestion des contenus par noeuds, affichage par bloc, hooks par conventions de nommage


#### Avantages

* Extensible par plugins
* Themes

#### Inconvénients

* Extensible par plugins
* Interface de base pas forcément adaptée à une utilisation par tous (ex: saisie des contenus au format HTML, pas de gestion des media)
* Si les nouvelles versions fournissent toujours une voie pour migrer les données, l'équipe de développement n'a aucun scrupules à briser la compatibilité du code (ex: Drupal 8)


## Frameworks

### Principe

Les frameworks sont des boites à outils complètes mises à disposition des développeurs. Plus ou moins évolués, ils fournissent un cadre générique pour le développement d'application.

### Avantages

* Permettent un développement sur mesure
* S'appuient sur un ensemble de design pattern et de bonnes pratiques
* Possibilité de mise à l'échelle
* Maintenabilité
* Ecosystème

### Inconvénients

* Tout est à refaire ou réinventer
* Courbe d'apprentissage parfois longue
* Choix des composants parfois imposés
* Abstraction parfois trop haute (ex: moteurs de template en PHP)
* Performances

### Quelques exemples

* [Symfony](http://symfony.com/) (PHP)
* [Zend Framework](http://framework.zend.com/) (PHP)
* [Ruby on Rails](http://rubyonrails.org/) (Ruby)
* [Django](https://www.djangoproject.com/) (Python)

## Micro-frameworks

### Principe

Plus petits que les frameworks, les micro-frameworks ne tentent pas de résoudre tous les problèmes rencontrés lors du développement d'une application mais se concentrent sur l'essentiel.

### Avantages

* Tout les avantages d'un framework
* Rapidité de prise en main et de développement
* Légèreté
* Fun (ex: Camping)

### Inconvénients

* S'adaptent mal aux gros projets
* Légèreté parfois seulement théorique

### Quelques exemples

* [Silex](http://silex.sensiolabs.org/) (PHP)
* [Limonade](http://limonade-php.github.io/) (PHP)
* [Sinatra](http://www.sinatrarb.com/) (Ruby)