import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx"; 

const useForm = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleForm = async (values) => {
    try {
      setLoading(true);
      const res = await fetch('https://accredian-backend-task-cs8j.onrender.com/api/refer/form', {
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
        if(data.message) {
          setErrorMessage(data.message);
        }else{
            setErrorMessage("Something went wrong");
            
        }
      }
    } catch (error) {
      setErrorMessage(error.message || "An unexpected error occurred");
     }finally {
      setLoading(false);
     }
  };
  
  return {loading, handleForm, errorMessage };
};

export default useForm;