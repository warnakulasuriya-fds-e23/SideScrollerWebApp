import axios from "axios";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
export const useReturnBackground = () => {
  const { user } = useAuthContext();
  const returnBackgroundBackendCommunication = async (BackgroundName) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/background/return`,
      JSON.stringify({ BackgroundName }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      }
    );
    return response.data;
  };
  return { returnBackgroundBackendCommunication };
};
