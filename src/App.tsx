import { BrowserRouter } from "react-router-dom";
import Character from "./components/Characters/Character";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <h1 className="flex flex-col items-center justify-center sm:flex-row  mt-3 text-7xl font-bold">
        Ricki<span className="text-slate-500">Pedia</span>
      </h1>
      <BrowserRouter>
        <Character />
      </BrowserRouter>
    </>
  );
}

export default App;
