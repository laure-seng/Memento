//commentaire pour du beurre
//probleme avec affichage du menu
// reformuler les element.style.prop par ajout/toggle classlisst
// POURQUOI JE N4ARRIVE PAS A creer le bouton COLLER specifique à chaque carte?
// ==> utilsier la fonctin dans une classe ? méthode de classes ?



// ne pas prendre l'erreu à la légère concernant le pb du copy2clipboard c peut etre ça le pb !!!
// Idees de fctionnalites en plus : mettre en favoris / création de sa propre carte en rajoutant via un formulaire



//rajouter le langage aux data de type tableau
const body=document.querySelector("body")
const li=document.getElementsByTagName("li")
let keywords= document.querySelector("#keywords")
const keywordsWrapper= document.querySelector("#keywordsWrapper")
const leftMenuSpan= document.querySelector("#left-menu-span")
const leftMenu= document.querySelector("#left-menu")
const leftMenuWrapper= document.querySelector("#left-menu-wrapper")
const wrapper= document.querySelector("#wrapper")
let cards=document.querySelector("#cards")
let  keywordList=[]
let  keywordListAlphaSort=[]
let  keywordLinks=""

const HTMLfilterLink=document.getElementById("HTMLfilter")
const CSSfilterLink=document.getElementById("CSSfilter")
const JSfilterLink=document.getElementById("JSfilter")
const LINUXfilterLink=document.getElementById("LINUXfilter")
const NEWSfilterLink=document.getElementById("NEWSfilter")
const OTHERSfilterLink=document.getElementById("OTHERSfilter")
const ALLfilterLink=document.getElementById("ALLfilter")

const datas = [
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
        type : "CSS"
    } ,



    {
        nom : "Grid /Simplifié" ,
        definition : [ "Avec Grid, les area ont des dimensions fixes prédéterminées != flex",
                    " grid-template-areas va définir une grille avec les différents items",
                    " grid-template-columns va définir la taille des colonnes",
                    " grid-template-rows va définir la taille des lignes",
                ] ,
        example : [ "Dans le container :",
                    "grid-template-areas: \"head head\"\"nav  main\"\"nav  foot\";",
                    "grid-template-columns: repeat(2,20dvw)",
                    "grid-template-rows: 50px 1fr 30px;",
                    " Dans chaque item : grid-area : head ; "
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
        nom : "Personnaliser Vscode" ,
        definition : ["Changer la couleur de la scrollbar",
        " scrollbarSlider.shadow /activeBackground /background/hoverBackground"
                ] ,
        example : [ "ctrl+shift+P et ouvrir user preferences JSON",
        "\"workbench.colorCustomizations\"\: \{\"scrollbarSlider.background\"\: \"#ff0000\"\}",
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
            {"chmod -777 <nomdufichier>":"donne ts les droits au ficier qui suit"},
            {"En vrac ": "pwd, ls, mkdir, cd,touch, cp, mv, rm"},
            {"En vrac 2 ": "clear, echo, history, zip, tar, sudo, cat,man"},
            {"ln -s nomDufFichier ": "crée un lien symbolique"},
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
    definition : ["Methode qui prend en paramètre une fonction qui accepte 1 à 3 arguments "] ,
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

//pas encore utilisées
const bonnesPratiques = [
"Ne pas créer des variables JS inutiles !" ,
"Utiliser des sélecteurs CSS" ,
"Utiliser la sémantique HTML" ,
"Utiliser grid pour l organisation générale et flex pour chaque sous-partie "
]

//ScrollToTop
function scrollToTop(top,left){
window.scrollTo({
top: top,
left: left,
behavior: "smooth",
});
console.log("scrollin")        
}
document.getElementById("scrollToTop").addEventListener("click",()=>scrollToTop(100,100))


// leftMenu.style.visibility="visible";
// wrapper.style.left="20vw"; 
scrollToTop(0,0);
// Visibilite du menu de gauche
leftMenuSpan.addEventListener("mouseover",()=>{
    leftMenuSpan.style.display="none" ;
    leftMenu.style.visibility="visible";
    leftMenu.style.top="0px";
    wrapper.style.left="20vw"; scrollToTop(0,0)
}) //correspond à var(--leftMenuWidth)
leftMenu.addEventListener("mouseleave",()=>{
    leftMenuSpan.style.display="inline" ;
    leftMenu.style.visibility="hidden";
    wrapper.style.left="0vw"})

//Génération du menu gauche
//Génération de la liste des keywords classés par ordre alpha
keywordListAlphaSort=
//Propriété "nom" 1ère lettre majuscule
datas.map(function(value) { return {
nom : value.nom[0].toUpperCase()+ value.nom.slice(1,value.nom.length) ,
definition : value.definition ,
example : value.example ,
type : value.type }
})
//classement par ordre alpha
.sort(function (a, b) {
if (a.nom < b.nom) {
return -1;
}
if (a.nom > b.nom) {
return 1;
}
return 0;
})
//création des liens et display à gauche
.map((data)=>{
let parag=document.createElement("p")
parag.setAttribute("class" ,`paragLeftMenuLink`)
let keywordLink=document.createElement("a")
keywordLink.textContent=`${data.nom}`
keywordLink.setAttribute("href" ,`#data${data.nom}`)
keywordLink.setAttribute("class" ,`leftMenuLink`)
parag.appendChild(keywordLink)
leftMenu.appendChild(parag);
})


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
LINUXfilterLink.addEventListener("click",()=>filter("LINUX"))
NEWSfilterLink.addEventListener("click",()=>filter("NEWS"))
OTHERSfilterLink.addEventListener("click",()=>filter("OTHERS"))
ALLfilterLink.addEventListener("click",()=>{
wrapper.removeChild(cards)
cards=document.createElement("div")
cards.setAttribute("id","cards")
wrapper.appendChild(cards)
displayCard(datas)})
//afficher toutes les cartes si filtrées pour accéder à la carte demandée 
document.querySelector("a").addEventListener("click",()=>{

wrapper.removeChild(cards)
cards=document.createElement("div")
cards.setAttribute("id","cards")
wrapper.appendChild(cards)
displayCard(datas)})


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

