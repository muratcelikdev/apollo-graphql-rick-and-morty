import styled from 'styled-components';

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  margin: 0 auto;
  padding: 48px 0;
  overflow-y: auto;
`;

export const CharacterListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
