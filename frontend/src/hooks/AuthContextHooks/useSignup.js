import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signupBackendCommunication = async (
    Email,
    UserName,
    Password,
    rememberMe
  ) => {
    setError(null);
    const response = await axios
      .post(
        "/api/users/signup",
        JSON.stringify({ Email, UserName, Password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch(function (error) {
        setIsLoading(false);
        setError(error.response.data.error);
        return { data: null };
      });
    if (response.data) {
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      dispatch({ type: "LOGIN", payload: response.data });

      setIsLoading(false);
    }
  };

  return { signupBackendCommunication, isLoading, error };
};
