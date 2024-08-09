import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

export default function AudioPlayer() {
  const chapters = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    "Chapter 02",
    "Chapter 03",
  ];
  const audios = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  ];

  const audioRef = useRef(null);
  const progressBarRef = useRef(null); // Reference for the progress bar
  const [isPlaying, setIsPlaying] = useState(false);
  const [playPauseBtn, setPlayPauseBtn] = useState(<FaPlay />);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      // Update total time when the audio metadata is loaded
      audioRef.current.addEventListener("loadedmetadata", () => {
        setTotalTime(audioRef.current.duration);
      });

      // Sync current time with audio playback
      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current.currentTime);
      });

      // Play or pause audio based on isPlaying state
      if (isPlaying) {
        audioRef.current.play();
        setPlayPauseBtn(<FaPause />);
      } else {
        audioRef.current.pause();
        setPlayPauseBtn(<FaPlay />);
      }
    }
  }, [isPlaying, currentChapter]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setPlayPauseBtn(isPlaying ? <FaPlay /> : <FaPause />);
  };

  const handleForward = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  const handleBackward = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };

  // Function to format time in min:seconds format
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  const progressPercentage = (currentTime / totalTime) * 100;

  // Function to handle clicks on the progress bar
  const handleProgressClick = (e) => {
    const clickPosition = e.nativeEvent.offsetX;
    const barWidth = progressBarRef.current.clientWidth;
    const clickPercentage = clickPosition / barWidth;
    const newTime = clickPercentage * totalTime;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-lg w-full flex flex-col h-full">
      <div className="flex mb-4">
        <img
          src="https://images.blinkist.io/images/books/5f802b3b6cee07000646ad41/1_1/470.jpg"
          alt="Book"
          className="w-12 h-12 shadow-md mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">How I built this</h2>
          <small className="text-gray-600">by GUY RAZ</small>
        </div>
      </div>
      <p className="text-gray-800 mb-4 text-[0.9rem] flex-grow">
        {chapters[currentChapter]}
      </p>
      <audio ref={audioRef} src={audios[currentChapter]} id="audio-player" />
      <div className="player-bottom mt-auto">
        <div className="audio-time">
          <div
            ref={progressBarRef}
            className="loader-container w-full h-[6px] bg-greyaccent rounded cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="loader bg-primary h-[100%] rounded"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="time flex justify-between mt-1">
            <div>
              <small>{formatTime(currentTime)}</small>
            </div>
            <div>
              <small>{formatTime(totalTime)}</small>
            </div>
          </div>
        </div>
        <div className="controls flex justify-center items-center">
          <button
            onClick={handleBackward}
            disabled={currentChapter === 0}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300"
          >
            <FaStepBackward />
          </button>
          <button
            onClick={togglePlayPause}
            className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300"
          >
            {playPauseBtn}
          </button>
          <button
            onClick={handleForward}
            disabled={currentChapter === chapters.length - 1}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-200 text-secondary hover:bg-secondary hover:text-white focus:outline-none mx-2 transition-all duration-300"
          >
            <FaStepForward />
          </button>
        </div>
      </div>
      {currentChapter === chapters.length - 1 && currentTime === totalTime && (
        <div className="text-center">
          <p className="text-gray-800 mb-4 text-[2rem] font-bold">Completed!</p>
          <button className="bg-secondary text-white px-3 py-2" onClick={repeat}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
