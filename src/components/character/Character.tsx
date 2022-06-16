import * as S from 'components/character/Character.styles';

export interface CharacterProps {
  id: string;
  image: string;
  name: string;
  location: {
    name: string;
  };
  __typename: string;
}

const Character = ({ id, image, name, location }: CharacterProps) => {
  return (
    <S.CharacterBox>
      <S.CharacterImage src={image} />
      <S.CharacterInfoContainer>
        <S.CharacterInfo>
          <S.Text>#id:</S.Text>
          <S.Text>{id}</S.Text>
        </S.CharacterInfo>
        <div>
          <S.CharacterInfo>
            <S.Text>Name</S.Text>
            <S.Text>{name}</S.Text>
          </S.CharacterInfo>
          <S.CharacterInfo>
            <S.Text>Location</S.Text>
            <S.Text>{location.name}</S.Text>
          </S.CharacterInfo>
        </div>
      </S.CharacterInfoContainer>
    </S.CharacterBox>
  );
};

export default Character;
