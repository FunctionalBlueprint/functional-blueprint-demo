import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Users, FileText, Zap, CheckCircle, ChevronRight } from 'lucide-react';

type Step = 'pain' | 'framework' | 'scale' | 'results';

export function CoachDemo() {
  const [step, setStep] = useState<Step>('pain');

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto">
        <StepIndicator active={step === 'pain'} completed={step !== 'pain'} label="Challenge" />
        <div className="w-8 h-0.5 bg-gray-300 flex-shrink-0" />
        <StepIndicator active={step === 'framework'} completed={step === 'scale' || step === 'results'} label="Framework" />
        <div className="w-8 h-0.5 bg-gray-300 flex-shrink-0" />
        <StepIndicator active={step === 'scale'} completed={step === 'results'} label="Scale" />
        <div className="w-8 h-0.5 bg-gray-300 flex-shrink-0" />
        <StepIndicator active={step === 'results'} completed={false} label="Results" />
      </div>

      {/* Content */}
      {step === 'pain' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Meet Coach Mike</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mike is an excellent coach with 12 in-person clients ($175/session) and 8 online clients ($199/mo). 
              He's making decent money, but he's completely burnt out from managing so many individual needs and moving parts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h3 className="font-bold text-red-900 mb-6 text-center text-lg">The Burnout Trap</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-5 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  Drowning in Complexity
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Tracking 20 different clients' individual needs, limitations, and progress manually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Constantly context-switching: "Wait, does Sarah have knee issues or is that Maria?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>15+ hours/week just on programming and admin work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>The mental load is exhausting—even thinking about adding more clients feels overwhelming</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-5 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  Can't Scale Quality
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>In-person slots are maxed—can't physically add more clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Has 8 online clients but charging only $199/mo because he's overwhelmed keeping programs individualized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Could add more online clients but terrified of the workload—can barely manage the ones he has</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>His individuality is his edge, but it doesn't scale—and he's exhausted</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-red-300 rounded-lg p-5 mt-4">
              <h4 className="font-semibold text-red-900 mb-3 text-center">The Real Pain</h4>
              <p className="text-sm text-red-800 text-center italic">
                "I want to make more money, but I need my time and energy back to actually enjoy it. 
                I've given so much of myself that the thought of managing MORE people feels bothersome, not exciting. 
                I'm stuck."
              </p>
            </div>

            <div className="text-center text-red-800 font-medium text-lg mt-6">
              The perplexity of managing individual needs prevents him from scaling—he's trapped between staying small or burning out completely
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('framework')}
              className="bg-[#2B2B2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2"
            >
              See How Functional Blueprint Solves This
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 'framework' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Codify Your Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mike uses the plain-language framework workbook to translate his coaching methodology into rules—or uses the proven HSBA (Holistic Strength Balanced Approach) framework. The platform becomes his assistant.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-6 h-6 text-[#2B2B2B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">The Framework Workbook</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Mike writes his training rules in plain language, just like he would explain to an assistant coach. 
                    Or, he can use the ready-made HSBA framework to start immediately.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 font-mono text-sm space-y-3">
                <div className="border-b border-gray-300 pb-3">
                  <div className="text-gray-500 mb-1">// Rule: Knee stability concerns</div>
                  <div className="text-gray-900">
                    "If client has knee stability issues, start with bilateral movements (goblet squats) before progressing to single-leg work. 
                    Add stability exercises 2x/week."
                  </div>
                </div>

                <div className="border-b border-gray-300 pb-3">
                  <div className="text-gray-500 mb-1">// Rule: Shoulder mobility limitations</div>
                  <div className="text-gray-900">
                    "Avoid overhead pressing until 90° shoulder flexion achieved. Substitute with landmine press. 
                    Include 5-min shoulder mobility post-workout."
                  </div>
                </div>

                <div>
                  <div className="text-gray-500 mb-1">// Rule: Vegetarian protein targets</div>
                  <div className="text-gray-900">
                    "Increase protein target by 10% for vegetarians to account for incomplete amino acid profiles. 
                    Recommend high-quality plant protein sources."
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-900">Automatically Applied</p>
                    <p className="text-sm text-blue-700 mt-1">
                      These rules are now applied to every relevant client automatically. Mike's expertise scales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Two Framework Options
              </h3>
              <div className="space-y-3 text-sm text-purple-800">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Build your own:</strong> Codify your unique methodology in plain language—no coding required</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Use HSBA:</strong> Start with a proven framework immediately, customize later if needed</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-3">What This Means</h3>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mike builds his methodology once, it applies to unlimited online clients</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Every program is still individualized—based on each client's assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No code required—just write rules in plain language</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>The platform becomes an extension of his coaching brain</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('scale')}
              className="bg-[#2B2B2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2"
            >
              See Mike Scale His Business
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 'scale' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Scale Without Compromise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With his framework codified, Mike runs his entire coaching business through Functional Blueprint.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4 text-center">Mike's Coach Dashboard</h3>
              
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <StatCard icon={<Users className="w-5 h-5" />} label="Active Clients" value="52" color="blue" />
                <StatCard icon={<Clock className="w-5 h-5" />} label="Weekly Hours" value="35" color="green" />
                <StatCard icon={<DollarSign className="w-5 h-5" />} label="Monthly Revenue" value="$41,600" color="purple" />
                <StatCard icon={<TrendingUp className="w-5 h-5" />} label="Client Retention" value="94%" color="orange" />
              </div>

              {/* Client List Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Today's Client Overview</h4>
                <div className="space-y-2">
                  <ClientRow name="Sarah M." status="Week 3 - Lower Body" progress={65} />
                  <ClientRow name="James K." status="Week 1 - Foundation" progress={25} />
                  <ClientRow name="Maria L." status="Week 8 - Progressive Overload" progress={95} />
                  <ClientRow name="David R." status="Week 5 - Mobility Focus" progress={55} />
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">+ 48 more clients, all with individualized programs</p>
              </div>
            </div>

            {/* Time Savings Breakdown */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-5">
                <h4 className="font-bold text-red-900 mb-3 text-center">Before Functional Blueprint</h4>
                <div className="space-y-2 text-sm">
                  <TimeItem label="Programming (15 clients)" hours="15 hrs/week" />
                  <TimeItem label="Progress tracking" hours="10 hrs/week" />
                  <TimeItem label="Client communication" hours="8 hrs/week" />
                  <TimeItem label="Admin work" hours="5 hrs/week" />
                  <div className="border-t-2 border-red-300 pt-2 mt-2">
                    <TimeItem label="Total" hours="38 hrs/week" bold />
                    <p className="text-xs text-red-700 mt-2">For only 15 clients</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
                <h4 className="font-bold text-green-900 mb-3 text-center">With Functional Blueprint</h4>
                <div className="space-y-2 text-sm">
                  <TimeItem label="Programming (52 clients)" hours="8 hrs/week" saved />
                  <TimeItem label="Progress tracking" hours="3 hrs/week" saved />
                  <TimeItem label="Client communication" hours="12 hrs/week" saved />
                  <TimeItem label="Admin work" hours="2 hrs/week" saved />
                  <div className="border-t-2 border-green-300 pt-2 mt-2">
                    <TimeItem label="Total" hours="25 hrs/week" bold saved />
                    <p className="text-xs text-green-700 mt-2">For 52 clients (3.5x more)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setStep('results')}
              className="bg-[#2B2B2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors inline-flex items-center gap-2"
            >
              See The Bottom Line
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {step === 'results' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Save More, Make More</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mike maintains his premium in-person rates while adding high-ticket online programs—truly individualized monthly subscriptions at scale.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Revenue Breakdown */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-center">Mike's New Revenue Model</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm">In-Person Clients</h4>
                  <div className="text-2xl font-bold text-blue-900 mb-1">15 clients</div>
                  <div className="text-sm text-blue-700">@ $175/session × 4 sessions/mo</div>
                  <div className="text-lg font-bold text-blue-900 mt-2">$10,500/mo</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2 text-sm">Online Programs</h4>
                  <div className="text-2xl font-bold text-purple-900 mb-1">45 clients</div>
                  <div className="text-sm text-purple-700">@ $399/mo individualized program</div>
                  <div className="text-lg font-bold text-purple-900 mt-2">$17,955/mo</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-gray-200 text-center">
                <div className="text-sm text-gray-600 mb-1">Total Monthly Revenue</div>
                <div className="text-3xl font-bold text-gray-900">$28,455</div>
                <div className="text-sm text-green-600 mt-1">+137% from before ($12,000)</div>
              </div>
            </div>

            {/* Revenue Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-center">Before</h3>
                <div className="space-y-3 text-sm">
                  <ResultRow label="In-person clients" value="12" />
                  <ResultRow label="Online clients" value="8" />
                  <ResultRow label="Rate (in-person)" value="$175/session" />
                  <ResultRow label="Online rate" value="$199/mo" />
                  <ResultRow label="Monthly Revenue" value="$10,000" highlight />
                  <ResultRow label="Weekly Hours" value="42" />
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600 italic">Overwhelmed, can't take on more, charging less because he's drowning</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4 text-center">With Functional Blueprint</h3>
                <div className="space-y-3 text-sm">
                  <ResultRow label="In-person clients" value="15" positive />
                  <ResultRow label="Online clients" value="45" positive />
                  <ResultRow label="Rate (in-person)" value="$175/session" />
                  <ResultRow label="Online rate" value="$399/mo" positive />
                  <ResultRow label="Monthly Revenue" value="$28,455" highlight positive />
                  <ResultRow label="Weekly Hours" value="28" positive />
                  <div className="mt-3 pt-3 border-t border-green-300">
                    <p className="text-xs text-green-700 italic">More clients, higher rates, fewer hours—complexity is managed by the platform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="bg-[#2B2B2B] text-white rounded-lg p-8">
              <h3 className="font-bold text-xl mb-6 text-center">The Outcome</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <OutcomeCard
                  value="+137%"
                  label="Revenue Increase"
                  description="From $10K to $28.5K/month"
                />
                <OutcomeCard
                  value="37"
                  label="More Clients"
                  description="Without the burnout"
                />
                <OutcomeCard
                  value="14 hrs"
                  label="Weekly Time Saved"
                  description="To enjoy the income"
                />
              </div>
              <div className="text-center pt-6 border-t border-gray-600">
                <p className="text-gray-300 text-sm mb-2">Most importantly:</p>
                <p className="text-lg font-medium mb-4">
                  Mike got his time and energy back. The platform manages the complexity, so he can scale without burning out.
                </p>
                <p className="text-sm text-gray-400">
                  Every client—in-person AND online—receives individualized programming. His online programs aren't templates, so he can charge $399/mo instead of $199/mo. Quality maintained, revenue doubled, life restored.
                </p>
              </div>
            </div>

            {/* Value Props */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-900 mb-4 text-center">Why Functional Blueprint Works</h3>
              <div className="space-y-3 text-sm text-blue-800">
                <ValueProp
                  icon={<CheckCircle className="w-5 h-5" />}
                  text="Keep premium in-person clients while scaling online programs"
                />
                <ValueProp
                  icon={<CheckCircle className="w-5 h-5" />}
                  text="Online programs are truly individualized—not templates—so you can charge high-ticket rates ($299-$499/mo)"
                />
                <ValueProp
                  icon={<CheckCircle className="w-5 h-5" />}
                  text="Codified expertise scales to unlimited clients without dropping quality"
                />
                <ValueProp
                  icon={<CheckCircle className="w-5 h-5" />}
                  text="Built for professionals who refuse to compromise standards"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StepIndicator({ active, completed, label }: { active: boolean; completed: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[60px]">
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
      <span className="text-xs text-gray-600 text-center hidden sm:block">{label}</span>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  return (
    <div className={`${colorClasses[color as keyof typeof colorClasses]} border rounded-lg p-3`}>
      <div className="flex items-center gap-2 mb-1">{icon}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}

function ClientRow({ name, status, progress }: { name: string; status: string; progress: number }) {
  return (
    <div className="bg-white rounded border border-gray-200 p-3">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm text-gray-900">{name}</span>
        <span className="text-xs text-gray-500">{progress}%</span>
      </div>
      <div className="text-xs text-gray-600 mb-2">{status}</div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div className="bg-[#2B2B2B] h-1.5 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function TimeItem({ label, hours, bold, saved }: { label: string; hours: string; bold?: boolean; saved?: boolean }) {
  return (
    <div className={`flex justify-between items-center ${bold ? 'font-bold' : ''}`}>
      <span className={saved ? 'text-green-800' : 'text-red-800'}>{label}</span>
      <span className={saved ? 'text-green-900' : 'text-red-900'}>{hours}</span>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight,
  positive,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  positive?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center ${
        highlight ? 'font-bold text-base border-t-2 pt-3 mt-2' : ''
      } ${highlight && positive ? 'border-green-400' : highlight ? 'border-gray-300' : ''}`}
    >
      <span className={positive ? 'text-green-800' : 'text-gray-700'}>{label}</span>
      <span className={positive ? 'text-green-900 font-semibold' : 'text-gray-900'}>{value}</span>
    </div>
  );
}

function OutcomeCard({ value, label, description }: { value: string; label: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm font-semibold mb-1">{label}</div>
      <div className="text-xs text-gray-400">{description}</div>
    </div>
  );
}

function ValueProp({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-blue-600 flex-shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
}