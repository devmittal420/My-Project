import { createContext, useState } from "react";

export const searchContext = createContext();
export const SearchProvider = searchContext.Provider;

const SearchContext = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchProvider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchProvider>
  );
};

export default SearchContext;
