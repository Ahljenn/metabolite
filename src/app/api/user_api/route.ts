import { NextResponse } from 'next/server';
import clientPromise from '%/mongo/client';

export async function POST(request: Request) {
  try {
    let { db } = await clientPromise;
    console.log(request.body);
    // let bodyContent = JSON.parse(request.body);
    // console.log(bodyContent);
    return NextResponse.json({ message: 'Test API call success!' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
  }
}
