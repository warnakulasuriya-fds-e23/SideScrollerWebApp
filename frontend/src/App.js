import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Flowbite } from "flowbite-react";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App h-screen overflow-auto  bg-white dark:bg-gray-700">
      <Flowbite>
        <BrowserRouter>
          <NavigationBar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
}

export default App;
