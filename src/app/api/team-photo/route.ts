import { NextResponse } from 'next/server';

const imageSources: Record<string, string> = {
  'ayush-singh': 'https://me-l.co/9abwp2lw',
  'raj-jaiswal': 'https://me-l.co/1y2ttrcz',
  'ayush-pandey': 'https://me-l.co/jyxin285',
  'shyam-gupta': 'https://me-l.co/e84c0g2j',
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const person = searchParams.get('person');

    if (!person || !imageSources[person]) {
      return new NextResponse('Image not found', {
        status: 404,
      });
    }

    const response = await fetch(imageSources[person], {
      redirect: 'follow',
      cache: 'no-store',
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'User-Agent': 'LKG-Company-Website/1.0',
      },
    });

    if (!response.ok) {
      return new NextResponse('Unable to load image', {
        status: 502,
      });
    }

    const contentType =
      response.headers.get('content-type') || 'image/jpeg';

    if (!contentType.startsWith('image/')) {
      return new NextResponse('Invalid image source', {
        status: 502,
      });
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,

        // Browser/CDN caching
        'Cache-Control':
          'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',

        // Prevent browsers/search engines from treating this as a page
        'X-Content-Type-Options': 'nosniff',

        // Prevent embedding this response in another site's frame
        'Content-Disposition': 'inline',

        // CORS is intentionally restrictive
        'Access-Control-Allow-Origin': 'same-origin',
      },
    });
  } catch (error) {
    console.error('Team photo proxy error:', error);

    return new NextResponse('Image service unavailable', {
      status: 500,
    });
  }
}
