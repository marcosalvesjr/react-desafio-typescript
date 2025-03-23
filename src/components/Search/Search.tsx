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
          className="px-2 py-1 border-1 border-slate-300 w-60 sm:w-90  rounded-s-full focus:outline-slate-400 focus:ring-none"
          type="text"
          placeholder="Digite o nome do personagem"
          name="searchCharacter"
          onChange={handleChange}
        />
      </label>
      <button className="bi bi-search font-light bg-slate-300 hover:bg-slate-400 text-white px-4 py-1  border-1 border-slate-300 w-auto rounded-e-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-slate-300"></button>
    </form>
  );
};

export default Search;
