import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharacterList = (): JSX.Element => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  return <div></div>;
};

export default CharacterList;
