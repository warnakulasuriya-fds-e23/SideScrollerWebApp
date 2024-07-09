import { useGameSettingsContext } from "./useGameSettingsContext";
import { useAuthContext } from "./useAuthContext";
export const useUpdateGameSettings = () => {
  const { dispatch } = useGameSettingsContext();
  const { user } = useAuthContext();

  const UpdateGameSettings = async (gameSettingsObject) => {
    const response = await fetch("/api/gameSettings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.createdToken}`,
      },
      body: JSON.stringify(gameSettingsObject),
    });
    const jsonForm = await response.json();
    console.log(jsonForm);
    if (response.ok) {
      dispatch({ type: "LOAD_UP", payload: jsonForm });
    }
  };
  return { UpdateGameSettings };
};
