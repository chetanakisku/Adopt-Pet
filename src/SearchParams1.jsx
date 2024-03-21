// Using React Query

import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreedLists";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";
import Test from "./Test";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams1 = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breedList] = useBreedList(animal);
  const [adoptedPets] = useContext(AdoptedPetContext);

  console.log({ adoptedPets });

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target); //Browser API
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animals">
          Animal
          <select
            id="animals"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option id={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breeds">
          Breeds
          <select id="breeds" name="breed" disabled={breedList.length === 0}>
            <option />
            {breedList.map((breed) => (
              <option id={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Test />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams1;
