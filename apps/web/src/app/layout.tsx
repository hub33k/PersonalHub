import '@/styles/globals.css';

import { AppProviders } from '@/modules/App';
import { APP_DESCRIPTION, APP_NAME, ROUTES } from '@/modules/Config';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME}`,
    template: `%s | ${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`,
  keywords: ['dashboard'],
};

interface IRootLayoutProps extends React.PropsWithChildren {}

export default function RootLayout({ children }: Readonly<IRootLayoutProps>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <head>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AppProviders>
          <nav className="mb-4">
            <ul className="flex gap-4">
              <li>
                <Link href={ROUTES.HOME}>Home</Link>
              </li>
              <li>
                <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
              </li>
            </ul>
          </nav>

          {children}
        </AppProviders>
      </body>
    </html>
  );
}
