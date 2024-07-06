import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx"; 
import { json } from "react-router-dom";

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch('https://accredian-backend-task-cs8j.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      if(res.status === 200) {
        setErrorMessage(data.message);
        login(data.token,data.user);
      } else if (res.status === 404) {
        setErrorMessage(data.message);
      }else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage(error);
     }finally {
      setLoading(false);
     }
  };
  
  return {loading, error, loginUser, errorMessage };
};

export default useLogin;