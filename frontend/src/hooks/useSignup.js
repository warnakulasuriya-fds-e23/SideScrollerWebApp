import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const UseSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signupBackendCommunication = async (Email, UserName, Password) => {
    setError(null);
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, UserName, Password }),
    });

    const jsonForm = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(jsonForm.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(jsonForm));

      dispatch({ type: "LOGIN", payload: jsonForm });

      setIsLoading(false);
    }
  };

  return { signupBackendCommunication, isLoading, error };
};
