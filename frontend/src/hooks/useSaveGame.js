import { useAuthContext } from "./useAuthContext";
import axios from "axios";
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
    await axios.patch("/api/saveStates/update", JSON.stringify(ToBeSent), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.createdToken}`,
      },
    });
  };

  return { saveGameBackendCommunication };
};
