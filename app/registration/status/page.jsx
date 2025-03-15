"use client";

import { Clock, Mail } from "lucide-react"; // Updated icon

const AccountAwaitingApproval = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      {/* Content Box */}
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg text-center mt-6 border border-gray-200">
        {/* Clock Icon */}
        <div className="flex items-center justify-center mb-4">
          <Clock className="text-yellow-500 w-12 h-12" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">Awaiting Approval</h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Your account is awaiting approval. If you recently registered, please check back after 24 hours. If not, please contact us for assistance.
        </p>
        <p className="text-gray-600 mt-3 flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-blue-500" />
          <a href="mailto:akshay@talentbard.com" className="text-blue-600 font-medium hover:underline">
            akshay@talentbard.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AccountAwaitingApproval;
