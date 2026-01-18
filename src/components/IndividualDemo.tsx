import { useState } from 'react';
import { CheckCircle2, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';

export function IndividualDemo() {
  const [currentStep, setCurrentStep] = useState<'problem' | 'solution' | 'results'>('problem');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2d2d2d] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Functional Blueprint™</h1>
          <p className="text-gray-300 mt-1">Your Personal Fitness Journey</p>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            {['problem', 'solution', 'results'].map((step, index) => (
              <div key={step} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === step
                      ? 'bg-[#2d2d2d] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="capitalize">{step}</span>
                </button>
                {index < 2 && <ArrowRight className="mx-2 text-gray-400" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {currentStep === 'problem' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
                The Problem with Generic Fitness Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cookie-cutter workouts ignore your unique body, goals, and limitations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'One-Size-Fits-All',
                  description: 'Generic programs don\'t account for your specific body type, injuries, or movement patterns',
                  icon: Users
                },
                {
                  title: 'No Real Assessment',
                  description: 'Most programs skip the crucial step of understanding where you\'re starting from',
                  icon: Target
                },
                {
                  title: 'Poor Results',
                  description: 'Without individualization, progress stalls and injuries become more likely',
                  icon: TrendingUp
                }
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <item.icon className="w-12 h-12 text-[#2d2d2d] mb-4" />
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => setCurrentStep('solution')}
                className="bg-[#2d2d2d] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2"
              >
                See The Solution
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 'solution' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
                The Functional Blueprint™ System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional 4-view body analysis creates your individualized program
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">HSBA Framework</h3>
              <p className="text-lg mb-6">Holistic Strength Balanced Approach</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '4-View Body Analysis (Front, Back, Left, Right)',
                  'Movement Pattern Assessment',
                  'Individualized Program Design',
                  'Progressive Tracking & Adjustments'
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-[#2d2d2d]">
                <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">Client Intake</h4>
                <p className="text-gray-600 mb-4">Comprehensive assessment of your goals, history, and current state</p>
                <ul className="space-y-2">
                  {['Health history', 'Current fitness level', 'Goals & timeline', 'Injury considerations'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-[#2d2d2d] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[#2d2d2d]">
                <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">4-View Analysis</h4>
                <p className="text-gray-600 mb-4">Professional body composition and posture assessment</p>
                <ul className="space-y-2">
                  {['Front view analysis', 'Back view analysis', 'Left side profile', 'Right side profile'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-[#2d2d2d] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => setCurrentStep('results')}
                className="bg-[#2d2d2d] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2"
              >
                See Expected Results
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 'results' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
                Your Transformation Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What you can expect with a truly individualized approach
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { metric: '94%', label: 'Client Satisfaction', description: 'See measurable progress' },
                { metric: '3-6mo', label: 'Visible Results', description: 'Sustainable transformation' },
                { metric: '100%', label: 'Personalized', description: 'Built for YOUR body' }
              ].map((stat) => (
                <div key={stat.label} className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-xl p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                  <div className="text-lg font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-300">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6 text-center">
                What Makes This Different
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Scientific Assessment',
                    description: 'Professional 4-view body analysis identifies your unique needs and imbalances'
                  },
                  {
                    title: 'HSBA Framework',
                    description: 'Holistic Strength Balanced Approach ensures complete, sustainable development'
                  },
                  {
                    title: 'Injury Prevention',
                    description: 'Programs designed around your body\'s limitations and movement patterns'
                  },
                  {
                    title: 'Progressive Adaptation',
                    description: 'Regular assessments and adjustments keep you moving forward safely'
                  }
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2d2d2d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2d2d2d] mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2d2d2d] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Blueprint?</h3>
              <p className="text-lg mb-6 text-gray-300">
                Join our community and get access to professional fitness planning
              </p>
              <button className="bg-white text-[#2d2d2d] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
