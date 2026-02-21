import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get('storeId');
  
  try {
    const products = await prisma.product.findMany({
      where: storeId ? { storeId } : undefined,
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { storeId, name, description, price, images, inventory, category } = body;
    
    const product = await prisma.product.create({
      data: {
        storeId,
        name,
        description,
        price: parseFloat(price),
        images: images || [],
        inventory: parseInt(inventory) || 0,
        category,
      },
    });
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
