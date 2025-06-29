import { NextResponse } from 'next/server';

export async function getLogo(coin: string) {
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${coin}`;
    try {
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_API_KEY || '',
            },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch logo');
        }

        const data = await res.json();
        console.log(data);
        // return NextResponse.json(data);
        return data; // Assuming the logo is in data.data[coin].logo
    } catch (error) {
        console.error('Error fetching logo:', error);
        return NextResponse.json({ error: 'Failed to fetch logo' }, { status: 500 });
    }
}
