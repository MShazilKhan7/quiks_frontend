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
      imageUrl: "https://images.blinkist.io/images/books/66598ac581aa110007c1ca1e/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 2,
      imageUrl: "https://images.blinkist.io/images/books/5f69192d6cee070006a72d07/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 3,
      imageUrl: "https://images.blinkist.io/images/books/666056ed27a9400007dfabad/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "https://images.blinkist.io/images/books/5f51585d6cee070006084498/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 4,
      imageUrl: "https://images.blinkist.io/images/books/666069da0fc3570007215aea/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 5,
      imageUrl: "https://images.blinkist.io/images/books/5f5be1e76cee070006c62e0b/1_1/470.jpg",
    },
  ],
};

const completedData = {
  resources: [
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "https://images.blinkist.io/images/books/5f10bce56cee0700066c457c/1_1/470.jpg",
    },
    {
      title: "Find me on Mastodon",
      id: 1,
      imageUrl: "https://images.blinkist.io/images/books/66699e0687f3050008ba7c6a/1_1/470.jpg",
    }
  ],
};