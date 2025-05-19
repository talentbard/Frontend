import React from "react";
import { FaStar } from "react-icons/fa";

const projects = [
  {
    title: "Mobile Banking App",
    company: "FinTechX",
    status: "On Schedule",
    progress: 45,
    color: "green",
    members: 5,
    favourite: true,
  },
  {
    title: "Teamcamp Onboarding",
    company: "Pixer Digital",
    status: "Behind Schedule",
    progress: 90,
    color: "red",
    members: 4,
    favourite: true,
  },
  {
    title: "VR Training Platform",
    company: "ImmersivePro",
    status: "At Risk",
    progress: 70,
    color: "yellow",
    members: 3,
    favourite: true,
  },
  {
    title: "AI Chatbot Integration",
    company: "Nova Solutions",
    status: "On Schedule",
    progress: 50,
    color: "green",
    members: 6,
    favourite: true,
  },
  {
    title: "IoT Home Automation",
    company: "SmartLiving Inc.",
    status: "On Schedule",
    progress: 40,
    color: "green",
    members: 5,
    favourite: true,
  },
  {
    title: "Event Management System",
    company: "Pixer Digital",
    status: "Behind Schedule",
    progress: 75,
    color: "red",
    members: 5,
    favourite: true,
  },
  {
    title: "E-Commerce Revamp",
    company: "ShopBuddy",
    status: "At Risk",
    progress: 60,
    color: "yellow",
    members: 5,
    favourite: false,
  },
  {
    title: "E-Learning Portal",
    company: "EduSpark",
    status: "Not Started Yet",
    progress: 0,
    color: "gray",
    members: 4,
    favourite: false,
  },
  {
    title: "Healthcare Mobile App",
    company: "MediCare+",
    status: "Behind Schedule",
    progress: 85,
    color: "red",
    members: 6,
    favourite: false,
  },
  {
    title: "Marketing Website",
    company: "Creative Horizon",
    status: "Behind Schedule",
    progress: 90,
    color: "red",
    members: 3,
    favourite: false,
  }
];

const StatusBar = ({ color, progress }) => (
  <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
    <div
      className={`h-full rounded-full bg-${color}-500`}
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm w-64">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-500">by {project.company}</p>
      </div>
      {project.favourite && <FaStar className="text-yellow-400 mt-1" />}
    </div>
    <p className={`text-sm text-${project.color}-600 font-medium`}>
      {project.status} ({project.progress}%)
    </p>
    <StatusBar color={project.color} progress={project.progress} />
    <div className="mt-3 flex -space-x-2">
      {Array.from({ length: project.members }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
        ></div>
      ))}
    </div>
  </div>
);

export default function ProjectDashboard() {
  const favouriteProjects = projects.filter((project) => project.favourite);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          + New Project
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Favourite</h2>
      <div className="flex flex-wrap gap-6">
        {favouriteProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-4">All Projects</h2>
      <div className="flex flex-wrap gap-6">
        {projects.map(
          (project, i) =>
            !project.favourite && <ProjectCard key={i} project={project} />
        )}
      </div>
    </div>
  );
}
