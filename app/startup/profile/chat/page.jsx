// "use client"
// import React, { useState } from "react";
// import { FiEdit2, FiPlus } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";

// export default function ChatPage() {
//   const [chats, setChats] = useState([
//     { name: "Gitaquest", messages: "4+ new messages", time: "1w", dot: true },
//     { name: "Koko⚡", messages: "Sent", time: "", dot: false },
//     { name: "Founded.by Startup Club 🚀", messages: "2 new messages", time: "4w", dot: true },
//   ]);
//   const [showGroupModal, setShowGroupModal] = useState(false);
//   const [groupName, setGroupName] = useState("");
//   const [members, setMembers] = useState("");

//   const createGroup = () => {
//     if (groupName.trim()) {
//       setChats([
//         ...chats,
//         {
//           name: groupName,
//           messages: `Group: ${members}`,
//           time: "Now",
//           dot: false,
//         },
//       ]);
//       setGroupName("");
//       setMembers("");
//       setShowGroupModal(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-4 py-2 font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-lg font-semibold">akshay_narvate</h1>
//         <FiEdit2 className="text-white text-xl" />
//       </div>

//       {/* Search Bar */}
//       <input
//         className="w-full bg-[#1e1e1e] text-sm text-gray-300 px-4 py-2 rounded-full mb-4 placeholder-gray-400"
//         placeholder="Ask Meta AI or Search"
//       />

//       {/* Stories */}
//       <div className="flex space-x-4 overflow-x-auto mb-6">
//         <div className="flex flex-col items-center">
//           <div className="h-14 w-14 bg-gray-600 rounded-full flex items-center justify-center text-xs">You</div>
//           <span className="text-xs mt-1 text-gray-400">Your note</span>
//         </div>
//         <div className="flex flex-col items-center relative">
//           <div className="h-14 w-14 bg-white rounded-full overflow-hidden">
//             <img
//               src="https://randomuser.me/api/portraits/men/75.jpg"
//               alt="Story"
//               className="h-full w-full object-cover"
//             />
//             <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-black rounded-full" />
//           </div>
//           <span className="text-xs mt-1 text-gray-400">SURAJ</span>
//         </div>
//       </div>

//       {/* Requests and Create Group */}
//       <div className="flex justify-between items-center mb-4">
//         <p className="text-sm text-gray-300">Messages</p>
//         <div className="flex items-center gap-4">
//           <p className="text-sm text-blue-400 cursor-pointer">Requests (1)</p>
//           <button
//             onClick={() => setShowGroupModal(true)}
//             className="text-sm text-blue-400 flex items-center gap-1"
//           >
//             <FiPlus /> Create Group
//           </button>
//         </div>
//       </div>

//       {/* Chats */}
//       <div className="space-y-3">
//         {chats.map((chat, idx) => (
//           <div
//             key={idx}
//             className="flex justify-between items-center hover:bg-[#1a1a1a] p-3 rounded-lg transition"
//           >
//             <div className="flex items-center gap-3">
//               <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center text-xs">
//                 {chat.name.slice(0, 2)}
//               </div>
//               <div>
//                 <p className="text-sm font-semibold">{chat.name}</p>
//                 <p className="text-xs text-gray-400">{chat.messages}</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-end gap-1">
//               {chat.dot && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
//               <p className="text-xs text-gray-500">{chat.time}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Create Group Modal */}
//       {showGroupModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-[#1e1e1e] w-80 p-5 rounded-xl shadow-lg relative">
//             <button
//               onClick={() => setShowGroupModal(false)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
//             >
//               <IoClose size={22} />
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Create Group</h2>
//             <input
//               type="text"
//               placeholder="Group Name"
//               value={groupName}
//               onChange={(e) => setGroupName(e.target.value)}
//               className="w-full mb-3 px-3 py-2 rounded-md bg-black text-white border border-gray-600"
//             />
//             <input
//               type="text"
//               placeholder="Members (comma separated)"
//               value={members}
//               onChange={(e) => setMembers(e.target.value)}
//               className="w-full mb-4 px-3 py-2 rounded-md bg-black text-white border border-gray-600"
//             />
//             <button
//               onClick={createGroup}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
//             >
//               Create
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { FiEdit2, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function ChatPage() {
  const [chats, setChats] = useState([
    { name: "Gitaquest", messages: "4+ new messages", time: "1w", dot: true },
    { name: "Koko⚡", messages: "Sent", time: "", dot: false },
    { name: "Founded.by Startup Club 🚀", messages: "2 new messages", time: "4w", dot: true },
  ]);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  const createGroup = () => {
    if (groupName.trim()) {
      const newGroup = {
        name: groupName,
        messages: `Group: ${members}`,
        time: "Now",
        dot: false,
      };
      setChats([...chats, newGroup]);
      setGroupName("");
      setMembers("");
      setShowGroupModal(false);
    }
  };

  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-[#0f0f0f] border-r border-gray-800 p-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">akshay_narvate</h1>
          <FiEdit2 className="text-white text-xl cursor-pointer" />
        </div>

        {/* Search Bar */}
        <input
          className="bg-[#1e1e1e] text-sm text-gray-300 px-4 py-2 rounded-full mb-4 placeholder-gray-400"
          placeholder="Ask Meta AI or Search"
        />

        {/* Requests and Create Group */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-300">Messages</p>
          <button
            onClick={() => setShowGroupModal(true)}
            className="text-sm text-blue-400 flex items-center gap-1"
          >
            <FiPlus /> Create Group
          </button>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto space-y-3 flex-1">
          {chats.map((chat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveChat(chat)}
              className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition ${
                activeChat?.name === chat.name ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  {chat.name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{chat.name}</p>
                  <p className="text-xs text-gray-400">{chat.messages}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {chat.dot && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
                <p className="text-xs text-gray-500">{chat.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-[#101010] p-6">
        {activeChat ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">{activeChat.name}</h2>
            <p className="text-gray-400 text-sm">This is where messages will appear...</p>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-600 text-lg">
            Select a chat to start messaging
          </div>
        )}
      </div>

      {/* Group Modal */}
      {showGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#1e1e1e] w-80 p-5 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowGroupModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
            >
              <IoClose size={22} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Create Group</h2>
            <input
              type="text"
              placeholder="Group Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded-md bg-black text-white border border-gray-600"
            />
            <input
              type="text"
              placeholder="Members (comma separated)"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              className="w-full mb-4 px-3 py-2 rounded-md bg-black text-white border border-gray-600"
            />
            <button
              onClick={createGroup}
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
