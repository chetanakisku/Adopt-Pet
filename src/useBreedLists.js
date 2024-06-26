import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchBreedList from "./fetchBreedList";

const localCache = {}; // *****Very Interesting and usefull

export default function useBreedList(animal) {
  //   const [breedList, setBreedList] = useState([]);
  //   const [status, setStatus] = useState("unloaded");

  //   useEffect(() => {
  //     if (!animal) {
  //       setBreedList([]);
  //     } else if (localCache[animal]) {
  //       setBreedList(localCache[animal]);
  //     } else {
  //       requestBreedList();
  //     }

  //     async function requestBreedList() {
  //       setBreedList([]);
  //       setStatus("loading");

  //       const response = await fetch(
  //         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //       );
  //       const jsonRes = await response.json();

  //       localCache[animal] = jsonRes.breeds || [];

  //       setBreedList(localCache[animal]);
  //       setStatus("loaded");
  //     }
  //   }, [animal]);

  //   return [breedList, status];

  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
