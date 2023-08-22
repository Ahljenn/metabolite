import { NextResponse } from 'next/server';
import clientPromise from '%/mongo/client';

export const POST = async (request: Request) => {
  try {
    let content = await request.json();
    console.log(content);

    let client = await clientPromise;
    let db = await client.db();

    await db
      .collection('screeningData')
      .updateOne({ userEmail: content.userEmail }, { $set: content }, { upsert: true });

    return NextResponse.json({ message: 'Post user data success!' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
  }
};

// export const GET = async (request: Request, response: Response) => {
//   try {
//     console.log('GET request');
//     return NextResponse.json({ message: 'GET user data success!!!' }, { status: 200 });
//   } catch {
//     return NextResponse.json(
//       { error: 'Internal Server Error - Unable to retrieve user data' },
//       { status: 400 }
//     );
//   }
// };

export const GET = async (request: Request) => {
  try {
    const userEmail = request.headers.get('user-email'); // Extract user's email from headers

    if (!userEmail) {
      return NextResponse.json({ error: 'User email is missing from headers' }, { status: 400 });
    }

    let client = await clientPromise;
    let db = await client.db();

    const userData = await db.collection('screeningData').findOne({ userEmail: userEmail });
    console.log(userEmail);
    if (!userData) {
      return NextResponse.json({ message: 'User data not found' }, { status: 404 });
    }

    return NextResponse.json(userData, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error - Unable to retrieve user data' },
      { status: 500 }
    );
  }
};

// Reference: https://www.mongodb.com/developer/languages/javascript/nextjs-building-modern-applications/
