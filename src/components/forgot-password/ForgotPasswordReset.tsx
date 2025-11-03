'use client';

import { useState } from 'react';
import { Key, Check } from 'lucide-react';

interface ForgotPasswordResetProps {
  onComplete: (password: string) => void;
}

export default function ForgotPasswordReset({ onComplete }: ForgotPasswordResetProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(password);
  };

  return (
    <div className="card glow-effect">
      <div className="card-body">
        <div className="text-center mb-8">
          <Key className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--text-accent)' }} />
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Create New Password
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Choose a strong password to secure your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              New Password
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="form-input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Password Requirements */}
          <div className="glass-morphism p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
              Password Requirements:
            </h4>
            <div className="space-y-2 text-sm">
              <div className={`flex items-center gap-2 ${
                password.length >= 8 ? 'text-green-400' : 'text-gray-500'
              }`}>
                <Check className="w-3 h-3" />
                At least 8 characters
              </div>
              <div className={`flex items-center gap-2 ${
                /(?=.*[a-z])/.test(password) ? 'text-green-400' : 'text-gray-500'
              }`}>
                <Check className="w-3 h-3" />
                One lowercase letter
              </div>
              <div className={`flex items-center gap-2 ${
                /(?=.*[A-Z])/.test(password) ? 'text-green-400' : 'text-gray-500'
              }`}>
                <Check className="w-3 h-3" />
                One uppercase letter
              </div>
              <div className={`flex items-center gap-2 ${
                /(?=.*\d)/.test(password) ? 'text-green-400' : 'text-gray-500'
              }`}>
                <Check className="w-3 h-3" />
                One number
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-4 text-lg glow-effect hover:scale-105 transition-all duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
