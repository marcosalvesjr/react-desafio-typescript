import { useEffect, useState } from "react";
import CharacterCards from "../CharacterCards/CharacterCards";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";

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
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchCharacter, setSearchCharacter] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${url}?page=${pageNumber}&name=${searchCharacter}&status=${status}&gender=${gender}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados!");
        }

        const data = await response.json();
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
  }, [searchCharacter, status, gender]);

  return (
    <div>
      <Search setSearchCharacter={setSearchCharacter} />
      <Filters
        setGender={setGender}
        setPageNumber={setPageNumber}
        setStatus={setStatus}
      />
      {loading && <p>Carregando dados...</p>}
      {error ? <p>{error}</p> : <CharacterCards characters={characters} />}
    </div>
  );
};

export default Character;
