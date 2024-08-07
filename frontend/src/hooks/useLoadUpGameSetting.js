import { useGameSettingsContext } from "./useGameSettingsContext";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
export const useLoadUpGameSettings = () => {
  const { dispatch } = useGameSettingsContext();
  const { user } = useAuthContext();

  const LoadUpGameSettings = async () => {
    const response = await axios.get("/api/gameSettings", {
      headers: {
        Authorization: `Bearer ${user.createdToken}`,
      },
    });
    if (response.data) {
      dispatch({ type: "LOAD_UP", payload: response.data });
    }
  };
  return { LoadUpGameSettings };
};
