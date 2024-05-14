'use client';

import { TailwindIndicator } from '@/modules/Debug';
import { TRPCReactProvider } from '@/trpc/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export interface IAppProvidersProps extends React.PropsWithChildren {}

export const AppProviders = ({ children }: IAppProvidersProps) => {
  return (
    <>
      <TRPCReactProvider>
        {children}

        <ReactQueryDevtools />
        <TailwindIndicator />
      </TRPCReactProvider>
    </>
  );
};
