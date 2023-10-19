import { AiOutlineClose } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
export default function AddTaskHeader({ closeModal }) {
  return (
    <div className="modal-header">
      <div className="modal-title">
        <div>
          <HiDocumentText />
        </div>

        <div className="titles">
          <h2>Add New Task</h2>
          <p>Fill your task attributs</p>
        </div>
      </div>
      <span onClick={closeModal}>
        <AiOutlineClose size={26} />
      </span>
    </div>
  );
}
