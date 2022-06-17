import { useCallback } from 'react';

import * as S from 'components/radio/Radio.styles';

interface RadioProps {
  text: string;
  selected?: boolean;
  handleSelect: (value: string) => void;
  className?: string;
}

const Radio = ({ text, selected = false, handleSelect, className }: RadioProps) => {
  const handleRadioSelect = useCallback(() => {
    handleSelect(text);
  }, [handleSelect, text]);

  return (
    <S.Container onClick={handleRadioSelect} className={className}>
      <S.Text>{text}</S.Text>
      <S.RadioButton value={text} checked={selected} />
    </S.Container>
  );
};

export default Radio;
