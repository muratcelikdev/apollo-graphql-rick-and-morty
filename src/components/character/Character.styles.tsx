import styled from 'styled-components';

export const CharacterBox = styled.div`
  width: 530px;
  height: 168px;
  display: flex;
  background-color: #ffffff;
  filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.1));
  border-radius: 0px 10px 10px 0px;
`;

export const CharacterImage = styled.img`
  width: 168px;
  height: 168px;
`;

export const CharacterInfoContainer = styled.div`
  width: calc(100% - 168px);
  height: 168px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CharacterInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const Title = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-right: 6px;
`;
