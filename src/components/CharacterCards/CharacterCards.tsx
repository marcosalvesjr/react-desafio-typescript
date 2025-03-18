import React from "react";

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

type CardsProps = {
  characters: CharacterType[];
};

const CharacterCards: React.FC<CardsProps> = ({ characters }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {characters.slice(0, 48).map((character) => (
          <div
            className="flex flex-row gap-4 border-1 border-red-500 w-90"
            key={character.id}
          >
            <div>
              {/* imagem*/}
              <a
                target="_blank"
                href={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
              >
                <img
                  className="h-50"
                  src={character.image}
                  alt="imagem do personagem"
                ></img>
              </a>
            </div>
            {/* fecha imagem*/}
            <div>
              {/*content*/}
              <h1>{character.name}</h1>
              <p>{character.location.name}</p>
              <p>
                {character.status === "Alive"
                  ? "🟢 Vivo"
                  : character.status === "Dead"
                  ? "🔴 Morto"
                  : "⚪ Desconhecido"}
              </p>
            </div>
            {/* fecha content*/}
          </div>
        ))}
      </div>
    </>
  );
};

export default CharacterCards;
