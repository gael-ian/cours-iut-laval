# Bonnes pratiques HTML


## Sommaire

* Sémantique
* Accessibilité
* Reférencement


## Sémantique

HTML est un langage de balisage permettant de structurer, de mettre en forme le contenu d'un document, d'y inclure des ressources multimédias et de le mettre en relation avec d'autres documents via des liens hypertextes.

Une utilisation approriée des balises HTML pour leur sens offre permet d'améliorer à la fois l'accessibilité générale du document et la compréhension des documents par les moteurs de recherche lors de l'indexation.

**Exercice 1 :** Balises  
**Exercice 2 :** Balisage sémantique

Pour autant, le langage HTML n'est pas suffisant pour permettre une identification systématique des informations contenues dans les documents. Il ne fournit par exemple aucune balise permettant d'identifier un prix, une caractéristique d'un produit ou un numéro de téléphone et n'a pas vocation à le faire.

Plusieurs initiatives visent à étendre les capacités du HTML à identifier des informations plus précises :

* [Les microformats](http://microformats.org/)  
  Fournissent un vocabulaire de classes applicable aux éléments HTML pour identifier des structures de données courantes.
  Plusieurs spécifications ont déjà été validées[^microformats-specifications] et d'autres sont en cours de discussion.
* [Les microdonnées](https://html.spec.whatwg.org/multipage/microdata.html)  
  Utilisent des attributs HTML supplémentaires (`itemscope`, `itemtype`, `itemprop`…) pour spécifier le type de structure et le rôle de chacun des attributs. De nouveaux vocabulaires sont publiés régulièrement[^schema.org].
* [RDFa](http://www.w3.org/TR/rdfa-primer/)  
  Utilisent des attributs HTML supplémentaires (`typeof`, `property`…) pour spécifier les relations entre les éléments d'une structure. Cette méthode se base sur les vocabulaires RDF existants[^rdf] et permet la recherche d'informations dans les documents via le langage de requête SPARQL.

**Exercice 3 :** Microdonnées


## Accessibilité



## Reférencement



[^microformats-specifications]: hCalendar, hCard, rel-nofollow… Toutes sont [listées sur le site officiel](http://microformats.org/wiki/Main_Page#Specifications)
[^schema.org]: Le site <http://schema.org/> présente une initiative commune des moteurs de recherche les plus répandus pour supporter les micro-données en fournissant une large gamme de vocabulaires.
[^rdf]: <http://www.w3.org/RDF/>