import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const loginBackendCommunication = async (Email, Password, rememberMe) => {
    setError(null);
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email, Password }),
      });
      const jsonForm = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(jsonForm.error);
      }
      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(jsonForm));
        } else {
          sessionStorage.setItem("user", JSON.stringify(jsonForm));
        }

        dispatch({ type: "LOGIN", payload: jsonForm });

        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { loginBackendCommunication, isLoading, error };
};
