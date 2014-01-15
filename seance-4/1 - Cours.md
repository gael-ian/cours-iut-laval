# Séance 4 - Tour d'horizon des CMS / Framework

**Date :** 16/01/2014 - 13h30 / 16h30

## Sommaire

* Systèmes de gestion de contenus
* Frameworks
* Micro-frameworks

## Systèmes de gestion de contenus

### Principe

Les systèmes de gestion de contenus sont des applications qui peuvent installées sur un serveur web pour servir de base à la construction d'un site web, idéalement sans connaissances préalables.

### Avantages

* Fournissent d'emblée des solutions à un ensemble de problèmes commun
* 

### Inconvénients

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

<figure style="float: right">
  <img src="assets/wordpress.png" alt="WordPress" />
  <figcaption><a href="http://wordpress.org/">WordPress</a></figcaption>
</figure>

Wordpress était à l'origine un moteur de blog.
Au fil des versions, il a été enrichi pour lui ajouter une gestion des pages et en faire un CMS plus complet.

* Langage : PHP
* Date de création : 2003
* Version courante : 3.8
* Particularités : loop, action / filter

##### Points forts

* Gestion des medias
* Extensible par plugins
* Themes

##### Points faibles

* Extensible par plugins
* Performances


#### Drupal

<figure style="float: right">
  <img src="assets/drupal.png" alt="Drupal" />
  <figcaption><a href="https://drupal.org/">Drupal</a></figcaption>
</figure>

Drupal est un CMS initialement à vocation communautaire.

* Langage : PHP
* Date de création : 2001
* Version courante : 7.25
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

### Avantages

### Inconvénients

### Quelques exemples

* [Symfony](http://symfony.com/) (PHP)
* [Zend Framework](http://framework.zend.com/) (PHP)
* [Ruby on Rails](http://rubyonrails.org/) (Ruby)
* [Django](https://www.djangoproject.com/) (Python)

## Micro-frameworks

### Principe

### Avantages

### Inconvénients

### Quelques exemples

* [Silex](http://silex.sensiolabs.org/) (PHP)
* [Limonade](http://limonade-php.github.io/) (PHP)
* [Sinatra](http://www.sinatrarb.com/) (Ruby)