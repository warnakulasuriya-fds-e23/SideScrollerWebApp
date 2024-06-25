import { Label, RangeSlider } from "flowbite-react";
function App() {
  return (
    <div className="App">
      <p className="text-red-500">Hello</p>
      <Label htmlFor="default-range" value="Default" />
      <RangeSlider id="default-range" />
    </div>
  );
}

export default App;
