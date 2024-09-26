import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const loginBackendCommunication = async (Email, Password, rememberMe) => {
    setError(null);
    try {
      const response = await axios
        .post(
          `${process.env.BACKEND_URL}/api/users/login`,
          JSON.stringify({ Email, Password }),
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
    } catch (error) {
      console.log(error.message);
    }
  };

  return { loginBackendCommunication, isLoading, error };
};
