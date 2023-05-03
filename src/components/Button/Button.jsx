import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick = null }) => {
  return (
    <ButtonStyled type="button" className={Button} onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};
