import { jest, mock } from 'bun:test';

const dbPath = '../../server/db';

// TODO (hub33k): find better way to mock this
// TODO (hub33k): reset mocks
export function mockDb(dbOptions = {}) {
  mock.module(dbPath, () => {
    return {
      db: {
        insert: jest.fn(),
        query: jest.fn(),
        ...dbOptions,
      },
    };
  });
}
