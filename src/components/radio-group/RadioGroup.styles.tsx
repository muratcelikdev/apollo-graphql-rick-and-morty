import styled from 'styled-components';

import Radio from 'components/radio/Radio';

export const RadioButton = styled(Radio)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
