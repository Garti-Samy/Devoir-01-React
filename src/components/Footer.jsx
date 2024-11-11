// Création d'un composant Footer.jsx qui contiendra le code HTML du pied de page de l'application.
function Footer({ props }) {

    

    // Retourne le code HTML du pied de page de l'application
    return <div className="footer-class">

        {/* Affichage du texte du pied de page */}
        <h2>{props}</h2>

    </div>
}

// Export du composant Footer 
export default Footer;