import IconAdd from "../assets/add";
import IconDots from "../assets/dots";
import profileImageUrl from "../assets/profile-img.jpg";
import Button from "../components/button";
import Tag from "../components/tag";
import croatiaFlagUrl from "../assets/croatia.png";
import IconArrowTopRight from "../assets/arrow-top-right";

import { useState, useEffect } from "react";
import Select from "react-select";

type ProfileDataType = {
  firstName: string;
  lastName: string;
  profileDescription: string;
  skills: string[];
  country: string;
  city: string;
  experience: string;
  links: {
    [name: string]: string;
  };
  email: string;
};

const data1: ProfileDataType = {
  firstName: "Ivan",
  lastName: "Antunović",
  country: "Croatia",
  city: "Osijek",
  profileDescription: "I'm a frontend developer based in Osijek.",
  skills: ["HTML", "CSS/SASS", "JS/TS", "React", "Fusion360"],
  experience:
    "I'm a frontend developer and 3D designer passionate about experiences for web applications. I also enjoy doing 3D design and 3D printing. This site is an example of web app made by me. Bellow is demonstration of API use. Click on Pokemon name to show how it looks like :) ",

  links: {
    github: "https://github.com/ivan110501",
    instagram: "https://www.instagram.com/ivan.antunovic3/",
    linkedIn: "https://www.linkedin.com/in/ivan-antunović-895a872b8/",
  },
  email: "ivan.antunovic292@gmail.com",
};

type PokemonsResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ActivePokemonType = {
  sprites: {
    front_default: string;
  };
};

//ItemPerPage
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "1", label: "1 Pokemon" },
  { value: "2", label: "2 Pokemons" },
  { value: "3", label: "3 Pokemons" },
];

const defaultLimit = "3";

const Home = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<string | undefined>("2");

  const [activePokemon, setActivePokemon] = useState<
    ActivePokemonType | undefined
  >(undefined);

  const getData = async (limit: string | undefined) => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit ? limit : defaultLimit}`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonsResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => {
        return data.json();
      })
      .then((res: ActivePokemonType) => {
        setActivePokemon(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(limit);
  }, [limit]);
  return (
    <>
      <div className="personal">
        <div className="personal__top"></div>
        <div className="personal__header">
          <div className="personal__header__img">
            <img src={profileImageUrl} alt="profile image" />
          </div>
          <div className="personal__header__info">
            <div className="personal__header__name">
              {data1.firstName} {data1.lastName}
            </div>
            <div className="personal__header__description">
              {data1.profileDescription}
            </div>
          </div>
          <div className="personal__header__actions">
            <Button color="blue">
              <IconDots />
            </Button>
            <Button color="blue">Hire me</Button>
            <Button color="blue" leftElement={<IconAdd />}>
              Folow
            </Button>
          </div>
        </div>
        <div className="personal__body">
          <div className="personal__body__pannel personal__body__main">
            <h2 className="personal__body__title">About me</h2>
            <p className="personal__body__p mb-8">{data1.experience}</p>
            <Select
              onChange={(e) => {
                //getData(e?.value);
                setLimit(e?.value);
              }}
              options={options}
            />
            <div>
              {data.map((pokemon) => {
                return (
                  <button
                    className="pokebutton"
                    onClick={(e) => {
                      const test = e.target as HTMLButtonElement;
                      getPokemonData(test.innerHTML);
                    }}
                    key={pokemon.name}
                  >
                    {pokemon.name}
                  </button>
                );
              })}
            </div>

            <div style={{ height: "2rem" }}>
              <img
                style={{ width: "10rem" }}
                src={activePokemon?.sprites.front_default}
                alt=""
              />
            </div>
          </div>
          <div className="personal__body__pannel personal__body__side">
            <h3 className="personal__body__subtitle mb-2">Skills</h3>
            <div className="mb-8 tag__wrapper tag__wrapper--left">
              {data1.skills.map((skill) => {
                return (
                  <Tag key={skill} size="sm">
                    {skill}
                  </Tag>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Location</h3>
            <div className="flex flex--ac mb-8">
              <img
                width={24}
                className="display--block mr-2"
                src={croatiaFlagUrl}
                alt="Flag of Croatia"
              />
              <span>
                {data1.city}, {data1.country}
              </span>
            </div>
            <h3 className="personal__body__subtitle mb-2">Links</h3>
            <div className="mb-8">
              {Object.keys(data1.links).map((key) => {
                return (
                  <>
                    <a
                      className="link link--icon"
                      href={data1.links[key]}
                      key={key}
                      target="_blank"
                    >
                      <IconArrowTopRight width={16} />
                      {key}
                    </a>
                  </>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Email</h3>
            <div>{data1.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
