import { BrowserRouter } from "react-router-dom";
import Character from "./components/Characters/Character";

function App() {
  return (
    <>
      <h1 className="font-bold">
        Olá <span className="text-amber-900">Rick And Morty!</span>
      </h1>
      <BrowserRouter>
        <Character />
      </BrowserRouter>
    </>
  );
}

export default App;
