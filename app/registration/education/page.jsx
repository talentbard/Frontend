"use client";
import { useState } from "react";

const Education = () => {
  const [educationList, setEducationList] = useState([
    { university: "", degree: "", fieldOfStudy: "", graduationDate: "", gpa: "", currentlyPursuing: false }
  ]);
  const [highestDegree, setHighestDegree] = useState("");

  const handleChange = (index, field, value) => {
    const updatedEducation = [...educationList];
    updatedEducation[index][field] = value;
    setEducationList(updatedEducation);
  };

  const addEducation = () => {
    setEducationList([...educationList, { university: "", degree: "", fieldOfStudy: "", graduationDate: "", gpa: "", currentlyPursuing: false }]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>

      {educationList.map((education, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          {/* University Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">University</label>
            <input
              type="text"
              value={education.university}
              onChange={(e) => handleChange(index, "university", e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Enter university name"
            />
          </div>

          {/* College Degree & Field of Study */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">College Degree</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                className="border p-2 rounded-md w-full"
                placeholder="Enter your degree"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Field of Study</label>
              <input
                type="text"
                value={education.fieldOfStudy}
                onChange={(e) => handleChange(index, "fieldOfStudy", e.target.value)}
                className="border p-2 rounded-md w-full"
                placeholder="Enter field of study"
              />
            </div>
          </div>

          {/* Graduation Date & GPA */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700">Graduation Date</label>
              <input
                type="date"
                value={education.graduationDate}
                onChange={(e) => handleChange(index, "graduationDate", e.target.value)}
                className="border p-2 rounded-md w-full"
                disabled={education.currentlyPursuing}
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">GPA</label>
              <input
                type="text"
                value={education.gpa}
                onChange={(e) => handleChange(index, "gpa", e.target.value)}
                className="border p-2 rounded-md w-full"
                placeholder="Enter GPA"
              />
            </div>
          </div>

          {/* Currently Pursuing Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={education.currentlyPursuing}
              onChange={(e) => handleChange(index, "currentlyPursuing", e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700">Currently Pursuing</label>
          </div>
        </div>
      ))}

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
        onClick={addEducation}
      >
        + Add Another Degree
      </button>

      {/* Highest Degree Held */}
      <div className="mb-6">
        <label className="block font-medium text-gray-700">Highest Degree Held</label>
        <input
          type="text"
          value={highestDegree}
          onChange={(e) => setHighestDegree(e.target.value)}
          className="border p-2 rounded-md w-full"
          placeholder="Enter your highest degree"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 border rounded-md hover:bg-gray-100">Back</button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Next</button>
      </div>
    </div>
  );
};

export default Education;