'use client';

import { useState, type FormEvent } from 'react';
import { contact } from '@/lib/data';

const SERVICE_OPTIONS = [
  'Film & reklamfilm',
  'Foto & kampanjbilder',
  'Branding & identitet',
  'Social media / Paid',
  'SEO & webb',
  'Strategi / rådgivning',
  'Annat'
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    setError(null);

    const data = new FormData(form);
    data.append('_subject', `Ny förfrågan från ${data.get('name') || 'webbplatsen'}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    // Honeypot — bots fill this, humans don't
    if (data.get('_honey')) {
      setStatus('sent');
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      const json = await res.json();
      if (res.ok && (json.success === 'true' || json.success === true)) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
        setError(json.message || 'Något gick fel. Mejla oss direkt så hörs vi.');
      }
    } catch {
      setStatus('error');
      setError('Kunde inte skicka. Mejla oss direkt så hörs vi.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-cream ring-1 ring-plommon/15 p-6 md:p-10">
        <p className="text-rose text-[10px] tracking-[0.3em] uppercase mb-3">Tack!</p>
        <p className="font-display font-medium text-2xl md:text-3xl mb-4">
          Vi hör av oss <span className="text-bordeaux">snart.</span>
        </p>
        <p className="text-plommon/70 text-sm">
          Meddelandet är skickat till {contact.email}. Behöver du oss snabbare,{' '}
          <a
            href={`mailto:${contact.email}`}
            className="underline decoration-rose underline-offset-4 hover:text-bordeaux"
          >
            mejla direkt
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-cream ring-1 ring-plommon/15 p-6 md:p-10 space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field name="name" label="Namn" required />
        <Field name="company" label="Företag" />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Telefon" type="tel" />
      </div>
      <label className="block">
        <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
          Typ av projekt
        </span>
        <select
          name="service"
          className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon focus:outline-none focus:border-bordeaux focus-visible:ring-2 focus-visible:ring-bordeaux/40 rounded-none"
          defaultValue=""
        >
          <option value="" disabled>
            Välj …
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
          Kort om vad ni vill göra
        </span>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon resize-y focus:outline-none focus:border-bordeaux focus-visible:ring-2 focus-visible:ring-bordeaux/40 rounded-none"
        />
      </label>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-3 px-8 py-3 bg-plommon text-cream font-display font-medium text-lg hover:bg-bordeaux transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Skickar …' : 'Skicka'}
          {status !== 'sending' && <span aria-hidden>→</span>}
        </button>
        {error && (
          <p role="alert" className="text-bordeaux text-sm">
            {error}
          </p>
        )}
      </div>

      <p className="text-xs text-plommon/55">
        Föredrar du att skriva direkt — mejla{' '}
        <a
          href={`mailto:${contact.email}`}
          className="underline decoration-rose underline-offset-4 hover:text-bordeaux"
        >
          {contact.email}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon focus:outline-none focus:border-bordeaux focus-visible:ring-2 focus-visible:ring-bordeaux/40 rounded-none"
      />
    </label>
  );
}
