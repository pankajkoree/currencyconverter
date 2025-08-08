import { Label } from "../src/components/Label";
import { Input } from "../src/components/Input";

function App() {
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
            <Label htmlFor="title" text="Title *" />
            <Input
              className={`border border-slate-500`}
              id="input-label"
              type="text"
              value="not now"
              onChange={changValue}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
