import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Placeholder.css';

const Placeholder = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      user_email: email,
    };

    emailjs.send(
      'service_a71svcq', // Vervang dit door je eigen service ID van EmailJS
      'template_2ccx98t', // Vervang dit door je eigen template ID van EmailJS
      templateParams,
      'KLTSthWCBv0VMJbTo' // Vervang dit door je eigen Public Key (User ID) van EmailJS
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true); // Zet isSubmitted op true wanneer het verzenden succesvol is
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });

    // Reset het invoerveld na het verzenden van de e-mail
    setEmail('');
    };


  return (
    <div className="placeholder-container">
      <h1 className="placeholder-title">Welkom bij meerwaardebelastingberekenen.be </h1>
      <p className="placeholder-text">
      De recente invoering van een meerwaardebelasting op aandelen door de nieuwe Belgische regering heeft vragen opgeroepen over hoe beleggers hun portefeuilles het beste kunnen beheren. Van zodra de details van deze belasting bekend zijn zal deze website u de mogelijkheid bieden om vooruit te plannen en strategisch te reageren.
      <br></br><br></br>Op ons platform kunt u eenvoudig uw beleggingsposities uploaden. Ons geavanceerd algoritme analyseert uw portefeuille en stelt u verschillende strategieën voor om de impact van de meerwaardebelasting te minimaliseren.
      <br></br><br></br>Laat ons samen trachten de impact van deze belasting op uw portefeuille te beperken.
      </p>
      <form className="email-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Wil je op de hoogte blijven? Vul dan hieronder je e-mail adres in.</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Verzenden</button>
      </form>
      {isSubmitted && (<p><strong>Bedankt, we houden je op de hoogte!</strong></p>)}    
    </div>
  );
};

export default Placeholder;
