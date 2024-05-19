import { describe, expect, it } from 'bun:test';
import { type AppRouter, createCaller } from '@/server/api/root';
import { db } from '@/server/db';
import { mockDb } from '@/tests/mocks';
import type { inferProcedureInput } from '@trpc/server';

// Mock trpc
// https://tawaldevuniverse.hashnode.dev/some-tips-when-using-t3-stack-unit-testing-with-trpc-procedures-environment-setup

describe('post', () => {
  it('should pass', async () => {
    mockDb({
      // biome-ignore lint/suspicious/noExplicitAny: off
      insert: (schema: any) => {
        const schemaNane = schema[Object.getOwnPropertySymbols(schema)[4]];

        if (schemaNane === 'post') {
          return {
            values: ({ name }: { name: string }) => ({
              id: 321,
              name,
              createdAt: '2021-05-16T22:28:40.056Z',
              updatedAt: null,
            }),
          };
        }
      },
      query: {
        posts: {
          findFirst: () => {
            return {
              id: 123,
              name: 'test',
              createdAt: '2022-05-16T22:28:40.056Z',
              updatedAt: null,
            };
          },
        },
      },
    });
    const trpc = createCaller({ db, headers: new Headers() });

    const createdPost = await trpc.post.create({ name: 'new post' });
    expect(createdPost).toMatchObject({
      id: 321,
      name: 'new post',
      createdAt: '2021-05-16T22:28:40.056Z',
      updatedAt: null,
    });

    const input: inferProcedureInput<AppRouter['post']['hello']> = {
      text: 'tester',
    };

    const hello = await trpc.post.hello(input);
    expect(hello).toMatchObject({
      greeting: 'Hello tester',
    });

    const latestPost = await trpc.post.getLatest();
    expect(latestPost).toMatchObject({
      id: 123,
      name: 'test',
      createdAt: '2022-05-16T22:28:40.056Z',
      updatedAt: null,
    });

    // Example test
    // ================================================================

    // const ctx = await createContextInner({});
    // const caller = createCaller(ctx);

    // const input: inferProcedureInput<AppRouter['post']['add']> = {
    //   text: 'hello test',
    //   title: 'hello test',
    // };

    // const post = await caller.post.add(input);
    // const byId = await caller.post.byId({ id: post.id });

    // expect(byId).toMatchObject(input);
  });
});
