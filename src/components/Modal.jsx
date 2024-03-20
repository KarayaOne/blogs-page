import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent z-50 overflow-y-auto">
      <div className="backdrop-filter backdrop-blur-sm bg-black/40">
        {" "}
        {/* Blurred background */}
        <div className="bg-white rounded-lg p-4 shadow-md max-w-2xl mx-auto">
          <button
            onClick={onClose}
            className="pt-3 pr-14 text-xl text-red-500 hover:text-gray-700 w-full text-right"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;
