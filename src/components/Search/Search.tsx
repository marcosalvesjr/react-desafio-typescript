import { useState, ChangeEvent } from "react";

type SearchProps = {
  setSearchCharacter: (characterName: string) => void;
  
};

const Search: React.FC<SearchProps> = ({ setSearchCharacter }) => {
  const [characterName, setCharacterName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchCharacter(characterName);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <label htmlFor="searchCharacter">
        <input
          className="px-4 py-1 border-1 border-slate-300 w-90 rounded-s-full"
          type="text"
          placeholder="Digite o nome do personagem"
          name="searchCharacter"
          onChange={handleChange}
          
        />
      </label>
      <button className="text-slate-600 font-light bg-slate-300 px-4 py-1 border-1 border-slate-300 w-auto rounded-e-full">
        Buscar
      </button>
    </form>
  );
};

export default Search;
