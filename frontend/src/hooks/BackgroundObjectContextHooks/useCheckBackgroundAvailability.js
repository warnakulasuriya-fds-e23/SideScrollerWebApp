import axios from "axios";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";

export const useCheckBackgroundAvailability = () => {
  const { user } = useAuthContext();

  const CheckBackgroundAvailabiltyBackendCommunication = async (
    BackgroundName
  ) => {
    const response = await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/background/check-availability`,
        JSON.stringify({ BackgroundName }),
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
    return response.data.Availability;
  };
  return { CheckBackgroundAvailabiltyBackendCommunication };
};
