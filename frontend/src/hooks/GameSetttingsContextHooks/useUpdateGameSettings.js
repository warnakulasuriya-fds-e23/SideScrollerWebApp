import { useGameSettingsContext } from "./useGameSettingsContext";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
import axios from "axios";
export const useUpdateGameSettings = () => {
  const { dispatch } = useGameSettingsContext();
  const { user } = useAuthContext();

  const UpdateGameSettings = async (gameSettingsObject) => {
    const response = await axios.patch(
      "/api/gameSettings",
      JSON.stringify(gameSettingsObject),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      }
    );

    if (response) {
      dispatch({ type: "LOAD_UP", payload: response.data });
    }
  };
  return { UpdateGameSettings };
};
