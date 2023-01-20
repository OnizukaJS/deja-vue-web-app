import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const SearchContextData = createContext<string>("");
export const SearchContextAPI = createContext<Dispatch<SetStateAction<string>>>(
  () => undefined
);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContextData.Provider value={search}>
      <SearchContextAPI.Provider value={setSearch}>
        {children}
      </SearchContextAPI.Provider>
    </SearchContextData.Provider>
  );
};

export default SearchContextProvider;
