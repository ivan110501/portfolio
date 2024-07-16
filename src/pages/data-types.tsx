import { useState } from "react";
import Button from "../components/button";
import profileImageUrl from "../assets/profile-img.jpg";

type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};

const defaultProfileValues: ProfileType = {
  age: 23,
  gender: false,
  lastName: "Antunović",
  name: "Ivan",
  profilePicture: profileImageUrl,
};

const DataTypes = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<string[]>(["Ivan", "Jelena"]);
  const [homeNumber, setHomeNumber] = useState<number>(5);
  const [grades, setGrades] = useState<number[]>([
    5, 1, 2, 5, 2, 1, 1, 3, 1, 3, 4,
  ]);
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  const [books, setBooks] = useState<BookType[]>([]);
  const [boo, setBoo] = useState<boolean>(false);

  const plasticSurgery = () => {
    const newState: ProfileType = {
      ...profile,
      gender: !profile.gender,
    };

    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [
      {
        title: "Harry Potter",
        author: "J. K. Rowling",
        hardCovers: true,
        pages: 223,
      },
    ];
    setBooks(newState);
  };

  return (
    <>
      <h2>This page shows all types of data manipulation</h2>
      <h4>String</h4>
      <div>{name ? name : "Click to add a name"}</div>
      <Button
        onClick={() => {
          setName("Igor");
        }}
      >
        Add name
      </Button>
      <hr />
      <h4>String Array </h4>
      <div>
        {names.map((name, index) => {
          return <div key={index}>{name}</div>;
        })}
        <Button
          onClick={() => {
            const newState = ["Igor", "Gabrijel", "Mario"];
            setNames(newState);
          }}
        >
          Change names
        </Button>
      </div>
      <hr />
      <h4>Number</h4>
      <div>
        {homeNumber}
        <br />
        <Button onClick={() => setHomeNumber(47)}>Change number</Button>
      </div>
      <hr />
      <h4>Number Array </h4>
      <div>
        {grades.length > 0
          ? grades.map((grade, index) => {
              return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
            })
          : "Nema ocjena"}
        <Button
          onClick={() => {
            let newState: number[] = [];

            grades.forEach((grade) => {
              if (grade > 1) {
                newState.push(grade);
              }
            });
            setGrades(newState);
          }}
        >
          Delete Ones
        </Button>
      </div>
      <hr />
      <h4>Objekt</h4>
      <div>
        {profile.profilePicture ? (
          <img width={30} src={profile.profilePicture} alt="Profile picture" />
        ) : undefined}

        <div>
          {profile.name}&nbsp;{profile.lastName},{profile.age}
        </div>
        <div>{!profile.gender ? "♀️" : "♂️"}</div>
        <Button onClick={() => plasticSurgery()}>Change gender</Button>
      </div>
      <hr />
      <h4>Object Array</h4>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <>
                  <div key={book.title}>
                    {book.title}, {book.author}
                    <div>Pages: {book.pages}</div>
                    <div>Hard Covers: {book.hardCovers ? "Yes" : "No"}</div>
                  </div>
                </>
              );
            })
          : "There are no books to show in the moment"}
        <br />
        <Button onClick={addBook}>Add book</Button>
      </div>
      <hr />
      <h4>Boolean</h4>
      <div>{boo ? "True" : "False"}</div>
      <Button
        onClick={() => {
          setBoo(!boo);
        }}
      >
        Change
      </Button>
    </>
  );
};

export default DataTypes;
