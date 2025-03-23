"use client";

import { FileText, ShieldCheck, UserCheck, Link, Lock, Users, Mail } from "lucide-react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Talent Bard</title>
        <meta name="description" content="Read the Privacy Policy for Talent Bard's platform." />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-3">
            <FileText className="text-blue-500" /> Talent Bard - Privacy Policy
          </h1>
        </div>

        <p className="text-gray-700 mb-8">
          This Privacy Policy explains how Talent Bard collects, uses, and discloses your personal data when you use our Service.
          By using the Service, you agree to the collection and use of information in accordance with this policy.
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

// Privacy Policy Sections
const sections = [
  {
    title: "Information Collection & Use",
    icon: UserCheck,
    content: "We collect various types of data to provide and improve our services.",
    list: ["Personal Data: Name, email address, cookies, and usage data.", "Usage Data: IP address, browser type, visited pages, and time spent on pages."]
  },
  {
    title: "Cookies & Tracking",
    icon: ShieldCheck,
    content: "We use cookies and similar tracking technologies to analyze and enhance our Service.",
    list: ["Session Cookies: Used to operate the Service.", "Preference Cookies: Remember user settings.", "Security Cookies: Ensure security."]
  },
  {
    title: "Use of Data",
    icon: Link,
    content: "We use collected data to maintain, improve, and secure our Service.",
    list: ["Provide customer support.", "Analyze usage for improvements.", "Detect and prevent technical issues."]
  },
  {
    title: "Data Transfers & Security",
    icon: Lock,
    content: "Your data may be transferred to countries with different data protection laws.",
    list: ["We take steps to secure your data.", "Transfers occur only with adequate security controls."]
  },
  {
    title: "Disclosure & Legal Compliance",
    icon: Users,
    content: "We may disclose personal data if legally required or necessary to protect our rights.",
    list: ["Comply with legal obligations.", "Protect against fraud.", "Ensure user safety."]
  },
  {
    title: "Changes to Privacy Policy",
    icon: FileText,
    content: "We may update this Privacy Policy periodically and will notify users of any significant changes.",
  },
  {
    title: "Contact Us",
    icon: Mail,
    content: "If you have any questions, contact us at:",
    list: ["Email: akshay@talentbard.com"]
  }
];

export default PrivacyPolicy;
