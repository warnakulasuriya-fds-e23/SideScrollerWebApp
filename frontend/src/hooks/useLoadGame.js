import { useAuthContext } from "./AuthContextHooks/useAuthContext";
import axios from "axios";
export const useLoadGame = () => {
  const { user } = useAuthContext();
  const loadGameBackendCommunication = async (Slot) => {
    const response = await axios.get(`/api/saveStates/${Slot}`, {
      headers: {
        Authorization: `Bearer ${user.createdToken}`,
      },
    });

    return response.data;
  };
  return { loadGameBackendCommunication };
};
