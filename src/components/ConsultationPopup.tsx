'use client';

import React, { useEffect, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  country: string;
  countryCode: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  country: '',
  countryCode: '+91',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

const countries = [
  { name: 'India', code: '+91' },
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Singapore', code: '+65' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Other', code: '' },
];

const services = [
  'Consulting & Strategy',
  'Digital Growth & Marketing',
  'Web & Software Development',
  'Mobile App Development',
  'AI, Data & Automation',
  'Cloud, DevOps & Cybersecurity',
  'Enterprise Technology',
  'IT Staffing & Delivery',
  'Other / Not Sure',
];

const budgets = [
  'Not sure yet',
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+',
];

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);

      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  const openPopup = () => {
    setIsOpen(true);
    setSubmitted(false);
    setError('');

    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  const closePopup = () => {
    if (isSubmitting) return;

    setIsVisible(false);

    window.setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  const updateField = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCountryChange = (value: string) => {
    const selectedCountry = countries.find(
      (country) => country.name === value
    );

    setForm((prev) => ({
      ...prev,
      country: value,
      countryCode: selectedCountry?.code || '',
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setError('');

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.country.trim() ||
      !form.phone.trim() ||
      !form.service.trim() ||
      !form.budget.trim() ||
      !form.message.trim()
    ) {
      setError('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          country: form.country,
          countryCode: form.countryCode,
          phone: form.phone,
          company: form.company,
          service: form.service,
          budget: form.budget,
          message: form.message,
          source: 'Consultation Popup',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to submit your request.'
        );
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch (submissionError) {
      console.error('Consultation popup submission error:', submissionError);

      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating consultation button */}
      <button
        type="button"
        onClick={openPopup}
        className={`fixed bottom-6 right-6 z-[80] inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/95 px-5 py-3 text-sm font-bold text-foreground shadow-hover backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ${
          isOpen
            ? 'pointer-events-none translate-y-4 opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
        aria-label="Open free consultation form"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>

        Free Consultation

        <span className="text-primary">→</span>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-6 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePopup();
            }
          }}
        >
          <div
            className={`relative my-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl transition-all duration-500 motion-reduce:transition-none ${
              isVisible
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-6 scale-[0.98] opacity-0'
            }`}
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

            {/* Close */}
            <button
              type="button"
              onClick={closePopup}
              disabled={isSubmitting}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-primary/30 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:rotate-0"
              aria-label="Close consultation popup"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Visual side */}
              <div className="relative hidden min-h-[620px] overflow-hidden border-r border-border bg-card p-10 lg:flex lg:flex-col lg:justify-between">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 motion-safe:animate-pulse" />

                  <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />

                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />

                  <span className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
                  <span className="absolute right-[22%] top-[38%] h-1.5 w-1.5 rounded-full bg-primary motion-safe:animate-pulse" />
                  <span className="absolute bottom-[30%] left-[30%] h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Free Consultation
                  </span>

                  <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-tight tracking-tight text-foreground">
                    Let&apos;s turn your next idea into{' '}
                    <span className="text-gradient">impact.</span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Tell us what you are trying to build, improve, automate or
                    grow. Our team can help you identify the right path
                    forward.
                  </p>
                </div>

                {/* Impact visual */}
                <div className="relative z-10 flex items-center justify-center py-8">
                  <div className="relative flex h-64 w-64 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-primary/10 motion-safe:animate-[spin_18s_linear_infinite]" />

                    <div className="absolute inset-7 rounded-full border border-accent/10 motion-safe:animate-[spin_14s_linear_infinite_reverse]" />

                    <div className="absolute inset-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-background/80 shadow-hover backdrop-blur-xl">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent opacity-90" />
                    </div>

                    <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-primary/15 bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-xl">
                      Strategy
                    </span>

                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-primary/15 bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-xl">
                      Growth
                    </span>

                    <span className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-accent/15 bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur-xl">
                      Technology
                    </span>

                    <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-accent/15 bg-background/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent backdrop-blur-xl">
                      Impact
                    </span>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {['Strategy', 'Technology', 'Transformation'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border bg-background/50 p-3 backdrop-blur-xl"
                      >
                        <div className="mb-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <p className="text-[11px] font-semibold text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Form side */}
              <div className="relative p-6 sm:p-8 lg:p-10">
                {!submitted ? (
                  <>
                    <div className="mb-7 pr-10">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        Free Consultation
                      </span>

                      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground lg:hidden">
                        Let&apos;s start a conversation.
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Tell us what you need help with and our team will get
                        back to you.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="consultation-name"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            Full Name *
                          </label>

                          <input
                            id="consultation-name"
                            type="text"
                            value={form.name}
                            onChange={(event) =>
                              updateField('name', event.target.value)
                            }
                            placeholder="Your name"
                            required
                            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-email"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            Work Email *
                          </label>

                          <input
                            id="consultation-email"
                            type="email"
                            value={form.email}
                            onChange={(event) =>
                              updateField('email', event.target.value)
                            }
                            placeholder="you@company.com"
                            required
                            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="consultation-country"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            Country *
                          </label>

                          <select
                            id="consultation-country"
                            value={form.country}
                            onChange={(event) =>
                              handleCountryChange(event.target.value)
                            }
                            required
                            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="" disabled>
                              Select country
                            </option>

                            {countries.map((country) => (
                              <option
                                key={country.name}
                                value={country.name}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-phone"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            Phone *
                          </label>

                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={form.countryCode}
                              onChange={(event) =>
                                updateField(
                                  'countryCode',
                                  event.target.value
                                )
                              }
                              placeholder="+91"
                              aria-label="Country code"
                              className="h-12 w-20 shrink-0 rounded-xl border border-border bg-background px-3 text-center text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                            />

                            <input
                              id="consultation-phone"
                              type="tel"
                              value={form.phone}
                              onChange={(event) =>
                                updateField(
                                  'phone',
                                  event.target.value
                                )
                              }
                              placeholder="98765 43210"
                              required
                              className="h-12 min-w-0 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="consultation-company"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            Company
                          </label>

                          <input
                            id="consultation-company"
                            type="text"
                            value={form.company}
                            onChange={(event) =>
                              updateField(
                                'company',
                                event.target.value
                              )
                            }
                            placeholder="Company name"
                            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="consultation-service"
                            className="mb-2 block text-xs font-bold text-foreground"
                          >
                            What can we help with? *
                          </label>

                          <select
                            id="consultation-service"
                            value={form.service}
                            onChange={(event) =>
                              updateField(
                                'service',
                                event.target.value
                              )
                            }
                            required
                            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>

                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="consultation-budget"
                          className="mb-2 block text-xs font-bold text-foreground"
                        >
                          Estimated Budget *
                        </label>

                        <select
                          id="consultation-budget"
                          value={form.budget}
                          onChange={(event) =>
                            updateField('budget', event.target.value)
                          }
                          required
                          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
                          <option value="" disabled>
                            Select budget range
                          </option>

                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="consultation-message"
                          className="mb-2 block text-xs font-bold text-foreground"
                        >
                          Tell us about your requirement *
                        </label>

                        <textarea
                          id="consultation-message"
                          rows={4}
                          value={form.message}
                          onChange={(event) =>
                            updateField(
                              'message',
                              event.target.value
                            )
                          }
                          placeholder="What are you trying to build, improve, automate or grow?"
                          required
                          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                        />
                      </div>

                      {error && (
                        <div
                          role="alert"
                          className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                        >
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary group inline-flex h-13 w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get Free Consultation
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                        By submitting this form, you agree to be contacted
                        about your enquiry.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-2xl text-primary">
                      ✓
                    </div>

                    <span className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      Request Received
                    </span>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                      Thank you for reaching out.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                      We&apos;ve received your consultation request. Our team
                      will review your requirement and get back to you within
                      4 business hours.
                    </p>

                    <button
                      type="button"
                      onClick={closePopup}
                      className="btn-primary mt-8 rounded-full px-7 py-3 text-sm font-bold"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
