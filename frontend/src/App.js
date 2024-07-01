import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar, PageFooter } from "./components";
import { Home, Login, Signup, PageNotFound } from "./pages";
import { Flowbite } from "flowbite-react";
import { useAuthContext } from "./hooks";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App h-screen overflow-auto  bg-white dark:bg-gray-700">
      <Flowbite>
        <BrowserRouter>
          <div className="h-[8vh]">
            <NavigationBar />
          </div>
          <div className="h-[84vh]">
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
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div className="h-[8vh]">
          <PageFooter />
        </div>
      </Flowbite>
    </div>
  );
}

export default App;
