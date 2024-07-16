import { useState, useEffect, MouseEvent } from "react";
import { Outlet } from "react-router-dom";
import Select from "react-select";

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
type ActivePokemonResponseType = ActivePokemonType;

//ItemPerPage
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "10", label: "10 Pokemons" },
  { value: "20", label: "20 Pokemons" },
  { value: "100", label: "100 Pokemons" },
];

const defaultLimit = "10";

const API = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<string | undefined>("10");

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
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <div>
        <h1>Pokemon</h1>
        <div>
          On this page I used Pokemon API to demonstrate my work with APIs
        </div>
        <br />
        <Select
          onChange={(e) => {
            //getData(e?.value);
            setLimit(e?.value);
          }}
          options={options}
        />
        <br />
        <div>Click on pokemon button to show how it looks like</div>
        <br />
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
        <div>
          <img
            style={{ width: "20rem" }}
            src={activePokemon?.sprites.front_default}
            alt=""
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default API;
