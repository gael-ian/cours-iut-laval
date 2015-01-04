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


## Accessibilité

### Définition

> Le principe de l'accessibilité du Web est de fournir un contenu auquel il est possible d'accéder de façon équivalente quel que soit son matériel, son environnement, son navigateur, ses déficiences ou sa culture (langue). Plus spécifiquement, elle signifie que chacun doit pouvoir percevoir, comprendre, naviguer, interagir avec le web et y contribuer.[^accessibilite-du-web]

Ainsi définie, la problématique de l'accessibilité du Web ne se résume pas à la prise en compte des handicapés mais s'étend à toutes les situations de handicap. Ceci englobe aussi bien les déficiences physiques ou mentales que les conditions de navigation rendues difficiles par un matériel ou une connexion de mauvaise qualité, un environnement défavorable (bruit, mauvaise visiblité, instabilité…) ou toute autre situation qui ne permettrait pas à l'utilisateur d'utiliser toutes ses facultés.

Loin d'être uniquement une bonne intention mise en avant par les professionnels du web, l'accessibilité au web est un droit universel reconnu aux personnes handicapées dans la [Convention relative aux droits des personnes handicapées](http://fr.wikipedia.org/wiki/Convention_relative_aux_droits_des_personnes_handicap%C3%A9es) adoptée par les Nations Unies en 2006 et une obligation légale dans de nombreux pays[^loi-accessibilite].

**Exercice 3 :** Lecteurs d'écran

### Mise en pratique

Le WAI[^wai] est un organe du W3C[^w3c] qui travaille à l'amélioration de l'accessibilité des sites et applications web. Il édite notamment des guides d'accessibilité pour les contenus web[^wcag], aujourd'hui reconnus internationalement comme des standards.

Ces guides posent notamment 4 principes fondamentaux :

* Un contenu doit être **perceptible**  
  Il doit pouvoir être présenté à un utilisateur sous une forme qu'il pourra percevoir
* Un contenu doit être **utilisable**  
  Un utilisateur doit pouvoir interagir avec l'interface avec les moyens dont il dispose.
* Un contenu doit être **compréhensible**  
  Un utilisateur doit pouvoir comprendre l'information et l'interface dans laquelle elle est présentée.
* Un contenu doit être **robuste**  
  Le document doit rester accessible quelque soit l'évolution des technologies ou des navigateurs.

Si de nombreuses recommandations ont été établies pour satisfaire au mieux les trois premiers critères, le respect du dernier tient à une démarche simple : se conformer aux spécifications des langages éditées par le W3C pour la construction des documents web.

**Exercice 4 :** Validité
**Exercice 5 :** Recommandations d'accessibilité

Le WAI travaille également sur des spécifications avancées pour l'accessibilité des applications web riches[^wai-aria] ainsi qu'au développement d'outils de validation et de suivi.

En France, des initiatives comme [Opquast](http://opquast.com/fr/) ou [AccessiWeb](http://www.accessiweb.org/) publient leur propre liste de recommandations, inspirées des WCAG.


## Reférencement

La quantité de contenus disponibles sur le web n'a cessé d'augmenter. Si, depuis leur apparition, les moteurs de recherche ont fait des progrès conséquents dans l'identification et la compréhension des contenus qu'ils indexent, ils doivent également prendre en compte un nombre toujours croissant de critères de notation et de mécanismes de pénalité pour distinguer les plus qualitatifs.

L'optimisation d'un site web pour son référencement est aujourd'hui un métier à part entière, en étroite collaboration avec les intervenants en charge du développement et de l'intégration mais aussi avec ceux du marketing et de la communication.

Si les modifications du comportement des moteurs de recherches sont trop fréquentes pour en faire un état des lieux qui ne soit pas obsolète dans quelques mois, on peut cependant s'attarder sur deux grandes tendances qui se sont affirmées au fil des années passées.

### Rédiger pour le web

Le soin que vous apporterez à la rédaction des contenus de votre site est un élément primordial de son succès, tant en termes de référencement que d'audience. Depuis quelques années, on voit d'ailleur émerger une spécialisation nouvelle : rédacteur web.

Tous les experts s'accordent à dire qu'il faut avant tout rédiger pour les internautes et qu'un contenu de qualité sera nécessairement identifié et mis en avant par les moteurs de recherche. Ils s'empressent malgré tout d'ajouter qu'un certain nombre de critères d'optimisation doivent être gardé en tête tout au long de la rédaction pour un meilleur résultat.

Reportez-vous au document `1.1 - Rédiger pour le web` pour un aperçu des bonnes pratiques de rédaction pour le web.

### Données supplémentaires 

En tant que premiers aveugles du web, les moteurs de recherche bénéficient de toutes les bonnes pratiques de validité et d'accessibilité lorsque celles-ci sont respectées pour la création d'un document web. Pour autant, le langage HTML n'est pas suffisant pour permettre une identification systématique des informations contenues dans les documents. Il ne fournit par exemple aucune balise permettant d'identifier un prix, une caractéristique d'un produit ou un numéro de téléphone et n'a pas vocation à le faire.

Plusieurs initiatives visent à étendre les capacités du HTML à identifier des informations plus précises :

* [Les microformats](http://microformats.org/)  
  Fournissent un vocabulaire de classes applicable aux éléments HTML pour identifier des structures de données courantes.
  Plusieurs spécifications ont déjà été validées[^microformats-specifications] et d'autres sont en cours de discussion.
* [Les microdonnées](https://html.spec.whatwg.org/multipage/microdata.html)  
  Utilisent des attributs HTML supplémentaires (`itemscope`, `itemtype`, `itemprop`…) pour spécifier le type de structure et le rôle de chacun des attributs. De nouveaux vocabulaires sont publiés régulièrement[^schema.org].
* [RDFa](http://www.w3.org/TR/rdfa-primer/)  
  Utilisent des attributs HTML supplémentaires (`typeof`, `property`…) pour spécifier les relations entre les éléments d'une structure. Cette méthode se base sur les vocabulaires RDF existants[^rdf] et permet la recherche d'informations dans les documents via le langage de requête SPARQL.

**Exercice 6 :** Microdonnées

Si elles sont aujourd'hui principalement utilisées par les moteurs de recherche, les données structurées présentes en ligne sont une étape vers [le Web des données](http://fr.wikipedia.org/wiki/Web_des_donn%C3%A9es) et [celui des objets](http://fr.wikipedia.org/wiki/Web_des_objets).


[^microformats-specifications]: hCalendar, hCard, rel-nofollow… Toutes sont [listées sur le site officiel](http://microformats.org/wiki/Main_Page#Specifications)
[^schema.org]: Le site <http://schema.org/> présente une initiative commune des moteurs de recherche les plus répandus pour supporter les micro-données en fournissant une large gamme de vocabulaires.
[^rdf]: <http://www.w3.org/RDF/>
[^accessibilite-du-web]: Cette définition est tirée d'une ancienne version de [l'article Accessibilité du Web sur Wikipédia](fr.wikipedia.org/wiki/Accessibilité_du_web).
[^loi-accessibilite]: En droit français, les sites des services de communication publics doivent se conformer au [Référentiel Général d'Accessibilité](http://references.modernisation.gouv.fr/rgaa-accessibilite) édité par l'Etat depuis le publication en 2009 du decret d'application de la loi du 11 février 2005 sur l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées.
[^wai]: [Web Accessibility Initiative](http://www.w3.org/WAI/)
[^w3c]: [World Wide Web Consortium](http://www.w3.org/)
[^wcag]: [Web Content Accessibility Guidelines](http://www.w3.org/WAI/intro/wcag.php)
[^wai-aria]: [Accessible Rich Internet Applications](http://www.w3.org/WAI/intro/aria.php)
