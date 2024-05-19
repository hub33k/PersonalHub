// Preload file for unit and integration tests

import { afterAll, afterEach, beforeAll } from 'bun:test';
import { server } from '@/tests/msw/server';
import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { clerkMockUnauthenticated } from './mocks';

import '@testing-library/jest-dom/vitest';

GlobalRegistrator.register();

// Setup env
process.env.API_URL = 'http://localhost:3000/';
process.env.DATABASE_URL =
  'postgresql://postgres:postgres@localhost:5432/personal-hub-test';

// Setup mocks
clerkMockUnauthenticated();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = '';
});

afterAll(() => {
  server.close();
});
