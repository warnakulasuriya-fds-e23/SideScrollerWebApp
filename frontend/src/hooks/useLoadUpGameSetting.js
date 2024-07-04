import { useGameSettingsContext } from "./useGameSettingsContext";
import { useAuthContext } from "./useAuthContext";

export const useLoadUpGameSettings = () => {
  const { dispatch } = useGameSettingsContext();
  const { user } = useAuthContext();

  const LoadUpGameSettings = async () => {
    const response = await fetch("/api/gameSettings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.createdToken}`,
      },
    });
    const jsonForm = await response.json();
    if (response.ok) {
      dispatch({ type: "LOAD_UP", payload: jsonForm });
    }
  };
  return { LoadUpGameSettings };
};
