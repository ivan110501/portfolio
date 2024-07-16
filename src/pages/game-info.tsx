import { useParams } from "react-router-dom";
import { GameType, gamesData } from "./games";
import { useState, useEffect } from "react";
const GameInfo = () => {
  const { gameId } = useParams();
  const [data, setData] = useState<GameType>();
  console.log(gameId);
  const getGameInfo = () => {
    const game = gamesData.find((game) => {
      return game.id === gameId;
    });

    setData(game);
  };

  useEffect(() => {
    getGameInfo();
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="game">
            <h1>{data?.name}</h1>
            <img className="game__img" src={data.imgUrl} alt={data.name} />
            <div className="game__description">
              <b>{data.description}</b>
            </div>
            <div>
              <b>Recent reviews:</b> {data.rreviews}
            </div>
            <div>
              <b>All reviews:</b> {data.areviews}
            </div>
            <div>
              <b>Release date:</b> {data.release}
            </div>
            <div>
              <b>Developer:</b> {data.developer}
            </div>
            <div>
              <b>Publisher:</b> {data.publisher}
            </div>
          </div>
        </>
      ) : (
        <div>
          Igra sa nazivom <b>{gameId}</b> ne postoji u našoj bazi podataka
        </div>
      )}
    </>
  );
};
export default GameInfo;
