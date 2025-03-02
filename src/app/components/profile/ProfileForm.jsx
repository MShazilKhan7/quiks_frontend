const ProfileForm = () => {
  return (
    <div className="bg-white p-5 px-8 shadow-md rounded-md">
      <div className="text-[#202142]">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0 mb-6">
          <InputField label="First Name" id="first_name" placeholder="Your first name" defaultValue="Jane"/>
          <InputField label="Last Name" id="last_name" placeholder="Your last name" defaultValue="Ferguson" />
        </div>
        <InputField label="Email" id="email" type="email" placeholder="your.email@mail.com" />
        <InputField label="Profession" id="profession" placeholder="Your profession" required={false} />
        <div className="mb-6">
          <label htmlFor="bio" className="block mb-2 text-sm font-md text-secondary" >
            Bio
          </label>
          <textarea
            id="bio"
            rows={4}
            className="border border-secondary text-sm rounded-md focus:outline-none block w-full p-2.5"
            placeholder="Write your bio here..."
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-indigo-700 hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, id, type = "text", placeholder, defaultValue, required = true }) => (
  <div className="w-full">
    <label htmlFor={id} className="block mb-2 text-sm font-md text-secondary">
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
