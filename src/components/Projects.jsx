import axios from "axios";
import React, { useEffect, useState } from "react";
const backend = import.meta.env.VITE_APP_BACKEND_SECOND_URL;

const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${backend}/projects`);

        setProjectList(response.data); // Set the fetched user data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const addProject = async () => {
    if (projectName.trim()) {
      try {
        const response = await axios.post(`${backend}/projects`, {
          name: projectName,
        });

        setProjectList([...projectList, response.data]);
        setProjectName("");
      } catch (error) {
        console.error("Error adding project:", error);
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
      {/* Input Section */}
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Add a Project</h1>
        <div>
          <label
            htmlFor="projectName"
            className="block text-sm font-medium mb-2 text-gray-300"
          >
            Project Name
          </label>
          <div className="flex">
            <input
              id="projectName"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="flex-grow px-4 py-2 rounded-l-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addProject}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-r-md text-white font-medium"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Project List Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Project List</h2>
        {projectList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="bg-gray-700 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold">{project.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No projects added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
