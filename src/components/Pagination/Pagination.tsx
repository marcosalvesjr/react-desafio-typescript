type Props = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

const Pagination: React.FC<Props> = ({ pageNumber, setPageNumber }) => {
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <ul>
        <li
          onClick={() => {
            setPageNumber(pageNumber - 1);
          }}
        >
          Anterior
        </li>
        <li>{pageNumber}</li>
        <li
          aria-disabled={pageNumber === 42}
          onClick={handleNextPage}
          className={`${pageNumber === 42 ? "text-red-500" : "text-black"}`}
        >
          Proxima
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
