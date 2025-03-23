"use client";

import { FileText, ShieldCheck, RefreshCw, Mail, Link2, AlertCircle } from "lucide-react";
import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Talent Bard</title>
        <meta name="description" content="Read the terms and conditions of Talent Bard before using our services." />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-3">
            <FileText className="text-blue-500" /> Talent Bard - Terms And Conditions
          </h1>
        </div>

        <p className="text-gray-700 mb-8">
          Please read these Terms and Conditions carefully before using <strong>Talent Bard</strong> (the "Service").
          Your access and use of this Service indicate your acceptance of these terms. If you do not agree, please stop using the Service.
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
    title: "Links to Other Websites",
    icon: Link2,
    content: "Our Service may contain links to third-party websites or services not owned or controlled by Talent Bard.",
    list: [
      "We do not control or take responsibility for their content or policies.",
      "We are not liable for any damages caused by third-party sites.",
      "We recommend reviewing their Terms & Conditions before use."
    ]
  },
  {
    title: "Governing Law",
    icon: ShieldCheck,
    content: "These Terms shall be governed and construed in accordance with the laws of India.",
    list: [
      "If any provision is deemed invalid, the rest remain in effect.",
      "Failure to enforce any rights does not waive those rights."
    ]
  },
  {
    title: "Limitation of Liability",
    icon: AlertCircle,
    content: "Talent Bard shall not be held responsible for:",
    list: [
      "Loss of data, revenue, or profits.",
      "Unauthorized access to your data.",
      "Service interruptions due to external factors."
    ]
  },
  {
    title: "Changes to Terms",
    icon: RefreshCw,
    content: "We reserve the right to modify or replace these Terms at any time. Significant changes will be announced with a 30-day notice."
  },
  {
    title: "Contact Us",
    icon: Mail,
    content: "If you have any questions about these Terms, please contact us."
  }
];

export default TermsAndConditions;
