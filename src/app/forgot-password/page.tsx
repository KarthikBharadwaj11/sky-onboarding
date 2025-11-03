'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ForgotPasswordEmail from '@/components/forgot-password/ForgotPasswordEmail';
import ForgotPasswordOTP from '@/components/forgot-password/ForgotPasswordOTP';
import ForgotPasswordReset from '@/components/forgot-password/ForgotPasswordReset';
import { ChevronLeft } from 'lucide-react';

type Step = 'email' | 'otp' | 'reset';

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleEmailComplete = (emailValue: string) => {
    setEmail(emailValue);
    setCurrentStep('otp');
  };

  const handleOTPComplete = (otp: string) => {
    setCurrentStep('reset');
  };

  const handleResetComplete = (password: string) => {
    alert('Password reset successfully! You can now login with your new password.');
    router.push('/login');
  };

  const handleBack = () => {
    if (currentStep === 'otp') {
      setCurrentStep('email');
    } else if (currentStep === 'reset') {
      setCurrentStep('otp');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--gradient-background)' }}>
      <div className="w-full max-w-md px-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        {/* Current Step */}
        {currentStep === 'email' && (
          <ForgotPasswordEmail onComplete={handleEmailComplete} />
        )}
        {currentStep === 'otp' && (
          <ForgotPasswordOTP email={email} onComplete={handleOTPComplete} />
        )}
        {currentStep === 'reset' && (
          <ForgotPasswordReset onComplete={handleResetComplete} />
        )}
      </div>
    </div>
  );
}
