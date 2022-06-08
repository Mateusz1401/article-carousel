import { Button, ButtonProps, styled } from '@mui/material';
import { paletteColors } from '../../theme/palette';

export const ButtonStyled = styled(Button)<ButtonProps>(() => ({
  background: paletteColors.accent1,
  height: '48px',
  borderRadius: '8px',
  minWidth: '100px',
  fontWeight: '500',
  textTransform: 'none',
  ':hover': {
    background: paletteColors.accent1,
    opacity: '0.8',
  },
}));
