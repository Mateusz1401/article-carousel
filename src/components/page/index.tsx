import React, { FC, memo, ReactNode } from 'react';
import { PageStyled } from 'components/page/styled';

type ComponentPops = {
  children: ReactNode;
};

const Page: FC<ComponentPops> = ({ children }) => {
  return <PageStyled>{children}</PageStyled>;
};

export default memo(Page);
