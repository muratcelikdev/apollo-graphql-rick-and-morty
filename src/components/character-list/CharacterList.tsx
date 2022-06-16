import { useQuery, gql } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  const renderCharacters = () => {
    if (!loading && !error && data) {
      return data.characters.results.map((character: CharacterProps) => (
        <Character {...character} key={`char_#${character.id}`} />
      ));
    }

    return;
  };

  return (
    <S.CharacterListContainer>
      <S.ScrollContainer>{renderCharacters()}</S.ScrollContainer>
    </S.CharacterListContainer>
  );
};

export default CharacterList;
