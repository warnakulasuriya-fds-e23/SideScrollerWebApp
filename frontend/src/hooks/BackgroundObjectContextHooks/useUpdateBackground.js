import axios from "axios";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
export const useUpdateBackground = () => {
  const { user } = useAuthContext();

  const updateBackgroundBackendCommunication = async (backgroundObject) => {
    await axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/background/update`,
        JSON.stringify(backgroundObject),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.createdToken}`,
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };
  return { updateBackgroundBackendCommunication };
};
