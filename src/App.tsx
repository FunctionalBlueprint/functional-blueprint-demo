import { useState, useEffect } from 'react';
import { PasswordGate } from './components/PasswordGate';
import { IndividualDemo } from './components/IndividualDemo';
import { CoachDemo } from './components/CoachDemo';

export default function App() {
  const [accessLevel, setAccessLevel] = useState<'none' | 'individual' | 'coach'>('none');
  const [currentView, setCurrentView] = useState<'individual' | 'coach'>('individual');

  // Check URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'individual' || hash === 'coach') {
      setCurrentView(hash);
    }
  }, []);

  // Update URL when view changes
  useEffect(() => {
    window.location.hash = currentView;
  }, [currentView]);

  if (accessLevel === 'none') {
    return <PasswordGate onAccessGranted={setAccessLevel} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Toggle for Coach Access */}
      {accessLevel === 'coach' && (
        <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">View as:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView('individual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'individual'
                    ? 'bg-[#2d2d2d] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setCurrentView('coach')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'coach'
                    ? 'bg-[#2d2d2d] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Coach
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render appropriate demo */}
      {currentView === 'individual' ? <IndividualDemo /> : <CoachDemo />}
    </div>
  );
}
