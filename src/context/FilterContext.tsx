import { createContext, useContext, useState } from 'react';

interface FilterProviderProps {
  children: React.ReactNode[] | React.ReactNode;
}

interface FilterProviderState {
  selectedCharacter: string | null;
  setSelectedCharacter: (value: string) => void;
}

const INITIAL_STATE = {
  selectedCharacter: null,
};

export const FilterContext = createContext<Partial<FilterProviderState>>(INITIAL_STATE);

export const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  return (
    <FilterContext.Provider
      value={{
        selectedCharacter,
        setSelectedCharacter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
