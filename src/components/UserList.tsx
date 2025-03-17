import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import api from '../services/api';

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get('/users'); // Supondo que exista uma rota para obter todos os usuários
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId: string) => {
    try {
      await api.delete(`/users/${userId}`);
      setUsers(users.filter((user: any) => user._id !== userId));
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      {users.map((user: any) => (
        <Grid item xs={12} sm={6} md={4} key={user._id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{user.username}</Typography>
              <Typography variant="body2">{user.email}</Typography>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(user._id)}>Deletar</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;