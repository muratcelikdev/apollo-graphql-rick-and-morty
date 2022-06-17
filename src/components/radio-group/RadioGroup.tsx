import { useCallback, useEffect, useState } from 'react';

import * as S from 'components/radio-group/RadioGroup.styles';

interface RadioGroupProps {
  values: string[];
  onSelect: (value: string) => void;
}

const RadioGroup = ({ values, onSelect }: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<typeof values[number] | null>(null);

  useEffect(() => {
    if (typeof selectedValue === 'string') {
      onSelect(selectedValue);
    }
  }, [selectedValue, onSelect]);

  const handleSelectedValue = useCallback((value: typeof values[number]) => {
    setSelectedValue(value);
  }, []);

  const renderRadioItems = () =>
    values.map((value: typeof values[number]) => (
      <S.RadioButton
        text={value}
        handleSelect={handleSelectedValue}
        selected={value === selectedValue}
      />
    ));

  return <>{renderRadioItems()}</>;
};

export default RadioGroup;
