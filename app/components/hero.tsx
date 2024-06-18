"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// Définition du type pour les données de l'API
interface JokeData {
  joke: string;
}

const Hero = () => {
  // Définition explicite du type de state
  const [data, setData] = useState<JokeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<JokeData>("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      //clean
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-2xl">Chargement...</p>
      ) : (
        <p className="text-7xl font-bold">{data ? data.joke : "Pas de blague trouvée"}</p>
      )}
    </div>
  );
};

export default Hero;
