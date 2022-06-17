import CharacterList from 'components/character-list/CharacterList';

import FilterProvider from 'context/FilterContext';

const App = () => {
  return (
    <FilterProvider>
      <CharacterList />
    </FilterProvider>
  );
};

export default App;
