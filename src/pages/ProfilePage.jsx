import { useState } from "react";
import { Pencil, Save } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 98765 43210",
    role: "Admin",
    bio: "Lead manager at Barça Academy.",
  });

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // You can handle save logic here (API call etc.)
      console.log("Saving profile:", profile);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      {/* Topbar with Edit Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
        <button
          onClick={handleEditToggle}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {isEditing ? (
            <>
              <Save size={16} />
              <span>Save</span>
            </>
          ) : (
            <>
              <Pencil size={16} />
              <span>Edit</span>
            </>
          )}
        </button>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <p className="text-lg font-medium">{profile.fullName}</p>
          <p className="text-sm text-gray-500">{profile.role}</p>
        </div>
      </div>

      {/* Profile Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Phone</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-600">Role</label>
          {isEditing ? (
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.role}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm text-gray-600">Bio</label>
          {isEditing ? (
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
              rows={3}
            />
          ) : (
            <p className="mt-1 text-gray-800">{profile.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
}
