import { useState } from "react";
import Modal from "./Modal";
import Blogpage from "./Blogpage";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Blog sm:w-1/2 md:w-1/3 lg:w-1/4 border m-4 border-solid rounded-lg shadow-md overflow-hidden bg-white min-h-[250px]">
      <img
        srcSet="https://picsum.photos/800/400 800w, https://picsum.photos/400/200 400w"
        sizes="(max-width: 600px) 400px, 800px"
        src="https://picsum.photos/800/400"
        className="object-contain"
        alt="blog-img"
      />
      <h2 className="m-3 font-bold">Blog Title Goes Here</h2>
      <p className="m-3 line-clamp-6 text-gray-800">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        numquam ut velit quidem tempora aperiam non dolorem illo repellat veniam
        dicta quo ex, doloremque eaque sunt eligendi id architecto nulla? Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Delectus numquam ut
        velit quidem tempora aperiam non dolorem illo repellat veniam dicta quo
        ex, doloremque eaque sunt eligendi id architecto nulla? Adipisicing
        elit. Delectus numquam ut velit quidem tempora aperiam non dolorem illo
        repellat veniam dicta quo ex, doloremque eaque sunt eligendi id
        architecto nulla?
      </p>
      <div className="blog-info mt-5 flex justify-between m-4">
        <div className="author flex">
          <div className="object-cover rounded-full max-w-10 max-h-10">
            <img
              src="https://picsum.photos/120"
              alt="author"
              className="object-cover rounded-full"
            />
          </div>
          <div className="mt-1 ml-4 text-xs name-prof flex flex-col">
            <h2 className="font-bold">Franciso Bonaparte</h2>
            <p>Technical Engineer</p>
          </div>
        </div>
        {/*<Link to={`/blog/${blog.id}`}>*/}
        {/* Link with blog ID */}
        <button
          className="text-white rounded-md bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4"
          onClick={handleViewClick}
        >
          View
        </button>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <Blogpage />
          </Modal>
        )}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default Blog;
