import { Box, BoxProps, styled } from '@mui/material';
import { paletteColors } from 'theme/palette';

export const CommentBox = styled(Box)<BoxProps>(() => ({
  padding: '8px',
  '&:nth-of-type(2n)': { background: paletteColors.accent2 },
}));

export const CommentName = styled(Box)<BoxProps>(() => ({
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'left',
}));

export const CommentEmail = styled(Box)<BoxProps>(() => ({
  fontSize: '16px',
  textAlign: 'left',
}));

export const CommentBody = styled(Box)<BoxProps>(() => ({
  fontSize: '16px',
  textAlign: 'left',
  marginBottom: '20px',
  whiteSpace: 'pre-line',
}));
