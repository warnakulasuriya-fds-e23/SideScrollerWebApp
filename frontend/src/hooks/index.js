//Auth Context related hooks
export { useAuthContext } from "./AuthContextHooks/useAuthContext";
export { useLogin } from "./AuthContextHooks/useLogin";
export { useLogout } from "./AuthContextHooks/useLogOut";
export { useSignup } from "./AuthContextHooks/useSignup";

//Background Object Context related hooks
export { useBackgroundObjectContext } from "./BackgroundObjectContextHooks/useBackgroundObjectContext";
export { useAddBackground } from "./BackgroundObjectContextHooks/useAddBackground";
export { useDeleteBackground } from "./BackgroundObjectContextHooks/useDeleteBackground";
export { useReturnBackground } from "./BackgroundObjectContextHooks/useReturnBackground";
export { useLoadUpBackground } from "./BackgroundObjectContextHooks/useLoadUpBackground";
export { useUpdateBackground } from "./BackgroundObjectContextHooks/useUpdateBackground";
export { useCheckBackgroundAvailability } from "./BackgroundObjectContextHooks/useCheckBackgroundAvailability";

//Game Settings Context related hooks
export { useGameSettingsContext } from "./GameSetttingsContextHooks/useGameSettingsContext";
export { useLoadUpGameSettings } from "./GameSetttingsContextHooks/useLoadUpGameSetting";
export { useUpdateGameSettings } from "./GameSetttingsContextHooks/useUpdateGameSettings";

export { useSaveGame } from "./useSaveGame";
export { useLoadGame } from "./useLoadGame";
