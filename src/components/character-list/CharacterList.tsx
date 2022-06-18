import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import * as S from 'components/character-list/CharacterList.styles';
import Character, { CharacterProps } from 'components/character/Character';

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        location {
          name
        }
      }
    }
  }
`;

const CharacterList = (): JSX.Element => {
  const scrollListener = useRef(null);
  const { data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      limit: 20,
    },
  });

  const [characterList, setCharacterList] = useState<CharacterProps[]>([]);
  const [characterToDisplay, setCharacterToDisplay] = useState<string | null>(null);

  const addMoreCharactersIntoList = useCallback(
    (newList: CharacterProps[]) => {
      setCharacterList([...characterList, ...newList]);
    },
    [characterList]
  );

  useEffect(() => {
    if (data) {
      addMoreCharactersIntoList(data.characters.results);
    }
  }, [data]);

  const getCharacterListToBeDisplayed = (): CharacterProps[] => {
    if (characterToDisplay) {
      return characterList.filter((character: CharacterProps) =>
        character.name.toLowerCase().includes(characterToDisplay.toLowerCase())
      );
    }

    return characterList;
  };

  const handleScroll = useCallback(() => {
    if (scrollListener.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollListener.current;
      if (scrollTop + clientHeight === scrollHeight) {
        fetchMore({
          variables: {
            offset: data.characters.results.length,
          },
        }).then(({ data }) => {
          addMoreCharactersIntoList(data.characters.results);
        });
      }
    }
  }, [fetchMore, addMoreCharactersIntoList, data?.characters?.results.length]);

  const handleFilterChange = useCallback((value: string) => {
    setCharacterToDisplay(value);
  }, []);

  const renderCharacters = () =>
    getCharacterListToBeDisplayed().map((character: CharacterProps) => (
      <S.CharacterItemWrapper>
        <Character {...character} key={`char_#${character.id}`} />
      </S.CharacterItemWrapper>
    ));

  return (
    <S.ScrollContainer ref={scrollListener} onScroll={handleScroll}>
      <S.Filter onFilterChange={handleFilterChange} />
      <S.CharacterListContainer>{renderCharacters()}</S.CharacterListContainer>
    </S.ScrollContainer>
  );
};

export default CharacterList;
