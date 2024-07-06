import Home from "./home";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ReferForm from "./refer";
import Login from './Auth/Login';
import Register from './Auth/Register';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Register /> : <Home />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Home/>}
          />
          <Route
            path="/refer"
            element={!isAuthenticated ? <Login /> :<ReferForm />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
