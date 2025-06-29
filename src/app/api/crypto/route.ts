
import { NextResponse } from 'next/server';

export async function GET() {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const params = new URLSearchParams({
    start: '1',
    limit: '50',
    convert: 'USD',
  });

  try {
    const res = await fetch(`${url}?${params.toString()}`, {
      headers: {
        Accepts: 'application/json',
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_API_KEY || '',
      }
        });

   const data = await res.json();
   console.log(data);

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status });
    }

    return NextResponse.json(data);
   } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}