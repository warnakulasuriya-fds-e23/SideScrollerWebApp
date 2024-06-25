import { UseAuthContext } from "./UseAuthContext";
// import { UseWorkoutsContext } from "./UseWorkoutsContext"; MAKE CHANGES
export const UseLogout = () => {
  const { dispatch } = UseAuthContext();
  //   const { dispatch: workoutsDispatch } = UseWorkoutsContext();MAKE CHANGES
  const Logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    // workoutsDispatch({ type: "CLEAR_WORKOUTS" });MAKE CHANGES
  };
  return { Logout };
};
