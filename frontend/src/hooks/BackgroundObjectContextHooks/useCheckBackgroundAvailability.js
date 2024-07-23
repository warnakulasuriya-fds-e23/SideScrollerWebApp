import axios from "axios";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";

export const useCheckBackgroundAvailability = () => {
  const { user } = useAuthContext();

  const CheckBackgroundAvailabiltyBackendCommunication = async (
    BackgroundName
  ) => {
    const response = await axios
      .patch("/api/background/update", JSON.stringify({ BackgroundName }), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    return response.data.Availability;
  };
  return { CheckBackgroundAvailabiltyBackendCommunication };
};
