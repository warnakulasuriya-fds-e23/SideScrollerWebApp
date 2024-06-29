import { useGameSettings } from "./useGameSettings";
import { useAuthContext } from "./useAuthContext";

export const useGetGameSettings = () => {
  const { dispatch } = useGameSettings();
  const { user } = useAuthContext();

  const LoadUpGameSettings = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
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
