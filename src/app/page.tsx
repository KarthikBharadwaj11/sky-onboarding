'use client';

import { useEffect } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (!user.onboardingComplete) {
        router.push('/onboarding');
      } else {
        alert('Onboarding already completed! This is just a demo.');
      }
    }
  }, [user, router]);

  if (user) {
    return null; // Show nothing while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--gradient-background)' }}>
      <div className="max-w-4xl w-full text-center">
        {/* Branding */}
        <div className="mb-12">
          <h1 className="text-8xl font-bold text-gradient gradient-shift mb-6">
            Sky
          </h1>
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Welcome to the Future of Trading
          </h2>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Experience powerful AI-driven insights and make smarter investment decisions
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card glow-effect">
            <div className="card-body text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Commission-Free
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Trade stocks without paying commission fees
              </p>
            </div>
          </div>

          <div className="card glow-effect">
            <div className="card-body text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                AI-Powered Insights
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Get intelligent trading signals and market analysis
              </p>
            </div>
          </div>

          <div className="card glow-effect">
            <div className="card-body text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Social Trading
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Learn from and copy successful traders
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/register">
            <button className="btn-primary px-8 py-4 text-lg w-64">
              Get Started
            </button>
          </Link>
          <Link href="/login">
            <button className="btn-secondary px-8 py-4 text-lg w-64">
              Sign In
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">10K+</div>
            <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">$2.5B+</div>
            <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Trading Volume</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient">99.9%</div>
            <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
