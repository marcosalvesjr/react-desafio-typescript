import { useEffect, useState } from "react";
import CharacterCards from "../CharacterCards/CharacterCards";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

type InfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
};

const Character = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState<InfoType | null>(null);

  //FILTROS
  const [pageNumber, setPageNumber] = useState<number>(
    Number(searchParams.get("page") || 1)
  );
  const [searchCharacter, setSearchCharacter] = useState<string>(
    searchParams.get("search") || ""
  );
  const [status, setStatus] = useState<string>(
    searchParams.get("status") || ""
  );
  const [gender, setGender] = useState<string>(
    searchParams.get("gender") || ""
  );
  const [species, setSpecies] = useState<string>(
    searchParams.get("species") || ""
  );
  const [charactersToShow, setCharactersToShow] = useState<number>(
    Number(searchParams.get("charactertoshow") || 20)
  );
  //UPDATE PARAMS
  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    const params: Record<string, string | number> = {
      search: searchCharacter,
      pagenumber: pageNumber,
      status,
      gender,
      species,
      charactersToShow,
    };

    Object.entries(params).forEach(([key, value]) => {
      value
        ? updatedSearchParams.set(key, value.toString())
        : updatedSearchParams.delete(key);
    });

    setSearchParams(updatedSearchParams);
  }, [searchCharacter, charactersToShow, gender, species, pageNumber, status]);
  //CHAMANDO API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${url}?page=${pageNumber}&name=${searchCharacter}&status=${status}&gender=${gender}&species=${species}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados!");
        }

        const data = await response.json();
        //const dataRandom = [...data.results].sort(() => Math.random() - 0.5);
        //setCharacters(dataRandom);
        setCharacters(data.results);
        setInfo(data.info);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        setError("Falha ao carregar dados...");
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchCharacter, status, gender, species, pageNumber]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Search setSearchCharacter={setSearchCharacter} />
      <Filters
        setSearch={setSearchCharacter}
        setSpecies={setSpecies}
        setGender={setGender}
        setPageNumber={setPageNumber}
        setStatus={setStatus}
        setCharactersToShow={setCharactersToShow}
      />
      {loading && <p>Carregando dados...</p>}
      {error ? (
        <p>{error}</p>
      ) : (
        <CharacterCards
          charactersToShow={charactersToShow}
          characters={characters}
        />
      )}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info || { count: 0, pages: 0, next: null, prev: null }}
      />
    </div>
  );
};

export default Character;
