import { useEffect, useState } from "react";
import CharacterCards from "../CharacterCards/CharacterCards";
import Search from "../Search/Search";

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
  const [searchCharacter, setSearchCharacter] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${url}?name=${searchCharacter}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados!");
        }

        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        setError("Falha ao carregar dados...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchCharacter]);

  return (
    <div>
      <Search setSearchCharacter={setSearchCharacter} />
      {loading && <p>Carregando dados...</p>}
      {!loading &&  error ? <p>{error}</p> :<CharacterCards characters={characters} />}
      
    </div>
  );
};

export default Character;
