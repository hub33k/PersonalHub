import { jest } from 'bun:test';
import type { AppRouter } from '@/server/api/root';
import { createTRPCMsw } from '@/tests/utils/msw-trpc';
import { ClerkProvider } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type RenderOptions, render } from '@testing-library/react';
import { httpLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';
import SuperJSON from 'superjson';

// Mock tRPC
// ================================================================

const mockedTRPC = createTRPCReact<AppRouter>({
  overrides: {
    useMutation: {
      async onSuccess(opts) {
        await opts.originalFn();
        await opts.queryClient.invalidateQueries();
      },
    },
  },
});
const mockedTRPCClient = mockedTRPC.createClient({
  links: [
    httpLink({
      url: 'http://localhost:3000/api/trpc',
      transformer: SuperJSON,
      // fetch,
    }),
  ],
});
const mockedQueryClient = new QueryClient();
export const TRPCReactProviderMock = (props: { children: React.ReactNode }) => {
  return (
    <mockedTRPC.Provider
      client={mockedTRPCClient}
      queryClient={mockedQueryClient}
    >
      <QueryClientProvider client={mockedQueryClient}>
        {props.children}
      </QueryClientProvider>
    </mockedTRPC.Provider>
  );
};
export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, {
    wrapper: (props) => <TRPCReactProviderMock {...props} />,
    ...options,
  });
};
export const trpcMsw = createTRPCMsw<AppRouter>({
  transformer: { input: SuperJSON, output: SuperJSON },
});

// Mock App Router
// ================================================================

export type AppRouterContextProviderMockProps = {
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};
export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return (
    <AppRouterContext.Provider value={mockedRouter}>
      {children}
    </AppRouterContext.Provider>
  );
};

// Render Context
// ================================================================

export class RenderContext {
  public render(
    children: JSX.Element,
    router: Partial<AppRouterInstance> = {},
  ) {
    return render(
      <AppRouterContextProviderMock router={router}>
        <React.StrictMode>
          <ClerkProvider>
            <TRPCReactProviderMock>{children}</TRPCReactProviderMock>
          </ClerkProvider>
        </React.StrictMode>
      </AppRouterContextProviderMock>,
    );
  }
}
