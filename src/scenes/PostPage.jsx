import React, { useState, useEffect } from "react";
import { MockPostData } from "../Data/MockData.jsx";
import PostBox from "../components/PostBox.jsx";
function AllPosts() {
  const [posts, setPosts] = useState(MockPostData);
  useEffect(() => {
    posts.length === 0 && setPosts(MockPostData);
  }, []);
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="w-full py-5">
      <div className="w-full md:max-w-8xl mx-auto px-4">
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <span key={post.id} className="p-2 w-1/6">
                <PostBox {...post} deletePost={deletePost} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
