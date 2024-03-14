import { useEffect } from "react";
import { useState } from "react";
import frame from '../../assets/images/Frame.png'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-2/3">
      {blogs.map((blog, index) => (
        <div key={index}>
          <img src={blog.CoverImage} alt="Cover Image" />
          <div className="flex justify-between">
          <div className="flex gap-4 mt-2">
            <img src={blog.AuthorImage} className="rounded-full object-cover" width={'50px'}></img>
            <div>
                <h3 className="text-md font-serif">{blog.AuthorName}</h3>
                <h3 className="text-sm font-serif">{blog.PostedDate}</h3>

            </div>
            <div className="flex gap-4">
            <h2 className="ml-72 mt-2 text-md">{blog.ReadingTime} mins read</h2>
            <img src={frame} width={'30px'} className="h-8 mt-1"></img>
            </div>
            
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
