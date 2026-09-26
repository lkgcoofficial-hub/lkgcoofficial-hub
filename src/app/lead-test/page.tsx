'use client';

import { useState } from 'react';

export default function LeadTestPage() {
  const [status, setStatus] = useState('');

  const sendTestLead = async () => {
    setStatus('Sending...');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test Lead',
          email: 'test@example.com',
          phone: '9999999999',
          company: 'LKG Test',
          service: 'Web Development',
          budget: 'Test',
          message: 'This is a test lead.',
          source: 'API Test',
        }),
      });

      const result = await response.json();

      setStatus(
        result.success
          ? '✅ Lead sent successfully!'
          : '❌ Lead submission failed.'
      );
    } catch {
      setStatus('❌ Something went wrong.');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Lead System Test
        </h1>

        <button
          onClick={sendTestLead}
          className="mt-6 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
        >
          Send Test Lead
        </button>

        {status && (
          <p className="mt-5 text-muted-foreground">
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
