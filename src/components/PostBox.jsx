import React from "react";

function PostBox({ id, title, featuredImage, contributor ,deletePost }) {
  return (
    <div className="w-full h-auto inline-block rounded-xl sm:bg-gray-100 bg-gray-100 px-5 py-3 sm:px-4 sm:py-4">
      <div className="w-full justify-center mb-4">
        <img
          src={featuredImage}
          alt=""
          className="bg-cover block object-contain mx-auto h-[150px] border-[1px] border-gray-100 rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="sm:text-xl text-sm font-bold">{title}</h2>
        <button onClick={()=>deletePost(id)} id="deleter" className="bg-red-500 hover:bg-red-700 z-10 rounded-xl px-2 py-1">
          Delete
        </button>
      </div>
      <h3 className="text-gray-600">Posted by: {contributor}</h3>
    </div>
  );
}

export default PostBox;
