import React, {useState} from 'react'
import LibraryPage from './Carousel';
import { CiBookmark, CiCircleCheck } from "react-icons/ci";

// Data Saved
const savedData = {
  resources: [
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
  ],
};

const completedData = {
  resources: [
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "/image.png",
    }
  ],
};

export default function Library() {

  const [saved, setSaved] = useState(savedData);
  const [completed, setCompleted] = useState(completedData);

  return (
    <>
      <LibraryPage data={saved} title="Saved" icon={<CiBookmark size={24} />}/>
      <hr className='my-5 d-none'/>
      <LibraryPage data={completed} title="Completed" icon={<CiCircleCheck size={24}/>}/>
      <hr className='my-5 d-none'/>
    </>
  );
}
