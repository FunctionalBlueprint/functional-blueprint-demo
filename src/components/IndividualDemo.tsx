import { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronRight, Activity, Apple, Heart, Dumbbell } from 'lucide-react';

type Step = 'pain' | 'assessment' | 'solution';

export function IndividualDemo() {
  const [step, setStep] = useState<Step>('pain');

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <StepIndicator active={step === 'pain'} completed={step !== 'pain'} label="The Problem" />
        <div className="w-12 h-0.5 bg-gray-300" />
        <StepIndicator active={step === 'assessment'} completed={step === 'solution'} label="Assessment" />
        <div className="w-12 h-0.5 bg-gray-300" />
        <StepIndicator active={step === 'solution'} completed={false} label="Your Path" />
      </div>

      {/* Content */}
      {step === 'pain' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Meet Sarah</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sarah wants to get stronger and healthier. She's tried working with coaches before, but even with coaching, she feels lost and uncertain between sessions—unsure about what actions will actually move her toward her goals.
            </p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 max-w-3xl mx-auto mb-6">
            <h3 className="font-bold text-orange-900 mb-3 text-center">The Gap Between Sessions</h3>
            <div className="space-y-3 text-sm text-orange-800">
              <p>
                <strong>With a coach:</strong> Sarah sees her coach 2-3 times per week for training sessions. But what about the other days? 
                What should she eat? How should she move? Should she do extra cardio or prioritize recovery? She feels lost without constant guidance.
              </p>
              <p>
                <strong>On her own:</strong> Between sessions (or without a coach at all), Sarah is left to figure it out herself. 
                She Googles answers, scrolls Instagram for workout ideas, and cobbles together a plan—but has no confidence it's right for HER body and goals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <PainPoint
              icon={<Dumbbell className="w-6 h-6" />}
              title="What exercises should I do?"
              description="Generic app templates don't match her body or goals"
            />
            <PainPoint
              icon={<Apple className="w-6 h-6" />}
              title="How should I adjust my nutrition?"
              description="Conflicting advice online leaves her confused"
            />
            <PainPoint
              icon={<Activity className="w-6 h-6" />}
              title="How much cardio vs. strength?"
              description="No idea how to balance for her specific goals"
            />
            <PainPoint
              icon={<Heart className="w-6 h-6" />}
              title="What about recovery and mobility?"
              description="Knows it matters but doesn't know what to prioritize"
            />
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 max-w-3xl mx-auto mt-6">
            <h3 className="font-bold text-yellow-900 mb-3 text-center">The Problem With Other Platforms</h3>
            <div className="space-y-2 text-sm text-yellow-800">
              <div className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Generic algorithms:</strong> One-size-fits-all programs with light customization</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Simple questionnaires:</strong> "What's your goal? Lose weight? Here's a template."</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>No real individualization:</strong> They can't account for HER unique body, limitations, and lifestyle</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('assessment')}
              className="bg-[#2B2B2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2"
            >
              See The Solution
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 'assessment' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Professional 4-View Body Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sarah completes a comprehensive assessment that captures her unique starting point, goals, movement patterns, and lifestyle—the foundation for TRUE individualization.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border-2 border-gray-200 rounded-lg p-8">
            <div className="space-y-6">
              <AssessmentField label="Primary Goal" value="Build strength, lose 15 lbs" />
              <AssessmentField label="Movement Limitations" value="Limited shoulder mobility, knee stability concerns" />
              <AssessmentField label="Experience Level" value="6 months consistent training" />
              <AssessmentField label="Weekly Availability" value="4 days/week, 45-60 min sessions" />
              <AssessmentField label="Nutrition Preferences" value="Vegetarian, works long hours" />
              <AssessmentField label="Recovery Needs" value="High stress job, poor sleep quality" />
            </div>

            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900">Assessment Complete</p>
                  <p className="text-sm text-green-700 mt-1">
                    Your individualized program is ready—built by expert frameworks designed specifically for bodies like yours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-blue-900 mb-3 text-center">The Functional Blueprint Difference</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Professional-grade assessment:</strong> Not a 5-question quiz—a real body analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>Expert frameworks:</strong> Programs built using proven coaching methodologies (like HSBA - Holistic Strength Balanced Approach), not generic algorithms</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span><strong>TRUE individualization:</strong> Every exercise, nutrition guideline, and recovery protocol selected specifically for YOUR assessment</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('solution')}
              className="bg-[#2B2B2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2"
            >
              See Sarah's Personalized Plan
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 'solution' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Sarah's Personalized Dashboard</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No more guessing. Sarah knows exactly what to do each day to move from Point A to Point B—guided by expert frameworks that understand bodies like hers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Today's Focus */}
            <div className="bg-[#2B2B2B] text-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Today: Monday, Week 3</h3>
              <p className="text-gray-300">Lower Body Strength + Core Stability</p>
            </div>

            {/* Workout */}
            <DashboardCard
              title="Your Workout"
              icon={<Dumbbell className="w-5 h-5" />}
              status="Built for YOUR assessment"
            >
              <div className="space-y-2 text-sm">
                <ExerciseItem name="Goblet Squat (modified for knee stability)" sets="3x10" />
                <ExerciseItem name="Single-leg Deadlift (balance work)" sets="3x8 each" />
                <ExerciseItem name="Planks with shoulder taps (mobility progression)" sets="3x30s" />
                <p className="text-gray-600 mt-3 italic">
                  These exercises were selected by the expert framework based on your shoulder mobility limitations and knee stability concerns—not randomly generated.
                </p>
              </div>
            </DashboardCard>

            {/* Nutrition */}
            <DashboardCard
              title="Nutrition Focus"
              icon={<Apple className="w-5 h-5" />}
              status="Personalized for you"
            >
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Protein Target:</strong> 132g (adjusted 10% higher for vegetarian diet)
                </p>
                <p className="text-gray-700">
                  <strong>This Week's Focus:</strong> Meal prep Sunday - 3 high-protein vegetarian meals
                </p>
                <p className="text-gray-600 mt-2 italic">
                  The framework automatically adjusted your protein target based on vegetarian preferences and provides meal timing strategies for your busy work schedule.
                </p>
              </div>
            </DashboardCard>

            {/* Recovery */}
            <DashboardCard
              title="Recovery & Mobility"
              icon={<Heart className="w-5 h-5" />}
              status="Targeted for your needs"
            >
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <strong>Post-Workout:</strong> 5-min shoulder mobility routine
                </p>
                <p className="text-gray-700">
                  <strong>Off Days:</strong> 20-min restorative yoga (hip & shoulder focus)
                </p>
                <p className="text-gray-700">
                  <strong>Sleep Protocol:</strong> Wind-down routine for high-stress lifestyle
                </p>
                <p className="text-gray-600 mt-2 italic">
                  Recovery is prioritized based on your assessment: shoulder mobility work addresses your limitations, sleep protocol accounts for your high-stress job.
                </p>
              </div>
            </DashboardCard>

            {/* Progress Path */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mt-6">
              <h3 className="font-bold text-green-900 mb-3">Your Path Forward</h3>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Week 1-2: Build foundational movement patterns ✓</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-600" />
                  </div>
                  <span className="font-medium">Week 3-4: Increase load, add complexity ← You are here</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
                  <span className="text-gray-600">Week 5-8: Progressive overload, mobility gains</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
                  <span className="text-gray-600">Week 9-12: Strength milestones, body composition changes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-gray-700 font-medium mb-2">
                <strong>The Result:</strong> Sarah has agency and clarity
              </p>
              <p className="text-gray-600 text-sm">
                She knows exactly what to do each day. Her program adapts to HER body, HER goals, and HER life—powered by expert frameworks that understand the nuances other platforms miss.
                No more uncertainty. No more generic templates. Just a clear, individualized path forward.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StepIndicator({ active, completed, label }: { active: boolean; completed: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
          completed
            ? 'bg-green-500 text-white'
            : active
            ? 'bg-[#2B2B2B] text-white'
            : 'bg-gray-200 text-gray-500'
        }`}
      >
        {completed ? <CheckCircle className="w-5 h-5" /> : active ? '●' : '○'}
      </div>
      <span className="text-xs text-gray-600 whitespace-nowrap hidden sm:block">{label}</span>
    </div>
  );
}

function PainPoint({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-5 flex gap-3">
      <div className="text-red-600 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-red-900 mb-1">{title}</h3>
        <p className="text-sm text-red-700">{description}</p>
      </div>
    </div>
  );
}

function AssessmentField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="bg-gray-50 border border-gray-300 rounded px-3 py-2 text-gray-900">{value}</div>
    </div>
  );
}

function DashboardCard({
  title,
  icon,
  status,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  status: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-[#2B2B2B]">{icon}</div>
          <h3 className="font-bold text-gray-900">{title}</h3>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{status}</span>
      </div>
      {children}
    </div>
  );
}

function ExerciseItem({ name, sets }: { name: string; sets: string }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-900">{name}</span>
      <span className="text-gray-600 text-sm whitespace-nowrap ml-2">{sets}</span>
    </div>
  );
}
