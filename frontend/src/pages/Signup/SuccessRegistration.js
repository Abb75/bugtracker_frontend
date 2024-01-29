import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Assurez-vous d'importer axios
import { Navigate } from 'react-router-dom';

const RegistrationCongratulations = () => {
  const navigate = Navigate()
  const { id } = useParams();

  const sendConfirmRegistration = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        }
      };

      // Utilisation de la méthode axios.post correctement
      await axios.post(`${process.env.REACT_APP_API_URL}/register-confirm/${id}/`, { is_active: true }, config);

      // Redirection vers la page de connexion après la confirmation
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la confirmation d\'inscription :', error);
      // Gérez les erreurs selon vos besoins
    }
  };

  return (
    <div>
      <h1>Félicitations !</h1>
      <p>Votre inscription est confirmée.</p>
      <p>Vous pouvez maintenant vous connecter en utilisant le lien ci-dessous :</p>
      <Link onClick={() => sendConfirmRegistration()} to="/login">Page de connexion</Link>
    </div>
  );
};

export default RegistrationCongratulations;
