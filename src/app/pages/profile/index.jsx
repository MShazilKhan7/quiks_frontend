import React, { useState, useContext, useEffect } from "react";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileForm from "../../components/profile/ProfileForm";
import Heading from "../../components/Heading/Heading";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in, if not, redirect to login page
    if (!user || Object.keys(user).length === 0) {
      navigate("/login");
    }
  }, [user, navigate]); 


  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setImage("https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg");
    setUser({ ...user, profile_pic: null }); // Update user context to remove the image
    localStorage.setItem("user", JSON.stringify({ ...user, profile_pic: null })); // Update localStorage
  };

  // If user is not authenticated, don't render the profile page
  if (!user || Object.keys(user).length === 0) {
    return null; 
  }

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      <Heading title="Profile" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileImage
          image={user.profile_pic || image}
          onImageChange={handleImageChange}
          onDeleteImage={handleDeleteImage}
        />
        <div className="lg:col-span-2">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}