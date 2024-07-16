import { MovieType, TabType } from "../types/main";

export const movieData: MovieType[] = [
  {
    id: "1",
    name: "Home Alone",
    year: "1990",
    genre: ["Comedy", "Action"],
    cast: [
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMTM1NzUwMjY2M15BMl5BanBnXkFtZTcwOTI5MTMyMw@@._V1_FMjpg_UX399_.jpg",
        movieName: "Kevin",
        realName: "Macaulay Culkin",
      },
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMzc3MTcxNDYxNV5BMl5BanBnXkFtZTcwOTI3NjE1Mw@@._V1_FMjpg_UY2048_.jpg",
        movieName: "Harry",
        realName: "Joe Pesci",
      },
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMzc3MTcxNDYxNV5BMl5BanBnXkFtZTcwOTI3NjE1Mw@@._V1_FMjpg_UY2048_.jpg",
        movieName: "Marv",
        realName: "Daniel Stern",
      },
    ],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY1985_.jpg",
  },
  {
    id: "2",
    name: "Dumb and Dumber",
    year: "1994",
    genre: ["Comedy"],
    cast: [
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_.jpg",
        movieName: "Lloyd",
        realName: "Jim Carrey",
      },
      {
        imgUrl:
          "https://www.freep.com/gcdn/-mm-/0740a7898f58c030c54d24146abac2f4fd023214/c=0-0-2172-2896/local/-/media/2018/01/23/DetroitFreeP/DetroitFreePress/636523191511357913-GTY-908510342.jpg",
        movieName: "Harry",
        realName: "Jeff Daniels",
      },
      {
        imgUrl:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTc0mbrLBS9-U2vxDIORkoUgleLGZDCFVB4mI6FVcayyF2pRilc",
        movieName: "Mary",
        realName: "Lauren Holly",
      },
    ],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX580_.jpg",
  },
  {
    id: "3",
    name: "Interstellar",
    year: "2014",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    cast: [
      {
        imgUrl:
          "https://hips.hearstapps.com/hmg-prod/images/matthew-mcconaughey-on-tuesday-september-12-2023-news-photo-1700243243.jpg?crop=0.513xw:0.769xh;0.152xw,0.0337xh&resize=1200:*",
        movieName: "Cooper",
        realName: "Matthew McConaughey",
      },
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
        movieName: "Brand",
        realName: "Anne Hathaway",
      },
      {
        imgUrl:
          "https://people.com/thmb/fSJVKOgsRorB9BlGdKf08EI0qRI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x199:721x201)/jessica-chastain-1-aef3800ba6764f908244bdb525b3f79c.jpg",
        movieName: "Murph",
        realName: "Jessica Chastain",
      },
    ],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3600_.jpg",
  },
  {
    id: "4",
    name: "Blade Runner 2049",
    year: "2017",
    genre: ["Action", "Drama", "Mystery"],
    cast: [
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_FMjpg_UX1000_.jpg",
        movieName: "Rick Deckard",
        realName: "Harrison Ford",
      },
      {
        imgUrl:
          "https://hips.hearstapps.com/hmg-prod/images/ryan-gosling-attends-the-96th-oscars-nominees-luncheon-at-news-photo-1710014412.jpg?crop=0.753xw:0.523xh;0.175xw,0.0224xh&resize=640:*",
        movieName: "K",
        realName: "Ryan Gosling",
      },
      {
        imgUrl:
          "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1197366653.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        movieName: "Joi",
        realName: "Ana de Armas",
      },
    ],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UY2048_.jpg",
  },
];

export const tabData: TabType[] = [
  {
    id: "1",
    label: "Home Alone",
  },
  {
    id: "2",
    label: "Dumb and Dumber",
  },
  {
    id: "3",
    label: "Interstellar",
  },
  {
    id: "4",
    label: "Blade Runner 2049",
  },
];
