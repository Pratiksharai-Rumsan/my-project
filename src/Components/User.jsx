
import axios from "axios";
import React, { useEffect, useState } from "react";
const backend = import.meta.env.VITE_APP_BACKEND_URL;

const User = () => {
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${backend}/users`); 
        console.log(response.data);
        setUserList(response.data); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async  () => {
    if (userName.trim()) {
      try {
        
        const response = await axios.post(`${backend}/users`, {
          name: userName,
        });

        
        setUserList([...userList, response.data]);
        setUserName(""); 
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
    
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Input Field */}
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addUser}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium"
          >
            Add
          </button>
        </div>

        {/* User List */}
        <h2 className="text-xl font-semibold mb-2">User List</h2>
        {userList.length > 0 ? (
          <ul className="space-y-2">
            {userList.map((user, index) => (
              <li
                key={user.id}
                className="px-4 py-2 bg-gray-700 rounded-md text-gray-200"
              >
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No users added yet.</p>
        )}
      </div>
    </div>
  );
};

export default User;
