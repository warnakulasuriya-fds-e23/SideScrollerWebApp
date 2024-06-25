import { Label, RangeSlider } from "flowbite-react";
import { NavigationBar } from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <p className="text-red-500">Hello</p>
      <Label htmlFor="default-range" value="Default" />
      <RangeSlider id="default-range" />
    </div>
  );
}

export default App;
