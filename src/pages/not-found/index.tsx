import React, { FC } from 'react';
import { Typography } from '@mui/material';
import Page from 'components/page';

const NotFoundPage: FC = () => (
  <Page>
    <Typography sx={{ fontSize: '32px' }}>Page not found</Typography>
  </Page>
);

export default NotFoundPage;
