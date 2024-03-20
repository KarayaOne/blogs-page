import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";

const Blogpage = () => {
  return (
    <>
      <div className="blog-container w-full bg-gray-200">
        <div className="section p-10 w-full text-sm bg-white">
          <p className="text-sm text-gray-600">
            {" "}
            Home &gt; Articles &gt;{" "}
            <span className="text-black text-sm">Articles Open</span>
          </p>
          <div className="mt-10 px-4 author flex justify-between align-middle items-center w-full">
            <div className="flex gap-4 author-img">
              <div className="object-cover border-black rounded-full max-w-10 max-h-10">
                <img
                  src="https://picsum.photos/120"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <h2 className="mt-3 font-bold">Franciso Bonaparte</h2>
            </div>

            <div className="read mt-0 bg-slate-300 w-max p-2 rounded-md">
              <p className="text-slate-700">05:34 min to read</p>
            </div>
          </div>

          <div className="p-2 mt-6 article">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              molestias fugiat nisi cumque soluta ex saepe ab officia,
              recusandae molestiae nihil voluptatibus rem quisquam impedit porro
              repellat provident voluptatum praesentium.
            </p>
            <div className="mt-3 flex justify-center article-img object-cover rounded-md">
              <img
                src="https://picsum.photos/1600/400"
                alt="some-img"
                className="object-cover rounded-md"
              />
            </div>
            <p className="mt-2 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              repellat officia consequatur qui nam, delectus exercitationem modi
              blanditiis aliquam ratione nesciunt. Voluptates consectetur
              asperiores excepturi numquam minima pariatur optio doloribus?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              laborum nam modi repellat voluptatum accusamus mollitia dolorem.
              Amet eligendi reprehenderit doloribus, obcaecati aspernatur illo
              id possimus itaque odit impedit iste?
            </p>
            <p className="mt-1 p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              nobis accusamus eaque velit saepe aut molestias, incidunt minus
              aliquid natus totam amet nulla tempore asperiores quae quidem
              laboriosam perspiciatis. Dolorem?
            </p>
            <h1 className="mt-2 p-2 font-bold text-2xl">
              This Is a Sample Heading
            </h1>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              nobis accusamus eaque velit saepe aut molestias, incidunt minus
              aliquid natus totam amet nulla tempore asperiores quae quidem
              laboriosam perspiciatis. Dolorem?
            </p>
            <ul className="p-3 list-disc list-inside custom-bullet-color">
              <li>This is item #1</li>
              <li>This is item #2</li>
              <li>This is item #3</li>
            </ul>
            <div className="quote mt-2 p-3 bg-green-800 rounded-md">
              <p className="p-5 text-white font-bold text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident perspiciatis, unde, mollitia nobis reiciendis
                quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Quo sint, enim suscipit dolor, quos voluptatum corporis
                consectetur.
              </p>
            </div>
            <p className="mt-3 p-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              nobis accusamus eaque velit saepe aut molestias, incidunt minus
              aliquid natus totam amet.
            </p>
            <div className="mt-4 p-1 socials-share">
              <h3 className="font-bold">Share post</h3>
              <div className="mt-2 socials flex gap-3 list-none text-lg">
                <li className=" hover:text-gray-600 transition-all cursor-pointer text-red-500">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className=" hover:text-gray-600 transition-all cursor-pointer text-blue-500">
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li className="hover:text-gray-600 transition-all cursor-pointer text-black">
                  <FontAwesomeIcon icon={faXTwitter} />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogpage;
