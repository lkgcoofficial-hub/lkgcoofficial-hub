import { NextResponse } from 'next/server';

const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz2slwTTTY5NZd4Tgn8lfXxTMG9zQWVv1JLPfQFU7j7XnkXcfVBjnVVbbfmVFLrabcK/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      service: body.service || '',
      budget: body.budget || '',
      message: body.message || '',
      source: body.source || 'Website',
    };

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
      cache: 'no-store',
    });

    const responseText = await response.text();

    console.log('Google Apps Script status:', response.status);
    console.log('Google Apps Script response:', responseText);

    let result: {
      success?: boolean;
      message?: string;
      error?: string;
    } = {};

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        'Google Apps Script returned a non-JSON response:',
        responseText
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            result.error ||
            result.message ||
            'Unable to save lead to Google Sheets.',
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
