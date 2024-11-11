// Importer les bibliothèques React et useState pour gérer l'état du composant et useEffect pour les effets secondaires
import React, { useState, useEffect } from 'react';


// Création du composant Date qui affiche la date du jour dans une balise 
function DateDisplay() {

    // Déclaration d'une variable date et d'une fonction setDate qui permet de modifier la valeur de la variable date
    const [date, setDate] = useState(new Date());


    // Utilisation de useEffect pour mettre à jour la date chaque seconde  
    useEffect(() => {

        // Utilisation de la fonction setInterval pour mettre à jour la date chaque seconde 
        const interval = setInterval(() => {
            // Modification de la date avec la fonction setDate en lui passant la date actuelle
            setDate(new Date());

        }, 1000);


        // Utilisation de la fonction clearInterval pour arrêter le setInterval lorsque le composant est démonté 
        return () => {

            // Arrêt du setInterval 
            clearInterval(interval);
        }



    }, []);

    // Affichage de la date dans une balise div avec la classe display-date 
    return <div className='display-date'>

        {/* Affichage de la date dans une balise p */}
        <p>{date.toLocaleString()}</p>

    </div>


}

// export du composant Date pour pouvoir l'utiliser dans d'autres fichiers notamment dans le fichier App.js
export default DateDisplay;