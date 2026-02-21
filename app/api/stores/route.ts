import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const stores = await prisma.store.findMany();
    return NextResponse.json(stores);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stores' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const body = await request.json();
    const { userId, name, slug, description } = body;
    
    const store = await prisma.store.create({
      data: {
        userId,
        name,
        slug,
        description,
      },
    });
    
    return NextResponse.json(store);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create store' }, { status: 500 });
  }
}
