Raccourcis intéressants
Ctrl ou alt sur la fct pour la voir ds son fichier
ctrl ou alt pour plusieurs curseur spourcopier plusierus fois
ctrl espace pour importer le namespace /use de la classe



## EPISODE 1 - Révisions

#C quoi Symfony
=> **Ens. de composants php réutilisables** et aussi un **framework PHP** avec architecture MVC 
=> les composants sont donc réutilisables sans avoir besoin du framework obligatoirement
Exp. de composants : Console, Routing

##Pourquoi Symfo plutôt que Laravel
-> c'est plus organisé
-> c plus complexe
-> l'organisation en composants est plus personnalisable contrairement à d'autres frameworks qui dvt imposer
-> par exp, on pt changer les fichiers de place si on vt

##Rappel http  / client serveur
->API ça sera l'interace entre sl'app et le client
-> cf cours car g pas suivi


##MVC Rappels
1/un point d'entrée unique qui va regrouper toutes els requetes :
routage=> quel code va être exécuté pour la page
dispatch->lancement du code
2/ le controller va afficher le tpl et générer le html avec des données spécifiques, c'est le controlledr qui va récupérer les données'

##exemple du projet 
-> point d'entrée = index.php
-> là ds ce projet, le routage est dans app.php.
On essaie d'écrire moins de code en dehors des classes. On range tout ds les classes
-> le controoller va exécuter les bonnes fcts
**Rappel une méthode qui s'éxecute qd on appelle une route est une ACTION**
quels fichiers revoient une réponse ??
la view
**ob start() temporisation de l'affichage'** on recupere ob get clean
çapermet de choisir si ça afficher non g pas compris loo cf 10h52 du cours
-> Gestion des erreurs à faire en deuxième 
-> Pour rajouter une page : 1/ definir la route 2/la méthode 3/les données et le tpl


##Organisation du code
**DOCBLOCKS** : c'est les **commentaires qui documentent** l'application,les fonctions, les variables,
vscode va les afficher qd on passe le curseur de la souris devant la fct
On y met une description courtedans la première ligne.
Puis on rajoute des tags **@param** , **@return**avec le type 
Il y a des logiciels qui pvt regrouper les docblocks pour faire la doc.
Exemple :
<?php
/**
 * A summary informing the user what the associated element does.
 *
 * A *description*, that can span multiple lines, to go _in-depth_ into
 * the details of this element and to provide some background information
 * or textual references.
 *
 * @param string $myArgument With a *description* of this argument,
 *                           these may also span multiple lines.
 *
 * @return void
 */
 function myFunction($myArgument)
 {
 }


Ce qui est différent de specifier le type attendu du paramètre entre les parenthèses d'une fct
exp **mafunction(integer $variable ) :string**
**on attend un integer en param et ça renvoie un string **
On pt spécifier mêm $thois self static un nom de class avec son FQCN,  ... 

cf doc
https://docs.phpdoc.org/3.0/guide/references/phpdoc/tags/index.html
https://docs.phpdoc.org/3.0/guide/guides/types.html#supported-types

**IMPORTANT DE TYPER POUR  PAS AVOIR moins ERREUR**

**Séparer le code réutilisable du code spécifique au projet**
-> créer deux dossiers, un pour l'app, un pour le framework' et un public
-> il va falloir changer certains chemins
On pt utiliser __DIR__ mais attention à bien rajouter le / à la fin comme il est pas compris dans le DIR
-> index.php on le met d sl edossier public qui ctiendra aussi les assets on rajoute ../ pour leurs chemins
-> on doit sortir le tableau des routes et on le met ds un fichier à part, on va dc le require
-> tout ce qui est du controller on le laisse mais ce qui est spécifique on le met ds un maintCotroller qu'on va utiliser ds l'app'
-> Controller@home deviennent MainCOntroller@home
            die(__LINE__);
->  si erreur dans le chargement "File not found" verifier que le htaccess est avec l'index.php'"
-> on divise le model en appModel et en Model ,AppModel extends Model
-->on déplace les tpl ds le dossier app -> il faudra changer le chemin vers eux aussi, on a fait un dossier template et un aut layaout

##Namespaces
ILs répondent au pb de conflits de noms similaires ds les classes.
Les namespaces vt perm de différencier de ql classe on parle.
Ce st des sortes de chemins virtuels vers les classes.
En général, le 1er identifiant du namespace est discriminant par exemple
namespace = laure
et App se retrouvera graĉe au namespace Laure
On va rajouter les namespaces à nos classes avec namespace nomDuNameSpace ; 
on va ensuite l'appeler avec use et son chemin FQCN complet'


##PSR4
C'est des règles àrespecter lors de la création des classes :
- la racine du namespace crrspd à un dossier précis
- on crée une class par fichier
- le nom du fichier est le nom de la classe
- le reste du namespace dt crrspdre à l'arborescence du dossier'

##Autoload
Pour ne pas avoir à importer chaque classe, on a l'autoload.
L'autoload va essayer de charger les class automatiqumt'
là on modifie ds index.php les bons namespaces (après c composer qui le fera tout seul)

##COMPOSER
on fait **composer init** 
ça va créer un **composer.json**
On répond aux questions
C'est là que ça demande si on vt utiliser le mapping PSR4' on dit ok
Ensuite, on va aller ds le fichier composer.json et on **modifie la racine**
on fait **composer install** , ça va lancer la copie des dépendances à partir du composer.json et du **dump autoload**
et puis on require le **vendor/autoload** ds php dans index.php
**NB ON N UTILISE PAS cmposer update à tort et à travers, à ne pas utilsier en prod, car update les dernières lib**
- `composer require [nom-de-la-dependance]` : permet d'ajouter une dépendance


