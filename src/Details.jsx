import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPets from "./fetchPets";
import Carousel from "./Carousel";

// Display Details of pets
// Use useQuery, if in cache use from that else, make api call

export default function Details() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets);

  // Always check if loading
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  console.log({ results });
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
}
