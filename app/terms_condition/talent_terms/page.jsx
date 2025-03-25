"use client";

import { Briefcase, MessageSquare, Clock, ShieldAlert, FileText, Users } from "lucide-react";
import Head from "next/head";

const TalentTermsOfService = () => {
  return (
    <>
      <Head>
        <title>Talent Terms of Service | Talent Bard</title>
        <meta name="description" content="Read the talent terms of service for using Talent Bard's platform." />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center justify-center gap-3">
            <FileText className="text-blue-500" /> Talent Bard - Talent Terms of Service
          </h1>
        </div>

        <p className="text-gray-700 mb-8">
          By entering my skills on this platform and engaging with a client project (“CLIENT”), I (“TALENT”) accept the Talent Bard Terms of Service, including the following conditions.
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
    title: "Communication Policy",
    icon: MessageSquare,
    content: "TALENT must communicate with CLIENT strictly within Talent Bard Slack or Chat channels.",
    list: [
      "No direct messages or external communication outside Talent Bard.",
      "Responses to external CLIENT messages must be posted in the designated project channel.",
      "Violations may result in removal from the platform."
    ]
  },
  {
    title: "Work Session Tracking",
    icon: Clock,
    content: "TALENT must post updates in the CLIENT’s project channel every 30 minutes describing their completed work.",
    list: [
      "Payments are processed only for approved sessions.",
      "CLIENT has 3-7 days to approve work before payment is made.",
      "Disputes may arise if project guidelines are not followed."
    ]
  },
  {
    title: "Payment & Compliance",
    icon: Briefcase,
    content: "TALENT acknowledges all work is paid only through Talent Bard’s payment system.",
    list: [
      "Payments processed via PayPal or Upwork.",
      "TALENT cannot accept direct payments from CLIENT without Talent Bard approval.",
      "Violation may lead to legal action or expulsion."
    ]
  },
  {
    title: "Intellectual Property",
    icon: ShieldAlert,
    content: "All project-related intellectual property (IP) belongs to the CLIENT, not the TALENT.",
    list: [
      "TALENT cannot claim project ownership.",
      "IP rights are transferred upon project completion."
    ]
  },
  {
    title: "Talent Responsibilities",
    icon: Users,
    content: "TALENT must adhere to all Talent Bard policies and guidelines.",
    list: [
      "Daily check-ins on Slack or Chat are recommended.",
      "Responsiveness and adherence to project deadlines are expected.",
      "TALENT must comply with HR guidelines regarding availability and payments."
    ]
  },
  {
    title: "Legal & Liability",
    icon: FileText,
    content: "Talent Bard is not legally liable for disputes between TALENT and CLIENT.",
    list: [
      "TALENT must sign necessary legal documents with CLIENT.",
      "Slack/Chat messages are ephemeral and not stored permanently.",
      "Talent Bard cannot guarantee CLIENT’s reliability, responsiveness, or legitimacy."
    ]
  }
];

export default TalentTermsOfService;
