import { APP_NAME, ROUTES } from '@/modules/Config';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs';
import { Button } from '@ph/ui';
import type { Metadata } from 'next';
import Link from 'next/link';

export const homePageMetadata: Metadata = {
  title: 'Home',
};

export const HomePage = async () => {
  return (
    <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-4">
          <SignedIn>
            <Button asChild>
              <Link href={ROUTES.DASHBOARD}>Dashboard &rarr;</Link>
            </Button>

            <SignOutButton>
              <Button variant="outline">Sign out</Button>
            </SignOutButton>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      <div className="hidden bg-muted lg:flex items-center justify-center py-12">
        <h1 className="text-3xl text-center">{APP_NAME}</h1>
      </div>
    </div>
  );
};
