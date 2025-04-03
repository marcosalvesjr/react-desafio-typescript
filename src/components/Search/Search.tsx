import { useState, ChangeEvent } from "react";

type SearchProps = {
  setSearchCharacter: (characterName: string) => void;
  setPageNumber: (pageNumber: number) => void;
};

const Search: React.FC<SearchProps> = ({
  setPageNumber,
  setSearchCharacter,
}) => {
  const [characterName, setCharacterName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchCharacter(characterName);
    setPageNumber(1);
    setCharacterName("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <label htmlFor="searchCharacter">
        <input
          value={characterName}
          className="px-3 py-3 border-1 border-slate-300 w-60 sm:w-90  rounded-s-full focus:outline-slate-400 focus:ring-none"
          type="text"
          placeholder="Digite o nome do personagem"
          name="searchCharacter"
          onChange={handleChange}
        />
      </label>
      <button className="bi bi-search font-light bg-slate-500 hover:bg-slate-600 text-white px-5 py-3  border-1 border-slate-300 w-auto rounded-e-full cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-slate-300"></button>
    </form>
  );
};

export default Search;
