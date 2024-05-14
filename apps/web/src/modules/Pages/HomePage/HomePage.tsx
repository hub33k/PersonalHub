import type { Metadata } from 'next';

export const homePageMetadata: Metadata = {
  title: 'Home',
};

export const HomePage = async () => {
  return (
    <>
      <h1 className="text-3xl text-red-500">Home</h1>
    </>
  );
};
