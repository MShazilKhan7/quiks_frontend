import React from 'react'
import { CiClock2 } from "react-icons/ci";

export default function CategoryBookCard({book}) {
  return (
    <a href='#' className='bg-white rounded-md shadow-md hover:bg-gray-100'>
      <div className="flex justify-center mt-4">
        <img
          src="https://images.blinkist.io/images/books/5f802b3b6cee07000646ad41/1_1/470.jpg"
          alt="Super Human Book"
          className="object-contain flex-shrink-0 rounded w-32 h-32"
        />
      </div>
      <div className="py-2 px-4">
        <h3 className="text-md font-semibold text-gray-800">{book.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{book.author}</p>
        <p className="text-gray-500 mt-2 text-sm">
          {book.description}
        </p>
      </div>
      <div className="p-3 bg-gray-100 flex items-center justify-between text-gray-600 text-sm">
        <div className="flex items-center">
        <CiClock2 className='w-4 h-4'/>
          <span className="ml-1">{book.duration}</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927C9.288 2.033 10.712 2.033 10.951 2.927l.68 2.63 2.789.29c.97.1 1.364 1.315.66 1.946l-2.066 1.889.723 2.754c.3.966-.818 1.74-1.64 1.229L10 12.93l-2.436 1.735c-.822.51-1.94-.263-1.64-1.229l.723-2.754-2.066-1.89c-.704-.63-.309-1.845.66-1.946l2.789-.29.68-2.63z"/>
          </svg>
          <span className="ml-1">{book.rating}</span>
        </div>
      </div>
    </a>
  )
}
