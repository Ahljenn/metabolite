export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/nutrition/screening', '/nutrition/dashboard', '/nutrition/score'],
};
