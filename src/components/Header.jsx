// Création d'un composant Header qui prend en paramètre un titre et qui affiche ce titre dans une balise h1 en props dans le fichier App.js
function Header({ title }) {

    // création d'une div qui contient un h1 avec le titre passé en props
    return <div className="header-class">


        {/* // Affichage du titre de la page en Props  */}
        <h1>Gestionnaire de taches de {title}</h1>

    </div>



}

// export du composant Header pour pouvoir l'utiliser dans d'autres fichiers
export default Header;