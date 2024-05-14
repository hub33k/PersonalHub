import type { Metadata } from 'next';

export const dashboardPageMetadata: Metadata = {
  title: 'Dashboard',
};

export const DashboardPage = async () => {
  return (
    <>
      <h1 className="text-3xl text-blue-500">Dashboard</h1>
    </>
  );
};
