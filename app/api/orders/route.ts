import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get('storeId');
  
  try {
    const orders = await prisma.order.findMany({
      where: storeId ? { storeId } : undefined,
      include: { customer: true, payments: true },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!prisma) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const body = await request.json();
    const { storeId, customerId, items, total, paymentMethod, notes } = body;
    
    const order = await prisma.order.create({
      data: {
        storeId,
        customerId,
        items,
        total: parseFloat(total),
        paymentMethod,
        notes,
      },
    });
    
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
