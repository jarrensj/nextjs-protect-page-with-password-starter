import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    if (password === process.env.PAGE_PASSWORD) {
      console.log("Password is correct");
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    console.error('Password verification error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
} 