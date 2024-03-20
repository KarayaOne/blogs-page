import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search p-2 bg-gray-200">
      <div className="nav-text text-xs text-center md:text-start md:w-3/4 md:mx-auto md:pl-1 mt-2">
        <p>
          <span className="text-gray-600">Home</span> &gt;{" "}
          <span className="text-blue-800">Articles</span>
        </p>
      </div>

      <div className="mt-3 p-1 search-section flex flex-col justify-between md:flex-row md:w-3/4 md:mx-auto">
        <div className="head md:w-1/2">
          <h1 className="text-xl font-bold text-center md:text-start">
            Articles
          </h1>
          <p className="text-center text-sm md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sed
            pariatur cum ipsum nam et voluptatibus tenetur. Consectetur
            adipisicing elit. Saepe sed pariatur cum ipsum nam et voluptatibus
            tenetur.
          </p>
        </div>
        <div className="search m-2 p-2 bg-white rounded-md flex md:m-1 md:h-max">
          <input
            type="text"
            name="text"
            id="text"
            className="p-2 bg-gray-300 rounded-md h-10 w-full text-black"
            placeholder="Search for an article..."
          />
          <button className=" mx-2 bg-blue-600 h-10 w-12 p-2 rounded-md text-white hover:bg-gray-600 transition-colors">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
