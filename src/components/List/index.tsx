import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

const List = ({ children }: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <S.List>{children}</S.List>
    </S.Wrapper>
  );
};

export default List;
