import '@/styles/globals.css';

import { AppProviders } from '@/modules/App';
import { APP_DESCRIPTION, APP_NAME } from '@/modules/Config';
import { cn } from '@ph/ui';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

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
    <html lang="en" className={cn('dark', GeistSans.variable)}>
      <head>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
