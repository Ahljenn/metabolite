import { NextResponse } from 'next/server';
import clientPromise from '%/mongo/client';

export async function POST(request: Request) {
  try {
    let content = await request.json();
    console.log(content);

    let client = await clientPromise;
    let db = await client.db();

    await db
      .collection('screeningData')
      .updateOne({ user: content.user }, { $set: content }, { upsert: true });

    return NextResponse.json({ message: 'Test API call success!' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
  }
}

// Reference: https://www.mongodb.com/developer/languages/javascript/nextjs-building-modern-applications/
