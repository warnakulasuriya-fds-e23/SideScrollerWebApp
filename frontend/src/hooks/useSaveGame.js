import { useAuthContext } from "./useAuthContext";

export const useSaveGame = () => {
  const { user } = useAuthContext();
  const saveGameBackendCommunication = async (Slot, SerialzedGameState) => {
    var ToBeSent = null;
    if (Slot === "A") {
      ToBeSent = { SaveSlot_A: JSON.parse(SerialzedGameState) };
    } else if (Slot === "B") {
      ToBeSent = { SaveSlot_B: JSON.parse(SerialzedGameState) };
    } else if (Slot === "C") {
      ToBeSent = { SaveSlot_C: JSON.parse(SerialzedGameState) };
    } else {
      return null;
    }
    const response = await fetch("/api/saveStates/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.createdToken}`,
      },
      body: JSON.stringify(ToBeSent),
    });
  };

  return { saveGameBackendCommunication };
};
