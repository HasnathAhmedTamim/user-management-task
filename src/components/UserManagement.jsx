// src/components/UserManagement.jsx

import  { useState } from "react";

const UserManagement = () => {
  // Simulated user data
  const [users] = useState([
    {
      id: 1,
      name: "User 1",
      email: "user1@example.com",
      lastLogin: "2024-07-15",
      registrationTime: "2024-07-01",
      status: "active",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@example.com",
      lastLogin: "2024-07-14",
      registrationTime: "2024-07-02",
      status: "blocked",
    },
    // Add more users as needed
  ]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleBlock = () => {
    console.log("Block selected users:", selectedUsers);
    // Implement block functionality
  };

  const handleUnblock = () => {
    console.log("Unblock selected users:", selectedUsers);
    // Implement unblock functionality
  };

  const handleDelete = () => {
    console.log("Delete selected users:", selectedUsers);
    // Implement delete functionality
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">User Management</h2>
      <div className="flex mb-4">
        <button
          onClick={handleBlock}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
        >
          Block
        </button>
        <button
          onClick={handleUnblock}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
        >
          Unblock
        </button>
        <button
          onClick={handleDelete}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Delete
        </button>
      </div>
      <table className="min-w-full bg-white border-gray-200 shadow-md rounded">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600 border-gray-300 rounded"
              />
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Last Login
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Registration Time
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-gray-600 border-gray-300 rounded"
                  onChange={() => handleSelectUser(user.id)}
                  checked={selectedUsers.includes(user.id)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.registrationTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
