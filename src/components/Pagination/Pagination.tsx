import ReactPaginate from "react-paginate";

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
  return (
    <div>
      <ReactPaginate
        pageCount={info.pages}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
          window.scroll(0, 0);
        }}
        nextLabel="Próxima >"
        nextLinkClassName="font-bold hidden sm:block"
        previousLabel="< Anterior"
        previousLinkClassName="font-bold hidden sm:block"
        containerClassName=" flex bg-slate-300 gap-4 p-2 m-2 rounded-lg"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        activeClassName="text-orange-500 font-bold"
      />
    </div>
  );
};

export default Pagination;
