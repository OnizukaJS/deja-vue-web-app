import React, { useState, useEffect } from "react";
import PersonsListModel from "../models/PersonsListModel";

const useFetchPersonsSearch = (
  query: string
): {
  isLoading: boolean;
  persons: PersonsListModel;
} => {
  const [persons, setPersons] = useState<PersonsListModel>(
    {} as PersonsListModel
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPersonsSearch() {
      try {
        setIsLoading(true);

        await fetch(
          `https://api.themoviedb.org/3/search/person?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1&include_adult=false&query=${query}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
          }
        )
          .then((response) => response.json())
          .then((persons) => setPersons(persons as PersonsListModel))
          .then(() => setIsLoading(false));
      } catch (error) {
        setIsLoading(false);
      }
    }

    fetchPersonsSearch();
  }, []);

  return { isLoading, persons };
};

export default useFetchPersonsSearch;
