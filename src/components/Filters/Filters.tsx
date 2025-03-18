import React from "react";

type FiltersProps = {
  setStatus: (status: string) => void;
  setPageNumber: (pageNumber: number) => void;
  setGender: (gender: string) => void;
  setSpecies: (species: string) => void;
  setCharactersToShow: (charactersToShow: number) => void;
};

const Filters: React.FC<FiltersProps> = ({
  setSpecies,
  setGender,
  setPageNumber,
  setStatus,
  setCharactersToShow,
}) => {
  return (
    <div className="mb-4">
      <h1>Filtros</h1>
      <form>
        <label htmlFor="status">Status: </label>
        <select
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-e-full"
          name="status"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setStatus(e.target.value);
            setPageNumber(1);
          }}
        >
          <option value="">Selecionar</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <label htmlFor="gender">Gênero: </label>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setGender(e.target.value);
            setPageNumber(1);
          }}
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-e-full"
          name="gender"
        >
          <option value="">Selecionar</option>
          <option value="male">Macho</option>
          <option value="female">Fêmea</option>
          <option value="unknown">Desconhecido</option>
        </select>
        <label htmlFor="specie">Espécie</label>
        <select
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-e-full"
          name="specie"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSpecies(e.target.value);
            setPageNumber(1);
          }}
        >
          <option value="">Selecione</option>
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
        <label htmlFor="charactersToShow">Exibir: </label>
        <select
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-e-full"
          name="charactersToShow"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCharactersToShow(Number(e.target.value));
            setPageNumber(1);
          }}
        >
          <option value="5">5 personagens</option>
          <option value="10">10 personagens</option>
          <option value="20">20 personagens</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
