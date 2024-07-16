export type LinkType = {
  href: string;
  label: string;
};

export type CastType = {
  imgUrl: string;
  movieName: string;
  realName: string;
};
export type MovieType = {
  id: string;
  name: string;
  year: string;
  genre: string[];
  imgUrl: string;
  cast: CastType[];
};
export type TabType = {
  id: string;
  label: string;
};
