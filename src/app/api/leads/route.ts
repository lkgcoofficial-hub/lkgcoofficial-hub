import { NextResponse } from 'next/server';

const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz2slwTTTY5NZd4Tgn8lfXxTMG9zQWVv1JLPfQFU7j7XnkXcfVBjnVVbbfmVFLrabcK/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name || '',
        email: body.email || '',
        phone: body.phone || '',
        company: body.company || '',
        service: body.service || '',
        budget: body.budget || '',
        message: body.message || '',
        source: body.source || 'Website',
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unable to save lead.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully.',
    });
  } catch (error) {
    console.error('Lead submission error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while submitting your request.',
      },
      { status: 500 }
    );
  }
}
