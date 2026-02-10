/* ─────────────────────────────────────────────────────────
   Features Card Section
   "The Difference That Changes Everything"
   Stacked cards with "Full Business Context" content
   Faithful to Figma code structure
   ───────────────────────────────────────────────────────── */

/* ── Checkmark icon ── */
function CheckMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M5 13L9 17L19 7" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Integration dark bubble ── */
function AppBubble({ size = 80 }: { size?: number }) {
  return (
    <div
      className="rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: "#202020",
        boxShadow: "0px 0px 5.16px rgba(255,255,255,0.55) inset, 0px 3.98px 24.85px rgba(0,0,0,0.25)",
      }}
    />
  );
}

/* ── Main Section ── */
export function FeaturesCardSection() {
  return (
    <section className="w-full bg-black px-6 md:px-[100px] py-[75px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[10px]">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-[30px] w-full self-stretch">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center gap-2">
            <span className="text-white text-[16px] font-bold leading-[24px] text-center">Features</span>
          </div>
          <div className="flex flex-col items-center gap-[32px] w-full self-stretch">
            <h2 className="text-white text-[36px] md:text-[50px] font-bold leading-[1.2] md:leading-[78px] text-center">
              The Difference That Changes Everything
            </h2>
            <p className="text-gray-300 text-[20px] md:text-[26px] font-medium leading-[36px] text-center">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* ── Stacked Cards ── */}
        {/* Back card — 1013px wide */}
        <div
          className="w-full max-w-[1013px] rounded-[37px] border border-white/20"
          style={{
            paddingTop: 56, paddingBottom: 56, paddingLeft: 52, paddingRight: 47,
            background: "black", backdropFilter: "blur(24px)",
            height: 60,
          }}
        />

        {/* Middle card — 1115px wide, overlapping */}
        <div
          className="w-full max-w-[1115px] -mt-[30px] rounded-[37px] border border-white/20"
          style={{
            paddingTop: 56, paddingBottom: 56, paddingLeft: 52, paddingRight: 47,
            background: "black", backdropFilter: "blur(24px)",
            height: 60,
          }}
        />

        {/* Front card — 1188px wide, main content */}
        <div
          className="w-full max-w-[1188px] -mt-[30px] rounded-[40px] py-[60px] px-[50px] md:px-[56px]"
          style={{
            background: "black",
            outline: "1px solid #434343",
            outlineOffset: "-1px",
            backdropFilter: "blur(25.53px)",
          }}
        >
          <div className="flex items-center gap-[22px]">
            {/* ── Left side content ── */}
            <div className="flex flex-col gap-[40px] shrink-0">
              {/* Gradient circle icon */}
              <div
                className="w-[85px] h-[85px] rounded-full"
                style={{
                  background: "linear-gradient(138deg, rgba(61,61,61,0.29) 0%, rgba(255,229,229,0) 100%)",
                  boxShadow: "0px 3.98px 24.85px rgba(0,0,0,0.25)",
                  border: "1.3px solid rgba(255,255,255,0.10)",
                }}
              />

              {/* Number */}
              <span className="text-white text-[30px] font-normal leading-[103px]">3</span>

              {/* Text content */}
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-white text-[26px] font-bold">Full Business Context</h3>

                <div className="flex flex-col gap-[28px]">
                  {/* Description */}
                  <div className="flex flex-col gap-[27px]">
                    <p className="text-gray-100 text-[14px] font-medium leading-[22px] max-w-[433px]">
                      Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:
                    </p>

                    {/* Divider */}
                    <div className="w-[433px] max-w-full h-0 border-t border-white/19" />

                    {/* Checklist items */}
                    <div className="flex flex-col gap-[17px]">
                      <div className="flex flex-wrap gap-x-[28px] gap-y-[17px]">
                        <div className="flex items-end gap-[16px]">
                          <CheckMark />
                          <span className="text-gray-300 text-[16px] font-medium">Your customers and pipeline</span>
                        </div>
                        <div className="flex items-end gap-[10px]">
                          <CheckMark />
                          <span className="text-gray-300 text-[16px] font-medium">Your processes and SOPs</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-[16px]">
                        <CheckMark />
                        <span className="text-gray-300 text-[16px] font-medium">Your messaging and brand voice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right side — orbital decoration ── */}
            <div className="relative flex-1 h-[360px] hidden md:block">
              {/* Tilted oval ring 1 */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
                style={{ width: 637, height: 67, transform: "translate(-50%, -50%) rotate(21deg)" }}
              />
              {/* Tilted oval ring 2 */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                style={{ width: 637, height: 67, transform: "translate(-50%, -60%) rotate(21deg)" }}
              />

              {/* Integration app bubbles positioned on the ring */}
              <div className="absolute" style={{ top: "5%", left: "5%" }}>
                <AppBubble size={73} />
              </div>
              <div className="absolute" style={{ top: "15%", left: "30%" }}>
                <AppBubble size={81} />
              </div>
              <div className="absolute" style={{ top: "10%", right: "15%" }}>
                <AppBubble size={80} />
              </div>
              <div className="absolute" style={{ top: "35%", right: "5%" }}>
                <AppBubble size={80} />
              </div>
              <div className="absolute" style={{ bottom: "15%", left: "10%" }}>
                <AppBubble size={85} />
              </div>

              {/* HubSpot orange circle inside a bubble */}
              <div className="absolute" style={{ bottom: "20%", left: "35%" }}>
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: 80,
                    height: 80,
                    background: "#202020",
                    boxShadow: "0px 0px 5.16px rgba(255,255,255,0.55) inset, 0px 3.98px 24.85px rgba(0,0,0,0.25)",
                  }}
                >
                  <div className="w-[57px] h-[57px] rounded-full bg-[#FF5C35]" />
                </div>
              </div>

              {/* White glowing dots */}
              <div
                className="absolute w-[11px] h-[11px] rounded-full bg-white"
                style={{ top: "42%", left: "22%", filter: "blur(2px)", boxShadow: "4px 4px 4px rgba(0,0,0,0.5)" }}
              />
              <div
                className="absolute w-[11px] h-[11px] rounded-full bg-white"
                style={{ top: "55%", right: "25%", filter: "blur(2px)", boxShadow: "4px 4px 4px rgba(0,0,0,0.5)" }}
              />

              {/* Gmail red accent circle */}
              <div
                className="absolute"
                style={{
                  bottom: "5%",
                  right: "10%",
                  width: 97,
                  height: 97,
                  background: "#FF6B6B",
                  borderRadius: 99,
                  boxShadow: "0px 0px 4px rgba(0,0,0,0.96) inset, 0px 0px 10px rgba(255,107,107,0.43)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
