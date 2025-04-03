import React from "react";

type FiltersProps = {
  gender: string;
  species: string;
  characterToShow: number;
  status: string;
  setSearch: (status: string) => void;
  setStatus: (status: string) => void;
  setPageNumber: (pageNumber: number) => void;
  setGender: (gender: string) => void;
  setSpecies: (species: string) => void;
  setCharactersToShow: (charactersToShow: number) => void;
};

const Filters: React.FC<FiltersProps> = ({
  status,
  species,
  characterToShow,
  gender,
  setSpecies,
  setGender,
  setPageNumber,
  setStatus,
  setCharactersToShow,
  setSearch,
}) => {
  const cleanFilters = () => {
    setSearch("");
    setPageNumber(1);
    setCharactersToShow(20);
    setGender("");
    setStatus("");
    setSpecies("");
  };
  return (
    <div className="mb-4 flex flex-col">
      <h1 className="text-slate-600 font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-2">
        Filtros
      </h1>
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
        <select
          value={status}
          className="cursor-pointer text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full transition-all hover:border-slate-500"
          name="status"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setStatus(e.target.value);
            setPageNumber(1);
          }}
        >
          <option defaultValue="">--Status--</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select
          value={gender}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setGender(e.target.value);
            setPageNumber(1);
          }}
          className="cursor-pointer text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full transition-all hover:border-slate-500"
          name="gender"
        >
          <option defaultValue="">--Gênero--</option>
          <option value="male">Macho</option>
          <option value="female">Fêmea</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select
          value={species}
          className="cursor-pointer text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full transition-all hover:border-slate-500"
          name="specie"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSpecies(e.target.value);
            setPageNumber(1);
          }}
        >
          <option defaultValue="">--Espécie--</option>
          <option value="Human">Humano</option>
          <option value="Alien">Alienígena </option>
          <option value="Humanoid">Humanoide</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Mythological">Mitologico</option>
          <option value="Unknown">Desconhecido</option>
          <option value="Animal">Animal</option>
          <option value="Disease">Doença</option>
          <option value="Robot">Robo</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Planet">Planeta</option>
        </select>

        <select
          value={characterToShow}
          className="cursor-pointer text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full transition-all hover:border-slate-500"
          name="charactersToShow"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCharactersToShow(Number(e.target.value));
          }}
        >
          <option value="5">Exibir 5 personagens</option>
          <option value="10">Exibir 10 personagens</option>
          <option value="20">Exibir 20 personagens</option>
        </select>
      </form>
      <button
        className="cursor-pointer bg-slate-500 hover:bg-slate-600 text-white font-bold p-2 rounded-full mt-4 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-slate-300"
        onClick={cleanFilters}
      >
        Limpar filtros
      </button>
    </div>
  );
};

export default Filters;
