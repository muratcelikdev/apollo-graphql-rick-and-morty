import styled from 'styled-components';

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  appearance: none;
  width: 24px;
  height: 24px;
  margin: 0;
  position: relative;

  &::before  {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #c4c4c4;
    position: absolute;
  }

  &:checked::before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: #0057ff;
    border: 4px solid #c4c4c4;
  }
`;

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
