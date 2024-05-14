import { CreatePost } from '@/modules/Post/create-post';
import { api } from '@/trpc/server';
import type { Metadata } from 'next';

export const dashboardPageMetadata: Metadata = {
  title: 'Dashboard',
};

export const DashboardPage = async () => {
  const hello = await api.post.hello({ text: 'from tRPC' });
  const latestPost = await api.post.getLatest();

  return (
    <>
      <h1 className="text-3xl text-blue-500">Dashboard</h1>

      <div className="flex flex-col gap-2 mb-4">
        <p className="text-2xl text-white">
          {hello ? hello.greeting : 'Loading tRPC query...'}
        </p>
      </div>

      <div className="max-w-xs">
        <CreatePost />
      </div>

      <div>
        {latestPost ? (
          <div className="mt-4">
            <p>
              {latestPost.id} - {latestPost.name}
            </p>
            <p>
              created: {latestPost.createdAt.toLocaleString()}
              {latestPost.updatedAt && (
                <>, updated: {latestPost.updatedAt?.toLocaleString()}</>
              )}
            </p>
          </div>
        ) : (
          <div className="mt-4">
            <p>You have no posts yet.</p>
          </div>
        )}
      </div>
    </>
  );
};
