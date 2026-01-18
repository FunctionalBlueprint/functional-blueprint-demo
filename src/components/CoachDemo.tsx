import { useState } from 'react';
import { CheckCircle2, ArrowRight, Users, Zap, DollarSign, Clock, Target, TrendingUp } from 'lucide-react';

export function CoachDemo() {
  const [currentStep, setCurrentStep] = useState<'problem' | 'solution' | 'results'>('problem');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2d2d2d] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Functional Blueprint™ for Coaches</h1>
          <p className="text-gray-300 mt-1">Scale Your 1:1 Business with Professional Systems</p>
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
                The Challenge of Scaling 1:1 Fitness Coaching
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You're maxed out on client hours but can't systematize your expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Time-for-Money Trap',
                  description: 'Every new client requires the same time-intensive assessment and program design process',
                  icon: Clock
                },
                {
                  title: 'Inconsistent Systems',
                  description: 'Without structured frameworks, quality varies and onboarding takes too long',
                  icon: Target
                },
                {
                  title: 'Revenue Ceiling',
                  description: 'You can only serve so many clients at premium rates before burning out',
                  icon: DollarSign
                }
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <item.icon className="w-12 h-12 text-[#2d2d2d] mb-4" />
                  <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-red-900 mb-2">Sound Familiar?</h4>
              <ul className="space-y-2 text-red-800">
                <li>• Spending 2-3 hours on each client intake and assessment</li>
                <li>• Recreating programs from scratch for every new client</li>
                <li>• No time to market because you're always "in the weeds" with clients</li>
                <li>• Working 50+ hours/week but still hitting income plateaus</li>
              </ul>
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
                Systematize Your Expertise with HSBA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turn your assessment process into a repeatable, professional system
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">The HSBA Framework for Coaches</h3>
              <p className="text-lg mb-6">Holistic Strength Balanced Approach - Your Professional Toolkit</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Standardized 4-View Assessment',
                    description: 'Professional body analysis protocol (Front, Back, Left, Right) you can replicate with every client'
                  },
                  {
                    title: 'Client Intake Templates',
                    description: 'Pre-built forms and questionnaires that gather everything you need in one go'
                  },
                  {
                    title: 'Program Design Framework',
                    description: 'Modular program building blocks that adapt to each client while maintaining efficiency'
                  },
                  {
                    title: 'Progress Tracking System',
                    description: 'Repeatable re-assessment protocols that demonstrate value and retain clients'
                  }
                ].map((feature) => (
                  <div key={feature.title} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-[#2d2d2d]">
                <Zap className="w-12 h-12 text-[#2d2d2d] mb-4" />
                <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">Faster Onboarding</h4>
                <p className="text-gray-600 mb-4">Cut client intake time from 2-3 hours to under 45 minutes</p>
                <ul className="space-y-2">
                  {[
                    'Pre-session intake forms',
                    'Standardized photo protocols',
                    'Automated assessment checklists',
                    'Template-based program starts'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2d2d2d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[#2d2d2d]">
                <Users className="w-12 h-12 text-[#2d2d2d] mb-4" />
                <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">Scale Without Sacrificing Quality</h4>
                <p className="text-gray-600 mb-4">Serve more clients while maintaining your professional standards</p>
                <ul className="space-y-2">
                  {[
                    'Consistent assessment quality',
                    'Repeatable program design',
                    'Professional client experience',
                    'Time for business growth'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2d2d2d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h4 className="font-bold text-green-900 mb-2">The Business Impact:</h4>
              <p className="text-green-800">
                With systematic onboarding and assessment, you can serve 20-30% more clients in the same time while maintaining premium pricing and delivering better results.
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <button
                onClick={() => setCurrentStep('results')}
                className="bg-[#2d2d2d] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2"
              >
                See Business Results
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {currentStep === 'results' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2d2d2d] mb-4">
                Transform Your Coaching Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What systematization means for your revenue and lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { metric: '20-30%', label: 'More Clients', description: 'Same working hours' },
                { metric: '60%', label: 'Faster Intake', description: '45min vs 2-3hrs' },
                { metric: '100%', label: 'Consistent', description: 'Professional quality' }
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
                Real Business Outcomes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Increased Revenue Capacity',
                    description: 'Serve 5-8 more clients per month without extending your hours or burning out',
                    icon: TrendingUp
                  },
                  {
                    title: 'Premium Positioning',
                    description: 'Professional assessment system justifies higher rates and attracts quality clients',
                    icon: DollarSign
                  },
                  {
                    title: 'Better Client Results',
                    description: 'Consistent framework ensures every client gets your best work, improving retention',
                    icon: Target
                  },
                  {
                    title: 'Time for Marketing',
                    description: 'Efficient systems free up 10+ hours/week to grow your business',
                    icon: Clock
                  }
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <benefit.icon className="w-8 h-8 text-[#2d2d2d] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2d2d2d] mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-[#2d2d2d] mb-4">Example ROI Scenario</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-red-900 mb-3">❌ Before HSBA System:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 12 clients/month @ $300 = $3,600</li>
                    <li>• 50 hours/week working</li>
                    <li>• 3 hours per client intake</li>
                    <li>• Stressed and maxed out</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-3">✅ After HSBA System:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 18 clients/month @ $350 = $6,300</li>
                    <li>• 50 hours/week working</li>
                    <li>• 45 min per client intake</li>
                    <li>• Time for marketing & growth</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-300 text-center">
                <p className="text-xl font-bold text-[#2d2d2d]">
                  Additional Revenue: <span className="text-green-700">+$2,700/month</span> = <span className="text-green-700">$32,400/year</span>
                </p>
              </div>
            </div>

            <div className="bg-[#2d2d2d] text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Coaching Business?</h3>
              <p className="text-lg mb-6 text-gray-300">
                Get the complete HSBA framework and start systematizing your expertise today
              </p>
              <button className="bg-white text-[#2d2d2d] px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors">
                Get Coach Access
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
