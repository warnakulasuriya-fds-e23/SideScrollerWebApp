import axios from "axios";
import { useAuthContext } from "../useAuthContext";
export const useDeleteBackground = () => {
  const { user } = useAuthContext();
  const deleteBackgroundBackendCommunication = async (BackgroundName) => {
    const response = await axios.delete(
      "/api/background/del",
      JSON.stringify({ BackgroundName }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      }
    );
  };
  return { deleteBackgroundBackendCommunication };
};
