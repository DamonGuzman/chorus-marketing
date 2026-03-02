/* eslint-disable @next/next/no-img-element */

function CheckCircleGreen() {
  return (
    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-start gap-5">
      <img src="/images/figma/Arrow.svg" alt="" className="w-7 h-7 shrink-0" />
      <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
        {children}
      </p>
    </div>
  );
}

function SetupChecklistCard() {
  const steps = [
    { done: true, text: "Connecting monitoring agents" },
    { done: true, text: "Configuring alert thresholds" },
    { done: true, text: "Setting up auto-remediation playbooks" },
    { done: true, text: "Initializing infrastructure dashboard" },
    { done: false, text: "Scanning cloud resources" },
    { done: false, text: "Mapping service dependencies" },
    { done: false, text: "Enabling anomaly detection models" },
  ];

  return (
    <div className="w-full max-w-[573px] h-[585px] px-7 pt-12 pb-2.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] inline-flex flex-col items-center gap-9">
      <div className="w-[499px] max-w-full flex flex-col gap-6">
        <div className="inline-flex items-center gap-6">
          <img src="/images/figma/Group 20963 copy.svg" alt="" className="w-7 h-7 shrink-0" />
          <span className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
            Setting up monitoring infrastructure...
          </span>
        </div>
        <div className="flex flex-col gap-3.5">
          {steps.map((item, i) => (
            <div
              key={i}
              className="self-stretch px-3.5 py-2.5 bg-white/5 rounded-2xl outline-[1.20px] outline-offset-[-1.20px] outline-white/10 inline-flex items-center gap-3"
            >
              {item.done ? (
                <div className="w-5 h-5 bg-green rounded-[43px] flex items-center justify-center shrink-0 overflow-hidden">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-warning/60 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning/40" />
                </div>
              )}
              <span className={`text-[#cbcacc] text-base ${item.done ? "font-semibold" : "font-bold"} font-['Urbanist'] leading-7 line-clamp-3`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutreachCard() {
  return (
    <div className="w-full lg:w-[581px] lg:shrink-0">
      <img
        src="/images/figma/Group 1707484054.svg"
        alt="Operations outreach dashboard"
        className="w-full h-auto"
      />
    </div>
  );
}

function ApiConnectionCard() {
  const permissions = [
    "Read system metrics",
    "Execute runbooks",
    "Send alert notifications",
    "Access log streams",
    "Manage incidents",
    "Deploy patches",
  ];

  return (
    <div className="w-full max-w-[573px] px-5 md:px-7 pt-10 md:pt-12 pb-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] border border-white/30 backdrop-blur-[30px] flex flex-col items-center gap-7 md:gap-9">
      <div className="w-full max-w-[503px] flex flex-col gap-5">
        <div className="flex items-start gap-5 justify-between flex-wrap">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[radial-gradient(ellipse_53%_86%_at_39%_48%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_100%)] rounded-xl border border-white/10 flex items-center justify-center">
              <img src="/images/figma/image 12 copy.svg" alt="PagerDuty" className="w-9 h-9" />
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-white text-lg font-bold font-['Urbanist'] leading-7">Connect to PagerDuty API</span>
              <span className="text-gray-100 text-sm font-light font-['Urbanist'] leading-5">Incident Agent</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-medium font-['Urbanist'] leading-5">
            Route critical alerts to on-call responders
          </span>
          <div className="px-3 py-1 bg-red-600/5 rounded-[50px] border border-orange-400 flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
            <span className="text-gray-100 text-[10px] font-bold font-['Urbanist']">Pending</span>
          </div>
        </div>
        <div className="p-5 bg-white/5 rounded-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">API Endpoint :</span>
            <div className="h-8 px-2.5 bg-white/5 rounded-[10px] inline-flex items-center w-fit">
              <span className="text-gray-100 text-xs font-semibold font-['Urbanist'] leading-6">
                https://api.pagerduty.com/incidents
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">Permissions Requested :</span>
            <div className="flex flex-col gap-3">
              {permissions.map((perm, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <img src="/images/figma/tick-circle.svg" alt="" className="w-4 h-4 shrink-0" />
                  <span className="text-white/75 text-sm font-medium font-['Urbanist'] leading-5">{perm}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">Data Access :</span>
            <div className="h-8 pl-2 bg-white/5 rounded-[10px] flex items-center">
              <span className="text-gray-100 text-xs font-semibold font-['Urbanist'] leading-6">
                Service health, Incident logs, Escalation policies
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OperationsHowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-[100px] py-12 md:py-[75px] bg-black">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[59px] items-start">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="relative h-9 px-3 py-1 rounded-[100px] overflow-hidden inline-flex justify-center items-center">
            <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
            <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
            <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
            <span className="relative z-10 text-white text-base font-bold font-['Urbanist'] leading-6">How it Works</span>
          </div>
          {/* Title + subtitle */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-white text-5xl font-bold font-['Urbanist'] leading-[78px]">
              How Work Happens
            </h2>
            <p className="text-[#7d7c83] text-3xl font-medium font-['Urbanist'] leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Step 1: Detect Anomaly */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="/images/figma/scan.svg"
                  alt=""
                  className="relative w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <h3 className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]">
                  1. Detect Anomaly
                </h3>
                <BulletPoint>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
            <div className="w-full lg:w-[581px] lg:shrink-0">
              <img
                src="/images/figma/Group 1707484053.svg"
                alt="Operations dashboard with agent tasks and phases"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 2: Root Cause Analysis */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[86px]">
            {/* Left: Dashboard image */}
            <div className="w-full lg:w-[573px] lg:shrink-0">
              <img
                src="/images/figma/Group root cause.svg"
                alt="Output gallery showing root cause analysis dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Right: Text content */}
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="/images/figma/diagram.svg"
                  alt=""
                  className="relative w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <h3 className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]">
                  2. Root Cause Analysis
                </h3>
                <BulletPoint>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
          </div>

          {/* Step 3: Execute Fix */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="/images/figma/router-01.svg"
                  alt=""
                  className="relative w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <h3 className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]">
                  3. Execute Fix
                </h3>
                <BulletPoint>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
            <div className="w-full lg:w-[581px] lg:shrink-0">
              <img
                src="/images/figma/Group execute_fix.svg"
                alt="Execute fix dashboard with API connections and task management"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 4: Escalate */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[86px]">
            {/* Left: Dashboard image */}
            <div className="w-full lg:w-[573px] lg:shrink-0">
              <img
                src="/images/figma/Group escalte.svg"
                alt="Escalation dashboard with agent tasks and approval workflows"
                className="w-full h-auto"
              />
            </div>
            {/* Right: Text content */}
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="/images/figma/hierarchy-3.svg"
                  alt=""
                  className="relative w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <h3 className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]">
                  4. Escalate
                </h3>
                <BulletPoint>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
