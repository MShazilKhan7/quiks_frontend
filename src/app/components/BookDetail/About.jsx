
// About Book and Author
const AboutSection = ({ about, authorInfo }) => {
  return (
    <div>
      <InfoSection title="What's it About" content={about} />
      <InfoSection title="About the Author" content={authorInfo} />
    </div>
  );
};

export default AboutSection;

const InfoSection = ({ title, content }) => {
  return (
    <div className="py-4">
      <p className="text-xl font-semibold text-gray-800">{title}</p>
      <p>{content}</p>
    </div>
  );
};