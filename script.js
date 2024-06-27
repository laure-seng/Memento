//commentaire pour du beurre
//probleme avec affichage du menu
// reformuler les element.style.prop par ajout/toggle classlisst
// POURQUOI JE N4ARRIVE PAS A creer le bouton COLLER specifique à chaque carte?
// ==> utilsier la fonctin dans une classe ? méthode de classes ?
// ne pas prendre l'erreu à la légère concernant le pb du copy2clipboard c peut etre ça le pb !!!
// Idees de fctionnalites en plus : mettre en favoris / création de sa propre carte en rajoutant via un formulaire
//Factoriser les langages
//TODO faire un objet qui contiendrait les couleurs du background des keywords, les images, les eventListener etc selon le type de carte 


//rajouter le langage aux data de type tableau
const body=document.querySelector("body")
const li=document.getElementsByTagName("li")
let keywords= document.querySelector("#keywords")
const keywordsWrapper= document.querySelector("#keywordsWrapper")
// const leftMenuSpan= document.querySelector("#left-menu-span")
// const leftMenu= document.querySelector("#left-menu")
// const leftMenuWrapper= document.querySelector("#left-menu-wrapper")
const wrapper= document.querySelector("#wrapper")
let cards=document.querySelector("#cards")
let  keywordList=[]
let  keywordListAlphaSort=[]
let  keywordLinks=""

const HTMLfilterLink=document.getElementById("HTMLfilter")
const CSSfilterLink=document.getElementById("CSSfilter")
const JSfilterLink=document.getElementById("JSfilter")
const TAILWINDfilterLink=document.getElementById("TAILWINDfilter")
const PHPfilterLink=document.getElementById("PHPfilter")
const SYMFONYfilterLink=document.getElementById("SYMFONYfilter")
const BDDfilterLink=document.getElementById("BDDfilter")
const HOSTINGfilterLink=document.getElementById("HOSTINGfilter")
const LINUXfilterLink=document.getElementById("LINUXfilter")
const NEWSfilterLink=document.getElementById("NEWSfilter")
const OTHERSfilterLink=document.getElementById("OTHERSfilter")
const ALLfilterLink=document.getElementById("ALLfilter")

const datas = [
    // {
    //     nom : "TRAME TABLEAU" ,
    //     datas : [{"vide":"vide"},
    //             {"item2":"item2"},
    //             {"item3":"item3"},
    //             {"item4":"item4"},
    //             ],
    //     tableau : true,
    //     type : "NEWS"
    //     },

//     {
//         nom : "TAILWIND POST CSS" ,
//         definition : [ 
//         "", 
//         "", 
//         "", 
//         "",] ,
//         example : [ 
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//     ],
//         type : "CSS"
// },


    //RAJOUTER LE TRUC POUR FR SOB PROVIDER CUSTOM ET AUSSI DATE IMMUTABLE
// Fiche PHP new DateTimeImmutable pour créer une date et format () pour formater la date

    {
        nom : "NGROK" ,
        definition : [ 
        "tunnel pour fournir un lien pour servir ", 
        "installer ngrok cf lien sur le site", 
        "lancer vscode et le live server ", 
        "puis lancer ngrok http + le numéro du port",
    "copier le lien et le partager"
    ] ,
        example : [ 
        "",
    ],
        type : "HOSTING"
},

{
            nom : "TAILWIND TEXT COLORS " ,
            definition : [ 
            "Il y a des classes utilitaires très pratiques pour la couleur du texte : ", 
            "1/ choix d'une couleur", 
            "2/ contraste élevé", 
            "3/ teinte plus claire que celle spécifiée",
            "4/ teinte plus foncée que celle spécifiée",
            "5/ couleur du texte transparente",
            "6/ Et il y a des classes qui crrspondent au thème du site en général, sans spécifier la couleur :",
            "NB : ça marche aussi avec les couleurs définies par défaut ? ptet pas  ;) ",
        ] ,
            example : [ 
            "1/ text-red-500", 2/ "text-red-500-contrast/ 3/ light/4/dark/ 5/ transparent",
            "6/ text-neutral-content, text-muted, text-body, text-heading ",
            "NB : text-accent-contrast , text-primary-light => à retester ?? "
        ],
            type : "TAILWIND"
    },



{
            nom : "SQL CLI - debug déploiement" ,
        datas : [{"mysql -u root":"lancer en root sans mdp"},
                {"SELECT user, host FROM mysql.user;":"voir ts les users"},
                ],
        tableau : true,
        type : "BDD"
},
{
    nom : "HOSTING DEBUG SECURITE" ,
datas : [{"voir les IP qui se sont connectées":"last -i"},
        {"monip.org":"voir mon ip"},
        {"sudo apt-get install auditd audispd-plugins" : "installer un démon de sécu pour l'audit"},
        {"sudo auditctl -w /chemin/vers/fichier_ou_repertoire -p wa -k surveillance_ip":"configurer le fichier d'audit"},
        {'sudo ausearch -k surveillance_ip | grep "104.248.139.71"':'examiner'}
        ],
tableau : true,
type : "HOSTING"
},

{
            nom : "TRUCS A PENSER A NE PAS OUBLIER /A TESTER SYMFONY  " ,
            definition : [ 
            "Quand on crée des propriétés ds une entité, mettre les contraintes de validation, les null, les valeurs par défaut", 
            "C mieux de créer une requete personnalisée pour l'appeler dans la comande personnalisée que de fr trop de requetes sql'", 
            "Eviter de fr des requetes pour rien", 
            "NB si on vt mettre des elements aléatoirement null utiliser if (mt_rand(0, 1)) {",
            "A/ on pt utiliser l'em pour recuperer les entites, qd y a bcp d'entités à traiter dc trop de repository à injecter",
            "B/ nvelle syntaxe d'injection 'ds constructeur",
            "Si on a plusieurs choses à tester, les mettre ds un tableau associatif pour éviter de faire plein de if (cf episode 16 symfo)",
            "C/si je protege un truc côté front le protéger coté back Si j'ai enlevé le form en front=> enpecher de le créer en back",
        ] ,
            example : [ 
            "A/ $shows = $this->entityManager->getRepository(Show::class)->findAll();",
            "B/ public function __construct(private MailerInterface $mailer,private $ownerMail) {}",
            "B/ pour Request : public function __construct(private RequestStack $req",
            "C/if (!$question->isActive()) {throw $this->createAccessDeniedException('La question est bloqué');}"
        ],
            type : "AUTRES"
    },
    {
        nom : "TAILWIND CUSTOM CLASS" ,
        definition : [ 
        "1/ Projet Vite : Dans src/index.css",
        "2/ Projet Symfo avec WebPackEncore : dans assets/styles/app.css"
        ] ,
        example : [ 
        "1/ @layer components {",
        ".maClasse { écrire son CSS vanilla}",
        "}",
    ],
        type : "TAILWIND"
    },
    {
        nom : "PDF AVEC SYMFONY" ,
        definition : [ 
        "1/ Se rendre à https://github.com/KnpLabs/KnpSnappyBundle",
        "2/ Rajouter la ligne ds le fichier config/bundles.php",
        "3/ S'il manque wkhtmltopdf nanana, a/ installer les fonts",
        "3/b/ Aller à : https://wkhtmltopdf.org/index.html et télécharger le .deb ",
        "3/b Ds le répertoire de téléchargements, exécuter : "
    ] ,
        example : [ 
            "2/ return [",
                "//...",
                "Knp\Bundle\SnappyBundle\KnpSnappyBundle::class => ['all' => true],",
                //...
            "];",
            "3/a/sudo apt-get install -y",
            "3/a/sudo apt-get install -y xfonts-75dpi",
            "3/b/sudo dpkg -i wkhtmltox_0.12.6-1.focal_amd64.deb"
    ],
        type : "SYMFONY"
    },
    {
            nom : "CODES HTTP SYMFONY RESPONSE" ,
            datas : [{"200":"HTTP_OK"},
                    {"201":"HTTP_CREATED"},
                    {"204":"HTTP_NO_CONTENT"},
                    {"302":"HTTP_FOUND"},
                    {"204":"HTTP_NO_CONTENT"},
                    {"400":"HTTP_BAD_REQUEST"},
                    {"401":"HTTP_UNAUTHORIZED"},
                    {"403":"HTTP_FORBIDDEN"},
                    {"403":"HTTP_FORBIDDEN"},
                    {"404":"HTTP_NOT_FOUND"},
                    {"405":"HTTP_METHOD_NOT_ALLOWED"},
                    {"422":"erreurs sémantiques sur l'entité"},
                    {"500":"erreur serveur"},
                    {"504":"HTTP_GATEWAY_TIMEOUT"},
                    ],

            tableau : true,
            type : "SYMFONY"
            },
        {
        nom : "Créer un JSON WEB TOKEN JWT avec Symfony" ,
        definition : [ 
        "C'est plus sécurisé qu'une clé API", 
        "1/ Composant LexikJWT-cf doc https://github.com/lexik/LexikJWTAuthenticationBundle/blob/3.x/Resources/doc/index.rst#getting-started ", 
        "2/Créer une paire de clés qui seront ds /config/jwt", 
        "Par défaut la durée de la clé est de 3600b secondes",
        "3/ Paramétrage de l'app, copier la doc : ds a/security.yaml puis ds b/routes.yaml->ça crée une route api/login check",
        ""
    ] ,
        example : [ 
        "1/ composer require lexik/jwt-authentication-bundle",
        "2/ bin/console lexik:jwt:generate-keypair",
        "",
        "",
        "",
        "",
    ],
        type : "SYMFONY"
    },
    {
        nom : "CORS error et Symfony" ,
        definition : [ 
        "La CORS c'est qd un nom de domaine vt accéder à un autre nom de domaine", 
        "1/ ds certs cas, on va vouloir enlever cette restriction. On va dc utiliser le nelmio CORS bundle ", 
        "ca a rajouté le fichier package/nelmioCOrs.yaml", 
        "2/ On y spécifiera les domaines à accepter en rajoutant",
        "",
    ] ,
        example : [ 
        "1/ composer require nelmio/cors-bundle",
        "2/ paths:'^/': # allow_origin: ['*']",
        "2/ paths:'^/': # allow_origin: ['nom_de_domaine_autorisé']",

    ],
        type : "SYMFONY"
    },
    {
        nom : "CREER UNE API AVEC SYMFONY - Approfondir 3/3" ,
        definition : [ 
        "1/ Renvoyer un json d'erreur en cas d'absence de l'item recherché: on rd la propriété nullable", 
        "", 
        "", 
        "",] ,
        example : [ 
        "1/ Exp ds le param de la méth Genre $genre = null ",
        "1/ et ds ->json(['error' => ['message' => 'Genre inexistant']],Response::HTTP_NOT_FOUND);}",
        "",
        "",
        "",
        "",
        ],
        type : "SYMFONY"
        },
        {
        nom : "CREER UNE API AVEC SYMFONY - Create 2/3" ,
        definition : [ 
        "1/a/ Précisions sur la syntaxe de ->json(): le 2e param est un code HTTP", 
        "1/b/ le 3e est la redirection, on l'utilse notamment pour les créations", 
        "2/ Méthodo pour le create() : a/ ds PostMan mettre raw->json ", 
        "2/b Rentrer le Json ds postMan et le récupérer avec getContent() ",
        "2/c Le deserialiser ",
        "2/d verifier la recup d'un json ",
        "3/ Validation ds données: on récupère les erreurs avec la méth validate() du service Validator, à importer en param ",
        "4/S'il y a des erreurs, on crée un tabl asso avec la propriété en clé et le message en valeur ",
        "5/On persiste et on flush."
    ] ,
        example : [ 
        "1/Response::HTTP_OK ou200 / Response::HTTP_BAD_REQUEST ou 400/ 500",
        "2/b $data = $request->getContent();",
        "2/c/$movie = $serializer->deserialize($data, Show::class, 'json => format de départ de la data'); ",
        "2/d/ try {$show = $serializer->deserialize($data, Show::class, 'json');}",
        "catch (NotEncodableValueException $exception) {return", 
        "$this->json(['error' =>['message' => $exception->getMessage()]],",
        " Response::HTTP_BAD_REQUEST);}",
        "3/ ValidatorInterface $validator - $errors = $validator->validate($show);",
        "4/ if (count($errors) > 0) {$dataErrors = [];",
        "foreach ($errors as $error) {",
        "$dataErrors[$error->getPropertyPath()] = $error->getMessage();}",
        "return $this->json(['error' => ['message' => $dataErrors]], Response::HTTP_UNPROCESSABLE_ENTITY);}",
        ],
        type : "SYMFONY"
        },
        {
        nom : "CREER UNE API AVEC SYMFONY 1/3" ,
        definition : [ 
        "1/Il faut avoir des routes exprès avec des endpoints donc on va créer un controller particulier, sans tpl", 
        "1/a/ Il sera ds le dossier API. Les routes seront nommées par cvention app_api.../collection/{id}/sousCollection et renverront du JSON(->json(de l'aBstractController) cf exp5/", 
        "On n'oubliera pas la méthode ds la déf de la route",
        "1/b/Par souci d'ordre, ranger les endpoints par entité ds insomnia/postman", 
        "2/Il faut normaliser les entités ayant des relations pour récupérer les infos, on a le composant serializer",
        "3/ Pb des références circulaires ds le cas des relations : 4/5/6/ on pt utiliser les groupes 7/ou ignorer les attributs des relations",
        "4/a Pour chaque entité on va créer un groupe(rajouter la ligne au dessus de Class) et ",
        "4/b pour chq propriété, à l'intérieur, des sous groupes sf pour les relations ",
        "5/ On recuperera que les groupes ds l'entité",
        "6/ C'est pratique aussi pour récupérer ts les items liés à une autre entité, exp ts les films d'un genre",
        "8/exp d'url de l'API ",
    
    ] ,
        example : [ 
        "1/make:controller --no-template",
        "2/composer require symfony/serializer-pack",
        "use Symfony\\Component\\Serializer\\Annotation\\Groups;",
        "4/a #[Groups(['show'])]",
        "4/b/ #[Groups(['showLinked'])]",
        "5/return $this->json($showRepository->findAll(), Response::HTTP_OK, [], [",
        "5/'groups' => ['show', 'castingLinked', 'reviewLinked', 'userLinked', 'seasonLinked', 'genreLinked']]);",
        "6/#[Route('/api/genres/{id}/shows', name: 'app_api_genres_getShows', methods: ['GET'], requirements: ['id' => '\d+'])]",
        "... return $this->json($genre, Response::HTTP_OK, [], ['groups' => ['genre', 'showLinked']]);",
        "7/return $this->json($genreRepository->findAll(), 200, [], [AbstractNormalizer::IGNORED_ATTRIBUTES ['shows']])",
        "http://localhost:8000/products/ ou "
    ],
        type : "SYMFONY"
},
    {
                nom : "EVENTS DS SYMFONY - Events de Doctrine 2/2 à compléter" ,
                definition : [ 
                "Les events Doctrine, aussi appelés LifeCycles Events, st lancés durant la vie des entités", 
                "Il y a prePersist/postPersist, preUpdate/postUpdate, preFlush-attention-)", 
                "3 manières de les écouter : 1/ Lifecycle callbacks 2/Entity listeners 3/ Lifecycle listeners", 
                "1/ public methods ds l'entité ccernée",
                "2/ ccerne une entité",
                "3/ pour ttes les entités, si besoin de partager cette logic entre les entités",
                "1/a ",
                "2/a Créer le service et copier la doc et préciser les propriétés event entity et method",
                "",
            
            ] ,
                example : [ 
                "2/a",
                "name: 'doctrine.orm.entity_listener'event: 'prePersist' entity: 'App\\Entity\\Show'method:'slugifyTitle'",
                "",
                "",
                "",
                "",
            ],
                type : "SYMFONY"
        },
    {
                nom : "EVENTS DS SYMFONY - Events du kernel 1/2" ,
                definition : [ 
                "2 moyens de les lancer :1/ event listener 2/subscriber", 
                "1/ service, à déclarer ds le serv.yml,", 
                "2/ réutilisable comme il ctient la descript de l'event", 
                "2/a/ créer avec le maker",
                "2/b/ choisir l'event auquel on se branche==etape avant qu'on écoute",
                "2/c/ mettre la logique ds onKernelController ",
                "2/d/ si on a besoin d'envoyer des variables à twig,met en param du constructeur du subscriber",
                "2/f/ et rdre la var globale",
                ],
                example : [ 
                "2/a bin/console make:subscriber",
                "2/b/ kernel.controller,exception,request,repsonse, vue,",
                "2/d/ private Environment $twig ",
                "2/f/ $this->twig->addGlobal('nomDelavar', saValeur);"
            ],
                type : "SYMFONY"
        },
{
        nom : "DATES AVEC PHP Strings date() 1/2" ,
        datas : [{"Avoir la date du jour en string ":"date(('Y-m-d') => 2023-03-14" },
                {"Avoir la date du jour en string ":"date('l, F j, Y') =>  Tuesday, March 14, 2023"},
                {"Changer la timezone avant de date()":"date_default_timezone_set"},
                {"time()":"rvoie le current TimeStamp => cvertir en date string avec gmdate() "},
                {"gmdate() est similaire ) date() ms tjrs sur UTC timezone":""},
                {"Meth.utiles pour la localisation":"setlocale() ,strftime()"},

                ],
        tableau : true,
        type : "PHP"
        },
        {
            nom : "DATES AVEC PHP Object DateTime() 1/2" ,
            datas : [{"Avoir la date du jour en objet ":" new DateTime('now');" },
                    {"On pt le formater avec format() en string ":"$date->format('Y-m-d') => 2023-03-14"},
                    {"Cf comme précédemment":"->format('l, F j, Y');  =>  =>  Tuesday, March 14, 2023"},
                    {"Changer la timezone sur DateTime() avec setTimezone() )":"$date->setTimezone(new DateTimeZone('UTC'));"},
                    {"Changer la timezone sur DateTime() en passt en 2nd arg un timezone str ou DateTimeZone obj":"$date = new DateTime('now', new DateTimeZone('UTC'));"},
                    {"Meth.utiles de Datetime()":"createFromFormat(),add(), sub(), diff()"},
                    {"Ajouter un jour" :"$date->modify('+1 day'); "},
                    {"On pt comparer 2 DateTime avec opérateurs":"< > <= >="}
                    ],
            tableau : true,
            type : "PHP"
            },
    

{
            nom : "CREER UNE COMMANDE CUSTOM AVEC SYMFONY" ,
            definition : [ 
            "1/ On pt créer ses propres commandes du style bin/console macommande qui extends Command", 
            "2/ On l'appelle app:maCommande pour la disitnguer des commandes de Sf", 
            "ça crée le fichier maCommande.php ds le dossier Command", 
            "Plusieurs parties ds le fichier ABCD :",
            "A/ Rajouter le constructeur si nécessaire pour injecter les services",
            "B/ configure() ctient des params, la description(--help) etc..",
            "C/ execute() les commandes à exécuter",
            "NB pour les erreurs il suffit de mettre throw new Exception pour interrompre la commande",
            "D/ Pour styliser on a $io, qui hérite du SymfonyStyle et a plein de propriétés cf doc",
            "3/On pt rajouter des arguments (mot espacé d'un espace et ds l'ordre) et dse options(--machin)",
            "B/",
            

        ] ,
            example : [ 
            "app:maCOmmande argument1 argument2 --option",
            "D/ $io->success,->error,->title",
            "throw new Exception('actions valids are 'activate' or 'deactivate'');",
        ],
            type : "SYMFONY"
    },
    
{
            nom : "REQUETES HTTP API" ,
            definition : [ 
            "Pour fr des requêtes client en PHP, on a la lib Guzzle", 
            "Sf a créé le composant httpClient( qui utilise guzzle)", 
            "Pour cet exemple on a créé un service custom",
            "On déclare le HttpClientInterface et la clé en propriétés du cstructeur  ",
            "On met sa clé API ds le .env pour que notre service custom l'utilise", 
            "On précise l'existce de notre service ds le yaml",
            "1/a On crée la méthode fetch(par exemple) pour créer une $response qui aura bcp de méth dt getContent()",
            "1/b L'url sera ds une variable ",
            "1/c query permet de rajouter des paramas en queyparams cf ds la querystring ?clé=valeur...",
            "1/d/ conversion du Json en tableau asso avec toArray()",
            "",
            ] ,
            example : [ 
            "composer require symfony/http-client",
            "1/apublic function fetch(string $title)",
            "1/b/c/$response = $this->HCI->request('GET',self::URL,['query' => ['apiKey' => $this->apiKey,'t' => $title]]);",
            "1/d/ $content = $response->toArray();",
            "return $content;"
            ],
            type : "SYMFONY"
    },
{
    nom : "Service dans Symfony " ,
    definition : [ 
    "C une classe avec des fonctionnalités", 
    "On l'injecte grâce au service container ds nos controllers ou ds le constructeur de nos entités", 
    "ça sert à rendre notre code plus lisible et maintenable(factoriser)",
    "Il y en a bcp intégrés à Symfo ms on pt créer les nôtres A/B/C/",
    "1/pour les lister",
    "A/ Créer un fichier MonService.php avec son namespace ds dossier src/Service ",
    "B/ Ds ce fichier créer le constructeur et injecter les services qu'il utilise(éventuellemt) ",
    "C/ pour que le service st reconnu, le déclarer ds services.yaml",
    "C/1 son fQCN et C/2 les argumts =>variable ds fichier.env",
    "qd le cteneur de service va instancier MonService, il va voir ds servyaml qu'il ft aller ds le.env récupérer la var",
    "ds le .env"
] ,
    example : [ "1/ php bin/console debug:autowiring --all",
    "B/ Exple : public function __construct(private MailerInterface $mailer) {...}",
    "C/1 Exp : App\\Service\\MailerService:",
    "C/2 $ownerMail: '%env(OWNER_EMAIL)%'", 
    "D/ OWNER_EMAIL=...@gmail.com","",
],
    type : "SYMFONY"
},

{
            nom : "MAILER DE SYMFO" ,
            definition : [ 
            "1/a installer le composant mailer", 
            "1/b installer le transporteur ici Mailjet", 
            "2configs 1/ serveur SMTP=> plus simple ou 2/API", 
            "2/ Préciser ses clés public et privée ds le .env",
            "3/ds le ctroller,typeHinter MailerInterface $mailerinterf",
            "4/ds la méth qu'on vt créer un Email et l'envoyer avec send()",
            "bien mettre $mailerinterface en use",
            "5/ Pour fr un email avec intégration de twig, remplacer Email par TemplatedEmail",
            "et au lieu de ->html() on utilise ->htmlTemplate()",
            "on lui passe des variables avec -->context",
            "Mettre un lien avec absolute_url() sinon ça va l'afficher:)",
            "6/ Css inline ou bundle twig à installer"
        ],
            example : [ 
            "1/a composer require symfony/mailer",
            "1/b composer require symfony/mailjet-mailer",
            "2/ MAILER_DSN=mailjet+smtp://36df9657ba32d60bc9fd67c67ed54112:PRIVATE_KEY@in-v3.mailjet.com",
            "4/ $email = (new Email())",
            "->from('')->to('')",
            "->html('<h1>Un film a été crée</h1> <p>info du film TODO</p>');",
            "$mailer->send($email);",
            "5/ <a href=\"{{absolute_url(path('app_movie_show',{id:show.id}))}}\">cliquez ici",
            "6/composer require twig/extra-bundle twig/cssinliner-extra"
        ],
            type : "SYMFONY"
    },
    
        {
        nom : "TAILWIND : créer des class perso TAILWIND CLI 1/2" ,
        definition : [ 
        "1/ Installer Tailwind pour le dev cf doc", 
        "2/ Ds style.css on rajoute les 3 lignes ", 
        "3/On crée le fichier de config de tailwind qui contient toutes les couleurs préférences etc...", 
        "4/ On génére son css",
        "5/ Ainsi ds le css on pourra a/créer des classes qu'on utiisera b/ds les balises des élements",
        "6/ NB Pour les règles avec : (a/pseudoclass, b/responsive...), il faut le faire ds le css directemt"
    ] ,
        example : [ 
        "2/ @tailwind base; @tailwind components; @tailwind utilities ",
        "3/npx tialwind init --full",
        "4/npx tailwind build fichier_de_css fichier_de_sortie",
        "5/ a/ .maClass {@apply classesTailwind} b/ class='maClass'",
        "6/a/ .maClass:hover",
        "6/b/ @screen md => on ale nested CSS qui fctne ??"
        ],
        type : "TAILWIND"
        },

        {
            nom : "TAILWIND : créer des class perso avec POST CSS 2/2" ,
            definition : [ 
            "1/ Installer Tailwind et les pulgins nécessaires"    ,
            "2/ Créer un fichier postcss.config.js pour importer les plugin", 
            "3/ Pour compiler on va utiliser parcel-bundler?? ", 
            "4/ Ds le html on va linker le fichier css des sources à la place du CDN",
            "5/ On va builder avec parcel => le css va être généré",
            "6/ Pour voir la page on lance le serveur de parcel"
        ] ,
            example : [ 

            "1/ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest",
            "2/ modules.exports = { plugins : [ require('autoprefixer'),require('tailwindcss')]}",
            "voir doc car pas à jour??",
            "5/ npx parcel build index.html",
            "6/ npx parcel index.html"
            ],
            type : "TAILWIND"
            },
        {
        nom : "TAILWIND CLASSES EN VRAC " ,
        datas : [
            {"Tailles possibles(variable)":"xs sm md lg xl 2xl 3xl 4xl 5xl 6xl full"},
            {"background":"bg-couleur-luminosité(100 200 etc)"},
            {"texte taille":"text-xs, text-lg etcc "},
            {"texte font":"font-bold italic font-mono text-gray-800 text-red-500-contrast "},
            {"ombre portée ":"shadow-lg / shadow-inner(intér.) /shadow-outline "},
            {"border":"border border-gray-300 rounded"},
            {"largeur max":"max-w-lg"},
            {"height /width":"h-4(cà dire 1rem)/12(cà dire 3rem)/16/+4...64/auto/px/full/screen"},
            {"marges":"mx(hrztal)-auto , mt(top)-4, p-4, my-2(vertical)"},
            {"display block":"block"},
            {"display flex conteneur":"flex content-center/start/end/between/around justify-center/etc/ +déterminer la height "},
            {"display flex direction":"flex-col flex-row etc..."},
            {"flexbox item":"déterminer la taille de l'img avec object-fit : object-cover/  self-start"},
            {"Pseudo-classes on met : ":"focus:shadow-outline hover: "},
            {"Responsive-4 breakpoints":"sm md lg xl Exple : lg:'class à appliquer'"},
            {"flex-basis pour ne pas agrandit le séléments sur l'item:":"flex-1"},
            {"pour avoir un texte de couleur contrastant avec son fond -contrast":"text-red-500-contrast"},
            {"https://davidpiesse.github.io/tailwind-md-colours/":"couleurs"}
                ],
        tableau : true,
        type : "TAILWIND"
        },
    {
        nom : "TAILWIND " ,
        definition : [ 
            "Classes utilitaires", 
        "On pt utiliser le CDN (facile)", 
        "ou des préprocesseurs CSS comme POSTCSS", "",] ,
        example : [ "","","",
    ],
        type : "TAILWIND"
    },

    {
        nom : "SECURITE AUTHENTIFICATION - VOTER 3/3" ,
        definition : [ "Il sert à fr des permissions selon des conditions précises",
        "1/ On crée un voter qui sera appelé qd on utilisera les fcts isGranted() ou denyAccessUnlessGranted() ds nos controller",
        "En général, on relier le voter à une entité ms c pas obligé", 
        "2/a/ On customise. On va créer des constantes contenant nos $attributes càdire permissions",
        "Le voter a 2 grandes fcts supports($attribute,$subject) et voteOnAttribute($attribute,$subject,$token)",
        "2/NB/$attribute=> tabl.des différentes permissions du projet, $subject l'entité concernée récupérée automatiqmt, $token pour récupérer l'user",
        "2/b/ Ds supports() on vérifie si les $attribute st appelés et si le $subject est lié à l'entité concernée",
        "2/c/ Ds voteOnAttribute(), on met la logique de restrictions.",
        "2/d/On pt créer des propriétés privées en dessous du voteOnAttrib() pour chq fct pour que ca soit plus maintenable.",
        "3/Pour récupérer les rôles ds le voter, on peut importer le security via le cstructeur du Voter puis utiliser isGranted()",
        "4/ Ds le tpl on va aussi utiliser isGranted(), bien préciser le 2e arg($subject) si nécessaire"] ,
        example : [ "1/ bin/console make:voter => crée un voter ds le dossier Security",
        "2/a/ const EDIT = 'edit';",
        "2/NB/ $user = $token->getUser();",
        "$post = $subject;",
        "2/d/private function canEdit($question, $user)",
        "3/ public function __construct(private Security $security,) {}",
        "3/ use Symfony\\Component\\Security\\Core\\Security;",
        "3/ ou plus récent use Symfony\\Bundle\\SecurityBundle\\Security;",
        "if ($this->security->isGranted('ROLE_SUPER_ADMIN'))",
        "4/ {% if is_granted('QUESTION_EDIT',question) %}",
    ],
        type : "SYMFONY"
    },
    {
        nom : "SECURITE AUTHENTIFICATION - USER CRUD -qqs tips 2/3" ,
        definition : [ "1/ Pour répéter le mot de passe ds le form UserType",
        "2/ Dans le controller User,si le form est validé, hasher le mdp avant envoi en BDD", 
        "3/ Pblématiq : si on veut afficher l'option mdp dans le form de création  ms pas ds le form d'edition ",
        "On pt rajouter en 3e arg de CreateForm des options qu'on va nommer ici 'custom_option' par exp",
        "Ds le controller ds la route edit on mettra $form = $this->createForm(UserType::class, $user, ['custom_option' => 'edit']);",
        "Ds le configureOptions(OptionsResolver $resolver) ... ... 'custom_option' => 'default'  ??? à revoir" ,
        "NB : On peut générer un hash depuis la CLI"] ,
        example : ["RepeatedType::class, https://symfony.com/doc/current/reference/forms/types/repeated.html",
        "$user->setPassword($passwordHasher->hashPassword($user,$user->getPassword()));",
        "NB :php -r 'echo password_hash('ThePassword', PASSWORD_BCRYPT, ['cost' => 13]) . PHP_EOL;'",
        "",
    ],
        type : "SYMFONY"
    },
    {
        nom : "SECURITE AUTHENTIFICATION - ACCESS CONTROL -ROLES 1/3  " ,
        definition : [ "1/Installer le bundle",
        "Ds le fichier config/packages/security.yaml, ça configure le user, le firewall et l'access control", 
        "2/Il ft créer une entité User particulière avec les propriétés password,role", 
        "On utilise généralemt l'email comme discriminant",
        "Ne pas oublier le migrate",
        "3/ ROLES 3/b/L'access control va contenir les routes autorisées, attention à l'ordre",
        "Les rôles st ds un tableau, il y a toujours ROLE_USER d'office ; on écrit les rôles en majuscules par convention",
        "3/a/ On pt établir une hiérarchie des rôles",
        "4/ On crée le form pour se connecter en cas d'interdiction",
        "403 interdiction, 401 manque d'authentification",
        "Il y a même un remember me avec",
        "On pt activer le logout cf doc",
        "5/ On pt hasher le mdp via la console",
        "5b/ Ds une fixture, on importe le PaswrdHasherInterface ds le constructeur pour l'utiliser en param puis on le set ",
        "On va pouvoir fr de laffichage conditionnel en fonction de app.user",
        "6/ La fct is_granted() de twig est pratique pour cela",
        "https://symfony.com/doc/current/security.html#checking-to-see-if-a-user-is-logged-in",
        "7/ "
    ] ,
        example : [ "1/ composer require symfony/security-bundle",
        "2/ bin/console make:user",
        "3/a/ dans le security.yaml, sous les routes , 'role_hierarchy:ROLE_ADMIN: ROLE_MANAGER'",
        "3/b/ - { path: ^/admin, roles: ROLE_ADMIN } ttes les routes commençant par /admin",
        "3/b/ - { path: ^/back.*(new|edit), roles: ROLE_ADMIN} ttes les routes qui contiennent 'edit' ou 'new' ",
        "3/b/ - { path: ^/back.*\d+, roles: ROLE_ADMIN , methods: POST} ça bloque la route delete qui est en POST contrairemt à show ds l'exple",
        "On pt utiliser le mot 'route' à la place de 'path' si on vt mettre les noms des routes ",
        "4/ bin/console make:security:form-login -> crée le securityController et les tpl",
        "5/ bin/console security:hash-password",
        "5b/ use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;",
        "5b/ puis en param UserPasswordHasherInterface $passwordHasher puis $this->passwordHasher->hashPassword($user, 'mdpasse')",
        "6/ {% if is_granted('IS_AUTHENTICATED_FULLY') %} <div du menu de connexion>",
        "6/ {% if is_granted('ROLE_USER'') %}",
    ],  
        type : "SYMFONY"
    } ,
    {
        nom : "EASY ADMIN" ,
        definition : [ "Composant pour créer un backOffice",
        "On choisit la mise en forme ds le DashBoardController", 
        "Il y a un CrudController aussi",
        "3/ On paramètre les fields de l'interface",
        ] ,
        example : [ "composer require easycorp/easyadmin-bundle",
        "bin/console make:admin:dashboard",
        "3/ public function configureFields(string $pageName): iterable etc...",
        "", 
        "",
        "",
    ],
        type : "SYMFONY"
    },
    {
        nom : "BOOTSTRAP" ,
        definition : [ "Cf site copier les lignes pour inclure BS", 
        "Mettre ds un class='container' pour améliorer le rendu",
        "1/pour utiliser bootstrap avec twig, rajouter dans twig.yaml :",
        "https://bootswatch.com/ thèmes pour"
        , "",] ,
        example : [ "1/twig:file_name_pattern: '*.twig'",
        "1/form_themes: ['bootstrap_5_layout.html.twig']",
        "","",
    ],
        type : "SYMFONY"
    } ,
    {
        nom : "FORMULAIRE SYMFONY" ,
        definition : [ "4 étapes côté serveur : 1/ récupération des data, 2/validation sinon réaffichage du form",
        "3/traitement des données (voire enregistremt),4/ redirection (avec un flash message éventuellement) 5/affichage",
        "En symfo, le form est svt relié à une entité", 
        "A/ Installation du composant form B/ création du EntiteType.php, une class étendue de Form", 
        "1/a/ Ds le ctroller, on crée une route en GET et en POST pour afficher et envoyer le form",
        "1/b/ On crée le formulaire avec createForm(classDuForm::class, $entitéLiée), on pt le modifier, lui rajouter des champs",
        "1/c/ Ds le formType, rajouter les params à add('nomDeLaColonne',type(attr,data...), options ds un tableau)",
        "https://symfony.com/doc/current/reference/forms/types.html",
        "1/c/ Exp : 'choice_label' => 'getFullName', permet de choisir une méth custom de l'entité",
        "Attention si on a des valeurs qu'on vt null, rajouter 'empty_data' => '' ",
        "Si on veut une option du select vide, rajouter une option 'placeholder' => 'choisissez'",
        "1/d/ On le trsmet à la vue",
        "2/ Rajouter des contraintes a/dans le formType b/ds l'entité, avant chq propriété (C mieux)",
        "https://symfony.com/doc/current/reference/constraints.html",
        "5/a/b/c/ Ds twig, on l'importe 3 manières abc",
        "5/b/ le row comprend The form_label(), form_widget() (the HTML input), form_help() and form_errors()",
        "https://symfony.com/doc/current/form/form_customization.html",
        "3/Ds le ctroller, handleRequest($request) préremplit les obj;fait le lien entre la requete et le form",
        "si le form est pas valid, les erreurs vt ê réaffichées avec le form",
        "NB : Pour tester en php, il faudra desactiver la validation coté html novalidate",
        "NB2 :Utiliser BS pour le form : rajouter ds config/packages/twig.yaml ",
        "composer require symfony translation pour traduire les mes d'erruers automatiqmt",
        "FakeFiller Extension pour remplir les forms pour test",
        "7/ TAILWIND DS SYMFONY : a/ installer la lib et b/ l'importer ds le fichier twig tt en haut"
    ] ,
        example : [ 
            "A/ composer require symfony/form ",
            "B/ bin/console make:form -> nommer machinType.php et dire à qL entité c lié",
            "1/a #[Route('/add2', name: 'add2', methods:['GET','POST'])]",
            "1/a $post=new Post(); ",
            "1/b/ $form = $this->createForm(PostType::class, $post=obj qui aura les valeurs recues ds le form);",
            "1/b/ rajouter l'option dans le add()'mapped' => false pour rajouter un chp qui n'est pas ds l'entité",
            "1/c/ $builder->add('title', TextType::class, ['label' => 'Titre'], \"attr\" => [\"placeholder\" => \"Jambon du 34\"]\")",
            "1/d/ return $this->render('post/add2.html.twig', ['formPost' => $form]);",
            "2/b/ #[Assert\\NotBlank]#[Assert\\Length(min: 2)] #[Assert\\DateTime] importer en haut 'use Symfony\Component\Validator\Constraints as Assert;'",
            "5/a/{{ form(formPost) }} b/ {{form_start(formPost)}}{{form_row(formPost.title)}}{{form_end(formPost)}} end affiche le reste du form cf form_rest aussi} ",
            "5/c/ https://symfony.com/doc/current/form/form_customization.html",
            "3/ $form->handleRequest($request);",
            "NB1 :{{ form_start(formPost, {'attr' : {'novalidate' : 'novalidate'}}) }}",
            "NB2 : twig:form_themes: ['bootstrap_5_layout.html.twig']",
            "7a/ npm install -D @tailwindcss/forms puis ds le fichier config require :require('@tailwindcss/forms')", 
            "7b/ {% form_theme form 'tailwind_2_layout.html.twig' %}",
    ],
        type : "SYMFONY"
    } ,
    {
        nom : "REQUETE CUSTOM AVEC LE QUERYBUILDER" ,
        definition : [ "On pt dynamiser plus facilement ses requêtes avec", 
        "On crée la méthode ds le repository qui va fr le select sur l'entité concernée",
        "On utilise la première lettre de l'entité comme alias (convention)",
        "si on veut select les éléments de brand il faut bien ajouter le addSelect" ,
        "lance la requete et recupere les résultat"
        ,],
        example : [ "public function findCarWithBrand(): array",
        "{return $this->createQueryBuilder('c')",
        "->innerJoin('c.brand', 'b')",
        "->addSelect('b')",
        "->getQuery()",
        "->getResult();}",
        "",
    ],
        type : "SYMFONY"
    },
    {
        nom : "AUTRE EXEMPLE REQUETE CUSTOM AVEC LE QUERYBUILDER" ,
        definition : [ "Par défaut les requetes faites avec le querybuilder st ds select", 
        "Si on vt faire un update, il faut rajouter -->update et getResult() par execute()",
        "On va lier les paramètres avec ->setParameter ",
        "si on veut select les éléments de brand il faut bien ajouter le addSelect" ,
        "lance la requete et recupere les résultat"
        ,],
        example : [ "public function deactivateOutdated($delay = 7){",
        "return $this->createQueryBuilder('q')",
        "->update()",
        "->where('q.updatedAt < :delay')",
        "->orWhere('q.updatedAt is NULL and q.createdAt < :delay')",
        "->setParameter('delay', new DateTime('-$delay days'))",
        "->set('q.active', 0)",
        "->getQuery()",
        "->execute();}",
    ],
        type : "SYMFONY"
    },
     {
        nom : "RESPONSIVE FONTS" ,
        definition : [ "1/ Utiliser des rem pour les fonts ->fixer ms fr mediaquery avec un RFS comme bootstrap ",
         "2/a techniq on définit la varres en vmin , la vmin est côté le +petit de l'écran", 
         "2/b puis utiliser cette unité",
        "3e tech fct clamp (valeur min,valeur intermediaire,valeur max)",] ,
        example : [ "1/font-size:calc(25px+3.3vw)",
        "2/a  html {--res : calc(10% *0.01vmin)",
        "2/b font-size : calc(64*var(--res) ",
        "3/clamp (35px,5vw,70px)"
    ],
        type : "CSS"
    } ,
    {
        nom : "SYMFONY NELMIO/ALICE FAKER" ,
        definition : [ "1/ Installation",
        "2/ verifier dans /packages/config/framework.yaml que property access est true sinon copier la ligne",
        ] ,
        example : [         
        "1/ composer require --dev nelmio/alice" ,
        "2/ property_access:enabled:true",
        "",
        "",
        "",
    ],
        type : "SYMFONY"
    },
    {
        nom : "SYMFONY Récupération d'un projet" ,
        definition : [ 
        ""
        ] ,
        example : [         
        "composer install" ,
        "bin/console doctrine:database:drop",
        "bin/console doctrine:database:create",
        "bin/console doctrine:migrations:migrate",
        "bin/console doctrine:fixtures:load",
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Fixtures 1/3 - Cas simple" ,
        definition : [ 
        "1/ Installer le bundle",
        "2/ ça va créer AppFixtures.php dans /DataFixtures",
        "3/ Dedans, dans la méthode load(), on rajoute nos setters pour nos objets",
        "3/b/ on informe l'entité manager qu'il y a une nouvelle entité à insérer en BDD",
        "4/ On applique avec flush()", 
        "5/ On les execute mais attention ça vide toute la BDD ! rajouter --append sinon (à tester)",
        "NB si on vt mettre des elements aléatoirement null utiliser if (mt_rand(0, 1)) {"
        ] ,
        example : [         
        "1/ composer require --dev orm-fixtures",
        "3/for ($i = 0; $i < 20; $i++) {",
        "$product = new Product();" ,
        "$product->setName('product '.$i); etc...",
        "3/b/ $manager->persist($show);",
        "4/$manager->flush();", 
        "5/bin/console doctrine:fixtures:load"
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Fixtures 2/3 - Plusieurs fichiers" ,
        definition : [ 
        "1/ Dans AppFixtures, on rajoute 'implements DependentFixtureInterface'",
        "2/ Et la méthode getDependencies()",
        "A revoir ??",

        ] ,
        example : [         
        "class AppFixtures extends Fixture implements DependentFixtureInterface",
        "public function getDependencies(){",
        "return [ GenreFixtures::class,];}",
        "" ,

    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Fixtures 3/3 - Utilisation d'un faker" ,
        definition : [ 
            "1/ On installe la dépendance faker",
            "On a déjà des formatters pour les types de données", 
            "2/ Mais on peut installer un faker provider selon le thème des données qu'on veut (exp : films) ",
            "3/ Dans le load() de l'AppFixtures, on crée un objet Faker ",
            "3bis/ On peut choisir le grain pour avoir tjrs le même random de données",
            "4/ Si on a utilise un Provider, on le rajoute",
            "5/ On crée l'objet et on lui set des propriétés de faker",
            "6/ Pour set une date en immutable et sur une pèriode limitée",
            "7/ Créer son provider, c juste une class AppProvider ds le dossier des fixtures",
            "$faker->unique() pour avoir une valeur unique",
            "NB Si on utilise le random de faker, l'utiliser partout pour avoir tjrs les mêmes données"
        ] ,
        example : [         
            "1/ composer require fakerphp/faker",
            "2/ Exp : composer require xylis/faker-cinema-providers",
            "3/ $faker = Factory::create('fr_FR'); en francais" ,
            "3bis/$faker->seed(1234);",
            "4/ $faker->addProvider(new \Xylis\FakerCinema\Provider\Movie($faker));", 
            "5/ $show = new Show(); $show->setDuration($faker->numberBetween(90,240)); ",
            "5/ $show->addGenre($faker->randomElement($genreList)); etc...",
            "6/ $show->setWatchedAt(DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-30 days')))",
            "7/ puis on setMachin($faker->randomElements($faker->getReactions()))",
            "NB : $show->addGenre($faker->randomElement($genreList));"
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Fixtures : créer son provider pour Faker pour avoir des data custom" ,
        definition : [ 
            "Créer un fichier AppProvider.php dans DataFixtures",
            "Dedans, créer les propriétés sous forme de tableau par exemple et leurs getters",
        ],
        example : [
            "class AppProvider {",
            " private $name = ['lor','coucou','youpi',];",
            " public function getName(){return $this->textileName;}",
            "}",
            "Les utiliser dans AppFixtures.php",
        ],
        type : "SYMFONY"
    },
    {
        nom : "ADMINER Tips" ,
        definition : [ "1/ Penser à créer un user par BDD",
        "2/ On peut changer le style via un fichier adminer.css",
        "3/ On peut voir le schéma de la BDD et déplacer les entités à la souris :) ",
        "4/ On pt voir l'historique des requêtes SQL tapées", 
        "",] ,
        example : [ "","","",
    ],
        type : "BDD"
    },
    {
        nom : "PHP qqs fonctions natives en vrac" ,
        datas : [{"in_array":"cherche si l'item est ds le tableau "},
                {"shuffle($tableau)":"melange le tableau"},
                {"":"  "},
                {"ceil(), floor(),round()":"arrondir"},
                {"array_rand($tableau, nbDElements)": "un ou plusieurs items d'un tableau au hasard"},
                {"curl ou file_gets_contents":"récupérer à partir de requetes http comme fetch en JS"},
                {"$pieces = explode(' ', $pizza);":"coupe le string en mots"},
                {"random_int(min, max)":"entier entre min et max"},
                {"usort()":"usort($films, function($filmA, $filmB) {return $filmA['year'] - $filmB['year'];})"}
                ],
        tableau : true,
        type : "PHP"
    }, 
    {
        nom : "DOCTRINE RELATIONS 2/2 Many To Many" ,
        definition : [ "=>On a 1/n ou 0/n de chaque côté de la relation.",
        "Dans Doctrine, le \"owner\" de la relation est important, c'est celui sur leqL on fait make:entity",
        "il pt y avoir des bugs car doctrine regarde l'état de la table maitre qd on flush",
        "1/ Avec la console, ça va créer la propriété crrspdt au nom de la 2e entité au pluriel dans l'entité 1",
        "On met type=ManyToMany",
        "On répond oui aux questions, on récupérera facilement entite1.entite2s et entite2.entite1s",
        "2/Dans entite.php,on reconnait le owner=maitre par 'inversedBy',l'autre c'est celui qui a le 'mappedBy' ",
        "ça crée une table pivot entite1/owner_entite2", 
        "3/ Ds le controller, on pourra utiliser les méth addEntite2,removeEntite2, et la même pour entite1",
        "Cas particulier : s'il y a des attributs à la relation, il faut passer par une entite intermédiaire classique et les relations one to Many corrspondantes",
        "Les méthodes Collection pvt ê utiles comme clear() pour tout vider",
        "NB : on ne pt pas changer le owner facilement",
        "Au cas où on s'est trompé, virer tt ce qui concerne la relation",
        "et l'autre entité ds chq entité,make:migrate et refaire la relation correctmt",
        "",
        "",
   
    ] ,
        example : [ "1/ bin/console make:entity ",
        "2/",
        "3/ addGenre($genre) ; addShow($show) ;removeGenre($genre) ","",
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE RELATIONS 1/2 " ,
        definition : [ "1/ On crée la relation via make:entity",
        "On choisit le nom de l'entité principale et on lui rajoute une propriété",
        "On choisit comme type 'relation' puis on choisit quelle relation c'est",
        "NE PAS OUBLIER LA MAJUSCULE QUAND ON DIT SUR QUELLE ENTITE SE PORTE LA RELATION",
        "Le nom du champ ds la table doit être au pluriel si c une many",
        "En cas de doute, ne pas mettre yes à delete orphans",
        "ça va créer automatiqmt la propriété du côté du 1 de la relation", 
        "2/ On crée et on applique la migration",
        "3/ On récupère les données ds les views avec la notation pointée",] ,
        example : [ "1/ bin/console make:entity",
        "2/bin/console make:migration",
        "2/bin/console doctrine:migrations:migrate",
        "{{ post.author.firstName }} {{ post.author.lastName }}",
        "% for currentComment in post.comments %}",
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Migrations Debugguer" ,
        definition : [ "1/Relire le fichier de migrations et regarder quel requête n'est pas passée",
        "2/La modifier et l'exécuter dans Adminer et la copier dans le fichier de migration",
        "3/ Cocher dans adminer comme quoi la migration a été exécutée now()" ,
        "Pour modifier la bdd, modifier d'ab l'entité.php et la migration, créer la migration mais ne pas l'appliquer ??",
        "On peut se déplacer dsles migrations avec + ,- , les méthodes up() et down() ",] ,
        example : [ "creuser plus tard","","",
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Présentation" ,
        definition : [ "C'est un ORM data mapper",
        "Contrairement à Eloquent qui suit l'Active Record, les méth. ne st pas ds les Model",
        "On a le trio Entity Migration et BDD", 
        "",] ,
        example : [ "","","",
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE Installation" ,
        definition : [ "1/ Installation de l'ORM pack",
        "2/ On précise si on veut ou non utiliser les recettes de Docker",
        "3/ On copie le .env en .env.local", 
        "NB la bonne pratique est de créer un userpar DB",
        "4/Voir toutes les commandes de Doctrine"] ,
        example : [ "1/ composer require symfony/orm-pack",
        "3/DATABASE_URL=\"mysql://login:mdp@127.0.0.1:3306/nomDeLaBDD?serverVersion=10.11.6-MariaDB&charset=utf8mb4",
        "mysql --version pour avoir la version de notre mysql/mariadb",
        "4/bin/console doctrine",
    ],
        type : "SYMFONY"
    },  
    {
        nom : "DOCTRINE BDD 1/2" ,
        definition : [ "1/Créer une BDD(le nom sera celui précisé ds le .env)",
        "2/a On crée une Entite.php à la main ou via la console c'est mieux",
        "Pour les propriétés 'unique', il faut le faire à la main ds le fichier",
        "La class EntiteRepository(comme elle hérite du serviceEntityRepository)", 
        "possède les méthodes find(), findAll(),findBy(),findOneBy(), ça sert aux SELECT",
        "2/b On précise le nom, les colonnes et les types et on vérifie",
        "Les noms des propmriétés st en CamelCase en PHP ms seront transcrites en snakeCase ds les tables automatiqmt",
        "2/c On applique la migration",
        "2/d On transfère à la BDD",
        "XXX/ ATTENTION : Au cas où, pour virer une BDD ",
        "NB pour rajouter une propriété,on pt aussi le faire direct ds l'entité puis utiliser regenerate()"
        ] ,
        example : [ "1/ bin/console doctrine:database:create",
        "2/a bin/console make:entity => créera le fichier Entite.php et EntiteRepository.php",
        "2/b bin/console doctrine:schema:validate",
        "2/c bin/console make:migration",
        "2/d bin/console doctrine:migrations:migrate",
        "XXX/ bin/console doctrine:database:drop",
        "NB bin/console make:entity --regenerate"
    ],
        type : "SYMFONY"
    },
    {
        nom : "DOCTRINE BDD CRUD 2/2" ,
        definition : [ 
            "1/ Create : ds le controller, on crée une instance de l'entityManagerInterface", 
            "pour utiliser persist() et flush(),l'EMI sert à écrire ds la BDD",
            "2/Read : Les méth.de l'entityRepository ns renverront les résultats sinon",
            "4/Pour effacer : utiliser l'EMI",
            "NB le persist n'est pas obligé sur un update, il est nécessaire qd on crée qqch"
            
        ] ,
        example : [ 
            "1/ public function doctrine(EntityManagerInterface $entityManager): Response{",
            "$genre = new Genre();",
            "$genre->setName(uniqid('genre-'));",
            "$entityManager->persist($genre);",
            "$entityManager->flush();",
            "2/ public function list(PostRepository $postRepository): Response",
            "$articles=$postRepository->findAll()",
            "2/bis typeHint (Show $show) récupérera le show de l'id concerné",
            "4/$em->remove($item); puis $em->flush();",
    ],
        type : "SYMFONY"
    },
    {
            nom : "CARDINALITES" ,
            definition : [ "Soit deux entités A et B", 
            "Le schéma suivant A-(0,1)-- contient--(0,n)-B",
            "Se traduit en", 
            "1 A est contenu par de 0 à 1 B",
            "1 B contient par de 0 à n A",
            ] ,
            example : [ "","","",
        ],
            type : "BDD"
    },
    {   nom : "SQL BASES " ,
        definition : ["SELECT FROM INNER JOIN ON WHERE ",
        "WHERE LIKE '%STRING%'",
        "LIMIT=5 OFFSET=10",
        "ORDER BY colonne DESC",
        "AVG(colonne)"
        ],
        example : [ 
        "SELECT `table1`.`*`,`table2`.`name`AS alias",
        "FROM table1",
        "INNER JOIN table2",
        "ON table1.table2_id = table2.id",
        "WHERE item_id=3",
        "WHERE YEAR(`release_date`) LIKE '1992'",
        "GROUP BY -- si on a utilisé des fonctions d'aggrégations",
        "HAVING -- permet de faire des conditions sur les fonctions d'aggrégations",
        "ORDER BY -- pour ordonner les résultats",
        "LIMIT -- pour limiter le nombre de résultats OFFSET --à  partir de"
        ],
        type : "BDD"
    },
    {   nom : "MOCODO-Créer son MCD" ,
        definition : ["Entité Attribut Association",
        "l'attribut1 est par défaut l'identifiant/discriminant',il sera souligné. ",
        "Il faut un champ discriminant par entité",
        "On rajoute un _ devant un attribut pour le souligner",
        "On écrit l'association sur une ligne",
        "Attention l'ordre compte, le faire comme sur le dessin",
        "Table de liaison=table de relation=table pivot",
        "sauter une ligne pour passer à la ligne suivante dans le schéma",
        ": sur une ligne pour laisser la « case » vide "
        

        ],
        example : [ 
        "Entité : attribut1,attribut2 , etc",
        "Association, cardMinCardMax Entité2,cardMinCardMax Entité1 :attribut de l'association'",
        ],
        type : "BDD"
    },
    {   nom : "NPM NVM install" ,
        definition : ["Installer npm avec nvm et verifier la version ",
        "Et là où il est installé",
        ],
        example : [ 
        "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n",
        "node --version",
        "which node ",
        "which npm ",
        "nvm --version",
        "nvm ls",
        "nvm install 20",
        ],
        type : "LINUX"
    },
    {   nom : "HISTORY" ,
        definition : ["history | grep sass",
        "history et le numéro de la commande",
        ],
        example : [ 
        "",
        ],
        type : "LINUX"
    },
    {   nom : "SASS" ,
        definition : [
        "1/ Installer Sass",
        "2/ Créer un dossier style et aller dedans",
        "3/ Créer un dossier sass et un dossier css",
        "4/ Lancer le serveur sass depuis le dossier style",
        "5/ Les odifications faites dans le fichier style.scss se répercuera sur style.css" ,
        "& fait référence à l'élément parent'"
        ],
        example : [ 
        "npm install -g sass",
        "take style",
        "mkdir sass",
        "mkdir css",
        "sass --watch sass:css sass est le dossier où y a le sass, css où y a le css",
        "&:hover {",
        "@mixin pour mettre le responsiveà l'intér de l'élément"
        ],
        type : "LINUX"
    },
    {
        nom : "SYMFONY ERRORS" ,
        definition : [ 
        "1/ On pt renvoyer une exception avec createNotFoundException", 
        "Attention à passer en mode prod dans le fichier .env pour voir les 404",
        "Sinon en mode dev il faut aller à http://127.0.0.1:8000/_error/404",
        "2/Pour faire ses pages erreurs perso : créer l'arborescence ci-dessous :",
        "Si ds le fichier .env on se met en mode prod, on pt mettre une jolie 404, pour l'utilisateur",
        "templates/bundles/TwigBundle/Exception/error404.html.twig error404.html.twig et 500 etc",
        "on a acces à la var {{ exception.message }}",
        "tester sa page d'erreur http://127.0.0.1:8000/_error/404"
        ] ,
        example : [
        "if (empty($movie))",
        "{throw $this->createNotFoundException('Le film demandé n\'existe pas');}",
        "dans templates : bundles/TwigBundle/Exception/",
        "les fichiers : error404.html.twig,error403.html.twig, error.html.twig "
        ],
        type : "SYMFONY"
    },
    {
        nom : "SYMFONY FLASH MESSAGE" ,
        definition : [ "C'est un message qui apparait et disparait dés lecture", 

        "A creuser cf doc ou notes ??",
        ] ,
        example : [
        "$this->addFlash('success', 'Le film ' . $movie['title'] . ' a été ajouté avec succès');",
        "    {% for message in app.flashes('success') %}"
        ],
        type : "SYMFONY"
    },
    {
        nom : "SYMFONY SESSIONS" ,
        definition : [ "Une session est un tableau protégé par un code", 
        "les infos seront enregistrées ds les cookies",
        "En PHP, $_SESSION et session start()",
        "En Symfo, i lfaut avoir le composant httpfoundations",
        "Car on a besoin de Request",
        "1/Ds le controller, c simple, il suffit d'utiliser Request en param",
        "2/On pt enregistrer en session tout type de variable",
        "3/Et récupérer via les clés",
        "4/Supprimer une paire clé valeur",
        "5/Ou tout",
        "6/Récupérer la variable session partout"
        ] ,
        example : [
        "1/public function hello(string $name, Request $request): Response{",
        "1/$session = $request->getSession(); <= on récupère Request etc..." ,
        "2/$session->set('name', $name);",
        "3/$name = $session->get('name','nomParDéfaut');",
        "4/ unset($moviesInSession[$id]);",
        "5/remove()",
        "{% if app.session.get('favorite_city') %}",
        "{% set favorite_city = app.session.get('favorite_city') %}",
        ],
        type : "SYMFONY"
    } ,
    {
            nom : "SYMFONY recupérer des données" ,
            definition : [ "On récupère les données avec self::mapropriété", 
            "dans le controller, on va récupérer la data et envoyer",
            "les données en param de render(view,données) via un tabl asso",
            "On pt boucler",
            "On utilise la syntaxe pointée pour accéder aux propriétés.",] ,
            example : [
            "{% for currentMovie in movieList %} ... {% endfor %}",
            "{% for currentId, currentMovie in movieList %}",
            "public function list(): Response",
            "{$allMovies = Data::getAllShows();",
            "return $this->render('movie/list.html.twig'",
            "['movieList' => $allMovies]);}"
            ],
            type : "SYMFONY"
        } ,
    {
        nom : "Symfony - TWIG -Bases" ,
        definition : ["1/Installer Twig.",
                "Par défaut, on va mettre les tpl dans /templates",
                "Le fichier base.html.twig sert de patron, on y met le corps commun (header ... footer)",
                "2/ On définit des blocs ds le base.html.twig, il sera remplacé ds les aut twig",
                "3/Les tpl peuvent hériter d'un autre, on réutilise les blocs avec d'autres textes",
                "Ds le controller, on va pouvoir utiliser la méth. render() pour renvoyer des tpl",
                "IL faut bien que le controller hérite de l'AbstractController pour cela.",
                "Un tpl peut être aussi parent d'un autre cf doc.; on pt faire des include de tpl",
                "4/ 2 types de balises : {{texte à afficher}} {% instructions en PHPLike%}",
                "Utilisatin de fonctions prédéfinies avec le pipeline | ;",
                "Fcts natives comme endswith(), match()",
                "Les variables st par défaut échappées pour éviter les injections mais on pt y remédier si on vt",
                "5/a/ Partials ; créer un dossier _partials ds le dossier des twig concernés",
                "et nommer les fichiers avec un _devant, on fait include dans les .twig, include accepte des params",
                "5/b/ Pour passer une variable ds un partial, on le rajouter en deuxième param",
                "6/ Asset() retrouve directement les fichiers du dossier Public(vérifier qu'il est installé",
                "7/ récupérer les données en session ds twig grâce à app()",
                "App Global Variable permet d'accéder à app.user, app.session, app.flashes etcc ",
                "8/Le pipe sert à récupérer les données ds une fonction",
                "9/ Pour définir une variable ds TWIG",
                "Autres trucs  : Activer l'autocompletion du html ds Twig ds VScode : Préférences->Paramètres->",
                "Extensions -> Emmet -> Include Languages puis Ajouter l'élément clé = twig / valeur = html",
                "Twig language 2 extension vsCOde pour compléter les if for etc... "
            ],
                example : [ 
                "1/ Ds le term : composer require twig",
                "2/{% block NomduBloc %} Mon texte par défaut {% endblock %}",
                "3/ Au début du tpl enfant : {% extends 'base.html.twig' %}",
                "4/ {{foo.bar}} affichera la propriété bar de $foo",
                "Autres : ~ pour concaténer, {# commentaires #}",
                "Intégrer vardumper à Twig : composer require --dev symfony/debug-bundle",
                "5/{% include('movie/_partials/_favorite_button.html.twig') %}",
                "5/avec param {{ include('movie/_partials/_favorite_button.html.twig', {currentId: movie.id}) }}",
                "6/ <img src=\"{{ asset('images/logo.png') }}\" alt=\"Symfony!\" />",
                "7/{{ dump(app.session.get('favorite_movies')) }}",
                " {% if favorite_movies[currentId] is defined  %} <html>",
                "{% else %} <html> {% endif %}",
                "{% for %}...  {% else %}... {% endfor %} le else va tester le cas où le tabl n'existe pas",
                "{% if movie in collectionDeMovie%}",
                "8/{{currentData.date|slice(0, 5)}} ou bien {{movie.watchedAt|date('Y')}}",
                "9/ {% set favorite_movies = app.session.get('favorite_movies') %}"
                ],
        type : "SYMFONY"
        },
    {
        nom : "Symfony - Routes +trucs sur url" ,
        definition : ["Il y a différentes manières de créer son tableau des routes",
                "La plus simple est de créer la route directement ds le controller associé",
                "CREER LES ROUTES EN FRANCAIS !!",
                "1/On peut préciser leur nom, la méthode HTTP les paramètres et le type des paramètres(requirements)",
                "ça peut se faire avec les regex ;on peut mettre des valeurs par défaut $id=1 ;",
                "2/On rappelle le type ndu param ds la méthode qui utilise le param",
                "3/ On peut générer les url avec path() pour les liens et ça facilitera les éventuels changements",
                "4/ Pour debugguer les routes : via la console ou via la variable app",
                "5/On pt définir des racines aux routes en mettant une ligne juste avant class MonController",
                "routes.yaml",
                "6/Redirection avec redirectToRoute()",
                "Chercher la route ds le dum avec CTRL+f",
                "Récupérer la route de l apage courante avec app.request.get('_route') ou app.current_route",
                "7/ Si on vt le lien absolu vers l'url, utiliser absolute_url(path(nomDeRoute))",
                "8/a/ Request va ns perm de retrouver la page précédente avec $referer",
                "8/b/ Ensuite on redirige vers une url avec ->redirect() "
            ],
                example : [ 
                "1/#[Route('/movie/{id}/',name: 'movie', requirements: ['id' => '\d+'],methods: ['POST'] )]  ou /movie/{id<\d+>}",
                "2/public function show(int $id): Response",
                "2/public function demo(int $monparam, string $mondeuxiemeParam): Response",
                "1/#[Route('/blog/{page<\\d+>}', name: 'blog_list')] <= plus concis",
                "3/<a href=\"{\{ path('app_homepage') }}\" </a>",
                "Path avec param {{ path('app_movie_show', {id: currentId}) }}",
                "4/Ds le term : bin/console debug:router",
                "5/#[Route('/racineDeLURL', name: 'prefixeDuNomDeLaview_')]  <= à experimenter plus",
                "6/return $this->redirectToRoute('nomDeLaRoute');",
                "6 bis/ avec param return $this->redirectToRoute('app_movie_show', ['id' => $show->getId()]);",
                "7/ <a href=\"{{absolute_url(path('app_movie_show',{id:show.id}))}}\">",
                "8/a $referer = $request->headers->get('referer');",
                "8/b return $this->redirect($referer);"
                ,
                ],
        type : "SYMFONY"
        },
        {
            nom : "Symfony - Concepts et usages" ,
            datas : [{"skeleton":"squelette du projet"},
                    {"flex":"concerne la config et les dépendances, exécute les recettes"},
                    {"bin/console":"console intégrée"},
                    {"twig":"moteur de templates HTML"},
                    {"Web debug toolbar" :"barre pour voir des infos de debug ds l'explo et dumper "},
                    {"Attention à le mettre dans une balise body??" :"voir requetes et histoirique ??"},
                    {"Variable app":"Pour voir des infos de debug aussi "},
                    {"HTTP FOUNDATION":"Pour avoir les objets Request et Response qui vt faciliter le travail avec nos requetes http"},
                    {"Services = ttes les Class sf Entites et controllers":"instanciables grâce au gestionnaire de service exp: Request"},
                    {"Response ":"on en a besoin ds le controller parce qu'un controller renvoie un obj de la classe Response'"},
                    {"Param converter":"on récupère l'obj directmt grâce à lui en type hint (Objet $objet),il va même gérer les 404;Exp:function show(Post $post)"},
                    {"AbstractController" :"il permet de fr bcp de choses courantes ds les controllers comme récupérer le user avec $this->getUser()"},
                    {"Penser à regarder ses méthodes qd besoin de qqch":""},
                    {"Si on a des méth qui st pas détectées par VSCODe,rajouter au dessus pour rajouter l'entité":" Exp /** @var \\App\\Entity\\User $user */"},
                    {"Les méthodes Collection pvt ê utiles comme clear() pour tout vider":"$user->getShows()->clear();"},
                    {"Nvelle syntaxe PHP8 d'injection ds constructeur":"public function __construct(private MailerInterface $mailer,private $ownerMail) {}"}
                ],
            tableau : true,
            type : "SYMFONY"
            },
            {
                nom : "Symfony - Commandes pour installer les composants principaux +cmd très courantes" ,
                datas : [
                {"skeleton":"composer create-project symfony/skeleton nomDuProjet"},
                {"flex":"est installé avec le skeleton"},
                {"bin/console":"est installé avec le skeleton"},
                {"twig":"composer require twig/twig"},
                {"Intégrer vardumper à Twig" : "composer require --dev symfony/debug-bundle"},
                {"Web debug toolbar" :"composer require symfony/profiler-pack"},
                {"HTTP FOUNDATION" :"composer require http-foundation"},
                {"API - Http Client":"composer require symfony/http-client"},
                {"maker" :"composer require --dev symfony/maker-bundle"} , 
                {"pour générer un controller":"bin/console make:controller nomDuController"} , 
                {"pour voir les services":"bin/console debug:autowiring --all"},
                {"effacer le cache": "bin/console cache:clear" },
                {"affichage des routes ds la console":"bin/console debug:router"},
                {"ORM pack(Doctrine)":"composer require symfony/orm-pack"},
                {"bundle fixtures":"composer require --dev orm-fixtures"},
                {"Faker":"composer require fakerphp/faker"},
                {"Form":"composer require symfony/form"},
                {"EasyAdmin":"composer require easycorp/easyadmin-bundle"},
                {"SecurityBundle":"composer require symfony/security-bundle"},
                {"Mailer":"composer require symfony/mailer"},
                {"Mailjet Transporteur ":"composer require symfony/mailjet-mailer"},
                {"Les méthodes Collection pvt ê utiles comme clear() pour tout vider":"$user->getShows()->clear();"},
                ],
                tableau : true,
                type : "SYMFONY"
                },
        {
        nom : "Installer Symfony - Démarrage" ,
        definition : ["Créer un projet avec le Skeleton 1/plus léger 2/plus complet",
                "Déplacer les fichiers créés à la racine",
                "Lancer le serveur php",
                "Si on passe par Apache, installer la dépendance nécessaire",
                "Si pb avec le cache-> changer les droits de /var/",
                "Les assets dvt être ds /public/",
                "NB : on pt copier le composer.json d'un projet similaire et faire composer update",
                "NB 2 : si on récupère un projet existant, 1/drop la DB et 2/la recréer, 3/migrate et 4/load fixture"
            ],
                example : [ 
                "composer create-project symfony/skeleton nomDuProjet",
                "mv sous-dossier/* sous-dossier/.* .",
                "php -S 0.0.0.0:8000 -t public",
                "composer require symfony/apache-pack",
                "sudo chmod -R 777 var"
                ,
                ],
        type : "SYMFONY"
        },
        {
            nom : "PHP en ligne de commande" ,
            datas : [{"php -m ":"quesl modules sont chargés ?"},
                    {"php -a":"mode interactif"},
                    {"php -f":"lancer un script ds le terminal"},
                    {"php -m":"voir les modules installés"},
                    ],
            tableau : true,
            type : "PHP"
            },
            {
                nom : "SERVEUR /PORTS ATTRIBUES" ,
                datas : [{"mySQL":"3306"},
                        {"apache":"80"},
                        {"https":"443"},
                        {"http://127.0.0.1:8000/":""},
                        {"sudo netstat -tlnpu ":"voir les ports ouverts"},
                        {"sudo lsof -nP -iTCP -sTCP:LISTEN":"voir les ports utilisés"},
                        {"php -S localhost:8080 ":""},
                        {"php -S 0.0.0.0:8080 -t public frontend":""},
                        ],
                tableau : true,
                type : "HEBERGEMENT"
                },
                {
                    nom : "API" ,
                    definition : ["Interface entre front et données, c un service Web, ça renvoie du JSON",
                            "pour voir les requetes http : utiliser lextension Rest API",
                            "ou insomnia ou PostMan",
                            "N'importe quel client pouvant faire des requêtes http pourra appeler une API",
                            ],
                            example : "",
                    type : "HEBERGEMENT"
                    },
    

    {
            nom : "LARAVEL PREMIERS PAS" ,
            definition : [ "-Soit on crée un projet avec la commande create de composer",
                        "-Soit on récupère un repo et on suit les étapes ci-dessous :",
                        "Remplir le fichier .env",
                        "Installer les dépendances avec composer install de préférence sinon update mais pas recommandé",
                        "Générer la clé et lancer le serveur ds le dossier du projet Laravel"
                        ],
            example : [ "composer create-project laravel/laravel nomDuDossierDuProjetBack ",
                    "php artisan key:generate",
                    "php artisan serve"
    ],
        type : "PHP"
    } ,
    {
        nom : "LARAVEL BASES A SAVOIR VRAC" ,
        definition : [ "-Les logs sont dans storage/logs  ",
        "APP_ENV local outils de debug laravel",
                    "laravel ide helper =extension pour voir les noms des colonnes des tables dans vscode",
                    "Normes des models : table au pluriel, id, created_at et updated_at avec timestamp",
                    "On peut créer utilser larrvel en ligne de commande avec artisan=>seeder=script pour remplir les tables"
                ] ,
        example : [ "comoser require --dev barry larave ide helper",
                    "php artisan make:model Task",
                    "php artisan make:controller Task",
    ],
        type : "PHP"
    } ,
    {
            nom : "LARAVEL ELOQUENT RELATIONSHIPS One to One" ,
            definition : [ "Soit un model Phone et un model User, Phone ayant une colonne User_id", 
            "Un utilisateur a un téléphone et réciproque",
            "1/ Dans le model User, on crée la method phone() utilisant hasOne()", 
            "2/ On récupère la propriété phone automatiqmt dans User ", 
            "3/On peut récupérer l'utilisateur d'un téléphone  en créant la méthode user() dans le model Phone en utilisant belongsTo()",
            "4/ On récupère la propriété user automatiqmt dans Phone"
            ] ,
            example : [ "1/public function phone(): HasOne{return $this->hasOne(Phone::class);}",
                "2/$phone = User::find(1)->phone;",
                "3/ public function user(): BelongsTo{return $this->belongsTo(User::class);}",
                ""

        ],
            type : "PHP"
        } ,
    {
        nom : "DOCKER-Commandes de base" ,
        datas : [{"Démarrer un conteneur":"docker run nom-du-conteneur-sur-dockerhub(httpd par exemple"},
                {"en tâche de fond":"-d"},
                {"voir les conteneurs lancés ":"docker ps , si on rajoute -a pour voir les stoppés"},
                {"arrêter":"docker stop id_ou_nom_du_conteneur"},
                {"nommer le conteneur":"docker run -d --name monApache httpd"},
                {"rediriger le port 8000 de l'ordinateur hôte vers le port 80 du conteneur":"-p 8000:80"},
                {"EN RESUME":"docker run -dp 8000:80 --name apache httpd"},
                {"supprimer":"docker rm nom1 nom2 nom3 etc... avec -f pour forcer sans stopper au préalable"},
                {"supprimer tout":"docker container prune"},
                {"relancer":"docker start"},
                {"voir les images stockées localement":"docker images ou docker image ls"},
                {"supprimer l'image":"docker image rm nomDeLImage"},
                {"supprime ttes les images inutilisées":"docker image prune -a"}
                ],
        tableau : true,
        type : "HOSTING"
    },

    {
        nom : "DOCKER BIND MOUNTS" ,
        definition : [ "=>monter des dossiers accessibles sur l'hôte et sur le conteneur ",
                    "=> ça peut donc servir pour se créer un environnement de dév local",
                    "On peut utiliser --volume /-v ou --mount(plus complexe",
                    "Avec -v, 2 chemins séparés par :"
                ] ,
        example : [ "docker run -dp 8000:80 --name apache -v ./front:/usr/local/apache2/htdocs/ httpd",
                    "/usr/local/apache2/htdocs  c'est le documentRoot utilisé avec l'image httpd",
                    "docker run -dp 8001:80 --name mon-env-de-dev-php -v ./demo-php:/var/www/html php:8.2-apache"
    ],
        type : "HOSTING"
    } ,
    {
        nom : "EXECUTER DES COMMANDES BASH AVEC DOCKER " ,
        definition : [ "=>On peut utiliser exec mais pour une commande, et les changements nepersistent pas après suppression de l'image Docker ",
                    "=> Avec l'argument -it on a un terminal complet",
                    "=> Mais bon si on veut refaire ça pour chaque image, c'estpas pratique",
                    "D'où l'intérêt ds DockerFile !"
                ] ,
        example : [ "docker exec monConteneur bash -c \"echo '<?php phpinfo();' > /var/www/html/index.php\"",
                    "docker exec -it monConteneur bash",
                ],
        type : "HOSTING"
    } ,
    {
        nom : "DOCKERFILE " ,
        definition : [ "=>Il permet de créer sa propre image depuis une image existante",
                    "=> Il doit s'appeler Dockerfile",
                    "=> Si c'est pour le back par exemple, il faut le mettre ds le dossier back",
                    "=> depuis ce dossier on la crée : docker build -t nom-de-l-image",
                    "=>Puis on pt démarrer un conteneur depuis cette nouvelle image : docker run -dp 8080:80 pomodoro-backend-laravel",
                    "Si on a un compte dockerHub, on peut la mettre en ligne cf ci-dessous"
                ] ,
        example : [ "docker login",
                    "docker image tag nom-de-limage PSEUDO-DH/nom-de-limage:latest",
                    "docker push PSEUDO-DH/nom-de-limage:latest",
                    "docker run -dp 8080:80 PSEUDO-DH/nom-de-limage:latest"
                ],
        type : "HOSTING"
    } ,
    {
        nom : "DOCKER COMPOSE" ,
        definition : [ "=>On crée un fichier compose.yaml",
                    "=> Il contient la version de docker, les services=images des applications",
                    "=> Les bind mounts vers les bons volumes",
                    "=> les variables d'environnement",
                    "=>On y charge la bdd",
                    "=> Des variables d'environnement si elles sont lues par le logiciel (Laravel le fait)",
                    "=>On démarre ts les conteneurs avec docker compose up -d ",
                    "=>On arrête avec docker compose down"
                ] ,
        example : [ "docker login",
                    "docker image tag nom-de-limage PSEUDO-DH/nom-de-limage:latest",
                    "docker push PSEUDO-DH/nom-de-limage:latest",
                    "docker run -dp 8080:80 PSEUDO-DH/nom-de-limage:latest"
                ],
        type : "HOSTING"
    } ,
    {
        nom : "Array Methods_Array.prototype. " ,
        datas : [{"Array.from(tabl/obj) /Array.of(x)/ Array.isArray(variable)":"Meth.statiques"},
                {"at(x)":"Rvoie l'élément du tableau à l'indice x(x<ou>0"},
                {"concat(x) ":"Rvoie un nv tabl avec x étant un tabl.ou valeurs"},
                {"copyWithin(a, x, yf)":"copie les élemts de x à y exclus en a"},
                {"entries()/keys()/values()":"Rvoie un tabl itérator avec paires clé/valeur ou clés ou valeurs"},
                {"every/some(cond)":"Rvoie true si ts/au moins un les éléments répondent à la condition"},
                {"fill(a,x,yf) ":"Remplit de a de x à y exclus"},
                {"filter(fct)":"Rvoie nv tabl avec éléments pour qui la fct a rvoyé true"},
                {"find(cond)":"Rvoie l'élémt qui répd à la cond, sinon undefined"},
                {"findIndex(cond)":"Rvoie l'index de l'élémt qui répd à la cond, sinon -1"},
                {"flat()":"Rvoie un nv tabl avec les aut tablx de dedans concaténés"},
                {"flatMap()":"Crrspd à Map() puis flat()-cpliqué:(-"},
                {"forEach(fct)":"Applique la fct à chq élémt du tabl"},
                {"includes(x)":"Rvoie true si tabl ctient x sinon false"},
                {"indexOf/lastIndexOf(x)":"Rvoie l'index le + petit/+grd de l'élémt = x,sinon -1"},
                {"join('xf')":"Rvoie un string avec x comme séparateur(par déf ,"},
                {"map(fct)":"Rvoie nv tabl avec la fct appliquée à chq élémt"},
                {"push/unshift/pop/shift(x)":"rajoute à la fin/ au déb / enlève à la fin/au déb "},
                {"reduce/reduceRight(fct(acc,val,ind,initVal)=> acc)":"Pour réduire le tabl à une seule valeur"},
                {"reverse() /sort(fct)": "inverser ou classer"},
                {"slice(x,yf)": "Rvoie nv tabl de x à la fin ou de x à y exclus"},
                {"splice(a,xf,yf)": "enlève/rplace l'item à l'index a sur xf items par yf"},
                {"toString()/toLocaleString()": "Pas bien compris ce que c'était ...;("},
            ],
            tableau : true,
        type :"JS",
        },
        {
            nom : "String search methods" ,
            datas : [
                    {"indexOf(str,ind de départ de la rech)":"Rvoie l'index de la 1ère occurrence de str sinon -1"},
                    {"lastIndexOf(str,ind de départ de la rech)) ":"Rvoie l'index de la dernière occurrence de str sinon -1.Cherche à reculons"},
                    {"search(str ou REGEX)":"Rvoie l'index de la crrspdce"},
                    {"match(str ou REGEX)":"Rvoie un tableau avec les corrspdces"},
                    {"matchAll(str ou REGEX))":"Rvoie un iterator avec les corrspdces"},
                    {"includes(str) ":"Rvoit true ou false"},
                    {"startsWith(str,ind de départ de la rech)":"Rvoit true ou false"},
                    {"endsWith(str,ind de départ de la rech)":"Rvoit true ou false"},
                ],
                tableau : true,
            type :"JS",
            },
        {
            nom : "String methods" ,
            datas : [{"Retourne des nvx strings" :"car le string est immutable, car c une primitive"},
                    {"3méthodes d'extraction de texte" : "si omission du 2e param=> jusqu'à la fin"},
                    {"slice(1, 3facultatif)":"salut=>al, accepte val négatives et lira à l'envers"},
                    {"substring(1,2eparam facult)":"salut=>alut , les valeurs<0 st cisidérées comme 0"},
                    {"substr(start 1, length 2)":"salut=>al,accepte val négatives et lira à l'envers "},
                    {"replace(str ou regex,str2) / replaceAll()":"charAt() /charCodeAt()"},
                    {"toUpperCase(),toLowerCase()":""},
                    {"str.concat(str,str,str)":"split(),length()"},
                    {"trim()/trimStart()/trimEnd()":"pad()/padStart()/padEnd()"},
                ],
                tableau : true,
            type :"JS",
            },
            {
                nom : "Drag and Drop ATERMINER" ,
                definition : [ "1/Dans l'HTML, définir l'attribut \"draggable=true\" pour l\'élément à glisser ",
                            "2/ Dans le JS, utiliser dragStart sur l\'élément et dragEnd et drop sur la dropzone ",
                            "3/ Inhiber le cprtmt par défaut qui est de ne pas accepter le drop, sur la dropzone",
                            "4/ Créer la fonction lancée sur dragStart de l'élément=>qLs data st transférées",
                            "5/Créer les fonctions lancées sur drop et dragEnd  ",
                            "NB : il y a 8 events drag( drag,dragend,dragenter,dragexit,dragleave,dragover,dragstart et drop. "
                        ] ,
                example : [ "3/ sur la dropzone :function onDragOver(event) {event.preventDefault();}",
                            "4/ sur l\'élément :function onDragStart(event) {event.dataTransfer.setData('text/plain', event.target.id);}",
                            "5/ sur la dropzone :function onDrop(event) {const id = event.dataTransfer.getData('text');",
                            "5/b const draggableElement = document.getElementById(id); }",
                            "5c/ const dropzone = event.target;",
                            "5c/ dropzone.appendChild(draggableElement);",
                            "5d/ event.dataTransfer.clearData();"                
            ],
                type : "JS"
            } ,
        {
            nom : "Centrer une image" ,
            definition : [ "1/ La déclarer comme un block (car img est un element inline à la base",
            "et mettre les marges en auto centrera hrztlmt",
                        "2/ avec flex : align-items et justify-content",
                        "3/en mettant ds un container aux dimensions fixes et en position relative",
                        "et l'image avec top et left à 50% et transform: translate(-50%, -50%)"
                    ] ,
            example : [ "1/ display : block ; margin : auto",
            "2/ display: flex \;justify-content\: center\;align\-items\: center\;",
            "3/    position: absolute;top : 50% ;left : 50% ;transform: translate(-50%, -50%); "
                        
        ],
            type : "CSS"
        } ,
        {
            nom : "Déployer un projet React sur gh-pages" ,
            definition : [ "1/ L'installer",
            "2/ builder le projet",
            "3/ Copier les images ds le dossier du build (dist/src/images )pour un projet Vite",
            "4/ Lancer le déploiement à partir du dossier du build (dist pour projet Vite)",
            ] ,
            example : [ "1/ npm install -g gh-pages ou npm install gh-pages --save-dev ",
            "2/ npm run build",
            "4/ gh-pages -d dist "    
        ],
            type : "HOSTING"
        } ,
    {
        nom : "Shuffle - Fisher-Yates Sorting Algorithm" ,
        definition : [ "On crée une boucle for qui va nous permettre de permuter",
                    " les éléments en commençant par le dernier",
                    " avec un élément tiré au hasard",
                    " On utilise la déstructuration pour permuter",
                ] ,
        example : [ "const shuffle = (array) => { ",
                    "for (let i = array.length - 1; i > 0; i--) { ",
                    "const j = Math.floor(Math.random() * (i + 1)); ",
                    "[array[i], array[j]] = [array[j], array[i]]; ",
                    " } return array; }"
    ],
        type : "JS"
    } ,



    {
        nom : "Grid /Simplifié" ,
        definition : [ "Avec Grid, les area ont des dimensions fixes prédéterminées != flex",
                    " grid-template-columns va définir la taille des colonnes",
                    " grid-template-rows va définir la taille des lignes",
                    "On peut se servir des repères pour positionner chaque élément (3 manières différentes a/b/c/)",
                    " Méth.synthétique : grid-template-areas va définir une grille avec les noms des différents items",
                ] ,
        example : [ "Dans le container :",
                    "display :grid ;",
                    "grid-template-columns: repeat(2,20dvw)",
                    "grid-template-rows: 50px 1fr 30px;",
                    "grid-template-areas: \"head head\"\"nav  main\"\"nav  foot\";",
                    " Dans chaque item,nom de l'area' : grid-area : head ; ",
                    " a/ Dans chaque item,de la méth. la + longue à la + courte :",
                    " grid-colum-start : 2 ; ",
                    " grid-colum-end : 4 ; ",
                    " grid-row-start : 1 ; ",
                    " grid-row-end : 3 ; ",
                    "b/équivaut à :",
                    " grid-colum : 2 /4 ; ",
                    " grid-row : 1/3 ; ",
                    "c/équivaut à :",
                    " grid-area : 1 /2/3/4; =>[rowStrt,colStrt,rowEnd,colEnd]",
          
    ],
        type : "CSS"
    } ,
    {
        nom : "Transition" ,
        definition : [" Dans l'élément qu'on va animer, rajouter la ligne :",
                    "transition: <transition-property> <transition-duration> <transition-timing-function> <transition-delay>",
                    "La transition démarrera quand la propriété change de valeur. ",
                    "Par exemple sur le même élément avec  :hover", 
                ] ,
        example : [ "div { width:100px ; transition: width 2s; }",
                    " div:hover {width : 300px ;}"
    ],
        type : "CSS"
    } ,
    {
        nom : "Tips CSS en vrac" ,
        definition : [" Pour user du 100% dimensions du parent, le parent dt avoir une dimension !",
                    "",
                    "", 
                ] ,
        example : [ 
                    "",
    ],
        type : "CSS"
    } ,
    {
        nom : "Trucs Vscode" ,
        definition : ["1/ Changer la couleur de la scrollbar",
        " scrollbarSlider.shadow /activeBackground /background/hoverBackground",
        "2/ En général, ctrl + , pour accéder aux préférences de config"
                ] ,
        example : [ "1/ ctrl+shift+P et ouvrir user preferences JSON",
        "\"workbench.colorCustomizations\"\: \{\"scrollbarSlider.background\"\: \"#ff0000\"\}",
        "2/ taper window: zoomLevel pour régler le coef du zoom"
    ],

        type : "OTHERS"
    } ,
    {
        nom : "Sélecteurs CSS,  ,Pseudo-elements, Pseudo-classes" ,
        definition : [" - Sélecteurs simples : de type('p'), de classe(.maClass), d'identifiant(#monID),",
                    "universel ('*'), d'attribut ([attr] ou [attr=maValeur])",
                    "- Combinateurs: élement +voisin direct, ~voisins, >enfants, descendants, col||td (colonne) ",
                    "- Pseudo-classes: element:link, :visited, :hover,:active,:focus,:nth-child(n)",
                    "- Pseudo-elements: ::first-line, ::first-letter, ::before, ::after",
                ] ,
        example : [ "div img[class=\"logo\"]",
                    "p>span::first-letter"
    ],
        type : "CSS"
    } ,
    {
        nom : "Modal/ Non modal popover" ,
        definition : ["Modal : freeze la page en cours => utiliser HTML <dialog>",
                    "Non modal : se rajoute par-dessus la page encours=> utiliser id=`popover`",
                    "Popover : 1/ Créer un bouton avec l.attribut popovertarget=\"nomdelapopup\"",
                    "2/Créer la popup avec un id =\"nomdelapopup\""
                ] ,

        example : [ "<button popovertarget=\"my-pop\">click</button>",
        "<div popover id=\"my-pop\">Bonjour tout le monde !</div>"] ,
        type : "NEWS"
    } ,
    {
        nom : "Color-mix" ,
        definition : ["Définit une couleur qui est le mélange 2 couleurs",
                    "color-mix(in <color-space>, <color1> <percentageOfc1>, <color2> <percentageOfc2>,)",
                    "Où <color-space> peut prendre la valeur de srgb, srgb-linear, lab, oklab, xyz, xyz-d50, xyz-d65, hsl, hwb, lch, oklch. "
                ] ,

        example : [ "color: color-mix(in lch, peru 40%, lightgoldenrod)",
        "background-color: color-mix(in srgb, #34c9eb 20%, white)"] ,
        type : "NEWS"
    } ,
    
    {
        nom : "Prompt Personnaliser" ,
        definition : ["On choisit les variables à afficher :",
                    "\\u user \H host \A heure \d date \w workingDir",
                    "On précède la variable d'une couleur sous la forme\e[x:yy",
                    "Où x=0 ou 1 pour couleur plus claire, yy code couleur",
                    "m est nécessaire pour ne pas effacer la première lettre ??"
                ] ,

        example : [ "color: color-mix(in lch, peru 40%, lightgoldenrod)",
        "export PS1=\"\e[1;91m\A\e[1;36m\d\e[1;33m\\u\e[1;31m@\e[1;33m\H\e[1;35m\w]\$\e[m \""] ,
        type : "LINUX"
    } ,



    {
    nom : "Shell bases" ,
    datas : [{"history":" !ID permet d'exécuter la cmd retrouvée ds l'historique "},
            {"sudo -i":"su "},
            {"chmod -777 <nomdufichier>":"donne ts les droits au fichier qui suit"},
            {"chmod u/g/o suivi de +/-/= rwx <nomdufichier>":"autre manière de changer les droits"},
            {"rm -rf nomDeDossier ":" tout effacer dossier + fichiers"},
            {"ctrl + L clear":"effacer "},
            {"ll ou ls -al ":"voir ts les fichiers et les droits utilisateurs "},
            {"env":"voir les variables d'environnement "},
            {"crontab -e":"automatisation de scripts"},
            {"sed":"donne ts les droits au fichier qui suit"},
            {"ln -s nomDufFichier ": "crée un lien symbolique"},
            {"| ":"le pipe transmet le résultat de la commande à la prochaine commande  "},
            {"!!":" reprend toute la commande"},
            {"!$":" reprend le dernier argument"},
            {"crontab -e":"automatisation de scripts"},
            {"En vrac ": "pwd, ls, mkdir, cd,touch, cp, mv, rm"},
            {"En vrac 2 ": "remplacer (cf doc)"},
            {"En vrac 3 ": "read reponse ; echo $reponse ;"},
            {"alias": "alias monalias='commandes'"},
            {"désinstaller":"apt remove php8.1"}

        ],
        tableau : true,
        type :"LINUX",
    },
    {
        nom : "Shell script bash" ,
        definition : ["1/soit on tape bash(ou autre shell) nom_du_script ds le dossier contenant le script",
            "2/ soit chmod +x nom_du_script pour rendre exécutable",
            "2/b puis on exécute avec ./nom_du_script ds son dossier",
            "3/ le mieux c'est de le rendre exécutable de partout :",
            "4/a il faut qu'il soit ds un dossier du $PATH (cf..bashrc $PATH)",
            "4/b On pourra le lancer juste avec nom_du_script  de partout"
        ] ,
        example : [ "2/chmod +x nom_du_script ",
        "4/a export PATH=$HOME/bin:/usr/local/bin:$HOME/scriptsshell:$PATH"
    ] ,
        type : "LINUX"
        } ,
    {
        nom : "Shell enchainer des commandes" ,
        datas : [{";":"enchaîne, que ça réussisse ou non"},
                {"&&":"enchaîne que si ça réussit "},
                {"commande1 || commande2 && commande3":"exécute 2 si 1 échoue, 3 si 1 réussit"},
                {"":""},
            ],
            tableau : true,
            type :"LINUX",
        },
    {
        nom : "CSS news 2023" ,
        datas : [{"Nested CSS":""},
                {"Scoped CSS":""},
                {"Dynamic ViewPort Units":"dvw dvh"},
                {"Container queries":"utilisatio de {} pour appeler des classes à l'intérieur de la mediaquery"},
                ],
        tableau : true,
        type : "NEWS"
        },
    {
        nom : "Vim bases" ,
        datas : [{"i /echap":" Mode insertion et en sortir"},
                {":wq ":"write an d quit "},
                {"y d p ou P ":"Yanking=Copier Delete ou Paste (cf.options ci-dessous"},
                {"yy":"ligne courante"},
                {"3y":"3lignes"},
                {"yaw ":"Mot avec espace de fin"},
                {"yiw":"Mot courant"},
                {"yiB":"Bloc courant"},
                {"y$":"Ce qui est à droite du curseur"},
                {"y^":"Ce qui est à gauche du curseur"},
                {"yt+caractère x":"Yank jusqu'à x"},
                {"yfx":"Yank entre le curseur et x"},
                {"yi + caractère '\"([{ ":"Entre les '\"['("},

            ],
            tableau : true,
        type :"LINUX",
        },
    {   nom : "Fonctions d'usine" ,
        definition : ["Pour créer un objet comme avec les classes, sans utiliser \"this\",", 
                    "on crée une fonction qui a la forme suivante :",
                    "function nomDeLaFct(key1,key2,key3) { ",
                    "return {value1,value2,value3}}",
                    "On obtient l'objet {key1:value1,keyé:value2,key3:value3, "
    ] ,
        example : [ "function create (a,b,c){return {a,b,c}",
        "let x = create(\"1\",\"2\",\"3\")",
        "Résulte à x={a: '1', b: '2', c: '3'}"
    ] ,
        type : "JS"
    } ,
    {
    nom : "Regex metacharacters" ,
    datas : [{"Caractère" : "Usage"},
            {"backslash \\" : " Permet d'échapper le caractère qui le suit"},
            {"caret ^ " : "Négative de l'expr qui suit"},
            {"dollar sign $ ": " Concerne la fin du texte"},
            {"period or dot ." : "Remplace n'importe quel caractère"},
            {"vertical bar or pipe symbol |" : " OU "},
            {"question mark ?" : "----"},
            {"asterisk or star *" : " Vise le caractère précédent 0 fois ou + "},
            {"plus sign +," : "Vise le caractère précédent 1 fois ou + "},
            {"opening parenthesis (" : "Match le texte/expr entre parenthèse "},
            {"closing parenthesis )" : "Match le texte/expr entre parenthèse "},
            {"opening square bracket [" : "Match un caractère compris ds les crochets"},
            {"opening curly brace {" : "Match un caractère compris ds les crochets"},
            ],    
    type : "JS",
    tableau: true 
    } ,
    {
        nom : "Regex -Testing " ,
        definition : ["regexPattern.test(texte)=> envoie true ou false",
                    "regexPattern.exec(texte)=> renvoie un tableau "] ,
        example : [ "/[abc]/.exec(\"coucou\")",
                    "/[abc]/.test(\"coucou\")",] ,
        type : "JS"
        } ,
    {
    nom : "ForEach()" ,
    definition : ["Methode qui prd en paramètre une fonction qui accepte 1 à 3 arguments "] ,
    example : [ "tableau.forEach(function(value, index,array){",
    "console.log(`${value} est au rang numéro ${index}`)})"] ,
    type : "JS"
    } ,
    {
        nom : "Fonction itératives" ,
        definition : ["Fonction qui permet de répétér des instructions sur un tableau",
                    "map() every() some() filter() find()... ont pour argument une callback sous la forme",
                    "function(value,index,arr)"] ,
        example : [ "tableau.forEach(function(value, index,array){",
        "console.log(`${value} est au rang numéro ${index}`)})"] ,
        type : "JS"
        } ,
    {
    nom : "Prototype" ,
    definition : ["En JS tout objet a ses propriétés dont la propriété \"prototype\" et les méthodes associees à ce prototype"] ,
    example : ["String ou Array.prototype.nomdelamethode=> pour personnaliser le prototype "],
    type : "JS"
    } ,
    {
        nom : "LocalStorage" ,
        definition : ["Stockage d'infos (en string) dans un objet le navigateur sans délai d'expiration !=sessionStorage",
        "Dans l'inspecteur de Chrome -> Application->Storage->LocalStorage"
    ] ,
        example : ["localStorage.setItem('monChat', 'Tom');",
        "var cat = localStorage.getItem('monChat');",
        "localStorage.removeItem('monChat');",
    
    ],
        type : "JS"
        } ,
    {
    nom : "Reduce()" ,
    definition : ["Prend paramètre une fonction qui a 2 arguments(acc et value)+ 1 optionnel(initValue)",
    ".reduce ((accumulateur, current value)=> instructions,valeurDeDepart)"],
    example : [ ".reduce((acc,val)=>acc+val,0)"] ,
    type : "JS"
    } ,
    {
    nom : "Object.keys()/ .values()/ .entries()" ,
    definition : ["Object.keys()renvoie un tableau avec les noms des propriétés propres énumérables d'un objet ",
    "Object.values()renvoie un tableau avec les valeurs des propriétés propres énumérables d'un objet ",
    "Object.entries()renvoie un tableau des propriétés propres énumérables d'un objet ",
    "dont la clé est une chaîne de caractères, sous la forme de paires [clé, valeur]",] ,
    example : [ "const object1 = {a: 'somestring',b: 42, c: false};",
    "Object.keys(object1) renvoie Array [\"a\", \"b\", \"c\"]",
    "Object.values(object1) renvoie Array [\"somestring\", 42, false]",
    "Object.entries(object1) renvoie Array [ [a: 'somestring'], [b: 42], [c: false]]"] ,
    type : "JS"
    } ,
    {
    nom : "Objet Map" ,
    definition : ["Un objet Map permet de parcourir ses éléments selon leur ordre d'insertion.",
    "Méthodes associées àl'objet Map : set(), get(),delete(),size",] ,
    example : [ "const map1 =new Map()",
    "map1.set('a', 1);",
    "map1.get('a'); renvoie 1",
    "map1.size renvoie 1",
    "map1.delete('a')"] ,
    type : "JS"
    } ,

    {
    nom : "Objet Set" ,
    definition : ["Un objet Set contient des valeurs qui n'apparaissent qu'une fois.",
    "Méthodes associées à l'objet Set : has(), add(),get(),delete(),size",
    "entries(),keys(),values(),clear()",] ,
    example : [ "const set1 =new Set()",
    "set1.add('a');",
    "set1.add('a'); => ça ne fera rien",
    "set1.size renvoie 1",
    "set1.clear(); => efface tout le contenu du Set"] ,
    type : "JS"
    } ,
    {
    nom : "Regular Expression (RegEx)" ,
    definition : ["Objet qui sert à créer un pattern de rech. de texte, svt utilisé avec search(), match() ou replace()",
    "Sous la forme de /pattern/modifiers ou let regex= new RegEx(\"pattern\",\"modifiers\");",
    "Modifieurs : i (case-insensitive) / g (global match) / m (multiligne matching)",
    "Le pattern pt contenir des a/ [] , des b/ métacaractères , c/ des quantifieurs",
    "a/[ady]=>a ou d ou y [0-9]=>0à9 ,(x|y)=> x ou y" ,
    "b/ \d=>digit , \s=> space , \bword ou word\b=> cherche word au début ou à la fin d'un mot",
    "b/ \\uxxxx=> cherche l'unicode xxxx",
    "c/ n+ => au moins 1 n , n*=>0 à + n , n?=> 0 ou 1 n",
    "Cet objet a des méthodes spécifiques :",
    "- test() :  pattern.test(texteAAnalyser)=> renvoie true ou false",
    "- exec() : renvoie un objet contenant le texte recherché ou null si pas de crrspdance",
    "Passer par le constructeur pour créer un Regex avec la valeur d'une variable cf exemple"] ,
    example : [ "search(/[a-z]+/ig) ",
    "str.match(/[abc]/=> renvoie un tableau",
    "/[a-f0-9] */gi","/^(\d{4}|\d{6})$/.test(pin)",
    "b/  /\bLO/=> cherche Lo au début d'un mot",
    "/e/.test(\"hello\") renvoie true",
    "/e/.exec(\"hello\")=> renvoie un objet avec les propriétés index, input ...;",
    "let regex= new RegExp (`${text2}`,\"gi\")"] ,
    type : "JS"
    } ,
    {
    nom : "Media Queries" ,
    definition : ["Pour modifier l'apparence du site en fct du type d'appareil et de ses caractéristiques",
    "Types de média : all, print,screen,speech",
    "Caractéristiques : width,height,aspect-ratio, orientation,display,hover...",
    "La plupart des caractéristiques peuvent être préfixées par \"min-\" ou \"max-\" ",
    "Opérateurs logiques : and, not, only, ,"] ,
    example : [ "@media screen and (min-width: 1024px)=> desktop",
    "@media screen and (min-width: 768px) and (max-width: 1023px)=> tablets",
    "@media screen and (max-width: 767px)=> smartphone",
    "@media screen and (min-width: 30em) and (orientation: landscape) { ... }",
    "@media (min-height: 680px), screen and (orientation: portrait) { ... }"] ,
    type : "CSS"
    } ,
    {
    nom : "Git 1/2 Essentiels" ,
    definition : [
    " Création d'un dépôt local : git init [nom-du-projet] // git clone [url]",
    " Chgmts de l'esp.de trav. à l'index : git add/rm/mv [fichier]//status//diff//",
    " git reset [fichier] : enlève de l'index ms pas de l'esp.de trav.",
    " Chgmts de l'esp.de trav. au dépôt local :  git commit -m [message]",
    " Branches : pour regrouper des commits => git branch=>liste ttes les branches",
    " git branch/checkout/merge/branch -d + [nom-de-branche]",
    " Historique :git log/git log --follow [fichier]/git diff [premiere-branche]...[deuxieme-branche]/git show [commit]",
    " git reset [commit] annule les commits avant [commit] sans modif les fichiers locaux"],
    example : [ "git add index.html",
    "git branch -d branchePourrie",
    "git reset NumeroDuCOmmitFoireux"] ,
    type : "OTHERS"
    },
    {
    nom : "Git 2/2 A savoir aussi" ,
    definition : ["Enregistrer des fragments pour mettre de côté des idées dans la remise=stash  : ",
    " git stash/ stash pop/ stash list/ stash drop",    
    " Synchroniser des chgmts entre un dépot distant et l'historique de version :'", 
    " - git fetch [nom-de-depot]/git merge [nom-de-depot]/[branche]/git push [alias] [branche]", 
    " - git pull :Récupère tout l'historique du dépôt nommé et incorpore les modifications", 
    " Config : git config --global  / user.name [nom] / user.email [adresse email] / color.ui auto", 
    " Le fichier git.ignore liste les fichiers qui ne dvt pas ê suivis",
    "gitk pour avoir une représentation graphique des changements",
    " Pour en savoir plus sur chaque commande : man git-nomDeLaCommande",] ,
    example : [ "git stash list",
    "git merge monProjet/maSuperBranche",
    "git push main/maSuperBRanche",
    "git push -u origin main"] ,
    type : "OTHERS"
    } ,
    {
    nom : "Do...while loop" ,
    definition : ["do {instructions} while(condition) - Au moins une fois "] ,
    example : [ "do {",
    "i = i + 1;",
    "result = result + i;",
    "}",
    "while (i < 5);"] ,
    type : "JS"
    } ,
    {
    nom : "This 1/2" ,
    definition : ["le mot-clé \"this\" se réfère tjrs à un objet",
    "qui varie selon où on l'utilise :",
    "- a/ Tout seul=>[object Window]",
    "- b/ Dans la méthode d'un objet =>l'objet ds lequel est déclaré la méthode",
    "- c/ Dans une fonction=>[object Window]",
    "- d/ Dans une fonction fléchée =>[object Window](même si c'est une méthode d'un objet)",
    "- e/ En Mode Strict ,dans une fonction=> undefined",
    "- f/ Dans un event listener=>l'élément sur lequel se déclenche l'évenemt"] ,
    example : [ "b/ const objet = {nom :\"obj\" , getThis : function(){return this} }",
    "const objet = {nom :\"obj\" , getThis : ()=>{return this} }"] ,
    type : "JS"
    } , 
    {
    nom : "This 2/2" ,
    definition : ["3 méthodes natives pour contrôler le comportement de \"this\"",
    "- a/ Call() : permet d'utiliser la méthode d'un objet sur un autre=>",
    " obj1.methode.call(obj2,autres, arguments, optionnels)",
    "- b/ Apply() : idem que call() sf que les arguments optionnels st ds un array",
    "- c/ Bind() : similaire mais renvoie une nvelle fonction sans l'exécuter", 
    " là où call() et apply() exécutaient immédiatement",] ,
    example : [ "a/ john.display.call(jane,\"paris\",\"hotel\")",
    "b/ john.display.call(jane,[\"paris\",\"hotel\"])",
    "c/ const display2 = john.display.bind(jane)"] ,
    type : "JS"
    } , 
    {
    nom : "Switch" ,
    definition : ["Si on a une valeur à comparer "] ,
    example : [ "switch (expr) {",
    "case 'x':",
    "console.log(sf);",
    "break;",
    "case 'y':",
    "break;",
    "default:"] ,
    type : "JS"
    } , 
    {
    nom : "Fonctions anonyme /auto-invoquée = IIFE / récursive" ,
    definition : ["- 1/ Anonyme : sans nom, pour aller plus vite, mais on pt la mettre ds une variable pour l'appeler + tard ",
    "- 2/ IIFE : fct qui s'éxécute immédiatmt, on met entre () et on rajoute des () à la fin.",
    " On utilise ça en général avec les fcts anonymes ms ça marche avec les fcts en général.",
    " - 3/ Récursive : qui s'appelle elle-même tant que la condition est valable en général",] ,
    example : [ "1/ const calc = function(){return 2*3}",
    "2/ (function(){return 2*3})()",
    "3/ function add(a){if(a<5){a+=1 ; add(a)})",] ,
    type : "JS"
    } , 
    {
    nom : "Display" ,
    definition : ["block(<p>) et inline-block (<button>) on peut modifier la taille et les marges ) , inline(<span>) que les marges de côté " ,
        "display Niveau 3 =Display correspond en fait à deux valeurs,même si on en voit qu'une : " ,
    "La première, valeur interne = de l'élément : inline ou block", "la deuxième, valeur externe = des enfants : flex grid table etc ...",
    "cf. https://la-cascade.io/articles/approfondir-la-propriete-display-les-deux-valeurs-de-display"] ,
    example : ["display : inline/block/flex/","inline-block/inline-flex/inline-grid ;","table,list-items..."] ,
    type : "CSS"
    } ,
    {
    nom : "Alignement du texte" ,
    definition : ["Utiliser text-align et vertical-align"] ,
    example : ["text-align: center;",
    "vertical-align: baseline;"] ,
    type : "CSS"
    } ,
    {   
    nom : "Section" ,
    definition : ["=>Balise HTML"] ,
    example : ["<section> </section>"] ,
    type : "HTML"
    } ,
    {   
        nom : "Small" ,
        definition : ["=>Balise HTML pour texte de mondre importance"] ,
        example : ["<small> </small>"] ,
        type : "HTML"
        } ,
    {
    nom : "Set" ,
    definition : ["=>Unique set of data"] ,
    example : ["const mySet1 = new Set();"] ,
    type : "JS"
    } ,
    {
    nom : ".getComputedStyle()" ,
    definition : ["=>Récupérer la valeur d'une propriété CSS"] ,
    example : ["window.getComputedStyle(elemnt).propriete" ],
    type : "JS"
    } ,
    {
    nom : "Box-sizing" ,
    definition : ["=>To customize box behavior"] ,
    example : ["box-sizing: content-box;", "box-sizing: border-box;" ],
    type : "CSS"
    } ,
    {
    nom : "Dégradés" ,
    definition : ["=>3 types :","linear-gradient","radial-gradient","repeating-linear-gradient( ça fctne avec radial gradient aussi)"],
    example : ["linear-gradient : red, yellow 10% (=> color stop ) ;",
    "radial-gradient : circle yellow,#f06d06 ;",
    "repeating-linear-gradient:45deg,yellow,yellow 10px,red 10px,red 20px"],
    type : "CSS"
    } ,
    {
    nom : "Linear-gradient" ,
    definition : ["=>On définit la direction (to right, to top right,45deg qui est, par défaut, de HT en bas)",
    "et éventuellment un ou des color stop"] ,
    example : ["linear-gradient : red, yellow 10% (=> color stop ) ;"],
    type : "CSS"
    } ,
    {
    nom : "Radial-gradient" ,
    definition : ["=>On définit la direction (circle closest-side, ou farthest-side ou closest-corner ou farthest-corner)",
    " qui est, par défaut, du centre vers l'extér))",
    "et éventuellment un ou des color stop"] ,
    example : ["radial-gradient : circle yellow,#f06d06 ;"],
    type : "CSS"
    } ,
    {
    nom : "Repeating-linear-gradient" ,
    definition : ["=>ça fctne avec radial gradient aussi",
    "le dernier color-stop déterminé la taille"] ,
    example : ["repeating-linear-gradient:45deg,yellow,yellow 10px,red 10px,red 20px"],
    type : "CSS"
    } ,
    {
    nom : "Couleurs 1/3" ,
    definition : ["=> 4 teintes maximum ",
    "- Teinte dominante : couleur liée à la thématique", 
    "- Teinte secondaire : complémentaire ou contrastant avec la dominante",
    "- Teinte d’accent : couleur bien visible à parsemer dans liens boutons icônes" ,
    "- La 1 et la 2 peuvent avoir des variations de nuances de tons, d'ombres"] ,
    example : [":root{",
    "--mainColor : rgb(0, 0, 255);", 
    "--secondColor : rgb(255, 183, 0) ;" ,
    "--accentColor : rgb(24, 235, 13) ;" ,
    "--fourthColor : rgb(129, 129, 202) ; }" ],
    type : "CSS"
    } ,
    {
    nom : "Couleurs 2/3" ,
    definition : [  " Types de notation :",
    "- RGB : RRGGBB" , 
    "- RGBA : RRGGBBA avec A de 0 à 1" ,
    "- HEX codes #rrggbbaa avec valeurs de 0 à 9 + de A à F " ,
    "- HSL Hue Saturation Lightness avec : ", 
    " Hue = teinte en degrés de 0 à 360" ,
    " Saturation = force de la couleur de 0 à 100 où 0 c'est gris et 100 c'et flashy",
    " Lightness de 0(noir) à 100 (blanc)",
    " Alpha avec le / et la valeur entre 0 et 1"],
    example : ["rgba(0, 0, 255, 0.82) ;" , "##0000ffd1 ;" ,"hsla(240, 100%, 50%, 0.82);" ],
    type : "CSS"
    } ,
    {
    nom : "Couleurs 3/3" ,
    definition : [  " Utiliser HSL pour calculer couleurs",
    "- Couleur complémentaire => H +180°" , 
    "- Sch.de cleurs monochromatique :",
    " => Couleurs additionnelles => L - 1/3L et L-2/3L" ,
    "- Sch.de cleurs neutre :",
    "=> H + x où x<90° et/ou H - x où x<90°" ,
    "- Sch.de cleurs triadique :",
    "H + 120°" ,],
    example : [ "--mainColor : hsl(30, 90%, 29%)",
    "--compColor : hsl(210, 90%, 29%)",
    "--add1Color : hsl(30, 30%, 29%)",
    "--add2Color : hsl(30, 60%, 29%)",
    "-neut1Color : hsl(35, 90%, 29%)",
    "-neut2Color : hsl(25, 90%, 29%)",
    "--triadColor : hsl(150, 90%, 29%)",],
    type : "CSS"
    } ,
    {
    nom : "Google Fonts" ,
    definition :["Polices sur le site"] ,
    example : [ "Coller le <link\=\"stylesheet\...\">  dans le head de l'HTML",
    "Coller le <link\=\"preconnect\...\"> dans le head de l'HTML", 
    "Déclarer la font avec les font-family"] ,
    type : "OTHERS"
    } ,
    {
    nom : "MDI WEBFONTS ICONS" ,
    definition : ["=>https://pictogrammers.com/docs/library/mdi/getting-started/webfont/"] ,
    example : ["Copier le lien dans un <link> dans le head", "Dans la balise de l'élément, rajouter la class class=\"mdi mdi-cart\" par exple"] ,
    type : "OTHERS"
    } ,
    {
    nom : "CSS Variables" ,
    definition : ["=>Peut contenir des couleurs, chiffres, objets, images et + " ],
    example : ["Dans le CSS :root{--bckColor : #1e90ff ;}",
    "Dans le CSS color : var(--bckColor) ;",
    "Dans le JS let r = document.querySelector(':root');",
    "Dans le JS let rs = getComputedStyle(r);",
    "Dans le JS  rs.getPropertyValue('--blue')",
    "Dans le JS  r.style.setProperty('--blue', 'lightblue')"] ,
    type : "CSS"
    } ,
    {
    nom : "JS ASYNCHRONE" ,
    definition : ["Les tâches synchrones sont mises dans la STACK.", 
    "Les tâches asynchrones dans la QUEUE grâce à l'API web asynchrone :" ,
    " 1/ setTimeout etc sont dans la macrotask queue.", 
    " 2/ promises dans la microtasks queue.",
    "Une fois les tâches de la stack finies, l'event loop va exécuter les tâches de la queue, les microtasks avant les macrotasks.",
    "Callbacks = fonction utilisée comme argument d'une autre fonction",
    "Pvt être utilisées comme argument dans le setTimeout et donc être lancées après la réalisation du code aynchrone.",
    "Mais attention à la pyramide de callbacks !!",
    "On a donc créé les promises qui peuvent être intriquées grâce au Chaining de promises .then et .catch .",
    " Puis async await a été créé pour utiliser les promises" ],
    example : [":root{--bckColor : #1e90ff ;}",
    "color : var(--bckColor) ;",
    "let rs = getComputedStyle(r);",
    "rs.getPropertyValue('--blue')",
    "r.style.setProperty('--blue', 'lightblue')"] ,
    type : "JS"
    } ,
    {
    nom : "$PATH" ,
    example : ["$PATH=/usr/bin/local"] ,
    definition : ["chemin vers les binaires =exécutables des programmes" , "à modifier, dans votre environnement, en utilisant votre .bash_profile", "— celui qui est enregistré dans /Users/votrenomdutilisateur/.bash_profile"] ,
    type : "LINUX"
    } 
]

//ScrollToTop
function scrollToTop(top,left){
window.scrollTo({
top: top,
left: left,
behavior: "smooth",
});
console.log("scrollin");        
}
document.getElementById("scrollToTop").addEventListener("click",()=>scrollToTop(100,100))
scrollToTop(0,0);

////SECTION LEFT MENU EN STANDBY
// //Récupération de la variable CSS correspondant à la largeur du menu de gauche
// let r = document.querySelector(':root');
// let rs = getComputedStyle(r);
// rs.getPropertyValue('--leftMenuOffset');
// r.style.setProperty('--leftMenuOffset', 'Opx');

// // Visibilite du menu de gauche
// leftMenuSpan.addEventListener("mouseover",()=>{
//     leftMenuSpan.style.display="none" ;
//     leftMenu.style.visibility="visible";
//     leftMenu.style.top="0px";
//     r.style.setProperty('--leftMenuOffset', '20dvw');
//     // scrollToTop(0,0)
// }) //correspond à var(--leftMenuWidth)
// leftMenu.addEventListener("mouseleave",()=>{
//     leftMenuSpan.style.display="inline" ;
//     leftMenu.style.visibility="hidden";
//     r.style.setProperty('--leftMenuOffset', '0dvw');
// })

// //Génération du menu gauche
// //Génération de la liste des keywords classés par ordre alpha
// keywordListAlphaSort=
// //Propriété "nom" 1ère lettre majuscule
// datas.map(function(value) { return {
// nom : value.nom[0].toUpperCase()+ value.nom.slice(1,value.nom.length) ,
// definition : value.definition ,
// example : value.example ,
// type : value.type }
// })
// //classement par ordre alpha
// .sort(function (a, b) {
// if (a.nom < b.nom) {
// return -1;
// }
// if (a.nom > b.nom) {
// return 1;
// }
// return 0;
// })
// //création des liens et display à gauche
// .map((data)=>{
// let parag=document.createElement("p")
// parag.setAttribute("class" ,`paragLeftMenuLink`)
// let keywordLink=document.createElement("a")
// keywordLink.textContent=`${data.nom}`
// keywordLink.setAttribute("href" ,`#data${data.nom}`)
// keywordLink.setAttribute("class" ,`leftMenuLink`)
// parag.appendChild(keywordLink)
// leftMenu.appendChild(parag);
// })


//Fonction pour filtrer par langage
let htmlCards=[]
function filter(type){
let filtered=datas.filter((data)=>(data.type==type))
console.log (filtered)
wrapper.removeChild(cards)
cards=document.createElement("div")
cards.setAttribute("id","cards")
wrapper.appendChild(cards)
//reset des affichages des keywords
// keywordList=[]
keywordsWrapper.removeChild(keywords)
keywords=document.createElement("p")
keywords.setAttribute("id","keywords")
displayCard(filtered)
generateKeywords(filtered)
}    

HTMLfilterLink.addEventListener("click",()=>{filter("HTML")})
CSSfilterLink.addEventListener("click",()=>filter("CSS"))
JSfilterLink.addEventListener("click",()=>filter("JS"))
TAILWINDfilterLink.addEventListener("click",()=>filter("TAILWIND"))
PHPfilterLink.addEventListener("click",()=>filter("PHP"))
SYMFONYfilterLink.addEventListener("click",()=>filter("SYMFONY"))
BDDfilterLink.addEventListener("click",()=>filter("BDD"))
HOSTINGfilterLink.addEventListener("click",()=>filter("HOSTING"))
LINUXfilterLink.addEventListener("click",()=>filter("LINUX"))
NEWSfilterLink.addEventListener("click",()=>filter("NEWS"))
OTHERSfilterLink.addEventListener("click",()=>filter("OTHERS"))
ALLfilterLink.addEventListener("click",()=>{
wrapper.removeChild(cards)
cards=document.createElement("div")
cards.setAttribute("id","cards")
wrapper.appendChild(cards)
displayCard(datas)})

// affichage de la carte demandée /:cf leftMenu
// document.querySelector("a").addEventListener("click",()=>{
// wrapper.removeChild(cards)
// cards=document.createElement("div")
// cards.setAttribute("id","cards")
// wrapper.appendChild(cards)
// displayCard(datas)})



//Création de la liste des keywords
function generateKeywords(datas){
    
    for (let data of datas) {
        
        // keywordList.push(data.nom)
        let keywordLink=document.createElement("a")
        keywordLink.textContent=`${data.nom}`
        keywordLink.setAttribute("href" ,`#data${data.nom}`)
        keywordLink.setAttribute("class" ,"keywordLink")
        keywords.appendChild(keywordLink)
        keywordsWrapper.appendChild(keywords)
    }
    // keywordList.join()
    console.log("kwordlist est",keywordList)
}
generateKeywords(datas)

//Affichage des cartes
function displayCard(dataArray){

    for (let data of dataArray) {
        
        //instructions de la construction de la carte que ca soit un tableau ou non
        let index=dataArray.indexOf(data)
        let card=document.createElement("div")
        card.setAttribute("class" ,"card")
        card.setAttribute("id" ,`card${index}`)
        let type=document.createElement("img")

        //Cas du tableau
        if (data.tableau) {
        let table=document.createElement("table")
        
        //Création du head avec deux lignes
        // L une pour le titre du tableau
        let nom=table.createTHead() //créer le head du table
        let rowHeadTitle=nom.insertRow() // créer le row pour le titre dans le head
        let textTitle = document.createTextNode(data.nom);
        let th= document.createElement("th");
        nom.setAttribute("class" ,"nom")
        nom.setAttribute("id" ,`data${data.nom}`)
        th.setAttribute("colspan",data.datas.length) // faire que le titre prenne la largeur du tableau
        th.appendChild(textTitle);
        rowHeadTitle.appendChild(th);
        //tableau simple avec deux elements par ligne
        //Créer une ligne par objet de data.datas => chq ligne sera sous la forme "key value"
        let infos=data.datas// c est un tableau dt chaq item est une paire key/value
        
        for (let item of infos){
            let row=table.insertRow()    
            let firstCell=row.insertCell()
            let secondCell=row.insertCell()
            let keyText=Object.keys(item).join("")
            let valueText=Object.values(item).join("")
            let firstCellText=document.createTextNode(keyText)
            let secondCellText=document.createTextNode(valueText)
            firstCell.appendChild(firstCellText)
            secondCell.appendChild(secondCellText)
            row.appendChild(firstCell)
            row.appendChild(secondCell)
            table.appendChild(row)
        }
        card.appendChild(table)
        cards.appendChild(card)

        }
        else {
        //creation des elements de la carte   
        function createCardElements(){

        let nom=document.createElement("h3")
        let definition=document.createElement("div")
        let example=document.createElement("p")

        let copyButtonImg=document.createElement("img")
        //attribution des class appropriées
        card.setAttribute("class" ,"card")
        card.setAttribute("id" ,`card${index}`)
        nom.setAttribute("class" ,"nom")
        nom.setAttribute("id" ,`data${data.nom}`)
        definition.setAttribute("class" ,"definition")
        example.setAttribute("class" ,"example")
        type.setAttribute("class" ,"type")
        copyButtonImg.setAttribute("class" ,"copyButton")
        copyButtonImg.setAttribute("src" ,"https://icongr.am/octicons/copy.svg?size=128&color=currentColor")
        copyButtonImg.setAttribute("id" ,`copyButton${index}`)
        
        

        //Création des références aux textes de l'objet 
        function handleTextsDisplay(){
        let texteNom=document.createTextNode(data.nom)
        //Ajout des textes aux éléments appropriés
        nom.appendChild(texteNom)
        //Raccordement des éléments à la carte
        card.appendChild(nom)
        card.appendChild(definition)
        card.appendChild(example)
        card.appendChild(type)
        card.appendChild(copyButtonImg)
        //Raccordement de la carte au container #cards
        cards.appendChild(card) 

        }
        handleTextsDisplay()
        
        //Choix de l'image en bas à droite en fct du type de langage de la carte
        
        chooseLanguageLogo()
        //Itération pour afficher la définition ligne par ligne
        for(let line of data.definition) {
            let defParag=document.createElement("p")
            let defLineText=document.createTextNode(line)
            defParag.appendChild(defLineText)
            definition.appendChild(defParag)
        }
        //Itération pour afficher l'example ligne par ligne
        for(let line of data.example) {
            let exampleParag=document.createElement("p")
            let exampleLineText=document.createTextNode(line)
            exampleParag.appendChild(exampleLineText)
            example.appendChild(exampleParag)
        }
        
        }
        createCardElements()


        }
        
        function chooseLanguageLogo(){
            let typeImageSrc="" ;
            switch (data.type) {
                case 'HTML':
                typeImageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" ;
                console.log(data.type)
                break;
                case 'CSS':
                typeImageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" ;
                break;
                case 'JS':
                typeImageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
                break;
                case 'OTHERS':
                typeImageSrc="https://icongr.am/material/cat.svg?size=128&color=currentColor" ;
                default :
                typeImageSrc="https://icongr.am/material/cat.svg?size=128&color=currentColor" ;
                break ;
            }
            type.setAttribute("src" ,typeImageSrc)
        }
        // //Création d'un bouton pour copier le code ds le presse-papier
        
        // let copyButton=document.getElementById(`copyButton${index}`)
        // copyButton.addEventListener("click",()=>copyToClipboard(data))
        // function copyToClipboard(data){
        //     let textToCopy=data.example.join()
        //     console.log(textToCopy)
        //     navigator.clipboard.writeText(textToCopy);
        //     // console.log(textToCopy, `#copyButton${data.index}`)
        //     alert("Copied the text: " + textToCopy);
        // }
    }    
}
displayCard(datas)

//bgCustomColor feature
let r = document.querySelector(':root');
if(localStorage.getItem("customBgColor")) {
    customBgColor=localStorage.getItem("customBgColor");
}
else {
    customBgColor='#2b2828';
}
r.style.setProperty('--mainColor', customBgColor);

let customBgColorElement =document.getElementById("customBgColor") ;
customBgColorElement.addEventListener("change",(e)=>{
    customBgColor =e.target.value ;
    console.log(customBgColor) ;
//Récupération de la variable CSS correspondant à --mainColor
let rs = getComputedStyle(r);
rs.getPropertyValue('--mainColor');
r.style.setProperty('--mainColor', customBgColor);
localStorage.setItem("customBgColor", customBgColor);
console.log("cc",localStorage.getItem("customBgColor"));
})
