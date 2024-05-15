'use client';

import { TailwindIndicator } from '@/modules/Debug';
import { TRPCReactProvider } from '@/trpc/react';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export interface IAppProvidersProps extends React.PropsWithChildren {}

export const AppProviders = ({ children }: IAppProvidersProps) => {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        {children}

        <ReactQueryDevtools />
        <TailwindIndicator />
      </TRPCReactProvider>
    </ClerkProvider>
  );
};
