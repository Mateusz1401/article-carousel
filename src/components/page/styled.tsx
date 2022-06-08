import { Box, BoxProps, styled } from '@mui/material';

export const PageStyled = styled(Box)<BoxProps>(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
}));
