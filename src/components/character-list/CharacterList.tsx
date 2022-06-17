import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import Character, { CharacterProps } from 'components/character/Character';
import * as S from 'components/character-list/CharacterList.styles';

const GET_CHARACTERS = gql`
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

  useEffect(() => {
    if (data) {
      addMoreCharactersIntoList(data.characters.results);
    }
  }, [data]);

  const renderCharacters = () =>
    characterList.length > 0 &&
    characterList.map((character: CharacterProps) => (
      <Character {...character} key={`char_#${character.id}`} />
    ));

  const addMoreCharactersIntoList = (newList: CharacterProps[]) => {
    console.log(characterList);
    setCharacterList([...characterList, ...newList]);
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
  }, [fetchMore, addMoreCharactersIntoList]);

  return (
    <S.ScrollContainer ref={scrollListener} onScroll={handleScroll}>
      <S.CharacterListContainer>{renderCharacters()}</S.CharacterListContainer>
    </S.ScrollContainer>
  );
};

export default CharacterList;
