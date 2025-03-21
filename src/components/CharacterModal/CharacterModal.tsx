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
    <div onClick={openOrClose} className="modal">
      <div className="modal-content">
        <button onClick={openOrClose}>Fechar</button>

        <img src={selectedCharacter.image} alt={selectedCharacter.name} />
        <h1>{selectedCharacter.name}</h1>
        <p>Gênero: {selectedCharacter.gender}</p>
        <p>Origem: {selectedCharacter.origin.name}</p>
        <p>Localização: {selectedCharacter.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
