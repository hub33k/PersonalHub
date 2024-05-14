interface IProtectedLayoutProps extends React.PropsWithChildren {}

export default function ProtectedLayout({
  children,
}: Readonly<IProtectedLayoutProps>) {
  return <>{children}</>;
}
