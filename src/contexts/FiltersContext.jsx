import { createContext, useState } from 'react';

export const FiltersContext = createContext();
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  function setCategory(newCategory) {
    setFilters({
      ...filters,
      category: newCategory,
    });
  }

  function setMinPrice(newMinPrice) {
    setFilters({
      ...filters,
      minPrice: newMinPrice,
    });
  }

  return (
    <FiltersContext.Provider
      value={{
        category: filters.category,
        minPrice: filters.minPrice,
        setCategory,
        setMinPrice,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
