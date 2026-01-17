import { useState, useEffect } from 'react';
import { IndividualDemo } from './components/IndividualDemo';
import { CoachDemo } from './components/CoachDemo';
import { User, Users } from 'lucide-react';

export default function App() {
  // Check URL hash for locked view (works better with Figma hosting)
  const [urlHash, setUrlHash] = useState(window.location.hash.slice(1)); // Remove the #
  
  useEffect(() => {
    const handleHashChange = () => {
      setUrlHash(window.location.hash.slice(1));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // If hash is 'individual' or 'coach', lock to that view and hide toggle
  const isIndividualOnly = urlHash === 'individual';
  const isCoachOnly = urlHash === 'coach';
  
  const [perspective, setPerspective] = useState<'individual' | 'coach'>(
    isCoachOnly ? 'coach' : 'individual'
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2B2B2B] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Functional Blueprint™</h1>
          <p className="text-gray-300">Individualized fitness programs that scale</p>
        </div>
      </header>

      {/* Perspective Toggle - Hidden if view is locked */}
      {!isIndividualOnly && !isCoachOnly && (
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <p className="text-sm text-gray-600 mb-3">See how Functional Blueprint works for:</p>
            <div className="flex gap-3">
              <button
                onClick={() => setPerspective('individual')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  perspective === 'individual'
                    ? 'bg-[#2B2B2B] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                <User className="w-5 h-5" />
                Individuals
              </button>
              <button
                onClick={() => setPerspective('coach')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  perspective === 'coach'
                    ? 'bg-[#2B2B2B] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                }`}
              >
                <Users className="w-5 h-5" />
                Coaches
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {perspective === 'individual' ? <IndividualDemo /> : <CoachDemo />}
      </main>

      {/* Footer CTA */}
      <div className="bg-[#2B2B2B] text-white py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Founding Members</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get early access to Functional Blueprint and help shape the future of individualized fitness coaching.
            Launching April 2026.
          </p>
          <button className="bg-white text-[#2B2B2B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
}