import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; // Assuming Home.js is directly in Components
import Signup from './Components/Auth/Signup'; // Corrected path
import Login from './Components/Auth/Login';   // Corrected path
import Dashboard from './Components/Dashboard'; // Assuming Dashboard.js is directly in Components
import PrivateRoute from './Components/Auth/PrivateRoute'; // Corrected path
import { Container, Snackbar, Alert } from '@mui/material';
import { useAuth } from './context/AuthContext';

// This AppWrapper is a good pattern if AuthContext needs to wrap the Router
function AppWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const { error, success, clearMessages } = useAuth(); // Assuming AuthContext provides these

  return (
    <Router>
      <Navbar />
      {/*
        The global page transition logic we previously set up using TransitionGroup
        and CSSTransition in App.js for playful transitions between Login/Signup/Dashboard
        is missing in this new App.js structure.
        If you want those transitions, you'll need to re-integrate that logic around your <Routes>.
        For now, this version is simpler but without the page transitions.
      */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          {/*
            NOTE: If you still want the playful page transitions between Login/Signup/Dashboard,
            you MUST re-implement the <TransitionGroup> and <CSSTransition> logic from
            the previous App.js version. This current structure will not have those transitions.
          */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </Container>

      {/* Global Message Snackbars */}
      <Snackbar
        open={!!success}
        autoHideDuration={5000}
        onClose={clearMessages}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={clearMessages} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={clearMessages}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={clearMessages} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Router>
  );
}

export default AppWrapper;