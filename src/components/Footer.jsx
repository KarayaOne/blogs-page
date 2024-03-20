import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-5 top flex-col w-full shadow-lg bg-gray-100">
      <div className="flex justify-between w-auto p-10 flex-col md:flex-row">
        <div className=" section-1 w-full md:w-1/4 text-sm">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            excepturi.
          </p>
          <ul className="socials flex cursor-pointer gap-4 text-xl">
            <li className=" hover:text-gray-900 transition-all cursor-pointer text-red-500">
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li className=" hover:text-gray-900 transition-all cursor-pointer text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li className="hover:text-gray-900 transition-all cursor-pointer text-black">
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
            <li className="hover:text-gray-900 transition-all cursor-pointer text-blue-500">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0 section-2 text-sm md:flex md:justify-between md:gap-10">
          <div>
            <h1 className="text-black font-bold">Contact</h1>
            <p className="mt-2 cursor-pointer hover:text-slate-400">
              Site 1 someplace XYS,1324
            </p>
            <h2 className="mt-2 cursor-pointer text-black font-bold">
              Talk to us
            </h2>
            <p className="cursor-pointer hover:text-slate-400">xyz@email.com</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-3">
            <h1 className="text-black font-bold">Terms</h1>
            <p className="mt-2 cursor-pointer hover:text-slate-400 underline">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-slate-400 underline">
              Terms of Use
            </p>
            <p className="cursor-pointer hover:text-slate-400 underline">
              Help
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-black font-bold">FAQ</h1>
            <p className="cursor-pointer hover:text-slate-400 underline">
              Our Team
            </p>
            <p className="cursor-pointer hover:text-slate-400 underline">
              Services
            </p>
            <p className="cursor-pointer hover:text-slate-400 underline">
              About Us
            </p>
          </div>
        </div>
        <div className="section-3 mt-3 flex justify-end">
          <button
            className="w-10 text-white text-xl h-10 rounded-full bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
      </div>
      <div className="bot text-center font-bold text-white bg-black">
        <p>Copyright &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
