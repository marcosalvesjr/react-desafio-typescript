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
  const openOrClose = () => {
    setOpen(!open);
  };
  if (!open || !selectedCharacter) return null;

  return (
    <div
      onClick={openOrClose}
      className="fixed inset-0 flex items-center justify-center bg-black opacity-90 z-50"
    >
      <div className="bg-slate-200 w-50  rounded-lg shadow-lg opacity-100 z-51">
        <img
          className="w-450 rounded-t-md object-cover "
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
        />
        <div className="p-2">
          <h1 className="mb-2 font-bold">{selectedCharacter.name}</h1>
          <p>Gênero: {selectedCharacter.gender}</p>
          <p>Origem: {selectedCharacter.origin.name}</p>
          <p>Localização: {selectedCharacter.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
