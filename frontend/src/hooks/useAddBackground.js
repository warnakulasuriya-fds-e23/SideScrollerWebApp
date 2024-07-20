import axios from "axios";
import { useAuthContext } from "./useAuthContext";
export const useAddBackground = () => {
  const { user } = useAuthContext();
  const addBackroundBackendCommunication = async (backgroundObject) => {
    const response = await axios.post(
      "/api/background/add",
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
