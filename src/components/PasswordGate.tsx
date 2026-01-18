import { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordGateProps {
  onAccessGranted: (level: 'individual' | 'coach') => void;
}

export function PasswordGate({ onAccessGranted }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'blueprint2026') {
      onAccessGranted('individual');
    } else if (password === 'hsba2026pro') {
      onAccessGranted('coach');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-[#2d2d2d] p-4 rounded-full">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-[#2d2d2d] mb-2">
          Functional Blueprint™
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Interactive Demo - Private Access
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Access Code
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                error
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-[#2d2d2d]'
              }`}
              placeholder="Enter your password"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">
                Invalid password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#2d2d2d] text-white py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors"
          >
            Access Demo
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Subscribers only • Private demo access</p>
        </div>
      </div>
    </div>
  );
}
