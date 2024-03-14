import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;