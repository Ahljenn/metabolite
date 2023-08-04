import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    return NextResponse.json({ message: 'Test API call success!' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 });
  }
}
