'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

interface ForgotPasswordEmailProps {
  onComplete: (email: string) => void;
}

export default function ForgotPasswordEmail({ onComplete }: ForgotPasswordEmailProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(email);
  };

  return (
    <div className="card glow-effect">
      <div className="card-body">
        <div className="text-center mb-8">
          <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-accent)' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Forgot Password
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Enter your email address and we'll send you a verification code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 text-lg glow-effect hover:scale-105 transition-all duration-300"
          >
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
}
