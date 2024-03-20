

#Relation one to many un show a plusieurs saisons 
une saison ne crrspond qu'à un show

##Dans show
 #[ORM\OneToMany(targetEntity: Season::class, mappedBy: 'show', orphanRemoval: true)]
    private Collection $seasons;

    #[ORM\ManyToMany(targetEntity: Genre::class, inversedBy: 'shows')]
    private Collection $genres;

##Dans season
    #[ORM\ManyToOne(inversedBy: 'seasons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Show $show = null;

#Relation Many to Many un show a plusieurs genres et un genre a plusieurs shows
##Dans Genre
    #[ORM\ManyToMany(targetEntity: Show::class, mappedBy: 'genres')]
    private Collection $shows;

**Une table show_genre a été crée ds la BDD comme c many to many**

pour la relation avec Casting
    #[ORM\OneToMany(targetEntity: casting::class, mappedBy: 'movie')]
    private Collection $castings;
le mot show a pas été utilisé mais movie dc dans la table casting c movie id
Ms greg a modifié les mots ds les entites je crois ?? 
