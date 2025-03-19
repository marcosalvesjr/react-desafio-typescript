import { useCallback, useEffect, useState } from "react";
import CharacterCards from "../CharacterCards/CharacterCards";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import { useSearchParams } from "react-router-dom";

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
    Number(searchParams.get("charactertoshow") || 48)
  );

  useEffect(() => {
    // Não sobrescrever os parâmetros toda vez, manter os existentes
    const updatedSearchParams = new URLSearchParams(searchParams);

    if (searchCharacter) {
      updatedSearchParams.set("search", searchCharacter);
    } else {
      updatedSearchParams.delete("search");
    }

    if (pageNumber) {
      updatedSearchParams.set("pagenumber", pageNumber.toString());
    } else {
      updatedSearchParams.delete("pagenumber");
    }

    if (status) {
      updatedSearchParams.set("status", status);
    } else {
      updatedSearchParams.delete("status");
    }

    if (gender) {
      updatedSearchParams.set("gender", gender);
    } else {
      updatedSearchParams.delete("gender");
    }

    if (species) {
      updatedSearchParams.set("species", species);
    } else {
      updatedSearchParams.delete("species");
    }

    if (charactersToShow) {
      updatedSearchParams.set("charactersToShow", charactersToShow.toString());
    } else {
      updatedSearchParams.delete("charactersToShow");
    }

    // Atualizar a URL com os parâmetros modificados
    setSearchParams(updatedSearchParams);
  }, [searchCharacter, charactersToShow, gender, species, pageNumber, status]);

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
    <div>
      <Search setSearchCharacter={setSearchCharacter} />
      <Filters
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
    </div>
  );
};

export default Character;
