import { useNavigate } from "react-router-dom";

export type GameType = {
  imgUrl: string;
  name: string;
  id: string;
  rreviews: string;
  areviews: string;
  release: string;
  developer: string;
  publisher: string;
  description: string;
};

export const gamesData: GameType[] = [
  {
    imgUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
    name: "God of War",
    id: "gow",
    rreviews: "Overwhelmingly Positive (1,886)",
    areviews: "Overwhelmingly Positive (90,265)",
    release: "14 Jan, 2022",
    developer: "Santa Monica Studio",
    publisher: "PlayStation PC LLC",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
  },
  {
    imgUrl:
      "https://assets2.razerzone.com/images/og-image/razer-viper-ultimate-cyberpunk-2077-og-image.jpg",
    name: "Cyberpunk 2077",
    id: "cyberpunk",
    rreviews: "Overwhelmingly Positive (5,027)",
    areviews: "Overwhelmingly Positive (702,435)",
    release: "18 May, 2015",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
  },
  {
    imgUrl:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
    name: "Red Dead Redemption 2",
    id: "rdr2",
    rreviews: "Very Positive (12,693)",
    areviews: "Very Positive (514,503)",
    release: "5 Dec, 2019",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
  },
  {
    imgUrl:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
    name: "Call of Duty: Warzone",
    id: "cod",
    rreviews: "Mostly Negative (1,709)",
    areviews: "Mostly Negative (32,391)",
    release: "16 Nov, 2022",
    developer: "Infinity Ward",
    publisher: "Activision",
    description:
      "Welcome to Call of Duty®: Warzone™, the massive free-to-play combat arena which now features Urzikstan, Rebirth Island and Fortune’s Keep.",
  },
  {
    imgUrl:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075",
    name: "Among Us",
    id: "among-us",
    rreviews: "Very Positive (2,453)",
    areviews: "Very Positive (599,503)",
    release: "16 Nov, 2018",
    developer: "Innersloth",
    publisher: "Innersloth",
    description:
      "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
  },
  {
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
    name: "The Witcher 3: Wild Hunt",
    id: "the-witcher-3",
    rreviews: "Overwhelmingly Positive (5,027)",
    areviews: "Overwhelmingly Positive (702,435) *",
    release: "18 May, 2015",
    developer: "CD PROJEKT RED",
    publisher: "CD PROJEKT RED",
    description:
      "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
  },
];

const Games = () => {
  const navigate = useNavigate();
  const goTo = (gameId: string) => {
    console.log(gameId);
    navigate(`${gameId}`);
  };
  return (
    <>
      <div className="games__grid">
        {gamesData.map((game) => {
          return (
            <>
              <div
                onClick={() => goTo(game.id)}
                key={game.id}
                className="games__card"
              >
                <img className="games__image" src={game.imgUrl} alt="" />
                <h2 className="games__name">{game.name}</h2>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Games;
