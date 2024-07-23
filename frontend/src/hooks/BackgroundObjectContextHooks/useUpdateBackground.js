import React from "react";
import { useAuthContext } from "../AuthContextHooks/useAuthContext";
export const useUpdateBackground = () => {
  const { user } = useAuthContext();

  const updateBackgroundBackendCommunication = async (backgroundObject) => {
    await axios
      .patch("/api/background/update", JSON.stringify(backgroundObject), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.createdToken}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { updateBackgroundBackendCommunication };
};
