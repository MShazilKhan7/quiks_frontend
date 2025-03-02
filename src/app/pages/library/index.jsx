import React, {useState} from 'react'
import Carousel from '../../components/Library/Carousel';
import { CiBookmark, CiCircleCheck } from "react-icons/ci";

export default function Library() {

  const [saved, setSaved] = useState(savedData);
  const [completed, setCompleted] = useState(completedData);

  return (
    <>
      <Carousel data={saved} title="Saved" icon={<CiBookmark size={24} />}/>
      <hr className='my-5 d-none'/>
      <Carousel data={completed} title="Completed" icon={<CiCircleCheck size={24}/>}/>
      <hr className='my-5 d-none'/>
    </>
  );
}


// Data from Backend
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