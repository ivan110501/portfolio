import { useState } from "react";
import IconClose from "../assets/close";
import IconDelete from "../assets/delete";
import Fig from "../assets/Fig.jpg";
import Orange from "../assets/Orange.jpg";
import Clementine from "../assets/Clementine.jpg";
import Cherry from "../assets/Cherry.jpg";
import Lemon from "../assets/Lemon.jpg";
import Kiwi from "../assets/Kiwi.jpg";
import Pear from "../assets/Pear.jpg";
import Olive from "../assets/Olive.jpg";
type FruitType = {
  id: string;
  name: string;
  color: string;
};

const fruitData: FruitType[] = [
  {
    id: "001",
    name: Clementine,
    color: "Orange",
  },
  {
    id: "002",
    name: Cherry,
    color: "Red",
  },
  {
    id: "003",
    name: Fig,
    color: "Green/Purple",
  },
  {
    id: "004",
    name: Kiwi,
    color: "Green",
  },
  {
    id: "005",
    name: Lemon,
    color: "Yellow",
  },
  {
    id: "006",
    name: Olive,
    color: "Green",
  },
  {
    id: "007",
    name: Orange,
    color: "Orange",
  },
  {
    id: "008",
    name: Pear,
    color: "Green",
  },
];

const Gallery = () => {
  const [data, setData] = useState<FruitType[]>(fruitData);
  const [activeItem, setActiveItem] = useState<FruitType | null>(null);

  const handleActiveItem = (fruit: FruitType) => {
    setActiveItem(fruit);
  };

  const handleDelete = (id: string) => {
    const newState = data.filter((item) => item.id !== id);
    setData(newState);
  };

  return (
    <>
      <h1>Gallery</h1>
      <hr />
      <div className="gallery">
        {data.map((fruit) => {
          return (
            <img
              onClick={() => handleActiveItem(fruit)}
              className="gallery__img"
              key={fruit.id}
              src={fruit.name}
              alt={`${fruit.name}`}
            />
          );
        })}
      </div>
      {activeItem && (
        <>
          <div className="gallery__modal">
            <div
              className="gallery__delete"
              onClick={() => {
                handleDelete(activeItem.id);
                setActiveItem(null);
              }}
            >
              <IconDelete />
            </div>
            <div className="gallery__close" onClick={() => setActiveItem(null)}>
              <IconClose />
            </div>
            <div className="gallery__info">
              <div>Color: {activeItem.color}</div>
            </div>
            <img src={activeItem.name} alt={activeItem.name} />
          </div>
          <div
            className="gallery__overlay"
            onClick={() => setActiveItem(null)}
          ></div>
        </>
      )}
    </>
  );
};
export default Gallery;
