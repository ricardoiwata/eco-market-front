import React from 'react';
import { Typography } from '@mui/material';
import UserList from './UserList';
import ProductList from './ProductList';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4">Admin Dashboard</Typography>
      <UserList />
      <ProductList />
    </div>
  );
};

export default AdminDashboard;