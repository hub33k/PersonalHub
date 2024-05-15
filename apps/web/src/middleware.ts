import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  // biome-ignore format: off
  '/dashboard(.*)',
]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  // biome-ignore format: off
  matcher: [
    '/((?!.+.[w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
};
