
const Heading = ({ title, itemCount, icon }) => (
  <div className="flex items-center">
    {
      icon && (
      <div className="bg-greyaccent w-12 h-12 flex items-center justify-center p-2 rounded mr-2 my-5">
        {icon}
      </div>
      )
    }
    <div>
      <h2 className="text-[1.6rem] font-semibold font-secondary text-gray-800">
        &nbsp;{title}
      </h2>
      {itemCount && <p className="">&nbsp;{itemCount} items</p>}
    </div>
  </div>
);

export default Heading;