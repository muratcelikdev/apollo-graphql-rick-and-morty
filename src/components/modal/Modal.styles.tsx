import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  min-width: 320px;
  background: #ffffff;
  border-radius: 10px;

  & > * {
    padding: 16px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #808080;
`;

export const Content = styled.div``;

export const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;
