import React, { useState } from "react";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileForm from "../../components/profile/ProfileForm";
import Heading from "../../components/Heading/Heading";

export default function Profile() {
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
  };

  return (
    <div className="w-full py-2 lg:px-8 px-5 gap-5 mx-auto">
      <Heading title="Profile" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileImage image={image} onImageChange={handleImageChange} onDeleteImage={handleDeleteImage} />
        <div className="lg:col-span-2">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

