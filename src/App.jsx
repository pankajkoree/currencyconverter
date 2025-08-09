import { Input } from "../src/components/Input";
import { DropDown } from "../src/components/DropDown";
import { useState } from "react";

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const data = [
    { value: "np", label: "Nepal" },
    { value: "in", label: "India" },
    { value: "us", label: "USA" },
  ];

  const changValue = () => {
    console.log("object");
  };
  return (
    <div className="relative flex justify-center w-full">
      <div className="relative flex flex-col items-center xl:w-[40%] bg-amber-300">
        <h1>Currency converter</h1>
        <h2>Accurate rates. Instant conversions.</h2>
        <form className="relative flex bg-purple-400 ">
          <div className="flex p-2 h-20 border border-green-300">
            <Input
              id="fromInput"
              type="text"
              value="not now"
              onChange={changValue}
            />
            <DropDown
              id="fromDropDown"
              name="fromDropDown"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              placeholder="From Default currency"
              options={data}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
