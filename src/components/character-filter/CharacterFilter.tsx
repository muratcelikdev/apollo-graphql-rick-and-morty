import { useState, useCallback } from 'react';

import FilterIcon from 'assets/svg/filter.svg';

import { Characters } from 'common/constants';

import * as S from 'components/character-filter/CharacterFilter.styles';
import Modal from 'components/modal/Modal';

interface CharacterFilterProps {
  className?: string;
}

const { RICK, MORTY } = Characters;

const CharacterFilter = ({ className }: CharacterFilterProps) => {
  const buttonText = `${RICK} and ${MORTY}`;

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalToggle = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  return (
    <>
      <S.Container className={className}>
        <S.ButtonText>{buttonText}</S.ButtonText>
        <button type="button" onClick={handleModalToggle}>
          <img src={FilterIcon} alt="filter-icon" />
        </button>
      </S.Container>

      <Modal visible={modalVisible} title="Filter" onClose={handleModalToggle}>
       {/* Implement Content */}
      </Modal>
    </>
  );
};

export default CharacterFilter;
