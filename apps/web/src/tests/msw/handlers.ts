import { env } from '@/env.mjs';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${env.API_URL}/example`, () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),

  http.post(`${env.API_URL}/trpc/post.create`, () => {
    console.log('post create');
    // return HttpResponse.json({ type: 'post' });
  }),

  // All other routes
  // http.get(`${env.API_URL}/*`, () => {
  //   return HttpResponse.json({ type: 'get' });
  // }),
  // http.post(`${env.API_URL}/*`, () => {
  //   return HttpResponse.json({ type: 'post' });
  // }),
];
