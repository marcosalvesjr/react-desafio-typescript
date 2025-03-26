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
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCharacter: CharacterType | null;
};

const CharacterModal = ({ open, setOpen, selectedCharacter }: Props) => {
  const mapGender = { Male: "Macho", Female: "Fêmea", unknown: "Desconhecido" };

  const openOrClose = () => {
    setOpen(!open);
  };
  if (!open || !selectedCharacter) return null;

  return (
    <div
      onClick={openOrClose}
      className="fixed inset-0 flex items-center justify-center bg-black/90 z-50"
    >
      <div className="bg-slate-200 w-65 sm:w-80  rounded-lg shadow-lg">
        <img
          className="w-450 rounded-t-md object-cover "
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
        />
        <div className="p-5">
          <h1 className="mb-1 font-bold sm:text-3xl sm:mb-2">
            {selectedCharacter.name}
          </h1>
          <p className="text-xs font-extralight sm:text-2xl">
            Gênero:{" "}
            <span className="font-medium">
              {mapGender[selectedCharacter.gender as keyof typeof mapGender]}
            </span>
          </p>
          <p className="text-xs font-extralight sm:text-2xl">
            Origem:{" "}
            <span className="font-medium">{selectedCharacter.origin.name}</span>
          </p>
          <p className="text-xs font-extralight sm:text-2xl">
            Localização:{" "}
            <span className="font-medium">
              {selectedCharacter.location.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
