import { useAuthContext } from "./useAuthContext";

export const useSaveGame = () => {
  const { user } = useAuthContext();
  const saveGameBackendCommunication = async (Slot, SerialzedGameState) => {
    const response = fetch(`/api/saveStates/update/${Slot}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.createdToken}`,
      },
      body: SerialzedGameState,
    });
  };

  return { saveGameBackendCommunication };
};
