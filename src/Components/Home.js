import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Auth System
      </Typography>
      <Typography variant="body1">
        Please sign up or login to access your dashboard.
      </Typography>
    </Box>
  );
};

export default Home;