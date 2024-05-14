'use client';

import { TailwindIndicator } from '@/modules/Debug';

export interface IAppProvidersProps extends React.PropsWithChildren {}

export const AppProviders = ({ children }: IAppProvidersProps) => {
  return (
    <>
      {children}

      <TailwindIndicator />
    </>
  );
};
