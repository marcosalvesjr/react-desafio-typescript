

const Filters = () => {
  return (
    <div>
      <form>
        <input>
          <option value="">Selecionar</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </input>
      </form>
    </div>
  );
};

export default Filters;
