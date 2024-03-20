#Installer
composer create-project symfony/skeleton 
composer require symfony/apache-pack
dépalcer kes fichiers de skeleton vers la racine
sudo chmod -R 777 var
composer require symfony/profiler-pack
composer require http-foundation	
composer require --dev symfony/maker-bundle
composer require symfony/orm-pack =>doctrine


cf comolser require webapp noter ce que ça comprend

configurer le .env.local 
**pour essayer tailwind
composer require symfony/asset-mapper symfony/asset symfony/twig-pack
ou
composer require symfony/webpack-encore-bundle

For the prod environment, before deploy, you should run:
php bin/console asset-map:compile


#Lancer serveur
php -S 0.0.0.0:8000 -t public
===========================================
#Commandes extra utiles
bin/console make:controller nomDuController	
bin console/autowiring	
**trucs qu ej'oublie
recuperer l'user ds controller avec le service security
        $user=$this->security->getUser();
recuperer l'user ds tpl avec app.get.user

==============================================
Créer les routes
On crée le controller ()avec lemaker si on veut)et les routes dedans
On crée le tpl

===================
Créer la db avec doctrine

