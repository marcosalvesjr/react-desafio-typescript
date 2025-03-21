import React, { useEffect, useState } from "react";
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
//desativar e ativar scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 ">
        {characters.slice(0, charactersToShow).map((character) => (
          <div
            className="flex flex-col gap-1 border-1 border-red-500 w-75  rounded-lg bg-slate-100"
            key={character.id}
          >
            <div>
              {/* imagem*/}
              <a
                target="_blank"
                href={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`}
              >
                <img
                  className="h-full w-full object-cover rounded-t-lg"
                  src={character.image}
                  alt="imagem do personagem"
                ></img>
              </a>
            </div>
            {/* fecha imagem*/}
            <div className="p-2">
              {/*content*/}
              <h1
                onClick={() => {
                  setSelectedCharacter(character);
                  setOpen(!open);
                }}
                className="text-4xl font-bold hover:text-orange-500 cursor-pointer"
              >
                {character.name}
              </h1>

              <p className="font-medium mb-2">
                {character.status === "Alive"
                  ? "🟢 Vivo"
                  : character.status === "Dead"
                  ? "🔴 Morto"
                  : "⚪ Desconhecido"}{" "}
                | {character.gender}
              </p>

              <p className="flex flex-col">
                <span className="font-extralight">Última localização:</span>
                <span className="font-medium">{character.location.name}</span>
              </p>
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
