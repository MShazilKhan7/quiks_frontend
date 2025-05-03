import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../config/axios";

const ProfileForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = {
      firstName: e.target.first_name.value,
      lastName: e.target.last_name.value,
      email: e.target.email.value,
      profession: e.target.profession.value,
      bio: e.target.bio.value,
      profilePicUrl: user.profile_pic // Using the Cloudinary URL directly
    };

    try {
      const response = await axiosInstance.put("/users/update", formData);
      if (response.data.message === "success") {
        setSuccess("Profile updated successfully!");
        // Update user in context and localStorage
        setUser(response.data.data);
        localStorage.setItem('user', JSON.stringify(response.data.data));
      } else {
        setError(response.data.error || "Failed to update profile");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-5 px-8 shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="text-[#202142]">
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-500 text-sm mb-4">
            {success}
          </div>
        )}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 mb-2">
          <InputField 
            label="First Name" 
            id="first_name" 
            placeholder="Your first name" 
            defaultValue={user.name.split(" ")[0]} 
          />
          <InputField 
            label="Last Name" 
            id="last_name" 
            placeholder="Your last name" 
            defaultValue={user.name.split(" ")[1]} 
          />
        </div>
        <InputField 
          label="Email" 
          id="email" 
          type="email" 
          placeholder="your.email@mail.com" 
          defaultValue={user.email} 
        />
        <InputField 
          label="Profession" 
          id="profession" 
          placeholder="Your profession" 
          defaultValue={user.profession} 
          required={false} 
        />
        <div className="mb-6">
          <label htmlFor="bio" className="block my-2 text-sm font-md text-secondary">
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
            placeholder="Write your bio here..."
            defaultValue={user.bio}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({ label, id, type = "text", placeholder, defaultValue, required = true }) => (
  <div className="w-full">
    <label htmlFor={id} className="block my-2 text-sm font-md text-secondary">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
    />
  </div>
);

export default ProfileForm;
