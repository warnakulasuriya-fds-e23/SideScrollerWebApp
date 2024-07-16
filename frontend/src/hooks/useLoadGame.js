import { useAuthContext } from "./useAuthContext";

export const useLoadGame = () => {
  const { user } = useAuthContext();
  const loadGameBackendCommunication = async (Slot) => {
    const response = await fetch(`/api/saveStates/${Slot}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.createdToken}`,
      },
    });
    if (!response.ok) {
      return null;
    }
    const jsonForm = await response.json();
    return jsonForm;
  };
  return { loadGameBackendCommunication };
};
