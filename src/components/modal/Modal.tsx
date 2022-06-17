import CloseIcon from 'assets/svg/close.svg';

import * as S from 'components/modal/Modal.styles';

interface ModalProps {
  visible?: boolean;
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

const Modal = ({ visible = true, children, title, onClose }: ModalProps) => {
  if (visible) {
    return (
      <S.Wrapper>
        <S.ModalWindow>
          <S.Header>
            <S.Title>{title}</S.Title>
            <button type="button" onClick={onClose}>
              <img src={CloseIcon} alt="close-icon" />
            </button>
          </S.Header>
          <S.Content>{children}</S.Content>
        </S.ModalWindow>
      </S.Wrapper>
    );
  }

  return null;
};

export default Modal;
