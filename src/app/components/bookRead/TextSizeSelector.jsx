const TextSizeSelector = ({ setTextSize, textSize }) => {
  return (
    <div className="w-full flex justify-end items-baseline gap-3">
      {[1, 2, 3].map((size) => (
        <TextSizeButton
          key={size}
          size={size}
          textSize={textSize}
          setTextSize={setTextSize}
        />
      ))}
    </div>
  );
};

const TextSizeButton = ({ size, textSize, setTextSize }) => {
  return (
    <h1
      key={size}
      tabIndex={0}
      onClick={() => setTextSize(size)}
      className={`text-${size === 1 ? "sm" : size === 2 ? "md" : "xl"} 
                      hover:border-black px-1 cursor-pointer rounded-md ${
                        size === textSize
                          ? "border-2 border-black"
                          : "border-2 border-gray-600"
                      }`}
      aria-label={`Set text size to ${size}`}
    >
      aA
    </h1>
  );
};

export default TextSizeSelector;
