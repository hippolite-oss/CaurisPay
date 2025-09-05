import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Inscription.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmeMotdepasse: '',
  });

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifier que le mot de passe et la confirmation sont identiques
    if (formData.password !== formData.confirmeMotdepasse) {
      setMessage("Les mots de passe ne correspondent pas.");
      setSuccess(false);
      return;
    }

    // Préparer les données à envoyer en respectant les clés utilisées dans le backend Flask
    const payload = {
      nom: formData.nom.trim(),
      prenom: formData.prenom.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    };

    try {
      const response = await fetch('https://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setMessage("Inscription réussie !");
        setSuccess(true);
        // Optionnel : réinitialiser le formulaire
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          password: '',
          confirmeMotdepasse: '',
        });
      } else {
        setMessage(data.message || "Erreur lors de l'inscription.");
        setSuccess(false);
      }
    } catch (error) {
      setMessage("Erreur serveur. Veuillez réessayer plus tard.");
      setSuccess(false);
    }
  };

  return (
    <div className="container-form">
      <h1>Cauris Pay</h1>
      <p>Inscrivez-vous dès maintenant et profitez de nos services.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="nom" 
          placeholder="Nom" 
          value={formData.nom} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="prenom" 
          placeholder="Prénom" 
          value={formData.prenom} 
          onChange={handleChange} 
          required 
        />

        <div className="inline-inputs">
          <input type="date" name="date" placeholder="Date de naissance" />
          <input type="text" name="nationalite" placeholder="Nationalité" />
        </div>

        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Mot de passe" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="confirmeMotdepasse" 
          placeholder="Confirmez le mot de passe" 
          value={formData.confirmeMotdepasse} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">S’inscrire</button>
      </form>
      {message && (
        <p style={{ color: success ? 'green' : 'red' }}>{message}</p>
      )}
      <h4>J'ai déjà un compte</h4>
      <Link to="/">Se connecter</Link>
    </div>
  );
};

export default Inscription;
