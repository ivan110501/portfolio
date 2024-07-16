import { SongType } from "../pages/spotify";

type Props = {
  list: SongType[];
  onChange: (song: SongType) => void;
};
const SpotifyFav = ({ list, onChange }: Props) => {
  return (
    <>
      {list.length > 0
        ? list.map((song) => {
            return (
              <div key={song.name} className="spotify__list__item">
                <div>
                  <div>{song.name}</div>
                  <div>{song.artist}</div>
                </div>
                <button onClick={() => onChange(song)}>{"<--"}</button>
              </div>
            );
          })
        : "Nema favorite pjesama"}
    </>
  );
};
export default SpotifyFav;
