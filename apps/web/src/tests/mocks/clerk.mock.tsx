import { mock } from 'bun:test';

const user = {
  id: 'user_bob_ross',
  fullName: 'Bob Ross',
};

export function clerkMockAuthenticated(methods = {}) {
  mock.module('@clerk/nextjs', () => {
    return {
      ClerkProvider: ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
      ),
      auth: () => new Promise((resolve) => resolve({ userId: user.id })),
      useUser: () => ({
        isSignedIn: true,
        user: {
          id: user.id,
          fullName: user.fullName,
        },
      }),
      ...methods,
    };
  });
}

export function clerkMockUnauthenticated(methods = {}) {
  mock.module('@clerk/nextjs', () => {
    return {
      ClerkProvider: ({ children }: { children: React.ReactNode }) => (
        <>{children}</>
      ),
      auth: () => new Promise((resolve) => resolve({ userId: null })),
      useUser: () => ({
        isSignedIn: false,
        user: null,
      }),
      ...methods,
    };
  });
}
