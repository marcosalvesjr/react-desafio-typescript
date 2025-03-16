import React from "react";

type FiltersProps = {
  setStatus: (status: string) => void;
  setPageNumber: (pageNumber: number) => void;
};

const Filters: React.FC<FiltersProps> = ({ setPageNumber, setStatus }) => {
  return (
    <div>
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
      </form>
    </div>
  );
};

export default Filters;
