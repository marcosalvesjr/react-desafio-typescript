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
      <h1 className="text-center">Filtros</h1>
      <form className="flex flex-col">
        <select
          className=" text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full"
          name="status"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setStatus(e.target.value);
            setPageNumber(1);
          }}
        >
          <option value="">--Status--</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setGender(e.target.value);
            setPageNumber(1);
          }}
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full"
          name="gender"
        >
          <option value="">--Gênero--</option>
          <option value="male">Macho</option>
          <option value="female">Fêmea</option>
          <option value="unknown">Desconhecido</option>
        </select>

        <select
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full"
          name="specie"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSpecies(e.target.value);
            setPageNumber(1);
          }}
        >
          <option selected disabled>
            --Espécie--
          </option>
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
          className="text-slate-600 font-light px-4 py-1 border-1 border-slate-300 w-auto rounded-full"
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
    </div>
  );
};

export default Filters;
