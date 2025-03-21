type InfoType = {
  count: number; // Total de itens
  pages: number; // Total de páginas
  next: string | null; // URL da próxima página (ou null se não houver)
  prev: string | null; // URL da página anterior (ou null se não houver)
};

type Props = {
  info: InfoType;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

const Pagination: React.FC<Props> = ({ info, pageNumber, setPageNumber }) => {
  const back = () => {
    setPageNumber(pageNumber - 1);
  };
  const next = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <div className="flex gap-4 justify-center">
      <button
        disabled={pageNumber === 1}
        onClick={back}
        className={`${pageNumber === 1 ? "text-red-500" : "text-amber-500"}`}
      >
        Voltar
      </button>
      <button>{pageNumber}</button>
      <button
        className={`${pageNumber === 42 ? "text-red-500" : "text-amber-500"}`}
        disabled={pageNumber === 42}
        onClick={next}
      >
        Proxima
      </button>
    </div>
  );
};

export default Pagination;
