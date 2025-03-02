import React from "react";
import {Link} from 'react-router-dom'

export default function CategoryCard(props) {
  return (
    <Link
      to={`/categories/${props.name}`}
      className={`group relative rounded-lg hover:shadow-md`} style={{background: props.color}}
    >
      <div className="flex justify-center w-full overflow-hidden rounded-md">
        <img
          className="w-[100px] h-[100px] opacity-50"
          src={props.image}
        />
      </div>
      <div>
        <div className="category-card-bottom py-2 bg-white text-gray-800 text-[0.85rem] font-semibold font-secondary rounded-b-lg">
          <h2 className="text-center">{props.name}</h2>
        </div>
      </div>
    </Link>
  );
}
