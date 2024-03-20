
6q595XmCKm

Ereul9Aeng

game-reviews

Lucie copin, mot de passe : cameleons

mot de passe oShop oSDhop
php -S 0.0.0.0:8080 -t public
philippe@oclock.io rocknroll
nicole@oclock.io onews

sudo netstat -tlnpu voir les ports ouverts
lancer le serveur Laravel  php artisan serve  
php -S localhost:8080 
php -S 0.0.0.0:8080 -t public frontend

sudo lsof -nP -iTCP -sTCP:LISTEN
**sudo lsof -nP -iTCP -sTCP:LISTEN**

extension git graph pour vscode

##########################################################################################################################################################
##
################ SAISON 8- ########################### 
#################################################################################################################


**docker swarm =>orchestration** s'adapter à la montée en charge'



API renvoie du js
c'est le client qui va décider de l'afficher comme il veut'

Mes questions
docker permet de facilement mettre à l'échemme et supporter une montée en charge'
quel role jouent les images officielles dispos sur dockerhub ?
garantie sans bugs
vérifiées et recommandées par les fournisseurs de logiciels


nb CAS API  on pourrait avoir front et back sur des serveurs différents

##demo de baptiste avec oshop Application monolithique
git clone du dossier ds var/www/html
-dans etc/jecplusquoi on cree un fichier de conf virtualhost oshop.monpseudo.dfg.cong
on specifie le **documentRoot** chemin abs depuis la racine du serveur vers le dossier public /repo et 
le **nom du seveur**=nom qu'on vt pour notre site' oshop.mlor.eddi.clioud 
on expose le dossier public pour oshop
avec sudo a2ensite nom du virtualHost pour activer
puis relancer apache 
Erreur500 : on dt rajouter un htaccess 
pour reecrire url
on lance **composer  install** ds dossier public
verifier qu on a vien le dossier **vendor**
on recopie le c**onfig ini***ds dosiier app  localhost
on importe la bdd ob la crée et on recupere la **bdd via adminer **
le fai s'occipe des dns
bien verifier que le nom de domaine correspondent à ce qu'on a dans le conf de vortualhost'
'
divers
localhost c un nom de domaibe
ping localhost : resolution dns va chercher le fichier host sinon cherche server dns
net débit vs latence
trouver l ip du server commande dig 
qd on se ping on pt avoir l ip
dns zone : a aaaa txt 

heberger server maio utiliserdocker
=========================
https explications
certbot a lodifié le fichier du virtualhost-avec de la reecriture et un aut fichier
et il a copié la clé ssl ds un fichier
2fichiers
ca protege de larp pooisoning //  man in the middle

##CI CD

continuoius integration co,tinuous deliverry 

avant objectifs differents ebtre le dev qui cree desbugs et admibsys qui maoitient

Devops : mouvance,philo cf meth agile avec des pratoques pour dsatisfaure les devs et les obs
principes : tester en continu,automatiser, sutveiller, moitorer
continuoius integration : testes automatisés, +rapidmt, dev prevenu vite
co,tinuous deliverry : si tests ok, alors on déploie
(tests unitairees cf php test /symfony, tests fctnels :simuler des clicks etc tt le comportement de l user(selenium)

pipieline /workflow ci cd

conteneurisation : docker kubernetes 
ci cd jenkin github action
qlite code sonarkube
iac ansible,terraform


aws tarification complexe
google cloud platform idem
ovh bien, o2switch ok ms mutualisé

autres slutions hebergement 
IAAS PAAS SAAS infracture as a service Platform  Software Ass (gmail,dropbox,etc...)
plus de service plus cher, moins de souplesse, moins de travail aussi
O2switch est au milieu
heroku c paas github pages aussi

**pour commencer un vps sur ovh
nom de domaine chez ovh=>100mo gratuitss**

GITHUB ACTIONS
il y a des workglow qui, se lancent qd y aura des evnmts push /pull request
et ensuite ça va lancer la création du conteneurf, le test, l'anzalyse du code ..
'

##CRONTAB
crontab -e
Automatisation de tâches :
chaque étoile crrrspd à une fréquence
cf site **crontab generator**

Pour exécuter des scripts à intervalles réguliers
on crée sa commande crontab et on la met ds son fichier







##SCRIPTBASH
On peut fr des scripts bash pour automatiser les tâches sur l'OS'
Pour afficher les commandes avnt execution set -x 


Une fois qu'on a mis le code en prod, après c'est répétitif pou mettre à jour'
Prenons l'exp de la mise en prod avec notre php '
En local , sur ma branche dev :  git add . ; git commit , git push origin dev, 
puis on va merger git checkout main, git merge dev
On push la branche mergée càd main
se remettre sur la  branche dev pour ne pas developper ds main
on va sur le serveur avec ssh par exemple
puis cd vers sonprojet
puis on pull

Attention sur le fichier.env
les variables d'evrnmt ne sont pas les mêmes selon les environnements '
Attention au fichier settings.js , il contient une variable qui sert sur les fichiers js seulement et qui varie se lon les envrnmts aussi
Attention pour lancer son serveur,ne pas oublier dele leancer sur leport 8000 de sa machine, pas sur le serveur, qd on fait les modifs

attention à ne pas mettre son mdp en clair qs on se connecte a sql , si possible

On va créer un dossier scripts pour mettre ses scripts shell , on va le mettre ds gitignore pour pas le pusher

Le pb du script sh c qu'il va  s'arreter après s'etre connecté à ssh
Il faut donc executer les derniresres commandes depuis le serveur c'est à dire on les met entre guillemets spérarées par des ; aaprès ka connexion ssh ' 
Ou sinon on crée un ficher spécial pour executer depuis le serveur qu'on executera depuis le serveur par exemple server_commands.sh'
On pourrait ainsi lancer composer, faire des màj etc... composer install
=====================
SCRIPT FINALISE SH

# permet d'afficher les commandes avant de les exécuter
set -x

git checkout master
git merge dev
git push

git checkout dev
ssh student@gregoclock-server.eddi.cloud "cd /var/www/html/pomodoro/; git pull;"    OU 
ssh student@gregoclock-server.eddi.cloud < ./server_commands.sh


========================


===============================

Exemple de script server_commands.sh
cd /var/www/html/pomodoro/
git pull

# relancer un composer install sur le projet back
cd /var/www/html/pomodoro/back
composer install
# lancer des scripts de mise à jour

===============================================


##HTTPS
il faut rajouter un certiificat que fournit une autorité de certification comme letsencrypt
(on va transmet la clé publique pour accéder)
on peut facilement créer sa clé avec letsencrypt , génére un certificat en ligne de commaqnde
on passe sur le port 443
##ESsai de certbot et installation
certbot.eff
on crée le lien symboliq ds usr/bin comme ça fait partie du path,on pourra lancer certbot directemt
on peut choisir de configurer apache directement
ne pas oublier de changer le fichier js avec https
??certbot avec docker ???

##Hebergement nom de domaijne
cf ovh extension .ovh pas cher
on relie son nom de domaine à son VPS
puis on fait docker/virtualhosts/..


ATTENTION PAS DE MISE EN PROD SANS FAIRE DE BACKUP


#=================================
Script de greg pour tirer du texte d'un html

<?php
// nous précise si c'est bientot l'apéro
$htmlContentRaw = file_get_contents('https://estcequecestbientotlapero.fr');


// récupère le html à partir de la balise <body>
$htmlContentBodyOnly = substr($htmlContentRaw, strpos($htmlContentRaw, '<body'));
$htmlContentNoHtmlTags = strip_tags($htmlContentBodyOnly);
$contentNoDoubleSpaces = preg_replace('/[ \t]+/', ' ', $htmlContentNoHtmlTags);
$msg = html_entity_decode($contentNoDoubleSpaces);

$fileName = 'apero_' . date_format(new DateTime(), 'H-i-s') . '.txt';
//on récupère les données ds le dossier output
file_put_contents(__DIR__ . '/../output/' . $fileName, $msg);








=========EPISODE 4============================

L'intérêt d'avoir plusieurs containers va permettre depouvoir changer mettre à jour chq élément spéraméent'



**Rappel grâce au htaccess, on a dit à apache que le documentRoot il est plus dans var/www/html maintenant**
arguments de base de docker
-d en arrière plan
-p pour relier les ports
--name renomer
-v relier le fichier /volume


##DOCKER PRODUCTION
**docker volume ls** => lister les volumes
Qd on arreete les containers, il dt rester celui qu'on a enregistré'

Plusieurs manières :
1/ le dossier /var/www/html on le relie au dossier front du projet avec -v 
2/ on crée une image avec notre projet sur dockerHub, on y met le code du projet et on recrée un container à partir de cette image là'
3/ on fait plusieurs containers avec chaque logiciel et on fait un docker compose puis on fait git pull
4/ on fait un docker compose avec le code directement copié

On fait un compose Yam spécial prod
Avec des différences spéciales prod
On va faire un ficheir env avec les données sensibles à part un .env et  .env.example dans le meme dossier que le yaml et la doc pour le remplir
On fera un fichier d'exemple qu'il faudra copier ds son environnement et le modifier'
Soit on crée un conf.ini soit on a le droit aussi de créer ces variables d'environnement sur la machine DB_HOST etc..'
On met le .env ds le gitignore

On modifie dc le compose.yml pour lui préciser qu'on a un fichier .env'
env_file:
      - .env

Au lieu d'envoyer le back sur dockerHub, ion va utiliser le dockerfile ds le dossier local avec la commande **build**' au lieu d'utiliser l'image en ligne comme précédemment
Mais ilf aut bien avoir le dossier back en prod hein.'
On fait persister les données
On met l'**option restart always en prod** pour qu'il y ait disponibilité h24'
Mais pas en dév. sinon ça va se relancer tout le temps au moindre bug.

##ORCHESTRATION INTEGRATION CONTINUE
avec github on pt configurer des tests automatisés pour voir si y a pas ds bugs




##DOCKER COMPOSE
=> on crée plusieurs containers qui connaitront les containers voisins
=> docker compose va lancer un docker run avec les différents coneneurs précisés dans le fichier YAML
=> **fichier compose.YAML** :
syst. de clé/valeur , 
les clé st séparées des valeurs par deux points **:**
l'indentation est importante : 2 espaces
s'il y a des tirets **-** et à la ligne ça fait des items d'un tableau' on pt utiliser les [] sur une ligne sinon
les clés pvt ê des chaines de caractère ou des nb ou des bool
=> dans le fichier YAML, on déclare notre **version de docker** et les **différents conteneurs** qu'on va créer et de **quelles image*s* ils se basent' On pt y meettre les **redirections deport et de volume**

pour la bdd on pt initialiser la bdd ds le dossier /docker-entrypoint-initdb
il faut utiliser l'option -v pour relier le fichier sql à ce dossier'

attenton le DB_HOST est le nom de l'image qui contient notre bdd' ici db


version: "3"
services:
  frontend:
    image: httpd
    ports:
      - "8000:80"
    volumes:
      - ./front:/usr/local/apache2/htdocs
  backend:
    image: PSEUDO-DH/pomodoro-backend-laravel
    ports:
      - "8080:80"
    environment:
      - DB_HOST=db
      - DB_DATABASE=pomodoro
      - DB_USERNAME=root
      - DB_PASSWORD=pomodoro
  db:
    image: mariadb
    environment:
      - MARIADB_ROOT_PASSWORD=pomodoro
      - MARIADB_DATABASE=pomodoro
    volumes:
      - ./DB.sql:/docker-entrypoint-initdb.d/DB.sql 

Voir si on doit rajouter
volumes :
  pomodoro-db :
//le volume dt être créé


On va lancer **docker compose up** qui va créer les 3 conteneurs **docker compose down** pour arrêter et meême supprimer

le 8080 c sur l'hote, le 80 c le port du conteneur'
Apache c le port 80 par défaut
voir 8000 8080 l'un pour le front l'autre pour l'api' ,on pt voir si ça marche en les regardant ds le navigateur


##Comment persister les donénes de la BDD malgré l'arrêt des conteneurs ??'
On va créer un volume **/var/lib/mysql qui sera stocké ds pomodoro-db**;  **:Z** signifie que l'accès est réservé qu'au dossier pomodoro-db (sinon on met :z)'
il n'y a que le conteneur qui peut y accéder'

##Rajout d'adminer dans le yaml
par défaut il se connecte à db'
changer le port 8080:80 par un autre comme le 8080 st déjà pris
ports disponibles /réservés => y en a bcp
les ports avec des serveurs web st par convention commencés par 80
========================
##DOCKERFILE
On va créé notre dockerFile à partir d"'une image '"
Là on va en faire une sorte de Laravel qu'on va mettre dans le dossier back de notre projet'
# on part de l'image PHP 8.1 avec Apache
FROM php:8.1-apache

# En suivant les instructions de la doc sur le Dockerhub, on active l'extention PHP pdo_mysql
RUN docker-php-ext-install pdo_mysql

# Toujours en suivant la doc, on installe l'utilitaire pour dézipper & l'extention PHP zip
RUN apt update
RUN apt install -y libzip-dev zip
RUN docker-php-ext-install zip

# On se place dans le dossier /var/www/html
WORKDIR /var/www/html
# Et on copie le contenu du dossier courant (.) à l'intérieur de l'hôte (dossier back)
# dans le dossier courant à l'intérieur de l'image (dossier /var/www/html)
COPY . .

# Toujours en suivant la doc, on récupère Composer depuis une image Docker officielle
# et on on le copie dans notre image (à l'emplacement /usr/bin/composer)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# On lance la commande `cp .env.example .env` à l'intérieur de l'image
RUN cp .env.example .env
# Puis on lance la commande `composer install` pour installer les dépendances
RUN composer install --no-interaction --optimize-autoloader
# On lance la commande `php artisan key:generate`, nécessaire au bon fonctionnement de Laravel
RUN php artisan key:generate

# On ajoute les droits d'écriture à tout le monde sur le dossier /var/www/html/storage, pour que Laravel puisse écrire ses logs et son cache
RUN chmod -R a+w /var/www/html/storage

# On modifie le DocumentRoot du virtual host par défaut d'apache, toujours en suivant la doc
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Et pour finir on permet à Apache de lire les fichiers .htaccess et on active la réecriture d'URL
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride all/' /etc/apache2/apache2.conf
RUN a2enmod rewrite

On va copier ce fichier dans le dossier back du projet
On lance la création de l'image avec docker build

cd back
docker build -t pomodoro-backend-laravel 

On a ainsi notre image avec Laravel
Mais elle est accessible qu'en privé.
Si on veit la partager,on va la pusher sur dockerHub
Pour lancer l'image de greg par exemple'
**docker run gregoclock/pomodoro-backend-laravel**
de n'importe où, docker saura où metre les fichiers'


Là, on a copié le dockerfile ds backend, pour pouvoir faire la commande ci dessus copy . . qui a copié tous les fichiers ds le dossier backend


#==========EPISODE3=====================================
pas vesoin de changer le port en régle générale sauf si on veut rendre inaccesible certains site,s on chang le port et on stipule quel port 

Utilisatopn des containesr
chq container contient un logiciel, php7, php8, sql etc par container

##DOCKER
#PREMIERS PAS avec DOCKER ET HTTPD (apache)
1/**Installation**, copier les commandes une à une
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER  => rajouter l'user au groupe qui utilise docker'

Bien redemarrer après toutes ces commandes

2/lancer le container d'apache en tâĉhe de fond **httpd**
**docker run -d httpd**
Voir les containeres en cours **docker ps** on pt rajouter -a pour voir ts les containers stoppés
stopper un container **docker stop ID-DU-CONTAINER ou NOM-DU-CONATINER** 
on pt spécifier le nom lors du run **docker run -d --name NOMDUCONATINR httpd**

3/ le conteneur expose son port 80.
IL faut demander à Docker de rediriger le port 8000 de l'ordinateur hôte vers le port 80 du conteneur
**docker run -d -p 8000:80 --name apache httpd**
Mais erreur donc on met apache2 comme on n'a pas totalement enlevé le container'

4/supprimer le docker
**docker rm apache** on pt rajouter -f pour forcer

5/Gestion des images utilisées
##liste 
**docker images** ou **docker image ls**
##supprimer
**docker image rm NOMDELIMAGE**
On peut supprimer toutes les images inutilisées avec la commande **docker image prune -a**
(supprimer toutes les containers **docker container prune**)
NB l'image c comme la classe , le container c 'l'objet
En fait les images on pt pas les modifier, on va créer nos propres images et rajouter nos extensionbs

#DOCKER BIND MOUNTS
=>Les fichiers à l'intérieur de ce dossier seront donc accessibles à la fois **depuis notre ordinateur et depuis le conteneur**
On ne peut créer un bind mount qu'à la création du conteneur ! On ajoute pour cela l'**argument -v**, --volume ou --mount à notre commande docker run. Exemple
**docker run -dp 8000:80 --name apache -v ./front:/usr/local/apache2/htdocs/ httpd**
**docker run -dp 8000:80 --name NOM-DU-CONTAINER -v CHEMIN-DE-MON-DOSSIER-SUR-L-HOTE:CHEMIN-DE-MON-DOSSIER-DANS-LE-CONTAINER httpd**
Le dossier **/usr/local/apache2/htdocs est le DocumentRoot** (vous vous souvenez ? on en a parlé hier !) utilisé par l'image httpd pour le virtual host par défaut d'Apache. En général c'est plutôt /var/www/html si on utilise apache  
Rappel le fichier index.php du documentRoot sera lu si on a installé php, sinon c index.html par défaut 

DONC FINALEMENT POUR LANCER UN SITE STATIQUE :
cloner le repo ds la VM et lancer la commande ci-dessus pour lier le dossier cloné au DocumentRoot
il sera accesible à l'adresse http://laure-seng-server.eddi.cloud:8000/' =>adresse-de-la-VM-serveur:8000/

En prod on peut supprimer son conteneur
et arreter apache2 et rediriger sur le port 80
sudo systemctl stop apache2
puis on redirige sur le port 80  -p 80:80.
Mais c'est possible que ça ne marche cette solution que pour un seul projet sur un port'

#DOCKER PHP
Lien sur DockerHub : https://hub.docker.com/_/php

**docker run -dp 8001:80 --name mon-env-de-dev-php -v ./demo-php:/var/www/html php:8.2-apache**

#Docker EXEC
- On pt exécuter des commandes bash par exemple en tapant
**docker exec NOM-DU-CONTAINER "bash 'macommande' "**
-Ms pour plus de commandes on utiliser le terminal integré
Mais tout fichier ecrit ds le conteneur sera supprimé avec... ça ne prsiste pas
**docker exec -it php-test bash**
On pt par exp installer Composer :
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer

On install zip et nano
apt update
apt install -y zip nano
composer require symfony/var-dumper
nano index.php
Remplacez le contenu de ce fichier par les instructions ci-dessous :

<?php

require 'vendor/autoload.php';

dump("Hello from symfony/var-dumper !");

#==========EPISODE 2==================================================EPISODE 2===================================================


##SERVEURS MUTUALISES VS SERVEUR DEDIE
=> plusieurs clients sur la même machine : pon n'a pas la main dur les logiciels installés'
SERVEUR DEDIE => on a un serveur qui nous est dédié , on est le seulà l'utiliser'
On choisit son serveur , son OS, sa formlule...

##SERVEUR PHYSIQUE vs VIRTUEL
physique on doit s'ocuuper de l'aspect matériel
virtuel on se charge de rien, sauf configurer, on pt configurer les performances, disque dur etc...

Attention sur serveeru mutualisé, ça peut migrer de technos et nous l'impoiser'

**LE MIEUX C SERVEUR DEDIE VIRTUEL :VPS** 60 balles par an chez ovh par exemple
========================================================================
##CREER SON SERVEUR SOU SLINUX
Les datacenters detiennent les serveurs
serveur physique , on doit faire sa sauvegardee soi meme
serveur rack1u 2u 4u le nb de u c l epaisseur
le raspberry pi tu peux t en servir de serveur
la RAM en fct de son contenu affiché
le DD en fct de ce quo'n stocke'
la connexion va devoir etre elevee si y abcp de gens qui se connectent en meme tempsx


ADMIN SYS 7 missions
1/choisir l heberfgemt
installer secutuser
configurer
securiser
mettre en prod
mtenir
surveiller
frf evoluer


**ds kourougestions->ressouces-> serveur cloud**
**créer la vm**
**lancer sur la machine où est lancé kourou
**lancer le terminal** 
commande **ssh **(logiel de cnexion securise à une machineà suivie du nim de la machine puis nom de l user)
**ssh student@laure-seng-server.eddi.cloud**
on confirme l enregistremet de not machine sur la liste des serveurs ok
on peut avoir qu'on est connecté, le prompt est devenu studendt....'
On va exécuter des commandes
PUis on lance 
**sudo apt update**
**sudo apt install -y apache2 php libapache2-mod-php mariadb-server php-mysql**
(sans le -y,ça pose des questions de confirmation)
()apache2 le serveur et maraiadb et une lib qui relie php à apache2)
**config et securisaiton de mysql*=>
g mis mdp = root ms il ft securiser sinon


**sudo mysql_secure_installation**
**sudo mysql**

creer l'utilisateur sql avec ts les privileges'

**CREATE USER 'explorateur'@'localhost' IDENTIFIED BY 'Ereul9Aeng';**
**GRANT ALL PRIVILEGES ON *.* TO 'explorateur'@'localhost' WITH GRANT OPTION;**
puis faire exit poursortir de mysql
verifier qu'on l'utilisateur est crée en se conenctant 
**mysql -u explorateur -p**
puis mdp'

NB POUR LAPORD ON VA PAS INSTALLER ADMINER



sudo mkdir /var/www/html/adminer
cd /var/www/html/adminer
sudo wget https://github.com/vrana/adminer/releases/download/v4.8.1/adminer-4.8.1-mysql.php
sudo mv adminer-4.8.1-mysql.php index.php



**Permissions /var/www/html/
**ls -alh**
drwxr-xx droits droits du propriétaire droit du groupe droits des autres owner/group/user
On va changer le propriétaire du dossier **sudo chown -R student:www-data /var/www/html**
On rajoute les droits décriture au groupe **sudo chmod -R g+w /var/www/html**

ls -alh /var/www/html
On devrait obtenir ceci :

student@bdelphin-server:/var/www/html$ ls -alh
total 24K
drwxrwxr-x 3 student www-data 4.0K Oct  6 09:55 .
drwxr-xr-x 3 root    root     4.0K Oct  5 15:15 ..
drwxrwxr-x 2 student www-data 4.0K Oct  6 09:56 adminer
-rw-rw-r-- 1 student www-data  11K Oct  5 15:15 index.html


On supprimes le fichier index.html pour avoir l'arborescence des dossiers direct'
**rm /var/www/html/index.html**


💡 Vous remarquerez que maintenant que l'utilisateur student a les droits d'écriture, plus besoin de la commande sudo 🎉

##On lance la commande depuis son repo

1/scp -r front/* student@PSEUDOGH-server.eddi.cloud:/var/www/html/
on remplace par nos noms 
on va copier les fochiers via le tunnel
normalement ca va ns demander le mdp mais là on passe par kourou qui a autorisé au préalable

2/ via FTP
a/On installe le serveur FTP utiliser un logicile par exple ProFTP et on lance le script fourni cf repo git d oclock
attention avec le upgrade qui va redemarre le serveur??
b/après on pourra utiliser Filzilla en local, client FTP

3/avec git
on crée une clé ssh
on la rajoute àson compte git
on clone le repo
On va configurer apache pour qu'il aille direct ds le bon dossier ^pour pas rendre tt visible'



##VirtualHosts
chq projet sera sur des dosisiers differents
on configure apache2
dossier /etc/apache2
y a available ou unailkable

par defaut virtualhost sur port 80 et dossier /var/www/html

créer sa nvelle config avec pomodoro-front.conf
on stipule le port et le dossier qui ctient le code (documentRoot)
et on verifie que le nom du serveur est bien laure-seng etc...
on va activer la config 
**sudo a2ensite pomodoro-front
sudo systemctl reload apache2**
on fait la meme pour le back


on vt aussi installer le back
on va devoir installer composer et remplir le dossier .env
on fait **composer install**
si on des pb dede^pendance  **sudo apt-install php-nomdeladepdce**
**PAS de composer update en prod !!!**

A COMPLTER INSTALL DES DEPS
udo apt install php-xml
sudo apt-get install php-curl
sudo apt install zip unzip php-zip

on utilise nano pour écditer le .env 

nb !! ca recupere ce qu'on a ecrit a vant

pour les pbs de droits on ptdonner les droit d ecriture sau groupe , on donne tt le dosssier au groupe www-data


attention par défaut apache  empêche la modif de sa conf avecv htaccess
il faut dc fr les modifs


pour le front il faudra changrr ds js/settings le localhost par l'address http://laure....."" sans le / à la fin

qd on clic sur ""rdre la vm public"" on voit les ports 
=========================================================
#==========EPISODE 1================================

**tester sur lighthouse**
##ECOCONCEPTION
-> ressources :stockage, codes utilisés, ms aussi quel hébergeur et si'l est écolo'
-> un code qi est plus rapide exécuet +de requetes dc + ecolo
-> selon le framework, c plus ou moins ecoloolk
->moins de serveurs
1/optimiser hebergemt->sitevfait main plutot que cms
2/optimiser le parcours utilisateur (-de pages pour le meme but)
3/RWD mobile first et srccset ds images ,pas surcharger
4/mettre en cache des pages, cf config du serveur
5/corriger warning et notice
6/optimiser les requetes sql à la BDD
7/ne pas ssurdimensionner ses serveurs


##Rappel API
Ds le projet saison 7, l'api etait le dossier backend'
ll'api va permettre de mettre à dispo les donn&es à tout le monde '


##ACCESSIBILITE
**Responsive Web Design**
-> accdéder au web depuis tout type d'écran, support,'
-> **a11y** concerne l'accessibilité'
-> cas du daltonisme :  **ne pas faire que la couleur soit la seule condiotn** de compréhension de l'action'
-> **defic.audtive **: **ne pas oublier le transcript** en texte des viédos
-> on pense **sémantique pour les defic visuels** comme le html est lu par les lecteurs d'écran cf video'
en général les h1 h2 on pt les entourer de balises section
BALISESET ATTRIBUTS IMPORTANTS
**balise title**ne pas confondre avec l'artribut title'
**attribut lang dans la balise html**-> cf video pour comprendre avec lecteur d'écran'
**attributs universels**=>on pt es mettre sur n'importe ql balise htmk'
attribut title ?àverifier ça fait le survol , pas psecialement necessaire pour l'accessibilité'
aattribut lang ds une balise avec langf +pays par exemple
**attribut access key** pour attribuer des touches du clavier => à creuser ??
->**landmarks** exp search utiliser l'attribut role=search' ; on va spécifier les roles meme pour les bakises sémantiques pour favoriser la retrocompatibbilté, cf lecteurs d'écran ne connaissant pas l html 5'
header=>header ; footer=>role=contentinfo


##IMAGES
->attribut alt des miages obligatoires
-> le texte alt d'une image décrit l'image ,c'est lui qui s'afrfiche qs l'image n'est pas chargée'
l'attribut alt est obligatoirement, mais on pt le laisser vide, on ava le remplir **que s'il fait partie du contenu du document**'
les images decoratives ne st pas à remplir le alt, on pourrait les passer en background- image
on met le alt si l'image porteuse d info'
-> balises images : img, 
svg ( c la meme taille de texte que ca soit pour une petite ou grande image, c du xml qui decrit limage) avec role image obligatopire focusable à false  , 
area ( zone cliquable),
input type )image, 
canva,
object image, 
embed
attribut aria described by=> pour fournir une info detaillee  en plus
aria hidden true => cacher à l'accessibilité'
**On peu fair le contraire pour cacher le texte mais le rendre visible par le lecteur d'ecran avec sr only'
Greg utilkies un background image pour mettre en fon dqd àa a pas de sens

**lynx**navigateur en texte au clavier



**réferentiesl
RGAA WCAG

**lien accessible** 
**présence de l'attribut title avec reprise du texte visible + infos complémentaires'**

##########################################################################################################################################################
##
################ SAISON 7 - API LARAVEL  ########################### 
#################################################################################################################



#==========EPISODE 8================================================
**Log de laravel** dans storage/logs pour debugguer sa 500
sinon on pt tous les supprimer et relance rla commande pour retrouver son eerrreur

##{SGBDR}
La table va définir la structure des donénes et définir la striucture des enregistrements.
oracle, mysql,postgresql, sqlite, 
mariadb est libre comme mysql est devenu propriétaire
Dans les SGBDR, on pt pas enlever un enregistrement qui a une clé étrangère, à cause de l'existence de la relation'
Si on met cascade, ça efface les enregistrements ayant une relation avec la clé etrangère enlevéé
On peut choisir à la place set null, ça mettra cette propriété à null meme si on a supprimé la clé étrangère
**laravel validator category exists**=> ben utilise la 500
pur la 500, vérifier que les données st correctes avant l'enregistrement'



En SGBDR table-> c'est des collections en MongoDb
rows ->documents 
ccolonne->shamps

scalabilité hrstale et verticale
verticale augmenter la mem vive, le cpu
hrztale augmenter le nb de serveurs 
=> c donc plus facile de dév hrztalement
le nosql est plus facilment scalable hrztalement
Les langages st variables
On va pouvoir utiliser des **systemmes AsA  Service **, csimilaire au cloud
Redis c'es des clés_>valeur'
**IMPORTANTS VOLUMES DE DONNEES QUI EVOLUENT RAPIDEMT, de manière plus flexible, et le scaling hrztal est moins coûteux, c hautement distribuable**


4 principx types
clé valeur
document
graphe
colonne

Comment communiquer entre client et serveur
requete http, formulaire, fetch, // TCP IPll
**websocket** permet une cnexion permanente entre client et serverur , par exemple ds les chat
**WEB RTC**
webrtc c'est pensé pour l'audio/vidéo et ça streame direct de clients en clients, sans passer par le serveur


firebase realtimde db

**eventsource** exemple du pixelart en commun
on se connecte au serveur ()firebase) et il va envoyer une notif en push à tous les clients connectés via fetch
c est un json relié a un eventsource quirecoit les infos du serveur 
des qu'on envoie un pixel , ça envoie au serveur et à tt le monde direct'
c est similaire au websocket mais que dans un sens

API deux choses
soit un langage avec ses fcts classes etc...
soit un webservice=échange de donénes sur le web
c'est une interfafce'

NB Baptiste a montré un truc, on peut copier en curl une requete piquée dans l'inspecteur ??'
en la lancant , on a rajouté un pixel ??

#==========EPISODE 7===================================================

Pour séparer le ficier serveur.js, bien vérifier que les this st remplacés par serveur(cf là où y a des await), on y let tous les fetch
On aurait pu mettre ts les fichiers ccernant les tâches ds un task-server pour séparer encor eplus
FACTORISER eviter la répetition, réduire le nb de lignes de code , rendre plus lisible

Pour bien ranger et spérarer les modules et éviter des **imports circulaires**, il vaut mieux sortir l'objet carrémentds un aut fiuchier'
cf exple de l atodolist de BEn
**Penser à appeler les handlers avec handleSubmit() handlemachin**

TRY CATCH on lance l'erreur et on rajoute le message en paramètre, c'est après qu'on la recoit avec le catch'
**faire des try catcxh des qu'on a un await**'
C'est bcp lus dynamique avec lapi js , on a pas à recharger la page tput le temps'

LE JS va mettre à jour la page, ça reste une SPA

NB queryselector peut fonctionner sur un element pas que sur document

LARAVEL
**::with get ** c ça qui ns permet de récupérer les infos de la clé étrangère

ID factoriser le update et create en une seule fonction
UPDATE 
la grosse différence, avec add il faut récupérer L'ID '
en rajoutant un dataset-id dans l'élément'
au click, il faut que l'id se rajoute avec la value du title aussi bien sur'
on rajout un input de type hidden qui change de value = l'id'
et cet id sert à la méthode update
Pour modifier le title on utilise le dataset précédemment attribué,
            const article = document.querySelector(`.movie-container__movie[data-id${id}]`);
            const article = document.querySelector(`.movie-container__movie[data-id="${id}"] h2`);


#==========EPISODE 6===================================================

##Partie 2 de l'épisode 6
-> pour ranger, Ben a tout mis ce qui concernait les requêtes ds un module server et renommé la variable url'
--> **export default** pour exporter une variable, sinon on doit mettre entre {} comme un objet et importer de la meme manière 
--> on crée un form et on récupère avec handleFormSubmit() 
NB il y a l'objet **formData** qui permer de récupérer les donnés d'un form mas plus compliqué'
On utilise json.stringify() pour transformer l'input en JSON'
**Le json est un string** 
Pour associer la value à l'objet, on peut utiliser le destructuring sur l'objet cf exemple de Ben'
Dans un envoi du form, en CREATE, il faut préciser qu'onenvoie du JSON donc deux hcoses à spécifier ds la requête
Dans le fetch on va donc préciser dans le header de la requête
**1/ le contenu 2/ le type : que c'est du JSON'**
const response = await fetch(this.url, {
                method: "POST",
                //  spécifique au create et au update
                // un body avec le json
                body: data,
                // ! il est important de préciser dans les headers qu'on envoi du json
                headers: {
                    "Content-Type": "Application/json",
                },
            });
Et on le **renvoie via response.json()**
3/ Comme on a recupéré le film ds la réponse, on peut **créer l'élément à partir de ça avec createMovieElement'**

RECAP 
querysel
eventListenr
submit lance handlesubmit
on recupere les value des input ms sinon avec l'objet formadat'
crarion d'un JSON qu'on va envoyer au serveru'
on vide le chp du form
on crée l'élémt ds le DOM'

##Corrections Partie 1 de l'épisode 6'

--> mettre de l'ordre -> **GERER LES ERREURS** même qui ne pvt pas survenir
On va utiliser **try...catch**
Si on a une exception, on la rattrape dans le catch.
--> en général **si on a un await, on va l'englober ds un try/catch** au cas où le fetch a déconné'
--> **Error** est un objet avec des proprietes dont **error.message**
--> on utilise **response.ok** qui sera true si le status est 200 et qqs fctne , erreurs 400 et qqs ou 500 serveur mort = false  ; et **response.status** ( les codes http), le **respnse.body** c le contenu de la response ms ça sera parsé avec le .json
-> le if exécute son code dans le try, si erreur, on file au catch et on renvoie encore une erreur
on n'affichera l'erreur qu'au moment de laffichage' pas besoin deux fois (à tster)


const app = {
    // création d'une propriété dans l'objet
    serveurUrl: "http://127.0.0.1:8000/api/task",

    init: async function () {
        // querySelector necessaire à l'app
        this.taskContainerElement = document.querySelector(".tasklist");

        try {
            // j'initalise le chargement des données depuis le serveur
            const tasks = await this.getTasks();
            // je charge mes données dans le dom
            this.renderTasks(tasks.data);
        } catch (error) {
            // * C'est ici qu'on avertis le client
            alert(error.message);
        }
    },
    getTasks: async function () {
        try {
            const response = await fetch(this.serveurUrl);
            // ! spécifié que si ma réponse n'est pas bonne je ne fais pas le response.json mais je lance une erreur
            // j'ai une 404 et je décide que 404 = erreur
            if (!response.ok) {
                throw new Error(`Fetch failed : ${response.status}`);
            }
            // ! si erreur à partir d'ici on execute plus et on va dans le catch
            // * les données pas utilisable donc je traduis en json
            const tasks = await response.json();
            // * données utilisable car on a bien "parsé les données en json"
            return tasks;
        } catch (error) {
            // * ici c'est le cas ou le fetch à "foiré" donc on throw une erreur pour la partie du code qui utilise cette fonction gettasks
            throw new Error(error.message);
        }
    },
...
...}

DELETE
C à peu pèrs la meme chose qu'en create, 
mais il faut changer la méthode qui n'est plus POST mais DELETE'
1/deleteTask va éxcuter la requtte http DELETE
2/ handleCLickDelete va faire la suppressioncôté serveur ms aussi côté client

**Prototype** c'est une fonction qui a une apparence d'objets, on a crée la syntaxe objet ms c une fonction'
c'est un epu l'quivalent des classes'
**TESTER LE SERVEUR ABVEC LE TRY CATCH avant de remove coté client**
**ATTENTION LE CURRENTTZRGET EN ASYNCHRONE NE FCTNE PAS, i lfaut le mettre au dessus**


##CREATION DU LIEN AVEC CATEGORIES
-> bien stipuler la clé étrangère ??
par exple pour récupérer les task avec la category
Dans le model Task : 
class Task extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'status'];

    /**
     * get the category
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}

Dans le model Category :
class Category extends Model
{
    use HasFactory;

    /**
     * Get the tasks for the category
     */
    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }
}

Dans le TaskController : 
class TaskController extends Controller
{
    public function list()
    {
        //  appeller le model
        $tasks = Task::with("category")->get();
        // retourner du json
        return response()->json([
            "results" => count($tasks),
            "data" => $tasks
        ]);
    }
 
#==========EPISODE 5===================================================


**Icone** mettre dans un i un span une img osef

**pour effacer l'item**'        

on a utilise const article = event.currentTarget.parentElement;

**NB DFAIRE LA SUPPRESSION COTE SERVEUR AVANT COTE CLIENT ??**
**
##RETOUR BACKEND CREER UNE TABLE A PARTIR 
=> conventions dans Laravel : eloquent relationship
eloquent va gérer les clés atrangeres
on va écrire en snakecase-id
Exple 
On va s'intér àaux relation 1 to 1 one to many many to many'
1/Exple relation entre type et movie avec relation un to mnany
dans le Model Type :
**public function movies(): HasMany**
    {
       **return $this->hasMany**(Movie::class);
    }
**dan sle Model Movie :
public function type()**: BelongsTo
    {
        return $this->belongsTo(Type::class);
    }
2/ **EAGER LOADING**Ensuite si on vt récupérer les propriétés , ça va faire tout seul al jointure et ça va récupérer les valeurs des propriétés
On va dans le controller de movies par exple et on fait 
public function list()
    {
        // all with relation type
        **$movies = Movie::with("type")->get();**
        dd($movies);
        // on retourne les films au format JSON car on fait une API
        return response()->json([
            "results" => count($movies),
            "data" => $movies
        ]);
    }
3/ on pt faire du **lazy loading** ça va récupérer après coup avec load() 
NB c'est moins optimisé que précédemment car ça renvoie une requête'

Dans la bdd, o n a type_id et dans le model on écrit type
RECAPITULATIF
du côté du 1 on met BelongsTo
du côté du n on met HasMany
ds le controller on met ::with


##CORRECTION
Fetch c un peu comme un insomnia,iun navigateur sans interface graphiq
cors origin un nom de domaine ne pt pas fr un appel sur un aut nom de  domaine
cors policy , on est pas autorisé, on n'a pas le meem nom de domaine'

correction
Bonne pratique tout append ds un truc qui est pas ds le dom et append une fois au truc du dom
Par exemple , on a le ul qui existe déjà, on veut créer des <li>, on va accrocher nos li à un fragment qu'on va virer ensuite'
**const fragmentElement = document.createDocumentFragment();**
On relie les <li> au fragment puis le fragment au <ul>
le fragment n'apparaitra pas dans le DOM'

attribuer un dataset à l'élément **listElement.dataset.id=task.id ;'**




const fragmentElement = document.createDocumentFragment();

        for (const task of tasks) {
            //  créer une task
            const taskElement = this.createTaskElement(task);
            //  append dans un conteneur non lié au dom
            fragmentElement.append(taskElement);
        }
        //  lié le conteneur au dom
        this.taskContainerElement.append(fragmentElement);
    },

#==========EPISODE 4 Asynchrone  ===================================================

##Corrections exos
-NB le SVG peut servir d'image de fond par exemple en l'intégrant ds le css direct comme c'est du XML'
- texte.slice (0,-1) pour garder le texte -1

##ASYNCHRONE
faire plusieurs choses en même temps
**Promises**
**objet**qui va avoir **trois états**
en attnete **pending**
tenue **fullfilled**
echouee **rejected**
PLusieurs syntaxes :
**.then**(callback avec la valeur et la fonction)
**await** crrspd à j'attends que...'

Avant les promises, on pouvait faire des settimeout avec des callbacks imbriquées=>NON
1/soi ton utilise le

resolve et reject st des fonctions intégrées àl'objet promise , entre parenthèses on met les valeurs à retourner'
try catch 
try on exécute ça
catch sinon ça
c comme un if else

On utilise async sur la fonction et await sur l'autre'

On va utliser l'API fetch'
fetch renvoie une Promise c est reponse
si on la veut en JSON, on fait reponse.json
dés qu'on ecrit await on retourne une promise, si ça reussit , on a la valeur du resolve en qque sorte'

En php le contexte est pas le meme, l'asynchrone est moins crucial'
Côté client, il y a bcp de tâches qui se passent en meme temps



async function getJoke() {
    try {
        const reponse = await fetch("https://api.chucknorris.io/jokes/radom");
        // console.log(reponse);
        const joke = await reponse.json();
        return joke;
    } catch (error) {
        console.log(error);
    }
}

async function init() {
    try {
        const joke = await getJoke();
        console.log(joke);
    } catch (error) {
        console.log(error);
    }
}

init();

console.log("salut");

le fetch renvoie une erreur que si on a pas la bonne url
Une 404 ne declenche pas une erreur
le fetch renvoie une reponse resolve si il a une reponse, reject s'il a pas de reponse'



POUR LE CHALLENGE
lancer le projet en JS et recuperer ce qu'il faut
lancer Laravel en parallele



const app = {
    init: async function () {
        // * DOM ELEMENTS
        this.movieContainerElement = document.querySelector(".movie-container");
        //  récupérer les films
        const movies = await this.getMovies();
        console.log(movies);
    },
    getMovies: async function () {
        const response = await fetch("http://localhost:8000/api/movies");
        const movies = await response.json();
        return movies;
    },
};

document.addEventListener("DOMContentLoaded", () => app.init());
'

#==========EPISODE 3 Révisions JS ===================================================
-> on pt **déclarer le tableau avecd const** et le modifier avecpush par exemple, c pas le tableau qui est modifié, c'set soncontenu'
--> script js à linker avant la balise fermante du body
--> à quoi ça sert de faire des **modules : 1/structurer 2/prévenir certains bug 3/rendre le code plus clair
pour utiliser la variable on fait **export default maVariable**
puis **import maVaribale from monFichier**
mettre type ="module ds la balise script" du fichier qui accueille le module ??
--> dan sles modules :
créer une fonction avec **init: function () {},**
Pour initialiser :'document.addEventListener("DOMContentLoaded", app.init);
-->on peut utiliser this
--> si on veut qu'une constante soit accessble depuisl'intérieur du modle, on pt la déclarer comme propriété' avec this ds la fct ou à l'extèrieur'
ne pas la déclarer en constante sinon elle restera encapsulée
**Console.dir** pour voir les options
-->append/prepend
->nb **this ds l'eventlistener se r&fére à l'élément cliqué**'
on utilise la fct anonyme fléchée pour éviter le pb du contexte du this 
NB pour boucler sur un objet **for in** finctionne , l'objet est itérable avec for in'
eventcurrentTarget pour cibler l'event sur lequel on a cliqué'

data-ben="mes datas pour le js" on récupérera la valeur avec **this.contentElement.data.ben**
on pt créer des **dataset** ds les elements créés pour récipérérer des valeurs
comment rajoutervune valeur au dataset  **button.dataset.id = person;**
const id = button.dataset.id;
#==========EPISODE 3 Fin de Laravel===================================================

#A FAIRE AVaNT quand on récupère un projet existant
-**remplir le fichier . env** ou le créer
**générer la clé** via la commande en ligne ou en cliquant sur le site 
**fichier.env de Laravel**
APP_ENV local => laravel a des outils pour débugguer
**composer update**
composer install laravel va générer la clé toute seule
NB le lancement du server c'est à but de développement hein '
NB dans laravel on pt meme créer nos BDD !

**ENDPOINT**
c une route mais avec une action sur une API quoi
Route::get('/categories/{id}', [CategoryController::class, 'read'])->where("id", "[0-9]+");
Route::get('chemin de la route', [FQCN du controller, 'method'])->where("id", "[0-9]+");
Verifier sa méthode avec un return direct

NB les creatde at et updated at st gétrés par LARAVEL
**Méthodo ds le create**
##A/ **Utiliser request** 
1/ soit on fait de li'njectiosn de dépendance en mettant (request $request)'
ça va isntancier request 
2/soit on utilise la fct globale request()
Request est un objrt avec des attrivbuts et des infos sur la requete
##B/ On valide les champs
avec Validator de façade 
en premier param notre champ et en deuxième les param "Validation Rules"
On renvoie un json d'erreur si ça foire' et on envoie une 422
??Attention bien stipuler dans le header que c un JSON pour voir le JSON ??
NB dans les filteres on pt rajouter un max qui ccrspd au max au max de la BDDpar exemple 50 pour  255 
##C/ On crée l'objet et on lui set ses propriétés'
##D/ On renvoie le JSON

**Méthodo ds le update**
-> attention sur un patch,il faut pas de required sur les propriétés
-> on fait les validations que si on a les champs remplis
-> sin on trouve pas l'item-> renvoyer une erreur en JSON (sinon on peut aussi utilsier findOrFail())'
-> utiliser fillable() pour remplir ce qu'on veut comme propriété, ça v anous éviter de devoir faire les isset et ça met les propriétés nécessaires seulement'
**laravel ide helper**
on peut installer cette dependance avec comoser require --dev barry larave ide helper dsle répertoire backend
ça va préciser les noms des colonnes des tables pour qu'on puisse éviter d'aller sur adminer vérifier les noms'


##TOPO SUR LES APIS ET LEUR UTILITE
JS =>inerface => côté client
API=> opnt
PHP=> récupération des données => côté back
Avant on va du front au back, c tout
Avec les API, c'est encore plus dynamique, on a qqch de plus lourd avec le front par exp en React,mais ç an'accède pas aux données...LendpointAPI va connecter ce front au back.'

##==========EPISODE 2===================================================

Les frameworks evoluent vite
LARAVEL vient avec bcp de choses
Symfony est plus modulable

#Normes des models ds Laravel
Tables au pluriel
Id
created at et updated at par défaut avec type timestamp


#Conventions des API REST
nom de la table au pluriel ds la route


#En ligne de commande
php artisan make:model Task
php artisan make:controller Task


##Exemple de function avec syntaxe laravel
public function list()
    {
        //  appeller le model
        $tasks = Task::all();
        // retourner du json
        return response()->json($tasks);
    }
Ben conseille de personnaliser le response pour voir si ça a bien marché
    return response()->json([
            "results" => count($tasks),
            "data" => $tasks
        ]);

#SEEDER 
un script qui te remplit les tables

#Gestionde la 404
->soit on utilise la fct du Model **findOrFail()** pour renvoyer une erreur=exception,
si l'élément n'existe pas => envoie une 404'
-> soit on on pt renvoyer un JSON avec un message et on stipule bien la requete 404
if (!$task) {
            return response()->json([
              "error" => "Task not found"
        ], 404);
         }
L'erreur'404 va de toute manière renvoyer une erreur

#INSOMNIA
utilitaire pour faire des requetes http
on crée son projet et on crée notre collection de requêtes 

#REQUETES HTTP 
Rappel **Active Record** : le Model se gère lui-même en qque sorte, il se crée, se sauve se modifie lui-même et aussi la BDD
**VS Data-mapper** le Model peut faire tout ça mais uniqmt ds le code, il a besoin d'un intermédiaire le **data-mapper** qui va modifier la BDD'
**GET**(read) **POST**(create) **PATCH**(remplace un bout=> update) **DELETE**(remove)**PUT**(rempplace en totalité) 
CREATE
On fait une route en POSt , on fait une fct create(),  ça ns revnverra un **201**, ça dt rvoyer un lien vers la nvelle ressource crée normalement ms là on le fait pas, on met bien 201 ds la route
Qd on envoie un formulaire, les données st en général ds le corps de la requete. 
Avec les API c'est transformé en JSON' , on est obligé de fr ça comme bya séparation entre front et back
En JSONœ, il y a un **header application JSON** ds Insomnia, sinon il ft bien le stipuler
Comment joindre la requete à la fonction : **Request $request** va récupérer la requête 
C'est le container services de Laravel, qui contient plein de fctnalités,qui permet de faire ça'
Il faut bien utiliser les memes champs , il faut une doc , j'ai pas tout compris
'
Pour valider les donner ( tester si c vide, si il y ale nb de cafactères etc..) , utiliser **$validator** et sa syntaxe ()le **facade** hein)
ça va renvoyer un tableau avec les différentes erreurs et les champs concernés


public function create(Request $request)
    {

        // On utilise le validator pour venir vérifier la conformité des champs dans la requête
        $validator = Validator::make($request->all(), [
            'title' => 'required',
        ]);
        // si un champ ou plusieurs champs "foirent" on renvoi un json avec un code 422
        if ($validator->fails()) {
            return response()->json([
                // errors 
                "error" => $validator->errors()
            ], 422);
        }
        // création d'un nouveau film
        $movie = new Movie();
        // on set le titre avec le champs dans la requête
        $movie->title = $request->title;
        // on sauvegarde
        $movie->save();
        // on retourne les films au format JSON car on fait une API
        // pas obligatoire de retourner explicitement un json, laravel le fait tout seul mais j'aime bien sémantiquement le mettre
        return response()->json([
            "data" => $movie
        ], 201);
    }
}

Pour **delete** c la meme : on crée la route, la methode du controller delete, on renvoie le code http **200**=> tout s'est benn passé ou **204**=> ca s'est bien passé et c'est vide '
On rajoute la gestion de la 404

if (!$movie) {
            return response()->json([
                "error" => "movie not found"
            ], 404);
        }

Pour **patch**
on va copier le create() et on va l'adapter en update() , on vérie tt d'ab de vérifier la route'

->différence entre put() et patch() : en put(), on vire tout meme si on change une propriété ; en patch(), on modifie que ce qui est changé
-> avec patch(), on va modifier que les proppriétés voulues, donc on est pas obligés de remplir toutes les propriétés.
Ds Laravel, on est pas obligés de fr toutes les vérifs, il y a la fct **Mass Assignment**, ça rendra le patch modulable selon la présence ou non des champs ave cla méthode fill() qui va remplir les champs
On va utiliser $request->all()
 // laravel va changer les champs de movie qui sont présent dans la requete
        $movie->fill([$request->all()]);

POur faire les requetes aller dans doc test  installer rest client /insomnia , ça lit les fichiers.http
insomonia debug mieux

##===========================================================EPISODE 1==========================================

##LARAVEL
résumé des commandes du challenge du jour1
composer create-project laravel/laravel backend
cd backend
php artisan key:generate
cd backend
php artisan serve

extension JSONViewer
##INTRO API

=> le but grosso modo c'est de recharger direct ??
Jusqu'à présent ,'le front est séparé du back, c'est PHP qui met en forme , le back s'occupe des 2'
Le front se remet à jour sans passer par une route pour recharger ??
Jus'quà présent on passait par PHP qui s'occupait de renvoyer le html et css'

**API**
Plusieurs définitions
-> 1ère def l'API est une interface de programmation d'applications/applicative =>
ens de classes méthodes constantes /une bibli logicielle ' Tous les langages ont leur API
-->**2ème déf, spécifique au Web, c'est un service Web**'plusieurs requêtes prédéfinies côté serveur qui vont interagir avec des données, ça permet la communicatiàon entre les applications, bça permet l'échange d'infos entre des systèmes '
Là avec l'**API on va retourner la donnée**' pas de l'html', avec du **JSON**
Le JSON est universel.
La vue sera transférée côté client, pas côté back ??
**La vue est déplacée coté client**
**le JSON véhicule la data
Exemples d'API : maps de google'
**Avant le cuinier était en cuisine , dans le back, maintenant il est côté client 

**N'importe quelle clientpouvant faire des requettes http pourra appeler une API**'

**On va commencer par s'intéresser à la partie back**

##LARAVEL**=======

Pour utiliser Laravel, on va utiliser **composer** avec sa 3eme possibilite create project
Aller sur packagist pour installer Laravel **create projectlaravel/laravel backend=nom-du-projdt** 
ça va installer laravel 10.3 
Laravel est dans vendor, il faut bien veiller à pas l'enovyer en ligne'
Dans le projet de base : 
**app** avec tout le dossier PHP
http avec les controllers
models qui ctient les models
la config ds config
ds database on pt config aussi
**public** avec l'index.php'
ressources : ctient des vues mas avec les API , pas besoin
routes de différentes types, web, aAPI
storage : dossier de stockage de Laravel avec messages de log, de cache, erreurs d'critue ds ce dossier (il faudra changer les persmissions)'
tests on verra ça en spé
**.env**confif de la db +
variable d'environnement spécifiques à la machine'
on envoie pas le .env sur github, dc .env.example
**artisan** ligne de commande qui permedt de générer du code
=> en saison 7 on utilisera **app Public routes .env**

s'il y a une erreur , il faut changer les droites pour écrire les erreurs sudo chmod -R 777'
**sur le dossier storage sudo chmod -R 777 backend/storage**

##ROUTES**
=>les routes dans **routes/ web.php** st des routes web http classiques => on aura une vue directemt retouréne par la fct
celle ds l'exple est ds views /welcome.blade.php ' **blade est un langage de template** de laravel
**view est une fct globale** (un peu comme show() avant)
Dans le return, on pourrait mettre directement du html entre ''
Le routeur de laravel dispatche en meme temps quoi, pas besoin de controller ??
=>
 

##BASES DE DONNES
#Création de la BD
Choisir **utf8mb4_general_ci**
sur la base > Privilèges > Créer un utilisateur
utf8mb4_general_ci
sur la base > Privilèges > Créer un utilisateur
user : moviedb
pwd : moviedb
Privilèges : `moviedb`.*
All privileges
Enregistrer
Se reconnecter avec les id pwd et le nom de la bd

##CONFIG
On configure le .env
localhost equivaut à 127.0.0.1
php -m => quelsmodules st chargés ?
En quelques sorte l'ip c'est l'adresse et les ports ce st les apparts'
PHP s'adresse aux différents serveurs logiciels '
Apache écoute sur le port 80 , port par défaut pour l http
le port mysql est par défaut 3306

##Lancer serveur de Laravel
**php artisan serve**dans le dossier avec le projet Laraval (artisan c la ligne de commande Laravel en qque sorte)
**NB JC a eu une erreur parce qui'l a lancé Apache puis ce serveur'***
PAsser par http://127.0.0.1:8000/ / ou supprimer ts les cookies via l'inspecteur / soit refaire chmod -R ds storage'

##DIfférences entre routes/web et routes/API
Limitation de 60 requêtes sur ces routes
attention si on est déclare la route dans routes/api.php la route sera /api/movies
..a completer ?

On va créer route ctroler model
=> on va utiliser la syntaxe de Laravel
Route::get (méthode http)
Endpoint/URL api/movies
Controller
Method (l'action duu controllerd)')
le tableau associe le controller et la méthod


##Exemple COntroller et Model
Illum:inate/controller c'est le controller de Laravel'
en fait on a le corecontroller de laravel, on crée un controller qui va héroer de ce controller et tous nos controllers vt hériter de ce controller
1/coreControler de laravle avec fctnalités de base
2/-> notre controller qui exetnds le 1/  avec des fctnalités plus spécifiqs
3/->nos controllers qui extends le 2/ avec ttes les fctnalités du 1 et 2/
NB les use= traits ds le controller st pas les memes use

on va crée un controller ds App/http/controllers qui va hériter du controller du meme repertoir dc pas besoinde mettre le chemin
on va ds app models créer le fichier monMdel extends Model et ça va tout faire automatiquemt car

**eloquent** est concu en active record
// Le CoreModel d'Eloquent (ORM fourni par Laravel)
use Illuminate\Database\Eloquent\Model;
=> ça nous a récupéré automatiqmt **en JSON** grâce au Model de base et Eloquent (parce qu'ojn est sur la route API)')
ça équivt à return response()->json($movies); c'estr pace qu'on est ds le type de route API'
Il faut sivre une convention nom de la table=nom de la classe en snakeCase et au pluriel
Sinon il faut la déclarer avec protected 
On a la clé primaire quiest id mais sinon on peut la créer
ç ans a rencvoyé une c**collection** quiest dc un tableau d'objets du style movies'et dedans il y aun tableau **attributes** qui stocke les infos du Model
**/api/Movies est le endpoint** l'API est l'interface de connexion'qui va se connecter à cet endpoint

##Deuxième exemple avec une route param en quelque sorte
on crée la route
on rajoute la méthode show ds le Moviecontroller
mettre une 404 si movie est pas trouvé

##DOCS
A la racine du dossier, on crée un dossier docs/API
installer l'extension rest/client'
pour exécuter des requetes deouis vscode, (on pt faire des requetes get mais POST et DELETE non qd on est ds le navigateur)
On peut tester sans navigateur GET http://127.0.0.1:8000/api/movies HTTP/1.1 ds vscode
On appuie sur sendRequest et voilà
virer les dumps sinon onvoit rien lol


==challenge
coner le projet todolist et ouvrir l'enonce'



public timestaamp ==false ?? g pas suivi


































##########################################################################################################################################################
##
################ SAISON 6 - BACKOFFICE ########################### 
##########################################################################################################################################################

**AUTHENTIFICATION et authorisations FROM CSCRATCH**
=> copier l'appUserCOntroler'
=>Dans le construcuteur du coreControler 
1/tableau des ACL et vérification avecla méthode checkauthorization
2/ tableau des routes ayant besoin de token CSRF et verification
3/ dans index.php rajouter les routes de login
NB ne pas oublier de mettre session start() dans l'index.php pour utiliser les sessions'
4/Copier le securityController (pour Recettes, je l'ai intégré au main')
5/ rajouter les token csrf dans les form en post et routes en get
6/ lors de l'insertion d'un user ds la bdd, on dt haser son mdp dans la méthode addPOst UserController'



================PETITRESUME AUTHENTIFICATION AUTORISATION=========================================
**Authentification**
1/ on crée le Model User et le UserController ds laquelle il y aura la méthode findByLogin/Email
2/ on crée un security controller qui va contenir les méthodes login et logout
3/ login va vérifier si User::findByLogin renvoie un objet 
4/ si oui,bon va pouvoir comparer le MDP tapé hashé avec le hash de la bdd pour vérifier le MDP et connecter l'utilisateur stocker l id et l'usrObject dans $_session.
5/ sinon erreur 403, redirection vers le formulaire de connexion

**Authorizations**
1/ dans le model User, il y a la propriété rôle.
2/ ds le core Controller, tableau ACL associe routename avec rôles
3/ dans le core Controller, on cree check authorization().
Cette méthode vérifier que le bon de la route courante , récupéree avec $match, correspond ou pas à une route du tableau.
Si non => route libre
Si oui, on vérifie que le rôle de l user connecté est dans le tableau ACL de la route.

**CSRF token**
1/ a chaque connexion, on crée un token CSRF qu'on enregistre dans $_sessiongrace a la méthode genereatecrsf ds le core Controller qui sera appelée dans les form post et les route en get.
2/ on réutilisé ce token ds formulaires en créant un champ caché ou en les rajoutant en get
=================================================================
**: ?string**=> string ou null
Pour spécifier le type de la variable d'une fonction getter setter par exp'


#**SERVEUR WEB**
Il permet de **servir des fichiers statiques** (html/css/js) exécuter des fichiers PHP, ,réécrire les url, avec htaccess pour Apache,'
Le client fait une requete vers le serveur. Le serveur exécute le php si nécessaire, va requeter la bdd, va voir les authentifications. PHP va générer l'html'
Les **en tetes contiennt des données associéees aux requetes et reponses http.
Elles contiennt la méthode(GET ou POST) , le path(chemin), la version du protocole http, d'autres infos (user agent(navigateru, OS...) cookies)'
Les langages peuvent changer (Js php ruby Python java c# etc...) et les configs des serveurs du coup
Apache, nginx,nodejs
Le serveur web(l'ordi)') peut héberger plusieurs sites. Il faut configurer le serveur de manièer à **associer un nomde domaine avec les noms de dossiers**. On va donc configuerer des **virtual host**. => saison 8
Pour l''instant on a le localhost qui pointe vers /var/www/html).
Attention la syntaxe est différente sur apache que sur nginx
Il faudra avoir acheté le nom de domaine.
Quand on doit écouter le réseau, on le fait sur un port spécifique : de base c le port 80
443 pour HTTPS 3306 pour MYSQL 21 pour FTP 22 pour SSH, on vait choisi 8080 pour localhost

#ARCHITECTURE DE SERVEURS WEB
Quand un serveur ne suffit pas.
On peut mettre la bd sur un serveur à part
Si on a plusieurs serveurs, on va en rajoute un , c'est un **load balancer**=équilibreur de charge qui va répartir la charge sur plusierus serveurs', la BDD reste commune
Il faudra plusieurs serveurs si le site subit **bcp de requetes**.
Le load balancer va permettre de gérer le **failover**, càdire, si y a un server qui tombe en panne, y a un relai.
Donc comme ça le site reste disponible. On évite les **SPOF=SinglePointOfFailure**
C'est plus du boulot d'admin system'

##PERFORMANCES du site ##
sur **GTMETRIX** pour analyser les perfs du site web=> besoin d'un compte'
**Lighthouse** ds l'inspecteur'
On peut utiiliser des **CDN** pour stocker les cosntenus statiques
(exp Netflix)
**Attaque **DoS Deny Of Service**"" on attaque le serveur avec bcp de requetes ce qui va freezer le serveur
**DDOS Déni de Services Distribué** un ensemble de machines va attaquer un serveur


##SECURITE
Https : va permettre que les données qui transitent soit chiffréées
avec un analyseur de reseau de paquets comme Wireshark on peut analyser les data
cf kali pour avoir ce qui'l faut :) 'dit sebastien 
en https : on verra juste application data, tout cera chiffré
=> saison 8
certains algo st reversibles comme md5 mais d'autres non'
dans le hash ,i l ya la recette qui a été utilisée pour le hasher

**Hydra**
va utiliser un dico de mdp (rockyou.txt) pour essayer de trouver le mdp en **force brute**

hydra -l nomdeluser -P nomdudico localhost -machin et remplir les chcamps 

**haveibeenpwned** est ce qu

**bitwarden** gestionnaire de mdp

**XSS** utiliser un champ pour injecter du JS Cross Site Scripting
On pourrait récuperer le cookie de session et se connecter avec les id de lapersonne piratée
session hijacking
Pour s'en protéger, on va utiliser 
**html entities** => ts les caracteres ayant des equivalences en html vt etre cvertis en html'
**html special chars**=> cvertit que les caracteres spéciaux
ça va neutraliser le JS donc ça sera plus possible de lancer du JS sur le navigateur 

**Dans FILTER_INPUT**
On a des filtres de nettoyage dont **sanitize special chars**" **sanitize full specialchars**" qui font la meme


**SAISON 7**
AJAX API JS 
LARAVEL
Laravel est plus rapide pour faire des trucs, plus facile à comprendre
Laravel est une sorte de morceau de symfony, il utilise des composants de symfony

Le gros morceau sera docker

##C quoi un FRAMEWORK
**squelette** 
**boite a outils**
**Doctrine**=>ORM



================================================================================================
##RESUME
Utilisation d'alto distpatcher
Requetes préparées contre les injections SQL
Sessions'
Autorisations- permissions
Authentification permissions acl csrf xxs


#E07
ATTENTION VAOCABULAIRE
MCD ENTITE ASSOCIATION
MLD TABLES
**Problèmes des tags=>many to many**
**DU MCD AU MLD**
**1/ Dans le cas one to many la clé du père va dans le fils** , le pere a la plus grosse cardinalité
l'id du père sera une clé étrangère pour la table du fils'
**2/Du many to many : la relation devient une table** qui ctiendra deux clé étrangères 
On appelle ça une **table pivot/table de liaison/table de jointure**

Pour **afficher les tags**, on va faire le meme cheminement,
puis on récupère les tags ds le productController pour les afficher ds la page des produits pour pouvoir les choisir via des checlbox
Ds l'id du tag, on va concaténer le getId ainsi que dans le label




On récupère un tableau comme name=""emplacement[]"" en filter_input avec un filtre array required par exemple sino  utiliser $_POST
- Pour respecter l'active record, utiliser les memes méthodes , pas la peinde de recréer une méthode pour home order, on utilsie update 
- pour mettre à zéro, on sélectionne tout et on met tout à zéro
-Pour vérifier si on a des doublons ds un tableau, on pt utiliser array_unique qui va enlever les doublons et vérifier si le tableau d'origine et array_nique renvoie la meme taille avec count()'
- Si on a un formulaire avec plusieurs liens, on met un token commun pmour tout le formulaire c'est à dire le meme token pour chaque lien'



**RECAP FAILLES**
**Injection sql** : ds une requete non préparée qui contient des concaténations de variables, le hacker pt injecter une requete sql via l'input' 
=> on utilise donc des **requetes préparées** pour s'en protéger
**xss**
**csrf**


#E06 



##Correction authorization
-->on pt fusionner lastname et firstname en les mettant dans la meme colonne <td> en html 
--> **conditionner l'affichage du lien en fct du role**qu'il a, une fois que les vérifs ont été faites
-> sur l'**update ne pas préremplir le mdp** en général'
-> verifier que l'user ajouté n'est pas déjà en bdd (cf **sql option unique** sur la proporiété)' donc que l'email n'est pas déjà ds la bdd'
utiliser **findByEmail pour vérifier si ça renvoie false** c'est que l'email a pas été utilisé'

-> **gérer les autorisations** :  notre méthode checkAuthorizations doit être centralisée mieux que ça car sinon pour tt changement ds les roles ,il faudra modifier ts les fichiers
On va dc créer une **ACL = Access Control List** = liste de contrôle d'accès'=> ça va gérer les accès des gens en fonction de leurs rôles
Pour cela on va le faire **dans le constructeur du CoreCOntroller**, on va fr un **tablau asso avec les routes et les roles autorisés**, on n'y met pas les pages non restreintes,
On va vérifier **pour chq page si elle est ds le tableau d'ACL**'
on **récupère le nom de la route ds le match qu'on va mettre en argument du constructeur** et on va aussi modifier le dispatcher
on va rechercher la clé ds le tabl avec **array_key_exist**
**ACL (Access Control List) = C’est un tableau qui va lister les droits d’accès (les rôles autorisés) pour chaque route.**
**Le fait de lister les droits d'accès dans le constructeur de CoreController nous évite de le faire individuellement dans chaque méthode.**

Exemple 
public function __construct($router, $match)
    {
        $this->router = $router;

        // notre tableau d'ACL (Access Control List - qui a le droit de faire quoi sur le site)
        // toutes les routes présentes dans ce tableau ont un accès restreint.
        $acl = [
            //'login' => page accessible à tout le monde, donc on ne la met pas dans le tableau !
            'main-home' => ['admin', 'catalog-manager'],
            'category-list' => ['admin', 'catalog-manager'],
            // ...
            'appuser-list' => ['admin'],
            'appuser-add' => ['admin']
            // ...
        ];

        // on peut récupérer le nom de la route actuelle grâce à $match (envoyé depuis index.php)
        $routeName = $match['name'];

        // pour chaque page de notre site, on va forcément passer ici
        // donc pour chaque page :
        // on vérifie est-ce que la page en question est restreinte (c'est à dire présente dans le tableau d'acl)
        if(array_key_exists($routeName, $acl)) {
            // la route est restreinte, on vérifie si l'utilisateur a le rôle approprié 
            // avec notre méthode checkAuthorization()
            $this->checkAuthorization($acl[$routeName]);
        }
            
        // la route n'est pas restreinte, on ne fait rien de spécial, la page est donc accessible !


##pourquoi iil faut sécuriser la route en post aussi
bien qu'on ne puisse pas y accéder si on n'est pas connecté' ?'
le  hacker peut créer un fichier html avec un form qu'il va envoyer sur notre site à l'adress/user/add' pour créer un user ou utiliser curl pour envoyer une requete http
broken access control 
**cf le top 10Owasp**-> broken access control 


**CSRF (Cross Site Request Forgery)**
si le hacker connait un pue la structure du site, il peut créer n form
faille c-sfr se prononce sea surf
=>attaque => on était sur le site random et on clique sur un boutone t ça a crée un user ??
Qd on cliq sur lien ds mail->requete get->recup du html verolé exécuté sur le client, l'user clique et envoie la requete ,si il est connecté,il envoie soncookie de session'
et dc il envoie sa requete
**!=hameconnage**=> site similaire pour recuperer les donnees de l'user'
**fishing**
Cmt se protéger de ses requetes qui semblent légitimes ?=> il ft s'assuerer que le formulaire provient bien de notre site '
=> qd l user va rplir le formulaire,on va créer un token via une méth du coreController puis renseigner un **token csrf** dans le formulaire et on va le vérifier
**le token va ê stocké en session** pour le comparer
on va utilisr randomn bytes avec 32o aléatoire qu'on cvertit en hex'
$token = bin2hex(random_bytes(32));
on rajoute le token dans un **value="<?= $this->generateCSRFToken() ?>"** hidden
 ds l'html du form
**on va ctraliser nos comparaisons des token ds le Corectroller'
on stocked ds un tabl les pages necessitant untoken csrf
si la route est ds le tabl on compare le token stocké ds le form et celui de la session
**pour protéger ses routes en get, on va utiliser un token qu'on va rajouter en get ds le lien 
puis on le compare grace a la meth ds le corecontroller
====================================================================
========================================================================================
==============================================================================
====================
A mediter 

filter çinput fait comme isset
$email = filter_input(INPUT_POST, 'email');
        $password = filter_input(INPUT_POST, 'password');

        // on peut vérifier si le champ est null ou pas => cf si au desssus ça a renvoyé null, le bidouilleur de l'url '
        if(is_null($email) || is_null($password)) {
            dd("Erreur !");
        }
=======================

#E05

**LE HASHAGE**
On part d'un texte en clair. l'**algorithme de hashage** va le transformer en texte hashé' on ne pt pas revenir en arrière et retrouve le texte de base. C'est **irréversible**'
=>si qqun a la bdd, il pt pas récupérer les mdp
Le même texte donne tjrs le même hash, le même hash correspond qu'à un texte'
Du coup pour vérifier les mots de passe, on va **comparer les hash** et pas les mdp, on pourra comparer les mdp sans meme en avoir connaissance
Mais attention à certains algo de hashage qui sont finalement réversibles malgré tout comme le md5 car il est tellement rapide qu'on peut faire du **brut force** et tester toutes les combinaisons possibles et donc le casser'
Donc **ne pas utiliser md5 sha-1** car trop rapides donc peut se casser
Utiliser bcrypt, argon2, SHA-256, SHA-512

**algo de chiifrement /déchiffrement**
On va utiliser une clé pour chiffrer le texte en plus de l'algo de chiffremebt'
Là le texte chiffré va pouvoir ê déchiffré avec la meme clé, ou une autre .
cf enigma puis alan turing qui a fabriqué le premier ordi pour décrypter

**Le **https** va perm de chiffrer les données envoyées

**paswwword_hash** va perm de créer un hash pour un mdp  avec 2 param **("mdp à hasher",algo à utiliser )** => pour stocker la premiere fois
Exemple : password_hash("rasmuslerdorf", PASSWORD_DEFAULT);
**password_verify** verifier que le mdp crrspd au hash avec 2 param **("mdp ",hash)** et renvoie un bool 
=> on va vérifier que le mdp de l'user crrspd au hash stocké en bdd'
if (password_verify($password, $user->getPassword())) {
echo "Bienvenue " . $user->getFirstname() . ' ' . $user->getLastname() . " !";
exit;       
} 
else {
die("Adresse email ou mot de passe incorrect.");
}


MDP HTML masqué avec **type="password"**
qd il y aun bouton qui permet d'afficher le mdp, c'est en JS'
**input="email"**, ça va marcher avec un @ et un caratactérer derrière

Bootstrap : 
on peut mettre la class "container"
pour le label "form-label" 
pour l'input '"form-control"

**SECURITE**
Attetntion aux messsages d'erreur-> ne pas dire que le mdp ou l'id ne st pas bons' **Mettre un message global**
Les questions secrétes 

**Pour déconnecter l'utilisateur'**
créer une route en GET vers logout
session_destroy(); => radical, va tout effacer, risqué si y a des données qu'on vt garder'
**unset($_SESSION['userId']);**
unset($_SESSION['userObject']);


**la différence entre les sessions et les cookies** : les cookies st manipulables partout, côté client aussi, donc danger
, 

les emails par exemple sont enregistrés ds les param utilsateurs du navigateur, chaque email associé à name=email sera enregistré ds les emails par exemple . A TESTER

**ne valider le formulaire et l'enregistrement en bbdd que si il n'y pas d'erreurs**'

**faire un partial qd du php se répète comme pour le tableau d'erreurs**' avec un include

**SEMANTIQUE DU CHIFFRAGE**
cf **chiffrer.info**
On dit chiffrer pas crypter  
cryptologie =science du secret
cryptographie=> protéger des messages
chiffrementb=> procédé cyptographiq qu permet de apsser du texte clair au doic chiffré=> chiffrrer /déchiffre
Les hashs pvt servir à vérifier la validité des données par exeple qd on télécharge 

**AUTHENTIFICATION ET  AUTORISATIONS / RESTRICTIONS**
=>on va définir des **autorisations** par **rôle** ce qui constituera des **groupes d'utilisateurs**
=> ds le projet, on va créer une méth. ds le coreController checkAuthorization($allowedRoles=[])
pour déterminer si un utilisateur a le bon rôle pour accéder à une page. Rvoir true ou false.
=> on vérifie que 1/ l'utilsateur est connecté et 2/ qu'il a le bon rôle pour la page en cours'
=> sinon on lui demande de reremplir ses ids de connection ou on renverra une page 403 = accees interdit et fin du script avec exit 
 header('HTTP/1.0 404 Not Found');
http_response_code(404);
=> ds chq page, on lance cette méthode avec les bon rôles en params

##################
#E04 challenge

## REQUETE PREPAREE 
SQL PREPARE BIND EXECUTE
Exemple :
$pdo = Database::getPDO();
        $sql = "SELECT * FROM `app_user`WHERE `email`LIKE :email ";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $user =  $stmt->fetchObject('App\Models\AppUser');

##Pour le suppresion
On a juste un bouton donc on peut pas choisir POST, c'est en GET comme c un <a>'
On écrit la route en GET, on crée la méthode ds le controller et on la crée ds le model.

Si on veut rediriger de là où est venu l'utilisateur, on pt utiliser $_SERVER['httpreferer'] qui contient l'url de provenance ']'
**header('Location: ' . $_SERVER["HTTP_REFERER"]);**

##authentification
il faut
-la table users
- lre Model qui respecte l'active record
- le formulaire  de login
' côté php, on va verifier si l'email est déjà utilisé (findByEmaill)
- si oui, vérif du mdp
- stocker que l'utilisateur est connecté':
=> au niv des cookies, c 'est' coté client dc on ptles modifier
l'interet des cookies, c que c partagé sur tout le site'
**grace au **$_SESSION**, on pt stocker les infos du user coté serveur
=> id de session unique
On va demarrer avec **session_start();** puis on va enregistrer une asso clé valeur ou utiliser **unset** pour enlever une valeur
Qd on ferme le navigateur, ça ferme la session
**On peut retirer/supprimer une variable de session en utilisant `unset($_SESSION['cle'])`. Attention, il ne faut pas oublier de mettre la clé, sinon les sessions ne fonctionneront plus**.

Si notre visiteur ne charge plus de pages de notre site, au bout d'un certain temps (le timeout), la session sera automatiquement détruite. On peut aussi le faire manuellement (par exemple, au clic sur un bouton déconnexion) :
**session_destroy();**
php attribue un numero uniq = identifiant de session session php id transmis via un cookie au serveur
PHP utilise un **numéro unique, appelé l'identifiant de session, ou PHPSESSID**. Cet identifiant sera transmis au navigateur du visiteur en utilisant un cookie, que le navigateur renverra à chaque nouvelle requête.

RESUME DE la demarche
créer les deux routes getr et post pour le formulaire
créer les méthodes update et update post dans le controller
vérifier les méthodes du model

**qd on utilise le tpl partagé pour add et update, on utilise un $produit vide** à 

$product = new Product();

        $this->show('product/add', [
            'categories' => $categories,
            'brands' => $brands,
            'types' => $types,
            'product' => $product
        ]);

**import class avec clic droit : extension à chercher ?? permet d'imporiter avec clic droit php namespace resolver**

#EP04

**créer une fct save() qui va, selon la présence d'un id >0 ou pas, utiliser insert() ou update()'
comme ça pas besoin de lancer insert ou update , ça sera fait par save()

##**classe abstraite**
- si on rajoute **abstract** devant une classe **abstract class Model {}**, **on ne pourra pas l'instancier**
Exemple le coreModel ou le coreController, on vt pas pouvoir les instancier dc on les met en abstract
- on ajoute des **méthodes abstraites** (on rajoute abstract à nos méthodes static: ces méthodes nous permettent de définir uniquement la **signature** de la méthode
mais pas l'implémentation de la méthode ({corps de la méthode})'
**Le fait qu'elles soient abstraites ds la mère imposera qu'on devra les définir ds les classes filles** du coreModel'
Expls :
    public abstract function insert();
    public abstract function update();
    public abstract function delete();
    public abstract static function find ;
=> on déclare la signature pour etre forcé de créer les fonctions ds les class filles !


inset update delete sont des fcts liées à l'objet'

**********Màj BDD pour avoir els cheminds des images en ligne************
# Mise à jour de chaque colonne picture dans la table product
UPDATE `product`
SET picture = REPLACE(picture, 'assets/images/', 'https://benoclock.github.io/S06-images/')
;
# Mise à jour de chaque colonne picture dans la table category
UPDATE `category`
SET picture = REPLACE(picture, 'assets/images/', 'https://benoclock.github.io/S06-images/')

********************************
**faire la vérif en PHP et en JSc'est encore mieux,** en html c'est optionnel 
On peut rajouter **novalidate** dans le <form> pour inhiber la vlaidation html

**filter input vérifie si c null ou empty $** alors que $_POST non
**filter_input** va ns perm de filterer les données :
filtres de validation , de nettoyage, autres filtres
=>**filter_validate** mais attention pou l'email c controverssé
**$picture = filter_input(INPUT_POST, 'picture', FILTER_VALIDATE_URL)**;=> si c'est pas valide, ça renverra false'

**mb_strlen**=> compte exactement le nb de lettres(str_len va compter en bytes donc ça va fausser avecles accents aigus)

**die vs exit()**
interrompent le script
die va lui permettre d'afficher l'erreur'


#######################################################

##EP03

ctrl + r pour rechercher ds le terminal

la 404 c parce qu'on a le else du distpatcher, la route n'est pas crée ds altorouter'

**form** action c l'adresse à laquelle on envoie le form'
attention on anticipe l'utilisateur malveullant qui veut traficoter dans l'inspecteuir d'où l'intérêt de véifier la présence de l'attribut name  par exemple'
isset($_POST['name']) équivaut à $filter_input(INPUT_POST,'name')

Pour les form, on vérifie,1./ si le champ est bien rempli 2/ si le chanmp correspond à ceretains critères


**Pour inserer** des entites :
-> créer un nvelle méthode ds le controller
-> créer une nvelle instance 
-> définir les propriétés avec $maPropriété=$instnce->setMaPropriété(nvelle valeur)
-> appeler la méth insert() du Model concerné
-> récupérer l'id après insertion, vérifier que l'id est bien inséré'

**Mais il faut **se protéger des injections SQL** cf exemple de l'apostrophe ça va remplacer la concaténation et l'interpolation des variables'
On va preparer la requete avec **prepare()'** puis on utilise **bindParams()** pour lier les param aux bonnes variables (**un bind par paramètre)**)puis on utilse **execute()**
**execute renvoie true ou false**
Exemple : attention il ne faut pas d'apostrophe autour des noms de variables avec les requtes préparées'

$sql = "INSERT INTO `category` (`name`, `subtitle`, `picture`)
                VALUES (:name, :subtitle, :picture);";
$stmt = $pdo->prepare($sql);
$stmt->**bindParam**('**:name**', $this->name);
$stmt->bindParam(':subtitle', $this->subtitle);
$stmt->bindParam(':picture', $this->picture);
$success = $stmt->execute();


**il y aussi kes injections XSS**=> du JS
et là on peut accéder aux cookies notamment donc pb de sécu ++

**header** permet de modifier les entetes http.
On s'en sert pour rediriger' mettre **exit** à la fin
**bien enlever les dump avant le header()

**pour rendre $router accessible partout**, on va déclarer lapropriété protected $router dans le coreController, on peut soit utiliser global dans le constructeur soit onutilisi $router comme paramètre du construcute
avec AltoDistpactcher , on pt envoyer des param aux controllers,
$dispatcher->setControllersArguments($router);


chmod +x ./import-external-repo.sh
./import-external-repo.sh git@github.com:O-clock-Jelly/S06-oShop-bdelphin.git e03-teacher e03-form-ajout

#EP02

**Si il n'y a pas de base URI, notamment qd y a pas d htaccess comme là qd on utilise le server php, il faut **qd meme definir un baseURI**'
/** pour faire des **DOCBLOCK** en allant à la ligne pour écrire de la doc
=>on va essayer de bien organiser en créant des controllers et des vues pour chq utilité et donc créer des dossiers pour chq vue de chq controller
//on va lettre des chps textes pour les clés étrangères en attendant
**radiobutton vs checkbox*** radiobutton on encoche qu'un checkbox_>plusieurs '
****click droit =>import class** pour rajouter des use de class => trouver l'**extension PHP namesapce resolver**'
https://marketplace.visualstudio.com/items?itemName=MehediDracula.php-namespace-resolver
**on met tout le ocntenu du viewData direct en param2 de show()

**static**
propriété ou **méthode spécifiq /liée à la class, pas à l'objet' **public static function findAll()**
on aura plus besoin d'instancier un objet, on l'appellera avec **category::findall()**
si la méthode ne ctinet pas de $this, on pt la déclarer en static'
on pt pas utilier $this ds une mléth static mais **self::** du coup
=> faudra passer les méthodes find et findAll en static

créer une nvelle page pour l'update'

**avec altodistpache, le $params n'est plus utilisé, 'on utilise juste l'id**' , on pourrait avoir pkusieurs param ds l'url meme'
pour préremplir les valeurs des pages update des categories et product, remplir les value ="""
 notre branche e02-teacher
lancer à la racine du dépôt
commmit d'ab les modifs avant et passer sur master au préalable'


chmod +x ./import-external-repo.sh
./import-external-repo.sh git@github.com:O-clock-Jelly/S06-oshop-bdelphin.git e02-teacher e02-inte-dynamisation


**pour chaque formulaire deux routes** :
1/pour afficher en get et l'aut pour la traiter en post'

$router->map(
    'POST',
    '/product/add',
    [
        'method' => 'addPost',
        'controller' => '\App\Controllers\ProductController'
    ],
    'product-addpost'
);BIEN VERIFIER DANS L INSPECTEUR SI C BIEN PASSE !

**tableau des routes à récupérer** attention à la méthode 


**$name = filter_input(INPUT_GET, 'name');** la méthode filter_imput()permet de récupérer facilement les infos du $_GET/$_POST



#FRONTOFFICE VS BACKOFFICE
Front Office => partie accessible aux visitaeurs
Back Office=> partie concernant l'administration du site; c complètement un "deuxième", ça peut auss iêtre sur le même site,
il va falloir s'y conncecter '= c l'administration du site'
Il y a donc un front et un backend por le backOffice

CRUD => actions qu'on fait communément sur les tables'

apres le daily planning o, faig le **poker planning**, on quantifie l'effort avec des cartes'

**CODE REVIEW DU NOUVEAU OSHOP
=> las**
On fait une pull request poumr demander à merger la branche sur la branche master sur le site et on choisit la branch qu'on veut merger et sur quoi'
On peut parcourir les fichiers et laisser des commentaires , et démarrer une review, on coche les fichiers (viewed) au fur et à mesure
=> **namespace** est une sorte de dossier virtuel . avec utilisation de l'autoload, PHP va trouver directement les classes, qd c ds le meme dossier '
-> qd deux classes sst ds le meme dossier, pas besoin du use. L'autoloader charge automatiquemt les classes qui st ds App/.'
=> **global** est une instruction va nous perm d'accéder à une variable déclarée à l'extér de la fct'
=> **extract()** fonction qui permet d'extraire le contenu d'un tableau' , on fait extract($tableau , on naura une variable par index du tableau càdire $key sera égale à $tableau['key']
=> **header()**, fonction native  elle **modifie les en-têtes** de la réponse http envoyée par le server. on s'en sert pour'**envoyer le code http** 404, ms aussi **rediriger** ,
Lorsqu'on fait une requete http ou qu'on reçoit une réponse', elles ont des en têtes, '
=> on range les **views ds un ss dossier** qui correspond à son Controller
=>**FQCN** Full Qualified Class Name self::class va ns perm de récupérer le **nom complet** de la classe namespace+nom de la classe =FQCN
=>**exec()** c comme query(), méth. qui permet de lancer une requête SQL, on utilise **query si la requête est SELECT**, **exec() qd c d'autres requêtes SQL (INSERT,DELETE, UPDATE)**
exec **va renvoyer le nb de lignes** insérées ds la BDD ! Si exec() retourne false, on ne verra rien s'afficher dans echo'
=> **lastInsertId()** est une méth.de PDO qui permet de r**écupérer le dernier ID auto incrémenté** que mysql a généré **donc l'id de la classe qui vient d'ê ajoutée** si on vient de la créer'
**QUAND ON FAIT NOTRE INSERTION ON VERIFIE QUE TOUT A BIEN FONCTIONNER AINSI**
=> **interpolation de variables {$mavariable}**
=> **now()** récupère la date du jour
=> **UPDATE la table SET les propriétés WHERE la condition** ne surtout pas oublier le WHERE pour ne pas changer toute la BDD !! => sauvegardedr la BDD avant de faire ce genre de manip
=> config.ini dans le répertoire de la database.php ms on verra une autre manière en saisonn 6
=> **database.php** suit **le singleton** est une class qu'on peut instancier qu'une seule fois
**parse_ini_file** lit un fichier ini
=> oinclude vs require https://stackoverflow.com/questions/2418473/difference-between-require-include-require-once-and-include-once
=> **time()** rvoie le nb de sec écoulées depuis 01/01/1970 le **timestamp** , **md5(string) est une fct de hashage** : à partir d'un string, on va calculer un hash md5 qui sera tjrs le meme ! 
=> alto-distpatcher : la lib distpatcher v a remplacer le distpacher de li'ndex en une ligne ' si $match vaut false c que la route n'existe pas' On le recupère sur packagist
=> **.keep** permet de conserver les dossiers meme si ils osnt vides
=> **composer install** va installer les lib et générer autoload
=> on va utiliser le serveur de dévelopopement intégré à PHP. A la racine du dépôt **php -S 0.0.0.0:8080 -t public** 
attention comme le terminal va etre bloqué, faire ctrl c pour en sortir
On va donc cliquer sur le bouton + en haut à D du terminal vscode pour ouvrir un aut term
sebastien adam propose &  à tester
aller sur http://localhost:8080/
ça permet de voir ds le teminal




============q
# PETIT POINT SUR LE SEO

=====================================================================

SEARCH ENGINE OPTIMIZATION

référencement naturel

robot qui parcout les sites et analyse les sites html (css js) ??
il parcout les balises ayant de la sémantique pas structurel
webmarketting=>audit permanenet poue ê meiileur que les aut.

leviers on-site => ds le code(url, description,contenu...) trav vdu dev
off-site : liens,partenariat, pub(trav du webmarkeetteur)

back link lien vers son site

commencer par la qualité du contenu et l'accessibilité'
mettre les motsclés dans des h1
avoir des sites de qualité qui viennent vers notre site

métadonnées : <head> le title est important
meta name='d'escription' content= hgffhf<70caracteres
le title va se retrouver ds le titre ds le moteur de recherche

voir les préconisations de google search central
vérifier si les aut moteurs de recherche utilisent le meme syteme

Statégies
->se placer sur des expressions
--> plus on a de contenus, mx c'est
--> longue traine -->bcp de mots dc peu de concurrence   vs courte traine peu de mots et bcp deconcurrence' apple amazon
--> se fr connaitre -controverse,polémiq,putaclick

respecter la séamantique pour être pondéré
renserigner le alt 
micro forlats = données ds les balises 
attention au contenu caché en css, au contenu généré en js
attention au contenu dupliqué

pages toutes accessibles ?
non : par exple les comptes

google favorise les sites performants et sécurisés (et responsive) https
lighthouse =>analyse perfs intégré ds chrome 
y a des pistes d'amélioration '

attention ce qui est ds le dossier public est référençable !! exp pdf ...

ne pas faire un maillage trop complmiqué

cf slides les liens sont anciens


========================================
**Multicurseur**
clic g a d du $
mtenir alt et maj enfoncées
cliquer g à d des aut $ pour agrandir le curseursur les aut attrib 
puis clic d

Selection en haut puis avant derniere option ;)
###############################################################""""

**try(cond) catch ''exception PDO exception $exception par exp)(callcack)** => pour traiter des exceptions

"###########################################################################################################"



##########################################################################################################################################################
##
################ SAISON 5 - BDD - SQL - MVC - MCD ########################### 
##########################################################################################################################################################
##Mercredi soir challenge en pair et jeudi challenge en pair la journée

NB vscode prend en compte la doc pmour ses verif
notamment return void par exemple


##EPISODE 6

## route->geenrate()
Les routes sont enregistrées par AltoRouter ds des variables
AltoRouter va générer une url direfctement à partir des routes, on pt donc modifier les parttern de match et le nom de la route sera le même et va générer l'url complète'
1er param nom de l aroute 2é/ tabl asso avec clé=id(param de match) par exep et value = valeur d(id de la bdd)

Le constructeur du corecontroller est appelée ds les deux aut controllers filles
à chq fois qu'on fait New => on appelle le constructeur du coreController'
===============
##Récap dans l'ordre de la démarche PSR 4
1/ changer le **composer.json** avec la norme PSR-4 et le namespace du dossier racine
2/ **déclarer les namespaces** ds les fichiers de classes et les use 
3/ vérifier qd on appelle les fichiers que le chemin crrspd au nveau chemin, on pt réécrire tt le chemin avec le namespace ms on utilise **self::class**
4/on fait les use
5/ On enlsève les require sf autoload
6/ On modifie le distpactcher et index.php
7/ On tape ds le terminal composer autoload

**NameSpaces et Autoload  - Notions propores à PHP**
=> ne plus avoir à écrire les require des controller et models
Les namespacces vont permettre de n'importer que les fichiers nécessaires-> amélioration des performancces'
et d'éviter des conflits si les classes / fonctions ont les mêmes noms'
Les require chargent tjrs, use charge que qd PHP le trouve utile
=> les namespaces st des **dossiers virtuels** qui vt aider au classemt des classes :
1/On déclare avec **namespace** le nom du dossier virtuel : exp namespace monDossierVirtuel
avant la déclaration de la classe -> on pt avoir le même nom de classe, elles ne st plus ds le même dossier virtuel
2/ pour utiliser la classe on écrit donc **$maFonction = new monDossierVirtuel\maClasse();** par exple
Mais avec **use monDossierVirtuel\maClasse**
NB on ne peut pas faire use avec le même nom de classe par contre, il faudra stipuer tt le nom du namespace
Par contre on pt utiliser des ali;as avec **as**
Exple : use monDossierVirtuel\maClasse as maClasse1 ; use monAutDossierVirtuel\maClasse as maClasse2 ;
**PSR PHP Standard Recommandations n°4**
=> **autoloading standards**
**TOUTES les classes dvt ê déclarées ds des namespaces**
On va choisir un **namespace racine** qui va crrspdre à app/ par exple puis on **complète avec la localisation** du fichier
Par exemple namespace Oshop\Controllers tout en haut du fichier 
namespace Oshop\Models  On utilise les use
**NB si la classe est native ( exp PDO) il faut la déclarer avec use PDO ; quand même**
**composer.JSON** il faut éditer ce fichier, on précise le namespace racine et sa correspondance 
exemple : "autoload": {
		"psr-4": {
			"Oshop\\": "app/"
		}
	    }
ATTENTION 0 l'orthographe des namespaces !!w'
**Dernière étape : indiquer à PHP d'enregistrer un catalogue de classes' **composer dump-autoload** dans le terminal
pour màj le catalogue des classes qd on modifie un namespace, qu'on rajoute une classe'
ATTENTION il faut aussi modifier d index.php , utiliser le namespace pour les controller et modifier le dispatcher avec le chemin du namespace on fait
$NAMESPACE_CONTROLLERS = 'Oshop\Controllers\\';
ATTENTION les fetchAll vt se référer au namespace et non plus au nom de la classe-> à modifier aussi !! :()
A lieu de réécrire tt les nom = **self::class** FQCN = Full Qualified Class Name 

ok si on ne déclare pas le namespace, par défaut c celui de la classe courante 
=============================================**============================================================
##EPISODE 5 **Requetes SQL** **Héritage**

#Héritage**
Factoriser du code commun à plusrs classes
pour éviter d'avpor à modifier plusrs fois'
**Classe mère** avec attributs et méthodes communs
**Classe fille** qui hérite de la classe mère et ctient juste les attributs et méthodes spécifiqs
**extends** signifiera "étend la classe = hérite de"
un parent pt avoirluqrs enfants
un enfant peut etre parent
mais **un seul parent par enfant** en PHP=> monopaerntale lol
ms si on met private les propriétés seront pas accressibles d'en dehors'
il ft dc utilser **protected**=> propriété naccesib pour la famille

1. On va créer une class abstraite pour ctenir les attrib communs en protected
2. Ici on l'apl ' CoreModel"" et à Product on rajoute "extends CoreModel"
svt qd  on refactorise,on change la visibilité à ce moment là
on peut **surcharger l'enfant** ->écraser une propriété du parent qd on la déclare ds la class fille
3. ne pas oublier de require la mere ds la fille


===================================
**Requetes SQL**

**LIMIT=5** pour limiter le nb de résultats à 5
normalement il vt mieux mettre l'ordre ds une aut table et vérifier le nb d'items <5'

Afficher tous les types sauf celui =0 et les classer
A rajouter SELECT types.* FROM types WHERE footer_order>0 ORDER BY footer_order ASC  ; 

**pour les etoiles** fr 2bouvles - getRate()
afficher 1àrate pour étoiles pleines
et 2e boucle pour rate à 5 pour vide

## Récupérer les marques pour la liste du footer
Averifier
SELECT brands.* FROM brands WHERE footer_order>0 ORDER BY footer_order ASC  ; 


## Récupérer les données des produits ET de leur marque
SELECT products.*, brands.* 
FROM products
INNER JOIN brands
ON products.brand_id=brands.id

## Récupérer les infos d'une catégorie en fonction de son id
"SELECT categories.*
FROM categories
WHERE id=$id ; "

## Récupérer la liste des produits qui appartiennent à une catégorie donnée + le nom du type de chaque produit

"SELECT products.name AS product_name ,types.name
FROM products
INNER JOIN types
ON products.type_id = types.id
WHERE category_id=$id"

## Récupérer la liste des produits qui sont fabriqués par une marque donnée pour la marque 1 exp

SELECT products.name AS product_name , brands.name ,
FROM products
INNER JOIN brands
ON products.brand_id = brands.id
WHERE products.brands_id = 1
=======================================

============================================================

##RENTREE RAPPELS TRUCA A RAJOUTER au resume mvc
on importe les models ds les controllerles controllers 
les frontcontroller c htaccess et index.php
htaacces va permettre de réécrire les url

**active record**
1. une table crrspod à une classe
2. une ligne /enregistremt de la table crrspd à une instance
3. On aura les fonctions **find()[byId(),All(),byName()] save() delete()** qui seront ds le Model (CRUD)

**match**
route paramétrique on va récup la variable et la valeur dans $match

======================================================================================

##PHP
/**
voir phpdocblockgenerator

Trucs pour les catégories du site rajouter un home_order comme proporiété pour faire l'ordre des catégories à afficher que l'admimn dt pouvoir changer'
NB les liens sont en français, le code en anglais


==============================================
#MVC Mon résumé d'après ce que j'ai cru comprendre
##On sépare Model View Controller
On commence par créer un répertoire avec les **views** : les tpl spécifiqs, les header et footer.
On crée les **controllers** qui sont des classes avec des méthodes qui vt permettre d'afficher, elles servent d'intermédiaire entre la vue et le modéle notamment. 
On a la méthode show qui est la méthode principale et qui va être réutilisée au sein du controller pour créer les méthodes spécifiqs à chaque page.
La méthode show va accepter un paramètre $viewData =[] qui pourra, si on le veut, contenir des données à afficher, ss forme de tabl. assoicatif c encore mieux.
Dans l'**index.php**, on va créer le dispatcher et le router. C'est le **Frontctroller**'
Le dispatcher va permettre d'exécuter la bonne méthode du bon controller d'après la route.
##On déclare ses **routes** à l'aide de la librairie altorouter, c plus simple que manuellement. C'est le **tableau des routes**= router.
**Altorouter**  :
On définit le **setBasePath** qui va être le morceau commun de l'url => utilisation de la superGlobale **$_SERVER['BASE_URI']**
##Altorouter a la méthode **map()** qui va permettre de créer les routes avec **4 arg** : 
**1/méthode HTTP** 
**2/pattern** de la route dt les résultats vt être attribués à la propriété **['target']**du $match
**3/Ce qui va être mis comme propriété ['target']** du $match et le pattern ds **['params']**
**4/ nom de la route** qu'on va pouvoir utiliser avec la methode generate() d'AltoRouter qui prd 2 arguments 1/le nom de la route ciblée 2/ paramètres : la valeur que prendra l'id par rap à une variable donnée par exp
Exp: // exemple **route paramétrique**
$router->map('GET', '/catalogue/categorie/[i:id]', [
    'controller' => 'CatalogController',
    'method' => 'category'
], 'CatalogController-category');
**Models**
On crée un fichier database.php qui va contenir la configuration du pdo. 
On crée des class pour chaque tableau de la bdd (grosso modo).C le pattern ActiveRecord
On crée des requêtes ds un fichier requetes.md par exemple.
Pour chaque class, on peut créer findAll et findById , méthodes qui vont fetch et renvoyer sous formes de classes ou un seul objet.
      Pour findAll() :  $brandsList = $pdoStatement->fetchAll(PDO::FETCH_CLASS, 'Brand');
	  Pour findById()) : $brand = $pdoStatement->fetchObject('Brand');
Grace à fetchClass, on va récupérer les données sous forme d'objets qui vt servir comme argument de la fonction show(=>$viewData)
On va pouvoir dynamiser l'affichage grâce aux data et être DRY'.
NB on fait les méthodes ds la class dt on tire la table
**Dynamisation des url**
On utilise la méthode generate() d'altorouter mais pour cela il faut y accéder de partout.
On va dc rajouter un argument au constructeur de chq controllers etle spécifier lors de l'exécution de la méthode ds le dispatcher ' 
pour que la méthode show puisse l'utiliser via une variable qui en aura pris la valeur exp $router=$this->router ;
generate() accepte deux args : 1/nom de la route 2/ aut param = valeur de l'id par exp

===============================================================
MVC FROM SCRATCH 

1/créer l'arborescence'

<dossier_projet_MVC>
  |- .gitignore
  |- app/
  |  |- Controllers/
  |  |- Models/
  |  |- Utils/
  |  |  |- Database.php
  |  |- Views/
  |  |- config.ini
  |  |- config.ini.example
  |  |- .htaccess    -> permet de bloquer l'accès au dossier app/
  |- public/
     |- index.php
     |- .htaccess    -> permet la réécriture d'URL 
     \- assets/
        |- css/
        |- img/
        \- js/

2/ On remplit le fichier **config.ini.example** et le fichier **config.ini**,
Et le fichier **Database.php** (pdo) qui est exécuté avec les données de config.ini
3/ On remplit le **.htaccess du dossier public pour y donner l'accés et celui du dossier app** ( pour en bloquer l'accès avec Deny From All )
Attention: il faut le **module Mod_Rewrite** soit activé
Sinon l'installer avec : sudo a2enmod rewrite
Aller dans etc/apache/apache.conf et changer AllowOverRide "None" par "All" sur le dossier /var/www/html
Redémarrer : sudo systemctl restart apache2
4/ **Composer** : verifier qu'il est installé
**installer les dépendances** :  composer require altorouter/altorouter  et composer require symfony/var-dumper
verifier qu'on ne commit pas vendor en modifiant le .gitignore (et vérifier que le fichier app/config.ini y est aussi :) )'
5/**Tableau de routes** => ROUTER et **DISPATCHER**=>correspondance route/ctroller et méthode dans index.php (FRONTCONTROLLER)
Créer la variable $BASE_URL qui contiendra le **setBasePath** d'altorouter et servira aussi comme référence pour les url des assets notamment.
Exemple de routes :
// exemple route page d'accueil
$router->map('GET', '/', [
    'controller' => 'MainController',
    'method' => 'home'
], 'home');

// exemple route paramétrique
$router->map('GET', '/catalogue/categorie/[i:id]', [
    'controller' => 'CatalogController',
    'method' => 'category'
], 'category');
6/ **Controller main à modifier**
7/ **Views à créer**
8/ **Inclure tous les controllers** dans index.php (il faudra aussi inclure les Models une fois créés)
9/ On met les données qu'on veut afficher sous forme de tableau associatif qu'on utilisera en argument des methodes découlant de show().
10/Récupération des **données avec le pattern **Active Record** : 
une table => une classe  , 
une colonne=>une propriété de la classe,
méthodes findAll() et find() pour tous les modèles 
+ méthodes correspondant au CRUD 
Ne pas oublier d'inclure la DatBase dans les Models
11/ **Même processus avec les routes paramètriques et le catalogController**
12/ **Dynamisation en utilisant $viewData ds les template** pour remplacer ce qui est codé en dur
13/ **Dynamiser les liens** de nav avec generate(1/nom de la route, défini avec map en 4e arg() , [paramètres éventuels])
Exp : <?= $router->generate('product', ['id' => $product->getId()]) ?>
14/ **Clé étrangére** : dans le controller, ds la méthode du produit, utiliser les méthodes des Models des marque et categorie pour récuperer avec findById 
ds une variable qu'on va intégrer ds le viewData ss forme de tableau associatif ['produit'=>$product,'category'=>$category]etcc 
15/ **Réparer les assets** avec $_SERVER

============================================

#LE MODELE 
Actions de manip des données : 4 actions => CRUD
Logique métier régles et contraintes de manip des données
**Active Record** tech liée au modèle MVC : 
on fait crrspdre **une class pour une table** et on accèdera aux champs de la table ccernée
une instance de la classe crsspdra à une ligne ds la table
chq class va gérer les actions du CRUD 
On y mettra  les getter setter mais aussi des methodes les find() et save()=>create delete() , ces méthodes vt se charger de faire les modif de la table
On crée un dossier mMdels et un fichier Product.php pour la classe Product
**Extension PHP getter and setters** => pour fabriquer les getter et setter à partir des propriétés
cliquer à D du $ et appuyer sur alt et maj pour sélectionner ttes les lignes avec un attribut et faire clic droit insert getter and setter
On crée une **fct public findALl()** va chercher ts les produits ds la BDD => tabl de produits
Ds le dossier /app on met un dossier /Utils
On y crée la class**Database.php**
Professionnellement, on va stocker les données sensibles de connexion dans un fichier **config.ini**qu'on va mettre dans app
Par contre il faut pas l'envoyer sur github donc on le rajoute dans **.gitignore**
Mais pour donner une trame de ce fichier pour les autres dév, on laisse une copy **config.ini.dist** sans nos données
On utilise un **pdo customisé** qui se trouve ds Database.php 
Ds le MVC , **c'est le controller qui va recupéerer le modele et l'envoyer à la vue**'
Ds le Model, on définit les methodes qui ctiennent les requetes sql
Dans le fetch all on vapouvoir utiliser **fetch::all Class** quiva nous renvoyer des objets product à partir de la table !!
**ça va créer un objet par ligne** !!, si chq attribut de classe crrspd à un chp de la table fetchAll(PDO::FETCH_CLASS, 'Product') à la lmettre pèrs, l'ordre importe pas'; le 2e arg est le nom de la Classe à créer !
**Dans le controller, on importe la Class Product pour pvoir utiliser la méthode findAll**.
On **crée nue instance ProductModel pour lancer ProductModel->findAll()**
ça va récupérer un tabl avec les instances de Product.
;on va le mettre en param de show à la place du viewdata'
=> on recupere les données du modele, on passe par le controller qui revnoie les infos à la vue => le controller fait l'intermediaire entre le modele et la vue'

**Si on vt afficher qu'une marque finallByBrand($brandId)'=> pas besoin de jointure**

**findById** pour chercher un produit ds la bdd avec $productId**
Attention fetchAll renvoie un tabl, mais s'il y en a un,' **UTILISER FETCH::OBJECT pour aovir qu'une réponse**'Exp: $product = $pdoStatement->fetchObject('Type');


##BDD Approfondissements - Adminer
**Clé étrangère** va définir **la relation entre deux tables** ici product et brand
la colonne brand_id ds product référence l'id de la bonne brand dans la table brand
c'est une clé étrangère'
**c est pas grave si des id sont pas pourvus, pas la peine de les remplir**
ça garantit les bonnes correspondances entre les deux tables
cf schéma MCD qui ressemble à un sch éléectro 0 =0 les deux barres c n et la fleche 1
On crée un cpte pour celui qui crée la bd et un autre pour ceuliu qu manipule, pas le me compte pour le créateur et le manipulateur
=> aller ds privileges sur adminer
Déclarer qu'on est admin si nécessaire'
Sa adminer  **cascade** => **on delete** =>va propager la modifcation/suppression/màj : si on supprime la marque, on supprime ts les produits ATTENTION
Donc mettre le **restrict** en général sur le ondelete
créer ds doc un fichier sql
en sql **alter table pour créer une clé étrangère cf fichier **ALTER TABLE products ADD CONSTRAINT fk_products_brand_id FOREIGN KEY (brand_id) REFERENCES brands(id) ;**

ds la requete sql spécifier le nom de la table pour savoir ds quelle table on cheche :
**SELECT products.* FROM products** ; (on met **product.** ça vt dire ds la table product)
Récupérer ttes les infos du produit 3 et sa marque =>
Si j'ai besoin d'une info qui se trouve ds deux tables il me faut une **jointure**=>
**INNER JOIN** va préciser la 2è table où il ft chercher les autres infos
**ON** précise le poitn commun entre les deux tables Exemple
**SELECT products.*, brands.name AS marque
FROM products
INNER JOIN brands ON products.brand_id = brands.id
WHERE products.id = 3**
(on pt remplacer le INNER par LEFT ou RIGHT, INNER JOIN===JOIN)
On peut rajouter AS à la fin pour ajouter un alias pour clarifier le nom de la colonne de résultats

##TRUCSIMPORTANTS E03 SUR LES ROUTES 
**convention de nommage du 4e argument name dqd on map = controller-methode**
**ds la doc, écrire en angalis sauf ce quiest destiné à être affiché ""**
**rajourter $params ds la méthode comme argumt meme qd on l'utilise pas pour se rappelr qu'on l'utilsie'**'
**$_SERVER['BASE_URI']** crrspd à la partie fixe de l'url du localhost, c le chemin à partir du serveur
dir c le chemin depuis l machine
apache est le serveur web, il met à dispo tt ce qu'il y a ds notre dossier /var/html'
ds localhost,  c'est un virtual host'
c  **$_SERVER['BASE_URI']**  c'est calculé par apache avec htaccess'**
apache rewrite engine 
**On va crée une var $base_url=$_SERVER['BASE_URI']** qui va ns servir pour ts les liens header footer images 
attention à bien la définir ds la méthode show de ts les controllers
on ne peut pas la déclarer ds l'index car elle serait pas accesible depuis show()'
**ATTENTION A BIEN DECLARER LES VAROABLES DS LES FCTS POUR YA VOIR ACCES**
**une méthode uen pagge**
=======================================================================================

##MCD ET CARDINALITES

Pour traduire les relations et les cardinalités, dire : **1 machin de l'entité'"" verbe "1 0 ou n"" de l'autre entité'**
Exemplex : 1 produit est fabriqué par 1 seule marque, 1 marque fabrique 0 ou n produits
=============================================================================================================================================================
##**COMPOSER**=> on a installé var_dumper et altoRouter
est un **dépendency manager** pour php,
il va gérer l'ajout de dépendances ds le projet'
D'abord installer composer dans son OS'
1/  php -r "copy('https://getcomposer.org/installer', '/tmp/composer-setup.php');"
2/ sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
**packagist.org** site où on pt télécharger des lib, par exp **var_dumper**
POur installer la lib, **copier le lien dans le terminal DS SON PROJET, DS LA BRANCHE**
**composer require symfony/var-dumper**
**composer require altorouter/altorouter**
**composer.JSON** va lister ttes les dépendces en JSON avec nom et version
**composer.lock** va verrouiller qls versions des dpdcs st autorisées
Les librairies installées st ds le dossier **vendor**
Une fois la lib installée, il faut l'importer ds le projet avec la ligne **require ''chemin vers autoload.php''** qui va récupérer ttes les src des lib
installer altoRouter
**On ne met pas sur git le dossier vendor**=>dans le fichier .gitignore on écrit vendor/ pour ne pas l'nevoyer sur git'
composer peut à partir du fichier composer.json télécharger les bonnes versions des librairies avec la cmd **c** **composer update** **NB NB**


**ALTOROUTER -explication**
AltoRouter est une classe avec la méthode map() et match() notamment.
**$router->map( 'GET', '/', 'render_home', 'home' );** map a **4 arguments**
**1er/ méthode :  GET ou post**
**2eme/ c'est la route**ici clé du tableau $routes - on pet mettre des regexp
Exple /users/[i:id]/ => les entiers (i)  seront reconnus attribués à une variable $id 
a pour les entiers et les lettres , * pour tout , cf la doc https://dannyvankooten.github.io/AltoRouter/usage/mapping-routes.html
Avec map on déclare lesr outes
Avec **match** on verifie si la route du user crrspd à une route déclarée (remplace if arraykey exists)
/ Nouvelle instance de AltoRouter
$router = new AltoRouter();
setbasepath va définir la base du projet pour que ça ne soit plus pris en compte
$router->setBasePath('/socle-php/S05/jelly/oShop/public'); (à mettre avant les route et le matchà)
// Déclaration des routes possible pour mon site 
**$router->map('GET', '/', '', '');**
**$router->map('GET', '/users/[i:id]/', '', '');**
$router->map('GET', '/products/[i:id]/', '', '');
map c comme si on rajoutait une entrée ds le tabl des routes 
// Test : est-ce que la route demandée par le visiteur correspond à une des routes
// déclarée dans AltoRouter avec la fonction map() ?
**on retrouve l'id ds ['params']**
=========================
**$match = $router->match();** sera false si pas de route crrspondant 
dump($match);
=====================
**3e arg/** on peut y mettre ce qu'on veut qu'on va voir via la clé **target** du match'
On peut donc y mettre un tableau qui contiendr al méthode et le controller par exemple
[methode =>'home',
controller=>'mainCntroller']
**4er arg : identifiant** donné à altorouter qu'okn retrouvera ds la valeur associée à la** clé 'name'** de match 
**Par convention nomDuController-NomDelaMéthode**exp MainCOntroller-home , CatalogCOntroller-ProductList


Attention ds le .htaccess, on le laisse comme avant,
La variable $_SERVER contient le baseURI qu'on pourra indiquer ds le setbasepath' $_SERVER['BASE_URI']);
On écrit donc $router->setBasePath($_SERVER['BASE_URI']); 


dc **1/ instancier Altorouter, 2/ définir le setabsepath, 3/ déclarer les routes avec map() , 4/vérifier si ça match() => rvoie un tabl avec 3 clés params target names**
si ça matche, params va ctenir un tabl avec les valeurs qu matche
Donc finalement $match ctiendra l'id dans id , le tableau avec la méthod et le controll ds'

On recrée le dispatcher en fct de ces routes et variables
on récupére les valeurs des méthode et controller
On récupère l'id ds $match['params']' qu'on va mettre en paramètre de la méthode d'affichage' $param
on l'envoie à show et grâce au param $viewdata on affiche la catégorie'
**match renvoie un tabl assoc avec 3 clés target=>le tableau controller méthode déclaré ds la route ;  params=>la partie dynamique de l'url' et name= le nom de la route
**clarifier ce que contient match**
**git puller merger script d'import.sh** 
master propre
on merge ds correction 
script d'import pour récupérer le code du dépot de pierrick ds son dépot'
1er arg mon dépot 2e nom de la nv branch 3 e nom de labranche dudepot depierrick qu'on vt copimer'
ATTENTION commit son code avant
=======================================================================================================
## Scrum /Agile suite 
BackOffice => administration du site
NB ya que le srcum qui pt bouger kes poistuf ds trello

## AGILITE => une approche, une philosophie
**Gestion de projet en cascade** :  définiction -> conception-> réalisation->  vaidation->  livraison => pas le droit à l'erreur ni de retour en arrière'
En Agile, on va pouvoir m^me revenir sur le CDC
Principes : **individus interactions** **logiciels opérationnels**(vs technique trop cplexe)
Car il faut ê adaptable
On essaie de **livrer régulièrement**, plus petit mais finalisé=> itérations de dév de qqs semaines
**gens motivés**
le logiciel opérationnel renseigne sur l'avancement
**rythme soutenu et soutenable'**
**simplicité**
**Methode Scrum**(extrem, bdd,) repose sur les principes agile
equipe  pluridisc autorganisée,itérative  et incrémentale, sprint d'1à4sem,'
on livre qd meme ms la version précédente
on planifie au déb de chq sprint les todo prises ds le product backlog
**daily scrum** pour fr le point de son travail
puis **sprint review** et **demo** au po puis **sprint rétrospective**
**une journee unr branche**

ds productBacklog , taches priorisées, catégorisées selon la pers concernée , dev manager po ???

#MVC E02
--> il faudra récupérer les branches ds le repo de Pierrick en les pullant sur notre machine
## Création des dossiers
On crée un dossier **app** qui ctiendra **Controllers(ctiendra des classes) et un dossier **views** ( ctiendra des tpl)
On rajoute un dossier **public** dans lequel on met index.php et un dossier **assets** ( ctiendra js, csss, images,fonts...)
## Création des tpl
On modifie pour faire les **tpl**
On récupère l'index de l'autre projet Oshow et puis aussi on crée le MainCOntroller' bien vérifier les chemins des fichiers css, images , etc avec assets avant /css ds le lien
Puis on crée les routes **table de routage**
On deécoupe le site en **plusiedurs contrôelurs** 1 pour la page d'accueil (mainCOntrol pour la page d'accueil et les mentions légales) et l'autre pour l'affichage des produits CatalogController.php

On a le meme mécanisme de nommage des méthodes avec ls classes
si les string ctient le nom exact du contrôleur on pourra l'appeler directment
	// String qui contient le nom du controller que je veux instancier
	$controllerName = 'MainController';
	
	// Nouvelle instance de MainController
	$controller = new $controllerName();

**On crée des tableaux pour associer la route à la méthode et le contrôleur addéquat** **DISPATCHER** **frontctroller**
O a index.php qui est le fornt ontroleur et les controleurs à l'intér st les sortes de ss controleurs'
On pourra ainsi créer les variables pour accéder aux bonnes méthode et controller.
On utilise le dispatcher mais des fois codés différemment. Le MVC peut être utilisé ds d'autres projets que le web', le routing et le dispatch st plu spécifiqs au web



*
#MVC
Modèle View Controller
C'est un design pattern=patron de conception'
**Modèle(s)** => les données 
**Vues**=> manière de présenter les infos
**Contrôleurs**=> cmt on réagit aux actions du visiteur

On crée un dossier **views** qui contiendra les html.
On **renomme en tpl.php** et **index=> home.tpl.php**
On crée un fichier **point d'entrée unique**' nommé index.php qui ctiendra les url "cachées" aux visiteurs
Selon la valeur du param d'url=query string, on inclut le tpl crrspdt !' index.php?page='store ou page='product' ou une 404
**utilser switch ou match pour require_once les bons tpl**
Màjour les liens de la nav -Il faudra dynamiser les classes pour prendre en charge le active ou pas
Ne pas oublier de tester si $_GET['page'] isset']
On crée une fonction show($viewNAme){} qui va charger le header/le tpl et le footer et renvoie rien, cette fct sera intégrée ds le switch à la place du require, et finalemt on s erend cpte qu'on pt virer le switch et le remplacer par show(requestedPage))'
pour rendre la page ce produits dynamique : crée des tabl associatifs par item avec les données par produit
créer un tabl global avec toutes les données avec index=>tabl-par-item exp $viewData= [$poduit1,$porduit2...] 
on va importer ce tabl comme arg de show() $viwData=[]
comme il est ds index.php, il dt ê accessible partout
on utlisera shoiw et viewData pour afficher les oraires de la même manière

Probleme : on a ttes les data sur ttes les pages, on vdrait optimiser
=>on a besoin du controleur pour articuler qls infos vt être envoyées ds les vues
On crée une classe MainController avec 3 méthodes crrspdt aux 3 pages diférentes à l'intèr',
on enlève la fct show() pour la mettre dans le mainCOntroeller en private,le controleur sera le seul à accéder à cette fct 
La fct show() factorise
on importe la class et on l'instancie pour l'éxécuter '
pour eviter de faire un switch et d'appeler la fct 3*, on pt l'appeler direct,sa'
// $requestedPage contient le nom de la fonction à appeler
// dans le MainController 
// J'appel directement la bonne fonction à partir de son nom qui est stocké
// dans la variable $requestedPage
**$controller->$requestedPage();**


**ROUTEUR**
**cas de la page 404*
on déclare les **routes** liste des pages accessibles ss forme de tableau $routes = [
	'/',
	'/products',
	'/store',
];
 on aimerait /store à la place de ?page=store
apache va fr ça avec les fichiers  de config htaccess
àla racine du projet, on cr&e un **fichier .htaccess**, on écrit dedans :
""deny from all"". ou dans un aut dossier => acces refusé 
"""**pour réécrire les url**
RewriteEngine On

# dynamically setup base URI
RewriteCond %{REQUEST_URI}::$1 ^(/.+)/(.*)::\2$
RewriteRule ^(.*) - [E=BASE_URI:%1]

# redirect every request to index.php
# and give the relative URL in "page" GET param
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php?page=/$1 [QSA,L]

"""=> ca marche qu'avec page=fhhfg'
ms du cp la fct du controleuyr qui dependait de requestedpage ont un / qui s'est rajouté devant'
ms on a nos routes qui vt ns perm de designer qL méth appeler donc 
$routes = [
	'/' => 'home', la valeur crrspd à la fct associée
	'/products' => 'products',
	'/store' => 'store',
];

// Vérifier, est-ce que la page demandée par le visiteur (qui est dans $requestedPage)
// fait bien partie de la liste des routes autorisées (les clés du tableau $routes)
if (array_key_exists($requestedPage, $routes)) {
	// Oui, la page demandée est dans les clés du tableau des routes

	// Nouvelle instance de MainController
	$controller = new MainController();

	// Récupère le nom de la fonction à appeler depuis le tableau des routes
	$methode = $routes[$requestedPage];
} else {
	// Non, la page demandée n'existe pas !
}


changer le home par / ds la cond $requestedpage

modif la nav avec les url changer ,./ à la place de /

viewname =>l utiliser pour changer active ddans nav
il suffit de rajouter  ne route et une méthode ds $routes et la méth ds mainController


Routes est un tableau où clé est l'url et valeur est le tpl à appeler'

**NB si ce string correspond exactement à une méthode déclarée dans la classe, on peut utiliser cette syntaxe donc on peut $fonction=$this->$methode()**
**NB autre : l'url ds le href de la nav dt bien crrspondre avec la clé de la route ds $routes, avec le /'
**ds les tpl, on a accès à ttes les var de show
###################################################################################################################################################################"""""
#Rappel sur les classes
La classe est stockée ds un fichier en texte mais pas en RAM
Chq instance est stockée dans la RAM en binaire'


#GIT PULL REQUEST
git push origin=quelDépôtOnEnvoie main=nomDeLaBrancheQuonPousse
La pull request invite qqqun à regarder et vérifier le code avant de merger si c ok
Ajouter l'autre en collaborateur et puis lui envoyer une demande de review sur la dorite, on peut rajouter un label'
Le collab va recevoir un mail
Puis create pull request
On peut merger en ligne puis on fait git pull origin=quelDépôtOnEnvoie main=nomDeLaBrancheQuonPousse 


##########################################################################################################################################################
################## SAISON 4 (suite) - ADMINER - PDO -  ########################### 
##########################################################################################################################################################


#PDO suite
CORRECTION TRUCS A APPROFONDIR 
**Jointure**
SELECT * FROM vvideogame 
LEFT JOIN platform ON videogame id =videoplatform_id
On peut utilsier des alias pour clarifier les noms avec le lmot clé **AS**
La jointure permet de faire moins de requêtes finalement.
Vérifier cmt il a affiché le bouton selon si on  a trié ou pas
**

**!empty** vérifie si la var est null **isset** vérifie si la var existe 

#LIBRAIRIE POUR DEBUGGUER
Il y a var_dump / print_r / 
**kint**
telecharger kint.phar et l'importer avec un require'
utilser la méthode d($mavariable) à la place de var_dump /ne pas faire attention à l'erreur '
=> ça affiche en tableau, et on pt meme faire de recherches
Pour symfony , ça sera dd , encore mieux, à installer avec COmposer
 d($pdo) => renverra la doc de pdo
ça peut remplacer echo aussi je crois

**Errors gestions des erreurs du formulaire**
définir un tableau d'erreur
y rajouter ses messages d'' erreurs sous forme de str selon les conditions  
et empty(tableau derreur)=> affecter la requeter
'
Si la requete a fonctionné, rediriger avec header location

       if($rowInserted === 1) {
            // La requête a bien ajoutée la donnée en base
            // redirection
            
            // Si j'oublie de faire cela, si l'utilisateur tape plusieurs fois sur réactualiser la page,
            // le formulaire sera envoyé autant de fois qu'il a réactualiser la page
            header('Location: ./index.php');
        } else {
            $errorList[] = "La requête s'est mal passée";
        }
Imp!ortant pour ne pas envoyer plusieurs fois le formulaire et remplir plusieurs fois la BD !!!

Pour que les valeurs déjà rentrées soit enregistrées, mettre une condition sur le champ avec un !empty($POST['propriété'])

#PDO librairie
=> connecte la bd au serveur php => le php est l'intermédiaire qui va récup les données pour les afficher ds la page => DYNAMISATION'
=> c'est une classe native PHP avec un constructeur et ses param (DSN username pwd options)
, des méthodes'
Pour se connecter à la BD, on instancie la classe PDO :
$PDO= new PDO()
**DSN DataSourceName** contient 
a/ le **driver** qui com avec la BD : mysql,MariaDB,PostGresql etc
b/**Nom** de la BD
c/**adr**.du serveur sql
d/**charset**=encodage(UTF8,etc...)
**username** => identifiant
**pwd** mdp
**options** => tabl. asso. ; opt la + répandue est mode d'erreurs utilisé'// la clé : PDO::ATTR_ERRMODE
// la valeur
// - celle en dev => PDO::ERRMODE_WARNING
// - celle en prod => PDO::ERRMODE_SILENT (Fatal error : SELECT * FROM users WHERE id=54564646)
//https://www.php.net/manual/fr/pdo.setattribute.php pour plus d'options je crois'
**Exemple de déclaration PDO**
$pdo = new PDO(
    'mysql:dbname=videogame;host=localhost;charset=UTF8',   // DSN 
    'root',     // username
    'root',     // password
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING       // en mode dev (options)
    ]
);
var_dump($spdo) ; pour voir si y a pas d'erreur'
On met le PDO configuré tt ds un fichier bd.php par exple.
**On pt ensuite faire nos requêtes sql. On centralise tt ds un fichier puis
import de db.php
**création de l requête ds une var $query**
On va utilier la méth **query()** de la class PDO avec la requête
**$pdoStatement = $pdo->query($query)**
=> retourne un **PDO statement** (ou false ), c'est une class native aussi
Pour utiliser le PDO statement, on va utiliser ses méthodes :
**fetch()** renverra un résultat et fetchAll() tout
**fetchAll()**=> sans param, comme $mode est optionnel renvoie un tabl associatif avec des tablx
Ces deux méth acceptent les mêms "mode""
On peut mettre comme param de fetchAll le mode (**PDO::FETCH_ASSOC**)-> tabl assoc pour afficher ds un format plus clair ou **PDO::FETCH_NUM**->tabl indexé => par défaut, sans param , c'est un tabl ds un tabl'
On peut utiliser **fetch_KeyPair** très pratiq pour avoir un tabl key value 
$platformList = $pdoStatement->fetchAll(PDO::FETCH_KEY_PAIR); essayer avec la jointure aussi   
PDO::FETCH_CLASS à voir
**Utilsation fetch(PDO::FETCH_ASSOC**) avec une query comportant un WHERE 
**Pour INSERT ou DELETE on utilise la méthode **exec()**
$requeteSQL = "
    INSERT INTO `videogame` (`name`, `editor`, `release_date`, `platform_id`)
    VALUES ('$name', '$editor', '$release_date', '$platformId');
"; On pet mettre plusieurs requetes séparées par des virgules
$results = $pdoDBConnexion->exec($requeteSQL); => sera =1 SI ÇA A MARCHE SINON FALSE
    Exemple autre :
$query = "INSERT INTO `heroes` (`name`, `color`, `lives`, `big`,`star`)
    VALUES ('$name','$color','$lives','$big','$star') ;" ;
**NB ENLEVER LES VAR_DUMP SI ERREUR**




METHODE DE @giildo exercice corrigé
tu récupères les données direct sans les échappés via htmlSpecialChars => risque de faille XSS = injecter du SQL en bdd
mettre direct les variables dans le query sans passer par une méthode prepare => risque de faille d'injection SQL
tu vérifies pas les données insérer, ni en qualité (string/number...) ni en quantité (la longueur d'un string par exemple)
là tu insère le mdp en bdd sans le hasher

######################################################################################################[]
#MCD
Modele Conceptuel de Données
C'est uns chéma de modélisation des donn&zq
Il sert de support de com entre le client et le technicien dev.
Il rentre en jeu après le CDC, le wireframe et la maquette lors de la ocnstructiokn du projet.
**Entités** Exp : Jeux vidéos ;  qui **contient des propriétés** ( nom, date etcv...)
**Propriétés**
**Associations** va lier deux entités par l'intermédiaire d'un verbe'
Des **cardinalités** vt être définies à partir des associations, c'est une sorte de valeur, il y a une valeur min et une max', trois valeurs possibles  0 1 ou n=plusieurs (exp 0,1 ou 1,n, 1,1=>1 seul )
S'il y a un au niveau de l'entité c forcément qui'l y a une relation avec u e autre entité'
La logique dépendra du client pur définir les cardinalités.
Outil pour en créer MocoDO ms¶as forcément
On peut le faire avec escalidraw , à main levée
Les relations vont permettre de relier les données redondantes. => on fait des jointures en sql
Le MDC aide à relier les tables.
On va se servir des id.
Le MCD pt se trsformer en MPD, modèle PHYSIQUE de données, 

**Dictionnaire de données**
Décrit précisément les données du projet
#RESUMESQL
**Champ/attribut** : sont les propriétés des entités 
**Clé primaire** : auto incrémentée c'est l'id l'index quoi'
**Contraintes : non null - unique - index -
**Si null est cochée, null est autoriésée, sinon il faudra tjrs saisir une valeur WHERE cle IS NULL ;
**Cocher la case par défaut pour les préciser
Index longueur 10
Nom VAR CHAR longueur 64  prénom mail VAR CHAR longueur 255 c bien
Pour rendre unique, allez ds onglet Index et mettre unique sur le chp créé
Pb char /varchar avec symfony ??? rechercher ?
Utiliser text avec modération pour sinon pb de performance
Mettre ON UPDATE CURRENT_TIMESTAMp au niv des attributs pour mettre date du jour par défaut
exporte/ misql dump pour sauvegarder
-- pour fr les commentaires, on pt fr des ficheidrs .sql
Bones pratiqs : 
 mettre **backticks** sur l'entrée nom de la table et les valeurs ds la requete sql
Mettre le champ  de la table au singulier
Aller à la ligne entre chaq mot clé Exp
SELECT 'title' , 'published_date' 
FROM 'Articles'
SELECT 'title' 
0RDER BY 'Articles' ASC
LIMIT 2 ;

SELECT COUNT(ìd`) ( id plus performant que * car ne prend que une colonne)
FROM `post`  

#BASES DE DONNEES cf site SQL.sh
Serveur a un serveur web (apache2) et unserveur php (celui qi transforme le php en html)
Il y aun serveur que de BD, **adminer** est un client de la BD   On peut utiliser aussi le ligiciel Dbeaver pour postgresql il faut installer le logiciel postgresql
**id explorateur*o
**mdp 6q595XmCKm**
on crée une bd, puis une table, on rajoute nos colonnes = variable, on choisit le type
(**bien choisir le type** de int car ca va avoir un impact sur le stockage)
on essaie de ne pas avoir à modifier le type après sinon bcp de travail... => c une **migration** La migration bloque tout, le site est inaccessible pdt ce tps
Contraintes **index**, **not null** (nb "" et 0 ne st pas null , null c une case vide"), **unique**ds l'onglet index d'adminer'
**Clé primaire** :plusrs contraintes : unique et not null Svt associé à autoincrementaion  clé primaire auto incrémentée AI
parenthese sur les datacenters, ils servent à stocker ms aussi cpu graphiq etc..
il préviennent des catastr naturelles
si **longueur** pas définie=> choit par défaut
**unsigned**=> que des positifs; on a é* plus de possib (par défaut c signed)
**varchar en général** jusqu'à 65000 caracteres' char est +petit
on crée ensuite les lignes =enregistrements
on pt lancer une **requete mysql** 
**si on  clique sur le nom de la btable on voit la structure, select les données**

**SQL en majuscule par convention**
les lignes ce sont des champs
les colonnes les enregistrements : exp article1 , article2

**SELECT** afficche
**INSERT INTO** rajoute , on met pas l id comme ça s'incrémene tt seul '
nb : si on supprime un item, le nv ne remplacera pas celui_là
si l id est déjà prise =>**UPDATE  SET**
on pt mettre un ouu plusrs param ds UPDATE
si erreur, ouvrir un autre sauvegarde

**attention à UPDATE et DELETE, utiliser la clause WHERE**
WHERE est insensib à la casse
**WHERE name LIKE ""%truc%"**
**ORDER BY** tetre **ASC** ou **DESC**
**LIMIT 0,5**puis LIMIT 5,10  permet de frf la pagination (voir les items de5à10) 0 point de départ=offset, 5 nb d'items récupérés'
**Exemples** :
SELECT * FROM Authors ORDER BY name ASC , email ASC 

Exemple de AirBnb :
Site qui affiche=> front office
Site qui permet de publier des annonces=>back office
**Syst de Gestion de BD Relationnelles**=> structure ; il y a des relatioins entre les différentes tables MySQL, MariaDb, PostGreSQL
**SGBD NoSQL Nt Only SQL** => on parle de document, il n'y a pas de structure ni relation entre les données' => nosql pour des porjets avec bcp de données > 1 million
Il faut que ça aille vite dc choisir la bd la + adaptée ElasticSearch,MongoDb,Cassandra(FB)
**mysql ds le term** my sql --help
on pt utiliser un client mysql
création màj suppression modification
**http:/localhost/adminer** pour se connecter à la bd
**Install adminer linux**
sudo apt install adminer
Il faut ensuite activer la configuration pour Apache :

sudo a2enconf adminer
sudo systemctl reload apache2

On pt avoir plusierus users en régle générale, on met un user par BDD


##########################################################################################################################################################
################## SAISON 4 -RESPONSIVE - GESTION DE PROJET - POO - MCD - BRANCHES - SGBDR  ########################### 
##########################################################################################################################################################
"
#PHP trucs à maitriser
opérateur coaslescent si ma variable est pas dans $_gGET ?? null équivaut à    $var = isset($_GET['id']) ?  $_GET['id']: null
alternative à array_push  :  $tableau[]= $item ;
var_dump(get_defined_vars()); => pour voir toutes les variables du fichier ds lequel on le met

#Dynamisatiob
vérifier que $get is empoty n'est pas vide' !empty

#POO2
Les class sont nommées en **Pascal Case**, avec une majuscule. Le fichier qui contient la classe sera aussi nommé avec une majuscule (exp : Article.php)
__DIR__
Pour gérers les dates , utiliser la classe DateTime et ses mézthodes comme format(), modify()
$date = **new DateTime($this->date) ;**

Protéger une propriété, la passer en **private**
**Elle ne sera plus accessible que par les méthodes publiques déclarées dans la classe dont les getter et setter**
Les méthodes peuvent être privées aussi. Elles ne seront utilisables qu'à l'intèer de l'objet/class'
les getters sont sous la fomre de getPropréété() sauf si la ^ropriété est un bolléen on mettre isLapropriété ou hasLapropriété 
#POO
Création de classes pour définir la structure => modèles plan de fabrication  pour créer des insctances de classe  => des objets qui auront des propriétés et des méthodes
**class MaClasse** {
    **public $maPropriété ;**
public function maFonction() {echo "bonjour""}
}

**$instance =new MaClasse ();**
Pour affecter une valeur / accéder à la propriété, utiliser la flèche simple :
**$monInstance->propriété = 40;**

Les méthodes st des comportements
on utilise this pour se référéer à l'obj courebt'
Petit tip : mettre un p devant chaque variable de paramètre $pbalance pour repérer les paramètres des constructeurs de classes
**public function __construct**($pBalance, $pIban, $pOwner, $pType, $pBankName) {
            // Quelles valeurs j'initialise et avec quoi ?
            $this->balance = $pBalance;
            $this->iban = $pIban;
            $this->owner = $pOwner;
            $this->type = $pType;
            $this->bankName = $pBankName;
//on met ce quo'n veut dans le cosntrucuteur""'
        }
    }

**NB on peut préciser le type de la propriété juste avant le nom de la propriété ou aussi dans le constructeur juste avant les paramètres**
Manière la plus concise, définir les propriétés ds le ocnstructeur PHP8 , attention à la compatibilité
**public function __construct(public string $title ,public integer $age ){}**

**die** permet d'écrire un message d'erreur'"

et cu coup on peut créer les objet s en faisant new MaCmasse(paramètres) ;

NB mettre les param optionnels (ou dont on a défini valeur par défaut) à la fin dans la liste des param entre parenth-ses

**getter** fct pour récupérer la valeur d'une propriété $getMaPropriété 
**setter** fct pour definir la valeur d'une propriété
**Clic droit poiur définir automatiqmt un getter /setter**

public function getBalance() {
            return $this->balance;
        }

        // définition d'un setter => set suivi du nom de la propriété (commençant par une maj)
        //  PERMET DE DEFINIR AVEC UNE FONCTION LA VALEUR DE LA BALANCE (grâce à un paramètre)
        public function setBalance($pBalance) {
            $this->balance = $pBalance;
        }
  $tamago1->setColor("jaune");
  echo "<p>tamago1 a " . $tamago1->getAge() . " ans, et il est de couleur " . $tamago1->getColor() . " !</p>";

 

#GESTION DE PROJETS
--> Importance de la communication
--> Equilbre entre **coût** **délai** **qualité**
--> Attention à **ne pas se sous-vendre** ! Fixer des **deadline** pour se motiver !
--> 1/ Objectifs 2/Reformulations 3/Analyse des risques 4/Planification 5/Budgetisation
6/ Le cahier des charges comprend ce qu'il y a au-dessus, il peut aussi servir de devis /contrat pour le client
QuiQuoiOùQuandCommentCPourquoi
Les 5 pourquoi ? poser des questions aux clients
1 client heureux => 5 clients après ! Attnetion au bouche-à-oreille !
--> Conczption du projet :
spécifications fonctionnelles ( quelles fctnalités)
spécifications techiques  evrnmt techniq)
Architecture MVC,MVVM, clean code,prototypage, maquettage, => cf. https://refactoring.guru/fr/design-patterns/creational-patterns
REALISATION DU PROJET : suivi évolution maintenance documentation
**Tests unitaires** tester chq petite unité de la fct Tests fctnels, de la qualité etc...
LIVRAISON DU PROJET avec déplliement sur serveur productio, revue qualité, documentation utilsiateur, accompagnement , maintenance,
Documentation : on peut faire les bulles ,ou un tuto, à la place de la doc utilisateur 
Accompagner , rtassurer l'utilisateur face au nouvel outil qu'elle a'
produit incement, on améliore au fur et à mrsure
Public ciblé
Attention à prévoir facturer la maintenance
HT + 20% de TVA
BIEN NTOUT NOTER DS LE CONTRATY
**Methodes** cf lien ds kourou 
=> en cascade ( pas le droit à l'érreur ssinon faut tour recommencer')
=> en V dif. à faire évoluer qd chgmt de l'idée du client
=> méth semi-itéative cf méthodo Agile' la + avantageuse
**Cahier des charges** présentation description et limites, charte graphique, 
pour des idées sur le statu Freelance, cf live sur slack Pro
On le fait, ou avec le chef de projet, ou une entrepreise qui le fait...
**MOA vs MOE**
MOA maitre d'ouvrage product owner'
MOE lead dev, il developpe pas /scrum master mais il s'assure que tt lemonde a les connaissance pour les projets, il sait coder, il forme'
**specifications** 
rédigées par les dev
user cas cas d'usage =>  description d'un cas 'fctonnalité du site à partir duquel on rédige' : faire un commentaire, rechercher, se connecter à son espace perso
user story qui quoi pourquoi ? un usage du site quoi , use case pluss soécialisé, par rapport à qui ça s'adresse' prompt office vs backoffice
user story sous la forme de "**entant que** machin **je veux** pour **machin**""
prodcut backlogs la liste de toutes les fctnalités mais qui s* ont pas dév, 

**wireframe** cf Figma en général dessin à main levée mais on pt le faire avec un logiciel, sert juste à positionner les éléments 
**Figma** va pouvoir meme faire une anim des différents état s de l'app' est collaboratif
POUR LE TP c'est utilie de montrer le wireframe et la maquette avant de montrer le projet'
**UX User Xperience** scénario, interactions, architecture, cception,prototypage
**UI User Interface** id visuelle, charte graphiq, ce qu'on voit'
UI --> satisfaction visuelle , UX --> satisfaction "technique"


#GESTION DE PROJET
**Trello Notion Jira** 
todo/ product backlog / doing /testing
méthode konban => on crée des postit avec des cartes ds trello avec des indices d'importance'
on pt catégoriser chq card ds trello
Il ya un outil similaire  sur github , onglet project, on pt liéer des issues facilement avec

#BOOTSTRAP
Ce sont des fichiers css avec des classes déjà faites
pmour passer de la mqauette au projet
Inclure les fichiers css bootstrap ds les documents html et rajouter sur les div crrspondantes les class nécessaires
On copie 
le link <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
le script <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
puis on change les **classes**
Il y a des **class**, des **container fluides** (laisse une marge) **ou tout court**(prend tout l'espace') ,
**p-4**crrspd à paddin de 4em
On a une **grid** par défaut de **12 colonnes**
On crée un **container**, une **row** qui vaut 12 de base et on rajoute par exemple col-6 pour que l'élément fasse la moitié'
<div class=container>
    <class=row>
        <class=col-6>
Pour que ce soit responsive, on a des **breakpoints**
col-lg-6 col-xs-12 par exple 
si on utilise pas les col, largeur par défaut de 12
il y a meme des icones bootstrap
Pour visualiser le rendu et le modifier en live, petit éclair en haut à droite => stackBlitz
ATTENTIONAU SEO AVEC BOOTSTRAP, NOMMER LES DIV POUR PLUS DE SEO !!

GIT
on crée sa branche
Puis on doit fusionner avec le merge, on doit revenir sur le master avant, cela une fois que c'est fonctionnel bien sûr'
git branch
on pt voir sur ql branche on est avec git branch/status ou en bas à g dans vscode
il faut commit et pusher la nvelle branche
checkout pour passer d'une branche àl'autre'
git checkout -b pour créer et basculer direct sur la branche
push la branch avec **git push origin nomDeLaBranch **
ça va envoyer une pull request, et après on peut récupérer avec git pull depuis la branche master
On peut configurer pour pas se faire puller la master


##########################################################################################################################################################
################## SAISON 3 - BASES DE JS - CLIENT ########################### 
##########################################################################################################################################################
#JS

#Tuyaus en vrac
utiliser la **déstructuration pour intervertir deux variables**=> [a,b]=[b,a] va donner a=b et b=a
connsole.dir(elementHtml) va afficher l'objet JS delélément'
attention faille xss ne pas utiliser innerhtml à la palce de texcotent
attention les scripts sont lus de haut en bas donc attention par rapport aux variable spartagées
Pour lancer un bug vias prompt <img src ="tutu" onError="let i = 5; while(i != 10) {console.log('haha')};" </script> on utilise le js dans la balise
icones avec fontawesome et prendre le svg ( sinon on peut installer font awesome mais plus complexe)

#recuperer les donnees de JS à PHP avec les HTML.dataset
On crée l'attribut html data-NomDeLaPropriété=valeur Exp : data-note=6 en JS element.dataset.note 
attention le **dataset** sera converti en Camel Case en JS , on accède à la valeur avec la clé en js   A REVOIR dans un template string  elemnt[data-note=   ${valeurAFilterer}]
vu que dataset est enregistré ds un objet]

#SESSION STORAGE
**Cookie** : est créé côté serveur, enregisté sur l'ordi du client et **systématiquemt envoyé au serveur** , taille très limitée' => document.cookie="user=laure""
vérifier les recommandations de la CNIl pour être sdans le cadre légal

**Session Storage**=> s'efface à la fermeture de l'onglet/navigateur' sessioStorage.setItem=(clé, valeur) /getItem/
**Dans l'inspecteur : application->storage' ces données st accessibles à tout le monde dc pas du tout ok pour données sensibles, on pt même les modifier dans le navigateur
**Attention les données enregistrées sont des **string**" On dt donc utiliser le 
**JSON** 
on met les accolades et les clé valeur ss forme de string /int/bool/obj/array 
ainsi on pt convertir en string et vice-versa JSON.stringify(monObjet)=> mn objet sera transformé en JSON et JSON.parse(monJSON) transformera en objet

#OBJETS MODULAIRES /MODULES 
Pour encapsuler les morceaux de code
On crée un **objet JS** qui va contenir des morceaux du script sous la forme d'un objet avec les **propriétés** et les **méthodes** qui correspondent 
Exp : const message ={
    afficher: = function () { console.log(message)}  ,
    propriete : valeur ,
**init** : function () {newsletter.propriétéDeLObjet=doc.querySelector ,newsletter.button.qyerySelector  etc....ts les elements et listeners}
et on déclare les propriétés avec des valeures nulles (pas obligatoire)
=> va permettre de lancer l'obj qu'unoqieent si la page a été chargée' et **
 la fin du module on lance module.init()**
}
**document.addEventlistener()"domContentLoaded", module.init())**
Rajouter element ou event en suffixe pour bien nommer les propriétés
NB pour trouver le module concerné, clic droit => atteindre la défintion ds vscode

#Pourquoi des fois on met la clé de l'objet et des foi snon ? analyser cmt ça marche'
const index = {
    form : null ,
    userElement: null ,
    userValue : null ,
    init : function () {
        form=document.getElementById("form") ;
        userElement= document.getElementById("user") ;
        form.addEventListener("submit",index.checkUser) ;
        userValue = userElement.value ;
    },
    checkUser : function (event) {
        event.preventDefault() ;
        let userName = userElement.value ;
        console.log( userName)
        userName=="lor" 
        ? document.body.style.backgroundColor="lightPink"
        : document.body.style.backgroundColor="lightBlue" ;
    },
    
}


document.addEventListener("DOMContentLoaded", index.init);

##Pour que ça soit un **module ES6** , il faut faire **type="module"** dans la balise <script>" qu'on a mise en bas du html
ainsi on peut utiliser **import** {nomDumodule} from "cheminVersLeModule"
On doit avant mettre export dans le module pour pouvoir l'utilsier
Pour mettre ts les modules en un =>créer un fichier **app.js**
**importer ts les modules avec import**
destination.init
newsletter.init etc...
const app = {
    initialiser avec une fonction qui lance tous les modules
    **run ou start ou ce quo'n veut' : function(){
        destination.init();
        newsletter.init();
        reviewsFilter.init();
        slider.init();
        theme.init();
    }**
}
**
**document.addEventListener("DOMContentLoaded",app.run);**

puis linker app.js dans le html


#EVENT LISTENRS
3 manères de les déclarer : 1/ en ligne (non recommandé) 2/ aved une fonction
appeler la fonction **handlemachin** pour repérer les fcts liés à des events
console.dir on pt voir les onclick etc de l element 
3/addeventlistener, fct sans les parentheses
on met entre() **e** ou **event**, c'est notre paramètre'
**event.target dit où on a cliqué, currentTarget l'élémt sur lequel il y a l'event'** event.target.id
**element.closest**
**effet de bulles ??** à creuser 
event.preventDefault(); **submit pour les formulaires pour que ça envoie la rep sur la validation du form**, pas sur le button car pas de validation qd on fait entrée
Il vaut mix dc **placer l'event submit sur le form** pour récupérer l'event et les value'
**input.value=""** ; pour vider la case
La fonction qu'on met dans l'eventListener est un **handler**, **mettre event en argument **en général et attention, event.preventDefault() sur les liens et form et trucs qui ouvrent des pages)'
**Foncitons fléchées st pratiques comme handler /callback** On appelle ça des **closure**en PHP
Nommage des variables : essayer de mettre l'element en debut des variables pour bien nidentifier ce que ça concerne 
**Pour mettre un meme eventListener sur plusieurs éléments, récupérer les éléments dans un tableau et faire une vouvcle


Récupération du Texte :
textContent récupère tout le texte contenu dans un élément, y compris les espaces et les retours à la ligne dans les balises script et style. C'est un peu le bourrin qui prend tout ce qu'il trouve.
innerText, lui, est plus subtil. Il ne prend que le texte "visible" pour l'utilisateur, en ignorant les scripts, les styles, et en respectant la visibilité CSS (comme display: none).
Performance :
textContent est plus rapide car il n'a pas à se soucier du style ou de la mise en page. C'est un peu comme lire directement un manuscrit sans se soucier de la mise en page.
innerText prend plus de temps parce qu'il calcule la mise en page pour déterminer quel texte est réellement visible.
Standardisation :
textContent est standardisé et fonctionne de manière cohérente dans tous les navigateurs modernes.
innerText a eu un historique un peu plus chaotique en termes de standardisation, surtout avec les anciennes versions d'Internet Explorer.
Utilisation :
Utilise textContent quand tu veux récupérer tout le texte d'un élément, peu importe sa visibilité ou sa mise en page.
Opte pour innerText si tu as besoin du texte tel qu'il est présenté à l'utilisateur, avec la mise en page et la visibilité prises en compte.



#DOM
Représente l'html ss forme d'un **arbre** avec des objets qui st les éléments html
l'objet window est l'objet global
getElementById=> un itel
getElementsBytagsname=> un tableau qui ctient des objets qui crrspdt aux éléments dc s on vt en récupérer un => tabl[index] parx exple 
par classe => idem
ben cseille **querySelector** **querySelectorAll** ou  NB ca récupère le premier item qui a ce sélecteur css
 même si légèremednt moins performant 
**Eviter h1.style.propriete=value** , le style inline va prendre le dessus sur le reste ce qui pt créer des bugs et plutôt toggler les class 
utiliser **l'objet' classlist et ses méthodes add remove toggle**(rajoute la class si absente , enleve si presente) **contains** **replace item**
document.body récupère le body direct
fonctions qui ne retournent rien → on appelle ça des procédures
on **cree une branche** comme on veut (grâce à console.dir on pt voir les **propriétés de l'obj**)') piis on la fuionne 
doc.createElement("img"")
**img.src img.alt img.className**(ecrase ttes les classes ms on pt en metrre  plusieurs)
onnrattache la branche element .append(à la fin) ou **prepend**(après) , appendChild ne marche qu'avc des obj JS'
sinon y auasii insertBefore pourmettre avant un element
NB on pt faire **querySelector etc sur un element** ( à la place de document)
Pour enlever un élement, le cibler avec une variable et un queryselector et l'enlever avec .remove
On peut créer des **template html** et les inclure au DOM (chercher les méthodes crrspdtes) -pas vu en cours-

#Comparatif de PHP et JS

**pour remonter d'un cran** ../ 
let / const 
concaténation avec le + et pas avec un .
tableaux idem
tabl associatif y en a pas en JS c'est un **objet littéral** objt= { cle : valeur}
en php tableau['cle'] en JS **tableau [cle] ou tableau.cle**
en PHP boucle for et foreach en JS **for /for in /for of / foreach**
**else if** en JS elseif possible en PHP

#Intérêts du JS /Remarques
Le JS est modifiable ds le navaifgateur dc il ne faut **pas mettre de la sécurité dedans**
mettre le **fichier avant la balise </body> ** pour que ça charge d'ab l'html
Conditions :  ne pas se répéter / vérifier les conditions une par une pour finir avec le else/

#Fonctions
Différence entre function coucou() et const coucou = function()
En JS on peut déclarer la function après l'avoir exécutée => hoisting, la function remonte ( ya pas ça en PHP)
**Si on déclare avec const, il n'y a pas de hoisting**, ça respecte l'ordre du script, l'avantage aussi c'est qu'on aura pas deux fcts du même nom !'
=> **déclarer les fcts avec const** !! 
**Utiliser les return **ds les conditions comme ça , on récupère le résultat

#Boucles for
dans les for in et for of, il vaut mx mettre **const** machin in tableau 


##########################################################################################################################################################
################## SAISON 2 - BASES DE PHP - SERVEUR ########################### 
##########################################################################################################################################################
#PHP

#VRACS from JC
nom de fichiers nom de clé=> snake case
nom de variable, de fct => camel case

quand on sait pas encore le nom de la var php qu'on met , on peut mettre des xxxx en attendant dans l'html

ds l'absolu , separer l'affichage des données et des fonctions

NBdynamisation => on peut faire changer le lien qui va vers l'article avec un index variable pour ne faire qu'une page, et générer à partir d'elle selonl'index..; à tester'
on récupere au niv du lien la valeur du get qui sera envoyé à php pour trouver le bon article  ---> $articles[intval($_GET['index'])]

Questions aposer si possible
cmt afficher erreurs ds navigateur
if (isset($cOk) && $cOk) 

pour installer php , installer apache et php , le localhost est dans /var/www/html 

#SERVEUR
--> avec apache,ça charge d'abord index.php 
php -S localhost:8000 




#FONCTIONS NATIVES PHP
isset() ; empty() ; intval() ;
number_format()
on donne le nom de la fonction en camel case,
on met les **paramètres entre (),==> les paramètres sont définis avec la fonction**
on met le bloc d'instructions entre {}
on utilise return pour récupérer le resultat
**Quand on appelle la fonction, on lui met des arguments entre ()**
les fonctions sont fermées, **hermétiques**
**Pour utiliser une variable extèr à la fct, l'importer comme paramètre'**,sinon GLOBAL mais pas conseillé
D'ordinaire, on met le résulat de la fct ds une variable.'
intval() conversion str en int

#GET/POST
**get lecture post écriture**
bien préciser l'**attribut name** dans le html pour qu'il figure dans la clé de la **super variable**'
NB -qd on a un formulaire , **vérifier que toutes les données sont remplies (avec isset par exp)** !
NB -utiliser **l'attrib html 'require' n'est pas suffisant'**car le travail du back est de vérifier qu'on ait bien les données=>validation côté client + côté serveur=double sécu'
NB - **prendre en compte TOUS les cas, même quand il n'y a rien**
**On 1/ affiche le formulaire, puis 2/ on le traite** ( c'est comme si y avait une 2ème page, c'est le retour du serveur)
** ** <p><a href="./">Revenir au début</a></p> ** ** pour revenir au début par exemple
**tout ce qui transite en key value via le serveur devient une chaine**


**Pour tester les valeurs**, c'est ptet plus pratique en get, on pt changer direct ds la querystring ( sous la forme ?$clé=valeur&clé=valeur)
onteste la situation max et la situation min 
si la variable n'et pas définie (isset($var)==false)=> ne pas afficher le bloc html = on conditionne l'affichage pour qu'il n'apparaissse que si l'user a rempli le form et qu'il a été renvoyé'

#Formulaire
=> **attribut post** c'est l'action on va y mettre le fichier .php qui doit s'ouvrir
le **label permet de faire une zone de clique** qui s'étens sur le label'
**button à la fin** dans le form pour valider, le button est par défaut type="submit"
on peut **bloquer la taille du textarea** /resize dans le css pour éviter pb de mise en page
NB si on sort de la page, meme sans soumettre, on peut perdre se données enregistrées, mais maintenant google chrome permet de revenir
on peut créer un css à part pour le form mais ne pas oublier de l'inclure dans le bon tpl'


=> Protocole http : différentes méthodes pour envoyer une requête
**headers infos recues par le serveur, contient notamment la méthode GET ou POST**
inspecteur=> network headers ,payload (les données envoyées)
##On va envoyer les données du formulaire vers machin.php
**action vide** renvoie à la page php 
Si on ne met pas de méthod http avec method="" dans le form=>c'est par défaut get', ça l'affiche dans la barre url, c'est la **query string'** sous la forme?number=1
on peut mettre "post" pour envoyer au serveur" => ça l'envoie au serveur', ça se voit pas côté client
Du côté du php, pour récupérer, on se demande d'ab si on a reçu des données. 
On utiliseune **variable super globale $_POST** tableau qui contient toutes les données, dés qu'il y a une réponse à une requête cette var se remplit !'
cette var est tjrs présente mais vide àla base.
On vérifie si on a reçu les données => on traite le formulaire, on envoie à la bd, on envoie un mail etc on prévient l'user qu'il aura une réponse avec un message à l'écran etc'...
**exit**
sinon on recharge le formulaire . Donc on va vérifier que count($_POST)>=1
Si on recharge la page (sans revalider), elle sont toujours dans $_POST
en arrivant sur la page on est en get, en validant on va en post
On crée des variables pour enregistrer les infos du $_POST, si possible en prenant le nom de la clé
puis on affichera un tpl spécifiq

nb vérifier ce qui correspond à **empty())** car par exp 0 est empty
il y a aussi **$_GET** on peut mettre des trucs ds la barre url pour faire get 
, pour recuperer les infos ds la query string de la barre url

##TEMPLATES :
.tpl.php
le **template crrspd en qque sorte à l'html**, le **php pur** au css ??'
header.tpl.php main.tpl.php et footer.tpl.php
On fait un tpl par page , en plus des parties qui se répétent
**include 'templates/index.tpl.php' ou  require (ça va s'arrêter avec le require mais continuer avec le include')**
Il vaut **mieux utiliser require** pour éviter que le site continue
les données, variables, tableaux à part,on les sort du tpl et on les met ds le fichier.php principal
 attention à les **importer avant les templates qui les utilisent**, on les met dans la page concedrnée genre ensalle.php par exple
effeacer les commentaires dans lehtml !?? pas s'il est dans le php, il se verra pas,c'est pas grave'
**Bien reoérer le variant**, si c'est un kfichier, remplacer ce fichier, laisser le chemin s'il est commun'
**mettre les data en haut les include en bas dans les .php**
**<?= $title; ?> à la place de <?php echo $title; ?>**
**Dossier inc** pour include càdire des bouts de code 
**le header et le footer st dits des *partiels** comme ils st réutilisés

#BOUCLES

-->  **WHILE** si on connait pas la fin/nb d'itérations à l'avance
--> Trois manières d'écrire le php'
1/ **php dans html** , le mieux : on ouvre la balise php et on la ferme avant l html à boucler puis on refeme l'accoladed après 
2/ **html dans php**
OU BIEN **manière alternative** :
3/
au lieu de for {} on écrit /ça marche pour if else aussi /
**for() : ...endfor;**
ou bien **if : else : endif ;**
##travailler les dates convertir en timestamp=> cvertir son php en francais avec timezone



##TYPES ET TABLEAUX
types scalaires => une donnée
écrire le tableau avec les crochets puis aller à la ligne et mettre les données
indenter pour la lisibilité
Dans l'absolu faire un tableau qui contient des **tableaux associatifs** pour mieux ranger'
**print_r**($tab);
**isset()**;
**empty()**;
**unset** (tabl[x]) va vider la case x qui reste vide, copier le tableau ds une nv var avec array=array_values(anctableau) ; pour réindexerc correctmt




##########################################################################################################################################################
################## SAISON1 - HTML/CSS ########################### 
##########################################################################################################################################################

#RACCOURCISCLAVIER
ctrl + D ou ctrl+maj+L pour sélectionner toutes les occurrences d'une variable pour changer son nom par exple
ctrl + maj pur se déplacer et les flèches
alt gr 7 moru accoladesparentheses
ctrl shift R pour chromium recharger
F12 disable cache dans network

#VSCODE
on peut chercher un mot ds ts les dossiers avec la loupe
ctrl +D pour sélectionner l'occurence suivante / ou ctrl + dble clic'
file preferences settings taper indent workbench tree indent
on peut rechercher et remplacer dans le dossier ds l'explorateur !
pour créer un nv fichier ds un nv répertoire, on pt le faire direct ds l'explo vscode css/style.css par exp'
ctrl + J pour ouvrir le terminal ds vscode
ctrl maj : => commentaire de bloc

#SHELL
rm -rf nomDeDossier tout effacer dossier + fichiers
ctrl + L clear
ll crrspd ls -al pour voir les fichiers cahcés aussi
rm -r, rmdir ça marche que pour un dossier vide
| le pipe transmet le résultat de la commande à la prochaine commande
le grep c pour sélectionner un bout de résultat par expression régulière
env pour voir les variables d'evrnmt' comme , le path va être le chemin vers les exécutables etc...  les avariables d'evrnmt st accessibles par ts les programmes de l'os quoi'
!! reporend toute la commande
!$ reprend le dernier argument de la commande
chmod 777 (un chiffre pour u l autre pour g l autre pour o) ou chmod ugo=rwx par exemple (on pt mettre uet ou g o et +- ou = )

#youtubeur /dev
sheshounet - micode - botch etc
voir le livecode seo de frederick allende sur slackpro
scalezia youtubeuse a fait decollé le ca d un entrp avec le seo
bruno simon : site jeu

#GIT
git add .  git commit -m "jhg" git push
pour partager son dossier avec son collab : settings=>collab & teams => add people
git reset head pour enlever les modif indexées . avec --hard on supprime meme les modifs dans le code
 (à veérifier) => C vrai!!

#DOSSIER PROJET PROFESSIONNEL POUR LE TP
remplir au fur et à mesure
vérifier avec clara si on rajoute des choses perso
cf kourou fiche recap pas à jourmais liens à jour
si on fait le projet à plusieurs, bine expliquer l'ensemble du projet vite mais surtout ce q'uon a fait nous
noter au fur et à mesur pour ne pas olubjliedr'
attned re quand même l a finde la saison 01-02
faire le dossier pro avant l'apothéose' 
cf iddees en fin de saison 2
il doit prouver qu'on a ttes les compétences'
composants métier=> exigeneces liées aux demdes du client/son métier
POUR LE TP c'est utilie de montrer le wireframe et la maquette avant de montrer le projet'
Bien attention au SEO, meme pour la maquette


#RACCOURCIS UTILES
CTRL+MAJ+R (rafraichir le cache); F5 
CTRL+MAJ+/ commentaire  ou ctrl+ /
touche windows + flèche de gauche/droite => met le navigateur sur une moitié d'écran'

#CSStrucs en plus
dans l insepcteur computed :on voit les valeurs par zdéfaut
BEM -- corrspd au modifier block__element--modifier le modifier s'applique àléélément ou au block'
#CSS COURS 1
priorites css **id>classname>tagname**
poue le SEO, ***un seul h1 par doc*** 
selon besoins SEO, utiliser balises em strong etc.. pour styliser et que ça soit pris en cpte dsle SEO,  sinon CSS uniqmt 
attention à l'héritage
SI plusieurs éléments portent le même ID, c'est le 1er élément qui sera ciblé
**text-align** center ne fctne pas pour ts les éléments, que pour les type blocs
**les blocs prennent 100% de la largeur de la page ou du parent**
à tester : centrer un span qui est ds un block h1 par exp, on pt ctrer span en faisant text-align sur h1
**tailles** : em est relatif à la taille de l'élément parent => c pratique pour que les éléments soient proportionnels.
1em en général, 4em titre
On peut mettre des décimales genre 1.2em
Par défaut **1em=16px** , ms sinon il ft le définir
**capitalize** pour mettre la première lettre en maj
**qd on surligne**par exp ""div p"  ds css, on voit à quoi ça crrspd dsle html
**inspecteur => user agent stylesheet= style défini par le navigateur** => 
1/pb du rendu différent selon les navigateurs
2/
2 possibilités pour mettre à plat a/ reset css et b/ normalize css 
certs frameworks intégrent les reset css
avec le **reset**=> il faudra tt redéfinir
avec le **normalize** => tout est uniformisé, ttes les balises st définies de la même manière, peu importe le navigateur:plus long
cf slide fiches recap 
le normalize est, un peu comme wordpress, simplifie la mise en forme
mais si on a bcp de modif, mx vt utiliser un reset
ON VEUT LA MEME MISE EN PAGE POUR TOUS LES NAVIGATEURS
Le fichier reset ou normalize à mettre avant ds le css 
**box model** sur elements type block 
box=contenu+pad+marg+border
utiliser box-sizing border-box
si le contenu déborde et que width et height st pas définies, la box s'adaptera'
**sélecteur universel**  ''*'' 
maigin :  0 (vertic) auto (herztal) ; centre l'enft poar rap au parent
challenge taille fixe 
**container** 800px en général
**marges** si deux valeurs la première verticale ,la deuxième hrztale
**petit truc pour voir sa div si on n'a pas encore de contenu** : on met un min-height'
**petit truc pour voir les propriétés css de l'élément'** : ds l'inspecteur, aller sur Computed
**centrer image**=> &/ sur le parent, on utilise text-align :center ;
**inline** margin ne marche pas ?? à verifier qd même  span,a, img,
**taille du bloc** la taille s'adapte au contenu '
**font** taille de base 400   copier le link ds l html puis dans style utiliser font-family
**::after content** :src'url d'une icone' _>verifier, rechrecher   content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
**background-image** pour mettrel'image ds le fd , sur une div dimensionnée
**transparence** opacity ou rgba
**float** si l'image est plus grande que le texte, ça déborde' Il faut donc utiliser la propriété clear en créant à la fin de l'élément un nv élément sur lequel on fait un clear:both'
**inline-block** va permettre à un élément inline d'avoir des margin , d'utiliser text-align /vertical-align, spécifier ses dimensions
**flex** : flex-direction / justify-content / flex-wrap /  Dans l'inspecteur in i y a un flexbox editor' en cliquant sur l'élément flex
attention qd on a row-reverse, le début et la fin st aussi inversées
Pratique sur flexbox froggy : mes observations
order : pour changer l'ordre d'un item'
flex-flow : column wrap ; equivaut à flex-direction : column ;  et flex wrap : wrap ;
Ceci peut être déroutant, mais align-content détermine l'espace entre les lignes, alors que align-items détermine comment les éléments dans leur ensemble sont alignées à l'intérieur du conteneur. Quand il n'y a qu'une seule ligne, align-content n'a aucun effet.



#COOKIES
ça récupère les infos trackées, par exp le survol de la souris sur une vignette youtube!! ça permet de cibler les pubs
RGPD tracking des données perso cf site de la CNIL et suivre le slack pro
bunny fonts ne tracke pas les polices
s'nformer sur le tracking, le rgpd
cf live de frederic sur le rgpd et le seo


#DIVERS
sudo apt install tree ( pour afficher l'arborescence des fichiers ds la console)
./ dossier courant
../dossier parent

#EMMET
html:5
faire tab pour cpléter
h3*3
h3 tab =>ferme la balise
h3+p*3 
lorem 800 tab => crée un txt aléatoire de 800 mots
link:css =>crée direct le link css
span.lenomdetaclass   pour écrire direct la class ds le span

#HTML 
Bien vérifier la langue dans la balise doc 
Un seul h1, un seul main pour le SEO ,
Utiliser la sémantique :<main> <section>
balise <strong> /<mark> peut en qque sorte servir de class pour mettre en avant certs mots 
utiliser l'unicode du caractère spécila pour l'afficher ds l'html (exp "<")' ms ça marche avec le code html ou le code asci 
**balises** que j'utilise peu aside article'=> pour les articles d'un magasin par exp'
**appuie long** sur mollette => ferme l'onglet = ctrl maj T'
**liste de liens** utiliser nav ou ul pour une liste de liens
#TERMINAL
ctrl+alt+T pour ouvrir un terminal
cat voir le ctenu du fichier
touch créer un fichier
histoty ou ctrl +R
clear => effacer la console
ls -R ( voir ts les fichiers et dossiers )

#LIVESHARE
On peut choisir de voir le curseur d'un participant, en bas


#VSCODE
affichage=> retour chariot/word wrap auto alt Z
terminal =>nv terminal 
ctrl J
on voit les chgmts ds vscode
extension rainbow indent à tester

Rajouter raccourci pour écrire plus vite la balise php
- Fichier
- Préférences
- Configurer les extraits de l'utilisateurs
- Sélectionner HTML.json (HTML)
 - Coller ce bout de code
"php": {
    "prefix": "php",
    "body": [ "<?php $1 ?>" ],
    "description": "php tag"
}

#GOOGLE extension 
colorzilla
simple ruler pour mesurer => cliquer en ht à g puis en bas à d

#CLE SSH
aller sur ssh ds git
copier
git clone + le bt de code
=>ça a cloné le dossier directmt sans télécharger
(mais suivre tuto de la fiche recap au prealable)

#MARKDOWN
a une mise en forme auto ressblt au html
fichier txt avec mise en page auto
avec # devant gros titre=niv1
avec ## titre niv.2
entre ** => en gras
entre * => en italique
``` + nom du langage  codeAInserer```
appuyer sur la loupe /ctrl maj v ds vscode pour voir l'aperçu
liste à puces = -
liste ordonnée 1. etc....
lien entre crochets
![] (lien de l image)
aller a la ligne rajouter des espaces à la fin de la ligne
