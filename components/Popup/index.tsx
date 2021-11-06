import * as S from './styles';

interface IProps {
  title?: string;
  content?: string;
  type?: string;
  handleCancel: () => void;
  handleAccept: () => void;
}

function Popup({
  title,
  content,
  type = 'normal',
  handleCancel,
  handleAccept,
}: IProps) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Title $type={type}>{title || 'title'}</S.Title>
        <S.Content>{content || 'content'}</S.Content>

        <S.Action>
          <S.CancelBtn onClick={handleCancel}>Cancel</S.CancelBtn>
          <S.AcceptBtn className="primary" onClick={handleAccept}>
            Ok
          </S.AcceptBtn>
        </S.Action>
      </S.Inner>
    </S.Wrapper>
  );
}

export default Popup;
