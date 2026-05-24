export default function Home() {
  const faqs = [
    {
      q: "How does agenda compliance tracking work?",
      a: "You upload your meeting agenda before the meeting. During the session, our tool monitors time spent on each item and flags when you go over or skip topics."
    },
    {
      q: "Does it integrate with Google Calendar or Outlook?",
      a: "Yes. After subscribing, you can connect your Google Calendar or Microsoft Outlook to automatically pull in scheduled meetings and their agendas."
    },
    {
      q: "What does the compliance score mean?",
      a: "After each meeting, you receive a score from 0–100 reflecting how closely the meeting followed the planned agenda and stayed within time boxes."
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Team Coordination
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track if meetings follow<br />
          <span className="text-[#58a6ff]">agenda and time limits</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Real-time monitoring during meetings with post-meeting analytics and compliance scoring. Built for team leads and project managers who value focused, productive sessions.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No setup fees.</p>
      </section>

      <section className="max-w-md mx-auto px-6 pb-24">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to run tighter meetings</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited meeting tracking",
              "Google Calendar & Outlook sync",
              "Real-time agenda monitoring",
              "Post-meeting compliance scores",
              "Team analytics dashboard",
              "Email summary reports"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Meeting Agenda Compliance Tracker. All rights reserved.
      </footer>
    </main>
  )
}
