// Importer les composants React nécessaires pour le fonctionnement de l'application dans le fichier App.js
import './App.css';
import Header from './components/Header.jsx';
import Date from './components/Date.jsx';
import Taches from './components/Taches.jsx';
import Footer from './components/Footer.jsx';

// Création d'un composant App qui affiche le composant Header,Date,Taches et Footer
function App() {
  return (
    <div className="App">

      {/* // Appel du composant Header avec le titre "Garti Samy" */}
      <Header title={"Garti Samy"} />

      {/* // Appel du composant Date */}
      <Date />

      {/* // Appel du composant Taches */}
      <Taches />

      {/* // Appel du composant Footer */}
      <Footer props={"Gestionnaire de taches fait en React"} />

    </div>
  );
}

// export du composant App pour pouvoir l'utiliser dans d'autres fichiers 
export default App;
