// Importer les bibliothèques React et useState pour gérer l'état du composant et useEffect pour les effets secondaires
import React, { useState, useEffect } from 'react';

// Importer les images des tâches à réaliser pour l'utilisateur ( React, Présentation, Courses et Sport ) 
import image1 from '../assets/react.png';
import image2 from '../assets/pres.png';
import image3 from '../assets/shop.png';
import image4 from '../assets/workout.png';


// Création du composant Taches qui affiche les tâches à faire dans une section
function Taches() {

    // Déclaration de la variable d'état taches qui contiendra la liste des tâches à faire et la fonction setTaches pour modifier cette liste des tâches à effectuer
    const [taches, setTaches] = useState([]);

    // Titre principal de la page
    const title = "Mes tâches à réaliser :";

    // Initialisation des tâches à réaliser pour l'utilisateur  
    useEffect(() => {

        //  Création d'un objet tâche qui contient l'image, le titre, la description et le statut de la tâche à réaliser 
        setTaches([
            { image: image1, titre: "Finir le projet React", description: "Terminer le développement de l'application React avant la date limite.", statut: "En cours" },
            { image: image2, titre: "Préparer la présentation", description: "Créer des diapositives et préparer le discours pour la présentation du projet.", statut: "Presque terminé" },
            { image: image3, titre: "Faire les courses", description: "Acheter les provisions nécessaires pour la semaine.", statut: "Terminé" },
            { image: image4, titre: "Séance de sport", description: "Effectuer une séance d'entraînement de 30 minutes.", statut: "Archivé" },

        ])
    }, []);


    // GetStatutClass permet de retourner la classe CSS en fonction du statut de la tâche à réaliser 
    const getStatutClass = (statut) => {
        switch (statut) {
            case "En cours":
                return "color-en-cours";
            case "Presque terminé":
                return "color-presque-termine";
            case "Terminé":
                return "color-termine";
            case "Archivé":
                return "color-archive";
            default:
                return "";
        }
    };

    //Supprimer une tache Terminé ou Archivé
    // Source : https://fr.react.dev/learn/updating-arrays-in-state
    // Source : https://youtube.com/watch?v=jWWW9Wyl0mY
    const deleteTache = (supprimer) => {
        // Si l'id de la tâche à supprimer est différent de l'index de la tâche, on garde la tâche sinon on la supprime 
        const supprimerTache = taches.filter((_, index) => index !== supprimer);
        setTaches(supprimerTache);
    }


    return (
        <div className="container-task">
            {/* Titre de la page */}
            <h1>{title}</h1>

            {/* Affichage de la liste des tâches pour l'utilisateur */}
            {taches.map((tache, id) => (
                // index : Identifiant de la tâche
                <div className="task-divs" key={id}>

                    {/* Icone de la tâche ( Image ou icone ) */}
                    <div className="icon-task">
                        <img src={tache.image} alt={tache.titre} width="150px" />
                    </div>

                    {/* Contenu de la tâche ( Titre, Description et Statut ) */}
                    <div className="task">

                        {/* Titre et Statut de la tâche */}
                        <div className="top">
                            <h2>{tache.titre}</h2>
                            <p className={`color-statut ${getStatutClass(tache.statut)}`} >{tache.statut}</p>


                            {/* Afficher le bouton de suppression seulement si le statut n'est pas "En cours" ou "Presque terminé" */}
                            {(tache.statut !== "En cours" && tache.statut !== "Presque terminé") && (
                                <button onClick={() => deleteTache(id)} className="btn-delete">Supprimer</button>
                            )}
                        </div>

                        {/* Description de la tâche */}
                        <div className="bottom">
                            <p>{tache.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};


// export du composant Taches pour pouvoir l'utiliser dans d'autres fichiers notamment dans le fichier App.js
export default Taches;