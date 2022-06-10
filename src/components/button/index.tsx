import React, { FC } from 'react';
import { ButtonStyled } from 'components/button/styled';

type ComponentProps = {
  label: string;
  handleClick?: () => void;
  type?: 'button' | 'submit';
};

const MuiButton: FC<ComponentProps> = ({ label, handleClick, type = 'button' }) => {
  return (
    <ButtonStyled variant="contained" onClick={handleClick} type={type}>
      {label}
    </ButtonStyled>
  );
};

export default MuiButton;
