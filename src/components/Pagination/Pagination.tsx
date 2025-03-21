type InfoType = {
  count: number; // Total de itens
  pages: number; // Total de páginas
  next: string | null;
  prev: string | null;
};

type Props = {
  info: InfoType;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

const Pagination: React.FC<Props> = ({ info, pageNumber, setPageNumber }) => {
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
    window.scrollTo(0, 0);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex gap-4 justify-center">
      <button
        disabled={pageNumber === 1}
        onClick={prevPage}
        className={`${pageNumber === 1 ? "text-red-500" : "text-amber-500"}`}
      >
        Voltar
      </button>
      <button>{pageNumber}</button>
      <button
        className={`${pageNumber === 42 ? "text-red-500" : "text-amber-500"}`}
        disabled={pageNumber === 42}
        onClick={nextPage}
      >
        Proxima
      </button>
    </div>
  );
};

export default Pagination;
