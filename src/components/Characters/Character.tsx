import { useEffect, useState } from "react";

type Props = {};

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
};

const Character = (props: Props) => {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
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
  }, []);

  return (
    <div>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}

      {characters.map((character) => (
        <div key={character.id}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Character;
