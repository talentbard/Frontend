'use client';
import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FreelancerSessionTable = () => {
  const [sessions, setSessions] = useState([
    { id: 1, date: '30 Dec 2021', time: '10:00 AM', talent: 'Jenny Oluwa', description: 'Setting up the scraper', duration: 0.5, amount: 10, status: 'Paid' },
    { id: 2, date: '30 Dec 2021', time: '10:35 AM', talent: 'Jenny Oluwa', description: 'Automated login and redirect', duration: 0.5, amount: 10, status: 'Approved' },
    { id: 3, date: '30 Dec 2021', time: '11:15 AM', talent: 'Jenny Oluwa', description: 'Getting links of product pages', duration: 0.5, amount: 10, status: 'Pending' },
    { id: 4, date: '30 Dec 2021', time: '11:50 AM', talent: 'Jenny Oluwa', description: 'Looping through individual products', duration: 0.5, amount: 10, status: 'Pending' },
    { id: 5, date: '30 Dec 2021', time: '12:30 PM', talent: 'Jenny Oluwa', description: 'Extracting necessary data', duration: 0.5, amount: 10, status: 'Pending' },
    { id: 6, date: '30 Dec 2021', time: '1:15 PM', talent: 'Jenny Oluwa', description: 'Saving data to CSV', duration: 0.5, amount: 10, status: 'Pending' },
  ]);

  const handleApprove = (id) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id ? { ...session, status: 'Paid' } : session
      )
    );
  };

  const handleReject = (id) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === id ? { ...session, status: 'Rejected' } : session
      )
    );
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Filters */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "25px", flexWrap: "wrap", alignItems: "center" }}>
        <select style={selectStyle}>
          <option>All Dates</option>
        </select>
        <select style={selectStyle}>
          <option>All Status</option>
        </select>
        <select style={selectStyle}>
          <option>Jenny Oluwa</option>
        </select>
        <button style={applyButtonStyle}>Apply</button>
        <button style={resetButtonStyle}>Reset</button>
        <button style={exportButtonStyle}>Export</button>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 15px" }}>
          <thead>
            <tr style={{ backgroundColor: "#e6e6e6" }}>
              {["No.", "Date", "Time", "Talent", "Description", "Duration", "Amount", "Status", "Action"].map((header) => (
                <th key={header} style={thStyle}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={session.id} style={{ backgroundColor: "#fff", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", height: "60px" }}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{session.date}</td>
                <td style={tdStyle}>{session.time}</td>
                <td style={tdStyle}>{session.talent}</td>
                <td style={tdStyle}>{session.description}</td>
                <td style={tdStyle}>{session.duration} hr</td>
                <td style={tdStyle}>${session.amount.toFixed(2)}</td>
                <td style={tdStyle}>
                  <span style={{ color: getStatusColor(session.status), fontWeight: "bold" }}>
                    {session.status}
                  </span>
                </td>
                <td style={tdStyle}>
                  {session.status === 'Pending' && (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                      <FaCheckCircle
                        onClick={() => handleApprove(session.id)}
                        style={{ color: "green", cursor: "pointer", fontSize: "22px" }}
                      />
                      <FaTimesCircle
                        onClick={() => handleReject(session.id)}
                        style={{ color: "red", cursor: "pointer", fontSize: "22px" }}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper styles
const thStyle = {
  padding: "15px",
  textAlign: "center",
  fontSize: "14px",
  color: "#333",
};

const tdStyle = {
  padding: "12px 10px",
  fontSize: "14px",
  color: "#555",
};

const selectStyle = {
  padding: "10px 15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  minWidth: "150px",
};

const applyButtonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const resetButtonStyle = {
  backgroundColor: "white",
  color: "#4CAF50",
  padding: "10px 20px",
  border: "2px solid #4CAF50",
  borderRadius: "8px",
  cursor: "pointer",
};

const exportButtonStyle = {
  backgroundColor: "#F44336",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const getStatusColor = (status) => {
  if (status === 'Paid') return "green";
  if (status === 'Approved') return "blue";
  if (status === 'Pending') return "orange";
  if (status === 'Rejected') return "red";
  return "black";
};

export default FreelancerSessionTable;
