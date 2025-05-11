import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";
import { formatTime } from "../../functions/functions";

const chapters = [
  `If you’ve ever read any Greek mythology or the Bible or watched Star
Wars, you have experience with the “hero’s journey,” the concept—
identified by the author and philosopher Joseph Campbell—that most
great epic stories follow a similar narrative arc: a hero has a crazy
idea; people doubt her; she leaves the village to pursue her vision,
faces untold obstacles, falls into an abyss, barely escapes death, but
manages to come out the other side with whatever she was looking
for and continues on her journey to an eventual triumphant return.
What was even more surprising, to me at least, was that I was at all
interested. In high school and college, I used to think that “business”
was a dirty word.
`,
  `Watching my parents endure what entrepreneurship demanded of
them, I could not think of any career less suited to my temperament
and my interests than talking about businesses all day, let alone
starting one. That’s why I went into journalism, then into radio, and
eventually into hosting at NPR. And yet, here I am. I have somehow
managed to create or co-create five podcasts that, together, generate
millions of dollars in revenue and are heard by 19 million people a
month.  But over the course of my time doing deep-dive interviews with
hundreds of business founders and CEOs for my shows, I’ve come to
understand that, for the most part, they are just like you and me. `,
  `Which is to say, they’re human. They all have sleepless nights and
midnight terrors. Most of them, at some point, feel like imposters.
They are not natural superheroes; they are all Clark Kents. The only
difference between them and you, at this moment, is that when
opportunity presented itself, they went into the phone booth and put
on the cape. They took the leap. That’s basically it.
This book is organized to help those people—people like you and
me, like Stacy Brown—succeed. It is the product of in-depth
interviews with hundreds of the most successful and inspiring
entrepreneurs from across the business landscape—from the food
industry to consumer packaged goods to the tech world, and more. `,
];
const audios = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
];

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateMetadata = () => setTotalTime(audio.duration);
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateMetadata);
    audio.addEventListener("timeupdate", updateTime);

    isPlaying ? audio.play() : audio.pause();

    return () => {
      audio.removeEventListener("loadedmetadata", updateMetadata);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [isPlaying, currentChapter]);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const changeChapter = (step) => {
    setCurrentChapter((prev) => {
      const newChapter = prev + step;
      if (newChapter >= 0 && newChapter < chapters.length) {
        setIsPlaying(true);
        setCurrentTime(0);
        return newChapter;
      }
      return prev;
    });
  };

  const handleProgressClick = (e) => {
    const { offsetX } = e.nativeEvent;
    const newTime = (offsetX / progressBarRef.current.clientWidth) * totalTime;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-lg w-full flex flex-col h-full">
      <Book title="How I Built This" author="GUY RAZ" image="https://images.blinkist.io/images/books/5f802b3b6cee07000646ad41/1_1/470.jpg" />
      <BookText text={chapters[currentChapter]} />
      <audio ref={audioRef} src={audios[currentChapter]} />
      {currentChapter === chapters.length - 1 && currentTime === totalTime ? (
        <CompletionSection repeat={() => setCurrentChapter(0)} />
      ) : (
        <PlayerBottom
        currentTime={currentTime}
        totalTime={totalTime}
        progressBarRef={progressBarRef}
        handleProgressClick={handleProgressClick}
        handleBackward={() => changeChapter(-1)}
        handleForward={() => changeChapter(1)}
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        currentChapter={currentChapter}
      />
      )}
    </div>
  );
}

const Book = ({ title, author, image }) => (
  <div className="flex mb-4">
    <img src={image} alt="Book" className="w-12 h-12 shadow-md mr-4" />
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <small className="text-gray-600">by {author}</small>
    </div>
  </div>
);

const BookText = ({ text }) => <p className="text-gray-800 mb-4 text-[0.9rem] flex-grow max-h-[300px] min-h-[200px] overflow-auto">{text}</p>;

const PlayerBottom = ({ currentTime, totalTime, progressBarRef, handleProgressClick, handleBackward, handleForward, togglePlayPause, isPlaying, currentChapter }) => (
  <div className="player-bottom mt-auto">
    <AudioTime currentTime={currentTime} totalTime={totalTime} progressBarRef={progressBarRef} handleProgressClick={handleProgressClick} />
    <AudioControls handleBackward={handleBackward} handleForward={handleForward} togglePlayPause={togglePlayPause} isPlaying={isPlaying} currentChapter={currentChapter} />
  </div>
);

const AudioTime = ({ currentTime, totalTime, progressBarRef, handleProgressClick }) => (
  <div className="audio-time mb-5">
    <div ref={progressBarRef} className="loader-container w-full h-[6px] bg-greyaccent rounded cursor-pointer" onClick={handleProgressClick}>
      <div className="loader bg-primary h-[100%] rounded" style={{ width: `${(currentTime / totalTime) * 100}%` }}></div>
    </div>
    <div className="time flex justify-between mt-1">
      <TimeDisplay time={formatTime(currentTime)} />
      <TimeDisplay time={formatTime(totalTime)} />
    </div>
  </div>
);

const TimeDisplay = ({ time }) => <small>{time}</small>;

const AudioControls = ({ handleBackward, handleForward, togglePlayPause, isPlaying, currentChapter }) => (
  <div className="controls flex justify-center items-center">
    <PlayerButton icon={<FaStepBackward />} onClick={handleBackward} disabled={currentChapter === 0} tooltip="Previous" size="40px" />
    <PlayerButton icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlayPause} tooltip={isPlaying ? "Pause" : "Play"} size="40px" />
    <PlayerButton icon={<FaStepForward />} onClick={handleForward} disabled={currentChapter === chapters.length - 1} tooltip="Next" size="40px" />
  </div>
);

const PlayerButton = ({ icon, onClick, disabled, tooltip, size }) => (
  <Tooltip placement="bottom" content={tooltip}>
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[${size}] h-[${size}] flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {icon}
    </button>
  </Tooltip>
);

const CompletionSection = ({ repeat }) => (
  <div className="text-center">
    <p className="text-gray-800 mb-4 text-[1rem] font-bold">Completed!</p>
    <button className="bg-secondary text-white px-3 py-2" onClick={repeat}>
      Play Again
    </button>
  </div>
);
