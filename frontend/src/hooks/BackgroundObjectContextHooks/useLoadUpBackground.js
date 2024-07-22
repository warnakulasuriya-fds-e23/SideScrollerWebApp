import { useBackgroundObjectContext } from "./useBackgroundObjectContext";
import { useReturnBackground } from "./useReturnBackground";

export const useLoadUpBackground = () => {
  const { dispatch } = useBackgroundObjectContext();
  const { returnBackgroundBackendCommunication } = useReturnBackground();
  const LoadUpBackgroundFromBackend = async (BackgroundName) => {
    const fetchedBackgroundObject = await returnBackgroundBackendCommunication(
      BackgroundName
    );

    if (fetchedBackgroundObject) {
      dispatch({ type: "LOAD_UP", payload: fetchedBackgroundObject });
    }
  };
  return { LoadUpBackgroundFromBackend };
};
