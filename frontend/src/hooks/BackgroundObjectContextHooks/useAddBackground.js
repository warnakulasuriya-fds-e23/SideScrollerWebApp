import axios from "axios";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
export const useAddBackground = () => {
  const { user } = useAuthContext();
  const addBackroundBackendCommunication = async (backgroundObject) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/background/add`,
      JSON.stringify(backgroundObject),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      }
    );
  };

  return { addBackroundBackendCommunication };
};
