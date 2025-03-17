import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await registerUser({ username, password, email, cpf });
      navigate('/login'); // Redireciona para a página de login após o registro
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4">Registrar</Typography>
      <form onSubmit={handleRegister}>
        <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
        <TextField label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} fullWidth required />
        <Button type="submit" variant="contained">Registrar</Button>
      </form>
    </div>
  );
};

export default Register;