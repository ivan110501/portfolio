import { MovieType } from "../types/main";
import Tag from "./tag";

type Props = {
  movie: MovieType | undefined;
};

const MovieRender = ({ movie }: Props) => {
  return (
    <>
      {movie ? (
        <>
          <img width={200} src={movie.imgUrl} alt={movie.name} />
          <h2>{movie.name}</h2>
          <div className="mb-4">
            <b>{movie.year}</b>
          </div>
          <div className="tag__wrapper tag__wrapper--left mb-8">
            {movie.genre.map((genre) => {
              return <Tag key={genre}>{genre}</Tag>;
            })}
          </div>
          <div>
            <h3>Cast</h3>
            <div className="movie__grid">
              {movie.cast.map((actor) => {
                return (
                  <div className="movie__actor" key={actor.realName}>
                    <img src={actor.imgUrl} alt={actor.realName} />
                    <div>
                      <div>{actor.realName}</div>
                      <div>
                        <b>{actor.movieName}</b>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div>Za ovaj ID ne postoji niti jedan film u bazi</div>
      )}
    </>
  );
};

export default MovieRender;
