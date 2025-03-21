import React, { useState } from "react";
import CharacterModal from "../CharacterModal/CharacterModal";

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
  charactersToShow: number;
};

const CharacterCards: React.FC<CardsProps> = ({
  characters,
  charactersToShow,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterType | null>(null);
  return (
    <>
      <div className="flex flex-wrap">
        {characters.slice(0, charactersToShow).map((character) => (
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
              <button
                onClick={() => {
                  setSelectedCharacter(character);
                  setOpen(!open);
                  console.log(open);
                }}
              >
                Saiba Mais
              </button>
            </div>
            {/* fecha content*/}
          </div>
        ))}
      </div>
      <CharacterModal
        open={open}
        setOpen={setOpen}
        selectedCharacter={selectedCharacter}
      />
    </>
  );
};

export default CharacterCards;
