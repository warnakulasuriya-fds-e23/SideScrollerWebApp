import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Label, RangeSlider } from "flowbite-react";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Flowbite } from "flowbite-react";
function App() {
  return (
    <div className="App h-screen  bg-white dark:bg-gray-700">
      <Flowbite>
        <BrowserRouter>
          <NavigationBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
}

export default App;
