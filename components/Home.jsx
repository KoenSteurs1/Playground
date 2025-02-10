import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css'; // Pas aan naar je eigen CSS-bestand

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>meerwaardebelastingberekenen.be</title>
        <meta name="robots" content="noindex" /> {/* Zorgt ervoor dat zoekmachines deze pagina niet indexeren */}
      </Helmet>
      <h1>Home</h1>
      <p>Hier komt hopelijk binnenkort een mooie website :-).</p>
    </div>
  );
};

export default Home;
