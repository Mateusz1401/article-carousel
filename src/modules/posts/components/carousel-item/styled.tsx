import { Box, BoxProps, styled } from '@mui/material';

export const ItemBoxStyled = styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '100%',
  border: '1px solid black',
  padding: '32px',
}));

export const PostTitle = styled(Box)<BoxProps>(() => ({
  fontSize: '22px',
  fontWeight: '600',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const PostBody = styled(Box)<BoxProps>(() => ({
  fontSize: '18px',
}));

export const CommentsBox = styled(Box)<BoxProps>(() => ({
  marginTop: '32px',
}));
