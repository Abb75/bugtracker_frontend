import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationCongratulations = () => {
  return (
    <div>
      <h1>Félicitations !</h1>
      <p>Votre inscription est confirmée.</p>
      <p>Vous pouvez maintenant vous connecter en utilisant le lien ci-dessous :</p>
      <Link to="/login">Page de connexion</Link>
    </div>
  );
};

export default RegistrationCongratulations;
