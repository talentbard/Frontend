"use client";

import { FileText, ShieldCheck, RefreshCw, Mail, Link2, AlertCircle } from "lucide-react";
import Head from "next/head";

const ClientTermsOfService = () => {
  return (
    <>
      <Head>
        <title>Client Terms of Service | Talent Bard</title>
        <meta name="description" content="Read the client terms of service for using Talent Bard's platform." />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-3">
            <FileText className="text-blue-500" /> Talent Bard - Client Terms of Service
          </h1>
        </div>

        <p className="text-gray-700 mb-8">
          By pressing <strong>Try / Hire / Interview</strong> on any talent (“TALENT”) at any point in time on the Talent Bard platform, you (“CLIENT”) accept the following Terms of Service.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(({ title, icon: Icon, content, list }, index) => (
            <section key={index} className="space-y-3 p-6 bg-gray-100 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <Icon className="text-blue-500" /> {title}
              </h2>
              <p className="text-gray-700">{content}</p>
              {list && (
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

// Terms Sections
const sections = [
  {
    title: "Communication Guidelines",
    icon: Link2,
    content: "CLIENT must communicate with TALENT only within the designated Talent Bard Slack or Chat organization channels.",
    list: [
      "No direct messages or external communication methods.",
      "Interviews and project discussions happen in specified Slack channels.",
      "Talent Bard does not monitor external communications."
    ]
  },
  {
    title: "Liability & Disputes",
    icon: ShieldCheck,
    content: "Talent Bard is not responsible for conflicts, IP violations, NDAs, or any other disputes between CLIENT and TALENT.",
    list: [
      "CLIENT assumes full responsibility for legal documentation like NDAs.",
      "Talent Bard will not mediate disputes outside of its platform."
    ]
  },
  {
    title: "Hiring & Fees",
    icon: RefreshCw,
    content: "If CLIENT hires TALENT outside Talent Bard, a 'Finder’s Fee' applies.",
    list: [
      "Non-US-based talent: $1000 USD.",
      "US/India-based talent: $2000 USD.",
      "CLIENT must request a Finder’s Fee Agreement."
    ]
  },
  {
    title: "Talent Work Sessions",
    icon: AlertCircle,
    content: "TALENT must post updates every 30 minutes in the project Slack channel.",
    list: [
      "CLIENT has 2 days to dispute a work session.",
      "If undisputed, TALENT will be paid, and CLIENT’s balance will be deducted."
    ]
  },
  {
    title: "Payments & Refunds",
    icon: Mail,
    content: "CLIENT agrees to pay invoices via ‘Talent Bard FreshBooks’ for continued work.",
    list: [
      "Refunds only apply to unused funded hours.",
      "Talent Bard cannot refund tracked work sessions."
    ]
  },
  {
    title: "Platform Usage & Ethics",
    icon: FileText,
    content: "CLIENT will not invite TALENT to competing platforms or attempt to circumvent Talent Bard’s process.",
    list: [
      "Violations may result in legal actions or expulsion.",
      "CLIENT acknowledges that Slack messages and files are ephemeral."
    ]
  }
];

export default ClientTermsOfService;
