export { default } from 'next-auth/middleware';

// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// export async function middleware(req: any) {
//   console.log(req);
//   // const token = await getToken({ req, secret: process.env.JWT_SECRET });
//   // const { pathname, origin } = req.nextUrl;
//   // if (!token) {
//   //   console.log('Nice try! You are not logged in.');
//   //   return NextResponse.redirect(`${origin}`);
//   // }
// }

export const config = { matcher: ['/nutrition/screening'] };
