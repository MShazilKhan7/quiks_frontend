const ProfileImage = ({ image, onImageChange, onDeleteImage }) => {
  return (
    <div className="bg-white max-h-[320px] shadow-md rounded-md p-5">
      <div className="relative flex justify-center">
        <img
          className="object-cover w-40 h-40 rounded-full ring-2 ring-indigo-300"
          src={image}
          alt="Profile avatar"
        />
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="py-2 px-5 min-w-[150px] font-medium text-indigo-100 bg-secondary rounded-md hover:bg-indigo-600"
          onClick={() => document.getElementById("profileImageInput").click()}
        >
          Change Picture
        </button>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profileImageInput"
          onChange={onImageChange}
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="py-2 px-5 min-w-[150px] text-indigo-900 bg-white border border-indigo-200 rounded-lg hover:bg-indigo-100"
          onClick={onDeleteImage}
        >
          Delete Picture
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
