import { Typography, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.email}
      </Typography>
      <Typography variant="body1">
        You are now logged in to the dashboard.
      </Typography>
    </Box>
  );
};

export default Dashboard;