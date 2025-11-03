'use client';

import { useState } from 'react';
import { Shield } from 'lucide-react';

interface ForgotPasswordOTPProps {
  email: string;
  onComplete: (otp: string) => void;
}

export default function ForgotPasswordOTP({ email, onComplete }: ForgotPasswordOTPProps) {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(otp);
  };

  return (
    <div className="card glow-effect">
      <div className="card-body">
        <div className="text-center mb-8">
          <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-accent)' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Enter Verification Code
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We sent a 6-digit code to <strong>{email || 'your email'}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Verification Code
            </label>
            <input
              id="otp"
              type="text"
              className="form-input text-center text-2xl tracking-widest"
              placeholder="000000"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 text-lg glow-effect hover:scale-105 transition-all duration-300"
          >
            Verify Code
          </button>
        </form>
      </div>
    </div>
  );
}
