import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { uploadToCloudinary } from "../../config/cloudinary";

const ProfileImage = ({ image, onDeleteImage, onImageChange }) => {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        // Upload to Cloudinary
        const imageUrl = await uploadToCloudinary(file);
        // Update user context with the Cloudinary URL
        setUser({ ...user, profile_pic: imageUrl });
        onImageChange(imageUrl); // Call the parent function to update the image
        localStorage.setItem("user", JSON.stringify({ ...user, profile_pic: imageUrl })); // Update localStorage
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="bg-white max-h-[320px] shadow-md rounded-md p-5">
      <div className="relative flex justify-center">
        <img
          className="object-cover w-40 h-40 rounded-full ring-2 ring-indigo-300"
          src={user.profile_pic || image}
          alt="Profile avatar"
        />
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="py-2 px-5 min-w-[150px] font-medium text-indigo-100 bg-secondary rounded-md hover:bg-indigo-600 disabled:opacity-50"
          onClick={() => document.getElementById("profileImageInput").click()}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Change Picture"}
        </button>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profileImageInput"
          onChange={handleImageChange}
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="py-2 px-5 min-w-[150px] text-indigo-900 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-100"
          onClick={onDeleteImage}
          disabled={isUploading}
        >
          Delete Picture
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
