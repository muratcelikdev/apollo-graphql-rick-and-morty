import { useState, useCallback, useMemo, useEffect } from 'react';

import FilterIcon from 'assets/svg/filter.svg';

import { Characters } from 'common/constants';

import * as S from 'components/character-filter/CharacterFilter.styles';
import Modal from 'components/modal/Modal';
import RadioGroup from 'components/radio-group/RadioGroup';

import { useFilter } from 'context/FilterContext';

interface CharacterFilterProps {
  className?: string;
  onFilterChange: (value: string) => void;
}

const { RICK, MORTY } = Characters;

const CharacterFilter = ({ className, onFilterChange }: CharacterFilterProps) => {
  const { selectedCharacter, setSelectedCharacter } = useFilter();

  const buttonText = useMemo(
    () => selectedCharacter ?? `${RICK} and ${MORTY}`,
    [selectedCharacter]
  );

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (selectedCharacter) {
      onFilterChange(selectedCharacter);
    }
  }, [selectedCharacter, onFilterChange]);

  const handleModalToggle = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const handleSelectedCharacter = useCallback(
    (character: string) => {
      setSelectedCharacter?.(character);
    },
    [setSelectedCharacter]
  );

  return (
    <>
      <S.Container className={className}>
        <S.ButtonText>{buttonText}</S.ButtonText>
        <button type="button" onClick={handleModalToggle}>
          <img src={FilterIcon} alt="filter-icon" />
        </button>
      </S.Container>

      <Modal visible={modalVisible} title="Filter" onClose={handleModalToggle}>
        <RadioGroup
          values={Object.values(Characters)}
          onSelect={handleSelectedCharacter}
          defaultValue={selectedCharacter}
        />
      </Modal>
    </>
  );
};

export default CharacterFilter;
